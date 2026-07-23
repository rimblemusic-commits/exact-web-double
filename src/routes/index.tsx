import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Zap, Smartphone, Clock, GraduationCap, ArrowRight, Send, ShieldCheck, TrendingUp, Users, Sparkles } from "lucide-react";

const heroSplit = "/hero-split.jpg";
const zargarovDesert = "/zargarov-desert.jpg";
const faqPortrait = "/faq-portrait.jpg";
const bankDiagram = "/bank-diagram.jpg";
const romaImg = "/roma.jpg";
const nikitaImg = "/nikita.jpg";
const dimaImg = "/dima.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const TG = "https://telegram.me/+BV_uXHwGpNBjN2Yy";

const nav = [
  { label: "Главная", href: "#top" },
  { label: "О себе", href: "#about" },
  { label: "Схема", href: "#how" },
  { label: "Кейсы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Тарифы", href: "#pricing" },
];

const perks = [
  { icon: Zap, label: "Без вложений" },
  { icon: Smartphone, label: "С телефона" },
  { icon: Clock, label: "От 2 часов в день" },
  { icon: GraduationCap, label: "Бесплатное обучение" },
];

const reviews = [
  { n: "01", name: "Глеб", age: "19 лет", income: "160 000 ₽", tag: "в первый месяц", text: "Пришёл с долгами, никогда удалённо не работал, не верил, что возможно зарабатывать в интернете.", poster: faqPortrait },
  { n: "02", name: "Рома", age: "20 лет", income: "77 000 ₽", tag: "стабильно", text: "Работал на складе WB, был неудачный опыт в трейдинге, пробовал заниматься дизайном, сейчас набирает обороты в арбитраже.", poster: romaImg },
  { n: "03", name: "Никита", age: "23 года", income: "120 000 ₽", tag: "в месяц", text: "Ждал чуда от жизни, не хотел тратить энергию. Был негативный опыт в P2P, чаттинг — всё это брехня по сравнению с арбитражом.", poster: nikitaImg },
  { n: "04", name: "Дима", age: "15 лет", income: "55 000 ₽", tag: "только начал", text: "Подтверждает, что имея желание, можно зайти в любую сферу — он только начал, у него всё впереди.", poster: dimaImg },
];

const faqs = [
  { q: "Как быстро я смогу выйти на доход?", a: "Всё зависит от тебя. Пройди регистрацию, получи ссылку и оформи лидов. В течение месяца деньги будут уже у тебя." },
  { q: "Это точно легально?", a: "Да, ниша полностью легальная. Я против серых схем — обычно это ненадолго. Здесь ведётся официальная работа с банками, что гарантирует безопасность." },
  { q: "Подойдёт ли мне, если не было опыта на удалёнке?", a: "Да. Это самая быстрая сфера, чтобы получить прибыль здесь и сейчас — не нужно годами учиться, как в digital. Я сам был монтажёром и понимаю, о чём говорю." },
  { q: "Сколько времени нужно уделять в день?", a: "От 2 часов в день достаточно, чтобы выйти на первые результаты. Всё делается с телефона." },
  { q: "Нужны ли вложения?", a: "Нет. Стартовать можно с нуля — ни рубля вложений не требуется." },
];

const included = [
  "Бесплатные связки и информация по арбитражу",
  "Актуальные сферы и оферы в арбитраже",
  "Окружение единомышленников",
  "Разборы кейсов и поддержка",
];

const steps = [
  { n: "01", title: "Регистрация", text: "Открываешь РКО по нашей связке — всё бесплатно, с телефона." },
  { n: "02", title: "Ссылка", text: "Получаешь партнёрскую ссылку и материалы для запуска." },
  { n: "03", title: "Лиды", text: "Приводишь клиентов по готовым скриптам и офферам." },
  { n: "04", title: "Выплата", text: "Банк платит комиссию — деньги приходят на карту." },
];

function Landing() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* progress bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#a26b18] via-[#f5c542] to-[#fff2a8] z-50" />

      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Reviews />
      <TrustStrip />
      <FAQ />
      <Pricing />
      <Footer />

      <FloatingCTA />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-extrabold tracking-tight md:text-2xl">ZARGAROV</a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/70 transition hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <a href={TG} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-[color:#f5c542]/40 bg-[color:#f5c542]/10 px-4 py-2 text-sm font-semibold text-[#f5c542] transition hover:bg-[color:#f5c542]/20">
          <Send className="h-4 w-4" /> Telegram
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-40 h-[520px] w-[520px] rounded-full bg-[#f5c542]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:#f5c542]/30 bg-[color:#f5c542]/5 px-3.5 py-1.5 text-xs font-medium text-[#f5c542] backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> Набор открыт · Ограниченный оффер
          </motion.div>

          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight md:text-[68px]">
            <span className="text-foreground">АРБИТРАЖ</span>
            <span className="text-muted-foreground"> — </span>
            <span className="text-gold">вершина</span>
            <br />
            <span className="text-foreground">денежного потока</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
            Только то, что работает. Только то, что приносит прибыль. Официальный арбитраж на РКО — без вложений, с телефона.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={TG} target="_blank" rel="noreferrer" className="btn-pill btn-pill-gold group relative overflow-hidden">
              <span className="relative z-10 inline-flex items-center gap-2">Вступить бесплатно <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </a>
            <a href="#how" className="btn-pill border border-border bg-white/5 text-foreground backdrop-blur transition hover:bg-white/10">Как это работает</a>
          </div>

          {/* perks */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {perks.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="glass flex flex-col items-start gap-2 rounded-2xl p-3.5"
              >
                <p.icon className="h-4 w-4 text-[#f5c542]" />
                <span className="text-xs font-medium text-foreground/85">{p.label}</span>
              </motion.div>
            ))}
          </div>

          {/* rating */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[romaImg, nikitaImg, dimaImg].map((s) => (
                <img key={s} src={s} className="h-9 w-9 rounded-full border-2 border-background object-cover" alt="" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#f5c542]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                <span className="ml-1 text-xs text-foreground/80">4.9 · 200+ учеников</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* right side image + floating income card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full"
        >
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(245,197,66,0.28),transparent_70%)] blur-2xl" />
          <img src={heroSplit} alt="ZARGAROV" className="h-auto w-full rounded-3xl object-contain" />

          {/* income floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl md:-left-8"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5c542]/15">
              <TrendingUp className="h-5 w-5 text-[#f5c542]" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Доход за месяц</div>
              <div className="text-lg font-extrabold text-gold">+<AnimatedCounter to={160000} />&nbsp;₽</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="glass absolute -right-2 top-6 hidden items-center gap-2 rounded-full px-3 py-2 md:flex"
          >
            <ShieldCheck className="h-4 w-4 text-[#f5c542]" />
            <span className="text-xs font-medium">Легально · Работа с банками</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionKicker>О ZARGAROV</SectionKicker>
        <SectionTitle>
          Кто такой <span className="text-silver underline decoration-[#f5c542] decoration-4 underline-offset-8">ZARGAROV</span>?
        </SectionTitle>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass relative h-full overflow-hidden rounded-3xl">
            <img src={zargarovDesert} alt="Заргаров Виталий" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-xl font-bold">Заргаров Виталий</div>
              <div className="text-sm text-muted-foreground">АРБИТРАЖ НА РКО · Цифровые продукты</div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:col-span-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard value={<><AnimatedCounter to={20} /></>} label="лет" />
            <StatCard value={<><AnimatedCounter to={1} />&nbsp;млн ₽</>} label="суммарный доход учеников" gold />
            <StatCard value={<><AnimatedCounter to={200} />+</>} label="активных учеников" />
          </div>

          <Reveal>
            <div className="glass rounded-3xl p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "В 11 лет начал делать монтаж на заказ",
                  "В 2021 ушёл в музыку, открыв лейбл и студию звукозаписи",
                  "После случился крах всего и переход в АРБИТРАЖ",
                  "Сейчас продолжаю развивать сферу АРБИТРАЖА",
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-border/50 bg-white/[0.02] p-4"
                  >
                    <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#f5c542]/15 text-[10px] font-bold text-[#f5c542]">{i + 1}</div>
                    <p className="text-sm leading-relaxed text-foreground/85">{t}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, gold }: { value: React.ReactNode; label: string; gold?: boolean }) {
  return (
    <Reveal>
      <div className="glass relative overflow-hidden rounded-3xl p-6">
        {gold && <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(245,197,66,0.25),transparent_60%)]" />}
        <div className={`text-3xl font-extrabold md:text-4xl ${gold ? "text-gold" : ""}`}>{value}</div>
        <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
      </div>
    </Reveal>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionKicker>Схема</SectionKicker>
        <SectionTitle>Как это работает</SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">Прозрачная модель заработка на РКО. Никаких серых схем — только официальная работа с банками.</p>
      </Reveal>

      <div className="mt-12">
        <Reveal>
          <div className="glass overflow-hidden rounded-3xl p-4 md:p-6">
            <img src={bankDiagram} alt="Схема арбитража на РКО" className="w-full rounded-2xl bg-white" />
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="pointer-events-none absolute left-4 right-4 top-8 hidden h-px bg-gradient-to-r from-transparent via-[#f5c542]/30 to-transparent md:block" />
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1 }}
            className="glass group relative rounded-3xl p-6 transition hover:border-[#f5c542]/40"
          >
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-full border border-[#f5c542]/40 bg-[#f5c542]/10 text-sm font-bold text-[#f5c542]">
              {s.n}
            </div>
            <div className="text-base font-bold">{s.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="reviews" className="relative mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionKicker>Кейсы</SectionKicker>
        <SectionTitle>Результаты учеников</SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">Живые истории — от первого дохода до стабильных выплат.</p>
      </Reveal>

      <div className="relative mt-12">
        <div
          ref={trackRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {reviews.map((r, i) => (
            <motion.article
              key={r.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="glass group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl md:w-[420px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img src={r.poster} alt={r.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full border border-[#f5c542]/40 bg-black/60 px-3 py-1 text-xs font-semibold text-[#f5c542] backdrop-blur">
                  {r.income}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-xs uppercase tracking-widest text-[#f5c542]/90">{r.tag}</div>
                  <div className="mt-1 text-xl font-bold">{r.name}, <span className="text-foreground/70">{r.age}</span></div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-foreground/80">{r.text}</p>
              </div>
              <div className="pointer-events-none absolute -bottom-6 -right-2 text-8xl font-extrabold text-white/[0.04]">{r.n}</div>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-end gap-2">
          <button aria-label="Prev" onClick={() => scrollBy(-1)} className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-[#f5c542]/40">
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button aria-label="Next" onClick={() => scrollBy(1)} className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-[#f5c542]/40">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST STRIP ---------------- */
function TrustStrip() {
  const items = [
    { icon: ShieldCheck, title: "Официально", text: "Работа с банками, никаких серых схем" },
    { icon: TrendingUp, title: "Растущий рынок", text: "РКО — одна из самых прибыльных ниш" },
    { icon: Users, title: "Комьюнити", text: "Окружение единомышленников и поддержка 24/7" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass flex items-start gap-4 rounded-3xl p-5"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#f5c542]/15 text-[#f5c542]">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold">{it.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionKicker>FAQ</SectionKicker>
        <SectionTitle>Частые вопросы</SectionTitle>
      </Reveal>

      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`glass overflow-hidden rounded-2xl transition ${isOpen ? "border-[#f5c542]/40" : ""}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-semibold md:text-lg">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#f5c542] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const time = useCountdown(60 * 60 * 24 * 2); // 2 days
  const seats = 27;
  return (
    <section id="pricing" className="relative mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionKicker>Оффер</SectionKicker>
        <SectionTitle>Прими решение</SectionTitle>
      </Reveal>

      <Reveal className="mt-14">
        <div className="glass relative overflow-hidden rounded-[2rem] p-6 md:p-10">
          <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(245,197,66,0.35),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-60 grid-bg" />

          <div className="relative">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(255,45,45,0.75)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Ограниченный оффер
              </span>
              <span className="rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs text-foreground/80">Осталось {seats} мест</span>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-foreground/90">Доступ в телеграм канал</h3>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-6xl font-extrabold tracking-tight text-gold">0</span>
                  <span className="pb-2 text-sm text-muted-foreground">руб.</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Заходи бесплатно — получи связки, оферы и окружение.</p>

                {/* countdown */}
                <div className="mt-6 grid max-w-xs grid-cols-4 gap-2">
                  {[
                    { l: "дн", v: time.d },
                    { l: "ч", v: time.h },
                    { l: "мин", v: time.m },
                    { l: "сек", v: time.s },
                  ].map((t) => (
                    <div key={t.l} className="glass rounded-xl px-2 py-2 text-center">
                      <div className="text-lg font-extrabold tabular-nums">{String(t.v).padStart(2, "0")}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.l}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={TG}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-pill-gold group relative mt-8 w-full overflow-hidden shadow-[0_0_60px_-10px_rgba(245,197,66,0.7)]"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">Перейти в Telegram <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </a>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="h-px flex-1 bg-border" /> что входит <span className="h-px flex-1 bg-border" />
                </div>
                <ul className="space-y-3">
                  {included.map((it, i) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 rounded-2xl border border-border/50 bg-white/[0.02] p-3.5"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f5c542]/20">
                        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-[#f5c542]" strokeWidth={3}>
                          <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-foreground/90">{it}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground md:flex-row">
        <div className="font-bold tracking-tight text-foreground">ZARGAROV</div>
        <div>© {new Date().getFullYear()} · Все права защищены</div>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING CTA ---------------- */
function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={TG}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#ffe17a] via-[#f5c542] to-[#a26b18] px-5 py-3 text-sm font-bold text-[#201400] shadow-[0_0_40px_rgba(245,197,66,0.55)] transition hover:scale-105"
        >
          <Send className="h-4 w-4" /> Вступить
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ---------------- HELPERS ---------------- */
function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#f5c542]/30 bg-[#f5c542]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f5c542]">
        {children}
      </span>
    </div>
  );
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto max-w-3xl text-center text-4xl font-extrabold leading-tight tracking-tight text-silver md:text-5xl">
      {children}
    </h2>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ to, duration = 1600 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(to * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  const formatted = useMemo(() => Math.round(value).toLocaleString("ru-RU"), [value]);
  return <span ref={ref}>{formatted}</span>;
}

function useCountdown(seconds: number) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    const i = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const d = Math.floor(remaining / 86400);
  const h = Math.floor((remaining % 86400) / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  return { d, h, m, s };
}
