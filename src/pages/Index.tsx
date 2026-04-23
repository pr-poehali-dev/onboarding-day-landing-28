import { useState } from "react";
import Icon from "@/components/ui/icon";

const timeline = [
  {
    time: "10:00",
    title: "Добро пожаловать",
    desc: "Знакомство с CEO и историей компании",
    icon: "Star",
    color: "bg-brand-bright",
  },
  {
    time: "10:30",
    title: "Тур по офису и командам",
    desc: "Посмотрим на пространство, где рождаются продукты",
    icon: "MapPin",
    color: "bg-brand-mid",
  },
  {
    time: "11:30",
    title: "Как мы работаем",
    desc: "Инструменты, процессы и культура компании",
    icon: "Layers",
    color: "bg-brand-bright",
  },
  {
    time: "13:00",
    title: "Обед",
    desc: "Оплачивает компания — заслуженный перерыв",
    icon: "Coffee",
    color: "bg-emerald-500",
  },
  {
    time: "14:00",
    title: "Практика",
    desc: "Настройка рабочих инструментов и доступов",
    icon: "Settings",
    color: "bg-brand-mid",
  },
  {
    time: "15:00",
    title: "Q&A с основателями",
    desc: "Любые вопросы — без ограничений",
    icon: "MessageCircle",
    color: "bg-brand-bright",
  },
  {
    time: "15:45",
    title: "Итоги и подарки",
    desc: "Подведём день и вручим welcome-набор",
    icon: "Gift",
    color: "bg-amber-500",
  },
];

const takeWith = [
  { icon: "Laptop", label: "Ноутбук", sub: "Для настройки рабочего места" },
  { icon: "CreditCard", label: "Паспорт", sub: "Для оформления пропуска" },
  { icon: "Smile", label: "Хорошее настроение", sub: "Самое важное из списка" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #4A90D9 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #2C5282 0%, transparent 40%)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pt-8 pb-20 md:pb-32">
          <div className="flex items-center gap-3 mb-14">
            <img
              src="https://cdn.poehali.dev/projects/da92b07f-7abb-4d55-9681-76a8c03d44f2/bucket/f7adea73-cec9-4787-9243-e2b312362527.png"
              alt="Логотип"
              className="w-10 h-10 object-contain brightness-0 invert"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-bright animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-blue-200">День открытых дверей</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight mb-6 max-w-3xl">
            Добро пожаловать<br />
            <span className="text-brand-bright">в команду</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-xl leading-relaxed mb-10">
            Один особенный день, чтобы узнать нас изнутри, задать любые вопросы и почувствовать себя частью компании.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-blue-300">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} className="text-brand-bright" />
              <span>Пятница, 25 апреля 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="text-brand-bright" />
              <span>10:00 — 16:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-brand-bright" />
              <span>Главный офис компании</span>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(210,20%,98%))" }}
        />
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-brand-bright font-semibold text-sm uppercase tracking-widest">Программа дня</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-deep mt-2">
            Что вас ждёт
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-brand-bright via-brand-mid to-transparent" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 md:gap-8 pb-8 last:pb-0 group">
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon name={item.icon} fallback="Circle" size={22} className="text-white" />
                  </div>
                </div>
                <div className="pt-1 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-brand-bright font-bold text-lg font-display tabular-nums">
                      {item.time}
                    </span>
                    <div className="h-px flex-1 bg-border max-w-[60px]" />
                  </div>
                  <h3 className="font-semibold text-brand-deep text-lg mb-0.5">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKE WITH */}
      <section className="bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-brand-bright font-semibold text-sm uppercase tracking-widest">Памятка</span>
            <h2 className="font-display text-3xl font-bold text-brand-deep mt-2">
              Что взять с собой
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {takeWith.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-deep flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="Circle" size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-brand-deep mb-0.5">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-brand-deep py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-bright font-semibold text-sm uppercase tracking-widest">Регистрация</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Подтвердите участие
            </h2>
            <p className="text-blue-300 text-base">
              Мы пришлём вам подробности и пропуск на почту за день до события
            </p>
          </div>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-bright flex items-center justify-center mx-auto mb-5">
                <Icon name="Check" size={30} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Вы зарегистрированы!</h3>
              <p className="text-blue-300">Ждём вас в пятницу. Подробности придут на почту.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 space-y-5 backdrop-blur-sm"
            >
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Петров"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-brand-bright focus:ring-2 focus:ring-brand-bright/30 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="ivan@example.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-brand-bright focus:ring-2 focus:ring-brand-bright/30 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Телефон</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (999) 000-00-00"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-brand-bright focus:ring-2 focus:ring-brand-bright/30 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-bright hover:bg-blue-500 text-white font-bold text-base rounded-xl py-4 mt-2 transition-all duration-200 hover:shadow-lg hover:shadow-brand-bright/30 active:scale-[0.98]"
              >
                Подтвердить участие
              </button>
              <p className="text-center text-xs text-blue-400 pt-1">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-deep border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-3 text-blue-400 text-sm">
          <img
            src="https://cdn.poehali.dev/projects/da92b07f-7abb-4d55-9681-76a8c03d44f2/bucket/f7adea73-cec9-4787-9243-e2b312362527.png"
            alt="Логотип"
            className="w-6 h-6 object-contain opacity-40"
          />
          © 2025 Компания. Все права защищены.
        </div>
      </footer>

    </div>
  );
}