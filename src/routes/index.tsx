import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
const heroSplit = { url: "/hero-split.jpg" };
const zargarovDesert = { url: "/zargarov-desert.jpg" };
const faqPortrait = { url: "/faq-portrait.jpg" };
const bankDiagram = { url: "/bank-diagram.jpg" };
const romaImg = { url: "/roma.jpg" };
const nikitaImg = { url: "/nikita.jpg" };
const dimaImg = { url: "/dima.jpg" };
const questionImg = { url: "/question.jpg" };

export const Route = createFileRoute("/")({
  component: Landing,
});

const nav = [
  { label: "Главная", href: "#top" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы", href: "#faq" },
  { label: "Тарифы", href: "#pricing" },
];

const reviews: Array<{ n: string; name: string; tag: string; text: string; poster?: string }> = [
  {
    n: "01",
    name: "Глеб, 19 лет, 160к ₽",
    tag: "в первый месяц",
    text: "Пришёл с долгами, никогда удалённо не работал, не верил, что возможно зарабатывать в интернете.",
    poster: faqPortrait.url,
  },
  {
    n: "02",
    name: "Рома, 20 лет, 77к ₽",
    tag: "",
    text: "Работал на складе WB, был неудачный опыт в трейдинге, пробовал заниматься дизайном, сейчас набирает обороты в арбитраже.",
    poster: romaImg.url,
  },
  {
    n: "03",
    name: "Никита, 23 года, 120к ₽",
    tag: "",
    text: "Если честно, ждал какого-то чуда от жизни и не было какой-то мотивации, не хотел тратить энергию. Был негативный опыт в P2P, в основном старался зарабатывать в интернете, был также чаттинг, но всё это брехня по сравнению с арбитражом.",
    poster: nikitaImg.url,
  },
  {
    n: "04",
    name: "Дима, 15 лет, 55к ₽",
    tag: "",
    text: "Этот человек подтверждает, что имея желание, можно зайти в любую сферу — он только начал, у него всё впереди.",
    poster: dimaImg.url,
  },
];

const faqs = [
  {
    q: "Как быстро я смогу выйти на доход?",
    a: "Всё зависит от тебя. Всё, что тебе нужно — пройти регистрацию, получить ссылку и оформить лидов. В течение месяца деньги будут уже у тебя.",
  },
  {
    q: "Это точно легально? (я первый раз слышу о такой сфере)",
    a: "Да, эта ниша полностью легальная. Я против всяких серых схем, потому что обычно это не на долгий срок. Тут же ведётся официальная работа с банками, что гарантирует безопасность.",
  },
  {
    q: "Подойдёт ли мне сфера, если не было опыта на удалёнке?",
    a: "Да, конечно — это самая быстрая сфера, чтобы получить прибыль здесь и сейчас, особенно если сравнить с digital-сферами, в которых сначала нужно долго учиться. Я сам когда-то был монтажёром и понимаю, о чём говорю.",
  },
];

const included = [
  "Бесплатные связки и информация по арбитражу",
  "Актуальные сферы и оферы в арбитраже",
  "Окружение единомышленников (в этой сфере информации реально мало)",
];

function Landing() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-2xl font-extrabold tracking-tight">
            ZARGAROV
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/80 transition hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="https://telegram.me/+BV_uXHwGpNBjN2Yy"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-foreground/90 transition hover:text-foreground"
          >
            Telegram
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[520px] w-[520px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-foreground">АРБИТРАЖ</span>
              <span className="text-muted-foreground"> — </span>
              <span className="text-gold">вершина</span>
              <br />
              <span className="text-foreground">денежного потока</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              Только то, что работает, только то, что приносит прибыль.
            </p>
          </div>

          <div className="relative mx-auto w-full">
            <img
              src={heroSplit.url}
              alt="ZARGAROV"
              width={1920}
              height={1080}
              className="h-auto w-full rounded-3xl object-contain animate-fade-in transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-[color:#f5c542]/30 bg-black/60 px-4 py-3 backdrop-blur">
              <div className="text-sm font-bold">ZARGAROV</div>
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(245,197,66,0.18),transparent_70%)] blur-2xl" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* WHO IS SIMON */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 animate-fade-in">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="card-surface p-6 md:p-10">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-silver md:text-5xl">
            Кто такой <span className="text-silver underline decoration-[#f5c542] decoration-4 underline-offset-8">ZARGAROV</span>?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="card-surface p-6">
                <h3 className="text-2xl font-bold">Заргаров Виталий</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Деятельность:</span>{" "}
                  АРБИТРАЖ НА РКО и продажа цифровых продуктов
                </p>
                <div className="mt-6 flex items-end gap-10">
                  <div>
                    <div className="text-4xl font-extrabold">
                      <AnimatedCounter to={20} />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      лет
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-gold">
                      <AnimatedCounter to={1} decimals={0} />
                      {" млн ₽"}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      суммарный доход учеников
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>В 11 лет начал делать монтаж на заказ.</p>
                <p>В 2021 ушёл в музыку, открыв лейбл и студию звукозаписи.</p>
                <p>После случился крах всего и переход в АРБИТРАЖ.</p>
                <p>Сейчас продолжаю развивать сферу АРБИТРАЖА.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={zargarovDesert.url}
                alt="Заргаров Виталий"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STEP 1 */}
      <StepHeader
        number="ШАГ 1:"
        title={
          <>
            Посмотри наглядно, откуда деньги
            <br className="hidden md:block" /> в АРБИТРАЖЕ на РКО
          </>
        }
        subtitle="И осознай, что это не очередная схемка-темка."
      />
      <div className="mx-auto max-w-4xl px-6 pb-24">
        <div className="group overflow-hidden rounded-2xl border border-[color:#f5c542]/20 bg-white shadow-[0_0_60px_-20px_rgba(245,197,66,0.35)]">
          <img
            src={bankDiagram.url}
            alt="Схема арбитража на РКО"
            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* STEP 2 - reviews */}
      <section id="reviews">
        <StepHeader
          number="ШАГ 2:"
          title="Посмотри на результаты других"
          subtitle="Здесь наши последние результаты"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16">
          {reviews.map((r, i) => (
            <div
              key={r.n}
              className="card-surface relative grid grid-cols-1 gap-6 overflow-hidden p-6 md:grid-cols-2 md:p-8"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-xl font-bold md:text-2xl">{r.name}</h3>
              {r.tag && <p className="mt-1 text-sm text-muted-foreground">{r.tag}</p>}
                <p className="mt-5 text-sm leading-relaxed text-foreground/85 md:text-base">
                  {r.text}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <ImageTile poster={r.poster} />
              </div>
              <div className="pointer-events-none absolute bottom-4 right-6 text-6xl font-extrabold text-white/[0.05] md:text-8xl">
                {r.n}
              </div>
            </div>
          ))}
        </div>
        <div className="pb-8" />
      </section>

      {/* STEP 3 - FAQ */}
      <section id="faq">
        <StepHeader
          number="ШАГ 3:"
          title={
            <>
              Посмотри ответы на самые
              <br className="hidden md:block" /> частые вопросы
            </>
          }
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="card-surface grid grid-cols-1 gap-4 overflow-hidden p-4 md:grid-cols-[1fr_1.3fr] md:p-6">
              <ImageTile poster={questionImg.url} />
              <div className="p-2">
                <h3 className="text-lg font-bold md:text-xl">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STEP 4 - Pricing */}
      <section id="pricing">
        <StepHeader
          number="ШАГ 4:"
          title="Прими решение"
        />
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 items-start gap-6 px-6 pb-24">
          <PricingCard
            title="Доступ в телеграм канал"
            price="0"
            items={included}
            featured
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-xs text-muted-foreground">
          <div>ZARGAROV</div>
        </div>
      </footer>
    </div>
  );
}

function StepHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-8 pb-10 text-center">
      <div className="relative inline-block pb-2 text-2xl font-extrabold tracking-wide text-silver md:text-3xl">
        {number}
        <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-gold" />
      </div>
      <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-silver md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm text-muted-foreground md:text-base">{subtitle}</p>
      )}
    </div>
  );
}

function VideoTile({ poster }: { poster?: string }) {
  return (
    <div
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-secondary"
      style={
        poster
          ? {
              backgroundImage: `url(${poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/30" />
      <button
        type="button"
        aria-label="Play video"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-2xl transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[2px] fill-current">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
}

function ImageTile({ poster }: { poster?: string }) {
  return (
    <div
      className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary transition-all duration-500 hover:scale-[1.03] hover:border-[color:#f5c542]/40 hover:shadow-[0_0_40px_-10px_rgba(245,197,66,0.35)]"
      style={
        poster
          ? {
              backgroundImage: `url(${poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    />
  );
}

function PricingCard({
  title,
  price,
  items,
  featured = false,
}: {
  title: string;
  price: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`card-surface relative flex h-full flex-col p-6 md:p-8 ${
        featured ? "border-[color:#f5c542]/60 shadow-[0_0_60px_-20px_rgba(245,197,66,0.55)]" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#201400]">
          Ограниченный оффер
        </div>
      )}
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-foreground/90">
        {title}
      </h3>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="pb-2 text-sm text-muted-foreground">руб.</span>
      </div>
      <a
        href="https://telegram.me/+BV_uXHwGpNBjN2Yy"
        target="_blank"
        rel="noreferrer"
        className={`btn-pill mt-6 w-full transition-transform hover:scale-[1.02] ${featured ? "btn-pill-gold" : "btn-pill-light"}`}
      >
        Перейти в тг
      </a>
      <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        что входит
        <span className="h-px flex-1 bg-border" />
      </div>
      <ul className="mt-6 space-y-4 text-sm text-foreground/85">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current" strokeWidth={3}>
                <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}