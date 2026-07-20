import { createFileRoute } from "@tanstack/react-router";
import heroFigure from "@/assets/hero-figure.jpg";
import moneyStack from "@/assets/money-stack.png";
import simonDubai from "@/assets/simon-dubai.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const nav = [
  { label: "Главная", href: "#top" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы", href: "#faq" },
  { label: "Тарифы", href: "#pricing" },
];

const reviews = [
  {
    n: "01",
    name: "Владислав, 15 лет, 400к ₽/мес",
    tag: "Digital",
    text: "Вступил в PROD в конце сентября, вырос в доходе в 2 раза уже в октябре. Сейчас развивает своё digital-агентство и строит агентства фрилансерам.",
  },
  {
    n: "02",
    name: "Артём, 18 лет, 200к ₽/мес",
    tag: "AI Digital",
    text: "За 2 месяца в PROD сделал более 400к ₽ с полного нуля. На данный момент двигает своё агентство по ИИ и запускает личный бренд.",
  },
  {
    n: "03",
    name: "Иван, 21 год, 250–300к ₽/мес",
    tag: "Ютуб-продюсирование",
    text: "Год назад работал разнорабочим в продуктовом. После входа в PROD за 3 месяца сделал 100 тыс ₽/мес с нуля, а потом и 250 тыс ₽/мес. Сейчас работает с топовыми компаниями.",
  },
  {
    n: "04",
    name: "Арсен, 16 лет, 150к ₽/мес",
    tag: "Монтаж рекламных роликов на западный рынок",
    text: "Учась в лицее, где очень мало времени, смог выйти на стабильные 100к ₽ спустя 1,5 месяца входа в PROD.",
  },
];

const faqs = [
  {
    q: "Как быстро я выйду на доход в PROD?",
    a: "PROD — это не быстрая «схемка», а построение миллионных доходов на годы вперёд. Но ученики показывают, что выйти на 150к ₽/мес можно за 1–3 месяца с полного нуля.",
  },
  {
    q: "На каком деле я буду делать деньги?",
    a: "Информация в PROD применима для любых ниш. Например, многие участники выходят на первые большие деньги в сфере digital-услуг. В PROD я постоянно даю информацию о самых актуальных нишах прямо сейчас.",
  },
  {
    q: "Подойдёт ли мне PROD, если я начинаю с нуля?",
    a: "Разумеется. В PROD я дал всю систему с полного нуля до первого млн/мес — всё то, чем пользовался сам на пути к млн/мес.",
  },
];

const included = [
  "Доступ ко ВСЕМ материалам (список материалов внутри)",
  "Эфиры с индивидуальными РАЗБОРАМИ каждый месяц",
  "Окружение молодых предпринимателей",
];

const consultIncluded = [
  "Двухчасовой звонок с Симоном",
  "Индивидуальный план действий: понимание, что делать конкретно СЕЙЧАС",
  "Запись нашей консультации",
  "Работа в личных сообщениях даже после консультации",
];

function Landing() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-2xl font-extrabold tracking-tight">
            PROD
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
            href="https://t.me/prodsimon"
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
              <span className="text-foreground">PROD</span>
              <span className="text-muted-foreground"> — результат вместо</span>
              <br />
              <span className="text-foreground">бесконечного старта</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              Всё, что принесло Симону более 1,5 млн ₽/мес и генерирует миллионы его ученикам.
            </p>
            <a href="#pricing" className="btn-pill btn-pill-light mt-10">
              Перейти к тарифам
            </a>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <img
              src={heroFigure}
              alt="Фигура с деньгами"
              width={900}
              height={1100}
              className="h-full w-full rounded-3xl object-cover"
            />
            <img
              src={moneyStack}
              alt=""
              aria-hidden
              className="absolute -left-8 top-8 w-40 rotate-[-18deg] drop-shadow-2xl md:w-52"
              loading="lazy"
            />
            <img
              src={moneyStack}
              alt=""
              aria-hidden
              className="absolute -right-8 top-24 w-36 rotate-[14deg] drop-shadow-2xl md:w-48"
              loading="lazy"
            />
            <img
              src={moneyStack}
              alt=""
              aria-hidden
              className="absolute -right-6 bottom-6 w-44 rotate-[-6deg] drop-shadow-2xl md:w-56"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur">
              <div className="text-sm font-bold">PROD</div>
              <div className="text-xs text-muted-foreground">879 подписчиков</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS SIMON */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="card-surface p-6 md:p-10">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-silver md:text-5xl">
            Кто такой Симон?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="card-surface p-6">
                <h3 className="text-2xl font-bold">Семён Гельфенбуйм</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Деятельность:</span>{" "}
                  построение личных брендов и продажа цифровых продуктов
                </p>
                <div className="mt-6 flex items-end gap-10">
                  <div>
                    <div className="text-4xl font-extrabold">17</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      лет
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold">1.5 млн ₽/мес</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      доход
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>В 15 лет начал активно снимать на YouTube.</p>
                <p>
                  В 2024 году делал монтаж на заказ и делал деньги с YouTube на партнёрском
                  маркетинге. Поработал с топами рынка, делая несложные, но очень виральные видео.
                </p>
                <p>К концу 2024 года вышел на 150–200к ₽/мес с любимого дела.</p>
                <p>
                  После этого создал и начал продвигать свой продукт — за полгода вырос с
                  200 000 до 1 500 000 ₽/мес.
                </p>
                <p>
                  Сейчас продолжаю двигать свой личный бренд и создаю его другим предпринимателям.
                  Имею в работе более 15 клиентов.
                </p>
                <p>
                  PROD — это ключевые действия в сфере цифровых услуг и продуктов, которые
                  привели меня к результату 13,5 млн, заработанных в 17 лет.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={simonDubai}
                alt="Семён Гельфенбуйм"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
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
            Посмотри это видео, чтобы раскрыть,
            <br className="hidden md:block" /> что стоит за моим успехом
          </>
        }
        subtitle="В PROD все знания, которые принесли мне 1 500 000 ₽/мес."
      />
      <div className="mx-auto max-w-4xl px-6 pb-24">
        <VideoTile poster={heroFigure} />
      </div>

      {/* STEP 2 - reviews */}
      <section id="reviews">
        <StepHeader
          number="ШАГ 2:"
          title="Посмотри, что говорят другие"
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
                <p className="mt-1 text-sm text-muted-foreground">{r.tag}</p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85 md:text-base">
                  {r.text}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <VideoTile />
              </div>
              <div className="pointer-events-none absolute bottom-4 right-6 text-6xl font-extrabold text-white/[0.05] md:text-8xl">
                {r.n}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-24 flex justify-center">
          <a href="https://t.me/prodsimon" className="btn-pill bg-secondary text-secondary-foreground">
            больше отзывов
          </a>
        </div>
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
              <VideoTile />
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
          subtitle="Напиши Симону о покупке, нажав «Войти в PROD»"
        />
        <div className="mx-auto max-w-3xl px-6">
          <VideoTile />
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-start gap-6 px-6 pb-24 md:grid-cols-3">
          <PricingCard
            title="Доступ в PROD навсегда"
            price="19 000"
            items={included}
          />
          <PricingCard
            title="Доступ в PROD на 3 месяца"
            price="12 900"
            items={included}
            featured
          />
          <PricingCard
            title="Консультация + PROD"
            price="55 000"
            items={consultIncluded}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-xs text-muted-foreground">
          <div>ИП ГЕЛЬФЕНБУЙМ СЕМЁН ВИКТОРОВИЧ</div>
          <div className="mt-1">ИНН: 590318333468</div>
          <a
            className="mt-3 inline-block text-foreground/80 hover:text-foreground"
            href="mailto:simon.commercial@mail.ru"
          >
            simon.commercial@mail.ru
          </a>
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
      <div className="inline-block border-b-2 border-[color:var(--accent)] pb-1 text-2xl font-extrabold tracking-wide text-silver md:text-3xl">
        {number}
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
        featured ? "border-[color:var(--accent)]/60 shadow-[0_0_60px_-20px_rgba(255,45,45,0.55)]" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--accent)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
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
        href="https://t.me/prodsimon"
        className={`btn-pill mt-6 w-full ${featured ? "btn-pill-red" : "btn-pill-light"}`}
      >
        Перейти к оплате
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