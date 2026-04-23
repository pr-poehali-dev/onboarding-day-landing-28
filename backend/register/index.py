import json
import os
import urllib.parse
import pg8000.dbapi


def handler(event: dict, context) -> dict:
    """Сохраняет заявку на участие в день открытых дверей в базу данных."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    email = (body.get('email') or '').strip()
    phone = (body.get('phone') or '').strip()

    if not name or not email:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и email обязательны'}),
        }

    dsn = os.environ['DATABASE_URL']
    r = urllib.parse.urlparse(dsn)

    conn = pg8000.dbapi.connect(
        user=urllib.parse.unquote(r.username),
        password=urllib.parse.unquote(r.password),
        host=r.hostname,
        port=r.port or 5432,
        database=r.path.lstrip('/'),
        ssl_context=None,
    )
    conn.autocommit = True

    def esc(val):
        if val is None:
            return 'NULL'
        return "'" + str(val).replace("'", "''") + "'"

    sql = (
        "INSERT INTO registrations (name, email, phone) VALUES ("
        + esc(name) + ", " + esc(email) + ", " + esc(phone or None)
        + ") RETURNING id"
    )

    cur = conn.cursor()
    cur.execute(sql)
    row = cur.fetchone()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True, 'id': row[0]}),
    }