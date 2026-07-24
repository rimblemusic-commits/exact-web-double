import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const heroSplit = "/hero-split.jpg";
const zargarovDesert = "/zargarov-desert.jpg";
const faqPortrait = "/faq-portrait.jpg";
const romaImg = "/roma.jpg";
const nikitaImg = "/nikita.jpg";
const dimaImg = "/dima.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const TG = "https://telegram.me/+BV_uXHwGpNBjN2Yy";

const nav = [
  { label: "Подход", href: "#approach" },
  { label: "Обо мне", href: "#about" },
  { label: "Процесс", href: "#process" },
  { label: "Истории", href: "#stories" },
  { label: "Вопросы", href: "#faq" },
];

const principles = [
  "Индивидуальный разбор",
  "Никаких серых схем",
  "Закрытое сообщество",
  "Честный маркетинг",
  "Работа с банками",
  "Качество вместо шума",
];

const timeline = [
  { year: "2015", text: "Начал с монтажа на заказ — первое ремесло, первая дисциплина." },
  { year: "2021", text: "Открыл музыкальный лейбл и студию звукозаписи." },
  { year: "2023", text: "После краха всего — переход в арбитраж и работу с РКО." },
  { year: "Сейчас", text: "Развиваю сферу и веду небольшое закрытое сообщество." },
];

const approach = [
  {
    kicker: "01 — Подход",
    title: "Работа один на один",
    text: "Сообщество маленькое намеренно. Каждый участник получает разбор задач и обратную связь напрямую, без ботов и рассылок.",
  },
  {
    kicker: "02 — Метод",
    title: "Только то, что работает",
    text: "Никаких громких обещаний. Мы разбираем реальные связки, интерфейсы банков и рабочие сценарии — на живых примерах.",
  },
  {
    kicker: "03 — Принципы",
    title: "Легально и прозрачно",
    text: "Официальная работа с банками через партнёрские программы РКО. Серые схемы не рассматриваю принципиально.",
  },
];

const stories = [
  { name: "Глеб", age: "19", note: "первый месяц в сфере", text: "Пришёл без опыта удалённой работы. Начал с разбора связок — первые результаты появились в первый месяц.", img: faqPortrait },
  { name: "Рома", age: "20", note: "стабильная практика", text: "Работал на складе, пробовал трейдинг и дизайн. В арбитраже нашёл предсказуемую модель.", img: romaImg },
  { name: "Никита", age: "23", note: "переход из P2P", text: "После неудачного опыта в P2P и чаттинге — здесь впервые увидел прозрачный процесс.", img: nikitaImg },
  { name: "Дима", age: "15", note: "только начинает", text: "Только зашёл в сферу. Разбираемся с базой и первыми задачами.", img: dimaImg },
];

const process = [
  { n: "01", title: "Знакомство", text: "Заходишь в закрытый канал, читаешь материалы, задаёшь вопросы напрямую." },
  { n: "02", title: "Разбор", text: "Смотрим твою ситуацию, подбираем связку и оффер под неё." },
  { n: "03", title: "Запуск", text: "Открываешь РКО, получаешь ссылку и начинаешь работать с телефона." },
  { n: "04", title: "Сопровождение", text: "Продолжаем разбирать вопросы и корректировать процесс на длинной дистанции." },
];

const faqs = [
  { q: "Это легально?", a: "Да. Это официальная партнёрская работа с банками через программы РКО — никаких серых схем." },
  { q: "Нужен ли опыт удалённой работы?", a: "Нет. Достаточно готовности разбираться — базу проходим вместе, шаг за шагом." },
  { q: "Сколько времени нужно уделять?", a: "Формат гибкий. Всё делается с телефона и встраивается в обычный день." },
  { q: "Нужны ли вложения?", a: "Нет. Стартовать можно без вложений — модель построена на партнёрском вознаграждении." },
  { q: "Что я получаю в канале?", a: "Доступ к материалам, разборам и прямому диалогу. Сообщество небольшое — это осознанное решение." },
];

function Landing() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-white/15">
      <BackgroundField />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Approach />
      <Process />
      <Stories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- BACKGROUND ---------------- */
function BackgroundField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_-10%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(900px_500px_at_100%_20%,rgba(245,197,66,0.05),transparent_60%)]" />
      <div className="noise absolute inset-0" />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.24em]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5c542]" /> ZARGAROV
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] text-foreground/55 transition-colors duration-300 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={TG}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-foreground/90 transition hover:border-white/25 hover:bg-white/[0.06]"
        >
          Telegram
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative">
      <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-16 md:px-10 md:pb-40 md:pt-24">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-foreground/40"
        >
          <span>Закрытое сообщество · Малый круг</span>
          <span className="hidden md:inline">MMXXVI · v.01</span>
        </motion.div>

        <div className="mt-12 grid grid-cols-12 gap-6 md:mt-20 md:gap-10">
          {/* Headline */}
          <div className="col-span-12 md:col-span-8">
            <HeroHeadline />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-10 max-w-xl text-[15px] leading-relaxed text-foreground/60 md:text-[16px]"
            >
              Небольшое закрытое сообщество вокруг арбитража на РКО. Индивидуальная работа, честный подход и только то, что работает на практике.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticLink href={TG}>
                <span>Войти в сообщество</span>
                <ArrowUpRight className="h-4 w-4" />
              </MagneticLink>
              <a href="#approach" className="text-[13px] text-foreground/60 underline decoration-white/20 underline-offset-8 transition hover:text-foreground hover:decoration-white/60">
                Как я работаю
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-4"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02]">
                <img
                  src={heroSplit}
                  alt="Виталий Заргаров"
                  className="h-[380px] w-full object-cover object-center md:h-[520px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/60">
                  <span>Виталий Заргаров</span>
                  <span>Основатель</span>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between text-[11px] uppercase tracking-[0.22em] text-foreground/40">
                <span>№ 001 / Портрет</span>
                <span>ARBITRAGE / РКО</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* editorial footer */}
        <div className="mt-24 grid grid-cols-12 gap-6 border-t border-white/[0.06] pt-8 text-[12px] text-foreground/50 md:mt-32">
          <div className="col-span-6 md:col-span-3">
            <div className="text-foreground/30">Формат</div>
            <div className="mt-1 text-foreground/80">Закрытый Telegram-канал</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-foreground/30">Работа</div>
            <div className="mt-1 text-foreground/80">Индивидуально с каждым</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-foreground/30">Принцип</div>
            <div className="mt-1 text-foreground/80">Легально · Через банки</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-foreground/30">Стоимость</div>
            <div className="mt-1 text-foreground/80">Вход бесплатный</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroHeadline() {
  const words = ["Арбитраж", "без", "громких", "обещаний."];
  const words2 = ["Только", "то,", "что", "работает."];
  return (
    <h1 className="font-extrabold leading-[0.95] tracking-[-0.03em] text-[13vw] md:text-[104px]">
      <div className="flex flex-wrap gap-x-4">
        {words.map((w, i) => (
          <motion.span
            key={w + i}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground"
          >
            {w}
          </motion.span>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 md:mt-4">
        {words2.map((w, i) => (
          <motion.span
            key={w + i}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={i === 3 ? "italic text-foreground/50" : "text-foreground/85"}
          >
            {w}
          </motion.span>
        ))}
      </div>
    </h1>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [...principles, ...principles];
  return (
    <section className="relative border-y border-white/[0.06] py-5">
      <div className="hide-scrollbar overflow-hidden">
        <div className="marquee-track gap-14 whitespace-nowrap">
          {items.map((p, i) => (
            <span key={i} className="flex items-center gap-14 text-[13px] uppercase tracking-[0.22em] text-foreground/45">
              {p}
              <span className="text-foreground/25">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  return (
    <section id="about" ref={ref} className="relative mx-auto max-w-[1360px] px-6 py-32 md:px-10 md:py-48">
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        <Reveal className="col-span-12 md:col-span-4">
          <div className="sticky top-28">
            <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">— 001 · Обо мне</div>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-[56px]">
              Путь длиной<br />в несколько ремёсел.
            </h2>
            <p className="mt-6 text-[14px] leading-relaxed text-foreground/55">
              Не считаю себя гуру и не обещаю миллионы. Делюсь тем, что проверил на своей практике и что работает у людей вокруг меня.
            </p>
          </div>
        </Reveal>

        <div className="col-span-12 grid grid-cols-12 gap-6 md:col-span-8 md:gap-8">
          {/* Portrait */}
          <motion.div style={{ y }} className="col-span-12 md:col-span-5">
            <div className="relative overflow-hidden rounded-[20px] border border-white/10">
              <img src={zargarovDesert} alt="Виталий Заргаров" className="h-[360px] w-full object-cover md:h-[440px]" />
              <div className="absolute inset-x-4 bottom-4 text-[10px] uppercase tracking-[0.22em] text-white/70">
                Виталий Заргаров
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="col-span-12 md:col-span-7">
            <ol className="relative space-y-8 border-l border-white/10 pl-8">
              {timeline.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="relative"
                >
                  <span className="absolute -left-[35px] top-2 h-2 w-2 rounded-full bg-foreground/70" />
                  <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">{t.year}</div>
                  <p className="mt-2 text-[16px] leading-relaxed text-foreground/85">{t.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPROACH ---------------- */
function Approach() {
  return (
    <section id="approach" className="relative mx-auto max-w-[1360px] px-6 py-32 md:px-10 md:py-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">— 002 · Подход</div>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-[56px]">
            Качество вместо<br />
            <span className="italic text-foreground/50">громких цифр.</span>
          </h2>
        </div>
        <p className="max-w-sm text-[14px] leading-relaxed text-foreground/55">
          Три принципа, на которых построено сообщество. Ничего лишнего — только то, что важно на длинной дистанции.
        </p>
      </div>

      {/* Asymmetric grid */}
      <div className="mt-16 grid grid-cols-12 gap-6">
        <ApproachCard item={approach[0]} className="col-span-12 md:col-span-7 md:row-span-2" tall />
        <ApproachCard item={approach[1]} className="col-span-12 md:col-span-5" />
        <ApproachCard item={approach[2]} className="col-span-12 md:col-span-5" />
      </div>
    </section>
  );
}

function ApproachCard({
  item,
  className = "",
  tall = false,
}: {
  item: { kicker: string; title: string; text: string };
  className?: string;
  tall?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.015] p-8 transition-colors hover:border-white/20 md:p-10 ${
        tall ? "min-h-[420px]" : "min-h-[240px]"
      } ${className}`}
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl transition-opacity duration-700 group-hover:opacity-100 md:opacity-0" />
      <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">{item.kicker}</div>
      <div className="mt-8">
        <h3 className={`font-semibold leading-[1.05] tracking-[-0.02em] ${tall ? "text-4xl md:text-[44px]" : "text-2xl md:text-[28px]"}`}>
          {item.title}
        </h3>
        <p className="mt-4 max-w-md text-[14px] leading-relaxed text-foreground/55">{item.text}</p>
      </div>
    </motion.div>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  return (
    <section id="process" className="relative border-y border-white/[0.06] bg-white/[0.008]">
      <div className="mx-auto max-w-[1360px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">— 003 · Процесс</div>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-[56px]">
              Четыре шага —<br />без лишнего шума.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="divide-y divide-white/[0.08]">
              {process.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="col-span-2 text-[13px] font-mono text-foreground/40 md:col-span-1">{s.n}</div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] md:text-[28px]">{s.title}</h3>
                  </div>
                  <div className="col-span-12 text-[14px] leading-relaxed text-foreground/60 md:col-span-7">{s.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORIES ---------------- */
function Stories() {
  return (
    <section id="stories" className="relative mx-auto max-w-[1360px] px-6 py-32 md:px-10 md:py-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">— 004 · Истории</div>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-[56px]">
            Живые голоса<br />из сообщества.
          </h2>
        </div>
        <p className="max-w-sm text-[14px] leading-relaxed text-foreground/55">
          Не идеализирую путь каждого. Это реальные ребята с реальными вопросами — я делюсь их опытом, а не громкими историями успеха.
        </p>
      </div>

      {/* Editorial asymmetric gallery */}
      <div className="mt-16 grid grid-cols-12 gap-6">
        <StoryCard s={stories[0]} className="col-span-12 md:col-span-7" size="lg" />
        <StoryCard s={stories[1]} className="col-span-12 md:col-span-5" size="sm" />
        <StoryCard s={stories[2]} className="col-span-12 md:col-span-5" size="sm" />
        <StoryCard s={stories[3]} className="col-span-12 md:col-span-7" size="lg" />
      </div>
    </section>
  );
}

function StoryCard({
  s,
  className = "",
  size,
}: {
  s: (typeof stories)[number];
  className?: string;
  size: "sm" | "lg";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.015] ${className}`}
    >
      <div className={`grid ${size === "lg" ? "md:grid-cols-2" : "grid-cols-1"} gap-0`}>
        <div className={`relative overflow-hidden ${size === "lg" ? "h-[320px] md:h-full" : "h-[280px]"}`}>
          <img
            src={s.img}
            alt={s.name}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">{s.note}</div>
          <div className="mt-6">
            <div className="flex items-baseline gap-3">
              <h3 className={`font-semibold tracking-[-0.02em] ${size === "lg" ? "text-3xl md:text-4xl" : "text-2xl"}`}>{s.name}</h3>
              <span className="text-foreground/40">/ {s.age}</span>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground/60">«{s.text}»</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative mx-auto max-w-[1360px] px-6 py-32 md:px-10 md:py-40">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="sticky top-28">
            <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">— 005 · Вопросы</div>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-[56px]">
              Коротко<br />по существу.
            </h2>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-foreground"
                  >
                    <span className="text-[18px] font-medium tracking-[-0.01em] md:text-[22px]">{f.q}</span>
                    <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 transition-colors group-hover:border-white/40">
                      <Plus className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="pb-8 pr-14 text-[15px] leading-relaxed text-foreground/60">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1360px] px-6 py-32 md:px-10 md:py-48">
        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.015] px-8 py-20 md:px-20 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
          <div className="noise pointer-events-none absolute inset-0" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">— Приглашение</div>
            <h2 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-[88px]">
              Заходи —<br />
              <span className="italic text-foreground/60">поговорим лично.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-[15px] leading-relaxed text-foreground/55">
              Никаких воронок и продаж. Прочитаешь материалы, посмотришь изнутри, задашь вопросы напрямую.
            </p>

            <div className="mt-12 flex items-center justify-center">
              <MagneticLink href={TG} large>
                <span>Перейти в Telegram</span>
                <ArrowUpRight className="h-5 w-5" />
              </MagneticLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto grid max-w-[1360px] grid-cols-12 gap-6 px-6 py-10 text-[12px] text-foreground/50 md:px-10">
        <div className="col-span-6 md:col-span-4">
          <div className="flex items-center gap-2 text-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5c542]" />
            <span className="text-[13px] font-semibold tracking-[0.24em]">ZARGAROV</span>
          </div>
          <p className="mt-3 max-w-xs text-foreground/45">Закрытое сообщество об арбитраже на РКО.</p>
        </div>
        <div className="col-span-6 md:col-span-4 md:text-center">
          © {new Date().getFullYear()} · Все права защищены
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <a href={TG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-foreground">
            Telegram <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- HELPERS ---------------- */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({
  href,
  children,
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  large?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setT({ x: x * 0.25, y: y * 0.35 });
  };
  const reset = () => setT({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ x: t.x, y: t.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={`group relative inline-flex items-center gap-3 rounded-full border border-white/15 bg-foreground text-background transition-colors hover:bg-foreground/90 ${
        large ? "px-8 py-5 text-[15px] font-semibold" : "px-6 py-3.5 text-[13px] font-semibold"
      }`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </motion.a>
  );
}
