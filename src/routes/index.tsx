import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, Fragment } from "react";
import {
  UserPlus,
  Target,
  Sparkles as SparklesIcon,
  FileText,
  Image as ImageIcon,
  PenLine,
  Layout,
  Share2,
  Search,
  ShoppingBag,
  Link2,
  PlayCircle,
  DollarSign,
  Rocket,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Film,
  Wand2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instagram Dark com IA — Mini Aula" },
      {
        name: "description",
        content:
          "Como ganhar com Instagram Dark usando IA: conteúdo automatizado, página de venda e produtos digitais ou afiliados rodando sozinhos.",
      },
      { property: "og:title", content: "Instagram Dark com IA — Mini Aula" },
      {
        property: "og:description",
        content:
          "Como ganhar com Instagram Dark usando IA: conteúdo automatizado, página de venda e produtos digitais ou afiliados rodando sozinhos.",
      },
    ],
  }),
  component: Index,
});

const sectionTags = [
  { id: "01", label: "início" },
  { id: "02", label: "fundação" },
  { id: "03", label: "conteúdo" },
  { id: "04", label: "pipeline" },
  { id: "05", label: "descoberta" },
  { id: "06", label: "operação" },
  { id: "07", label: "volume" },
  { id: "08", label: "simulador" },
  { id: "09", label: "projeção" },
  { id: "10", label: "ciclo" },
  { id: "11", label: "mapa" },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#01" className="font-mono text-xs tracking-widest text-primary">
            ● MINI.AULA
          </a>
          <div className="hidden flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex">
            {sectionTags.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <Section01 />
      <Reveal><Section02 /></Reveal>
      <Reveal><Section03 /></Reveal>
      <Reveal><Section04 /></Reveal>
      <Reveal><Section05 /></Reveal>
      <Reveal><Section06 /></Reveal>
      <Reveal><Section07 /></Reveal>
      <Reveal><Section08 /></Reveal>
      <Reveal><Section09 /></Reveal>
      <Reveal><Section10 /></Reveal>
      <Reveal><Section11 /></Reveal>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 font-mono text-xs text-muted-foreground">
          <span>● INSTAGRAM.DARK / IA</span>
          <span>{new Date().getFullYear()} — operação completa</span>
        </div>
      </footer>
    </main>
  );
}

/* ---------- shared bits ---------- */

function SectionShell({
  id,
  tag,
  title,
  children,
}: {
  id: string;
  num?: string;
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-20 px-6 py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(600px 300px at 70% 20%, oklch(0.82 0.20 150 / 0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--neon)]" />
          <span>{tag}</span>
        </div>
        <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function NeonPill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-5 py-2.5 text-sm text-foreground shadow-[0_0_20px_-8px_var(--neon)]">
      <Icon className="h-4 w-4 text-primary" />
      <span>{label}</span>
    </div>
  );
}

function Connector() {
  return (
    <div className="my-1 flex justify-center">
      <div className="h-8 w-px bg-gradient-to-b from-primary/60 to-primary/10" />
    </div>
  );
}

/* ---------- 01 HERO ---------- */

function Section01() {
  const steps = [
    { icon: UserPlus, label: "Criar Conta Dark" },
    { icon: Target, label: "Escolher Nicho" },
    { icon: SparklesIcon, label: "Gerar Bio + Conteúdo IA" },
    { icon: FileText, label: "Página de Venda" },
    { icon: ShoppingBag, label: "PDF Próprio ou Afiliado" },
    { icon: PlayCircle, label: "Publicar e Postar" },
    { icon: DollarSign, label: "Monetizar" },
    { icon: Rocket, label: "Escalar Contas" },
  ];
  return (
    <section
      id="01"
      className="relative scroll-mt-20 border-b border-border/60 px-6 pb-24 pt-8 md:pb-32 md:pt-12"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 75% 30%, oklch(0.82 0.20 150 / 0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--neon)]" />
          <span>Mini aula</span>
        </div>
        <h1 className="mt-6 text-5xl font-bold leading-[1] tracking-tight md:text-7xl">
          Instagram Dark IA
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90 md:text-xl">
          Sem aparecer, sem conhecer ninguém. Só conteúdo IA, página de venda
          feita com IA e produtos pra vender.
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Como começar uma operação de conteúdo + venda que roda sozinha
          enquanto você dorme.
        </p>
        <div className="mt-16 flex flex-col items-center py-4">
          {steps.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="flex flex-col items-center">
              <NeonPill icon={s.icon} label={s.label} />
              {i < steps.length - 1 && <Connector />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 FUNDAÇÃO ---------- */

function Section02() {
  const steps = [
    { label: "Criar Conta Dark", sub: "Instagram novo, zero seguidores" },
    { label: "Escolher Nicho", sub: "Beleza, Emagrecimento, Finanças, Produtividade, Saúde" },
    { label: "Gerar Bio + Primeira Leva", sub: "Kit pronto pra começar" },
  ];
  return (
    <SectionShell id="02" tag="FUNDAÇÃO" title="Estrutura Inicial">
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="font-mono text-xs tracking-widest text-muted-foreground">
          Instagram Dark
        </div>
        <div className="mt-6 space-y-4">
          {steps.map((s, i) => (
            <div
              key={s.label}
              className="flex items-start gap-4 rounded-xl border border-border/70 bg-background/50 p-4"
            >
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <div>
                <div className="text-sm font-medium text-foreground/90">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>PROGRESSO</span>
            <span className="text-primary">LIBERAÇÃO</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary shadow-[0_0_12px_var(--neon)]"
              style={{ width: "75%" }}
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- 03 CONTEÚDO / ABORDAGENS ---------- */

function Section03() {
  const opts = [
    {
      title: "PDF Próprio",
      desc:
        "Você cria o PDF com IA ou compra template pronto. Coloca na página de venda. Lucro 100% seu. Margem: R$ 30–50 por venda.",
      icon: FileText,
    },
    {
      title: "Afiliar Curso",
      desc:
        "Promove curso de terceiro. Comissão de 20–50% por venda, sem lidar com entrega. Lucro: R$ 50–200 por venda.",
      icon: Link2,
    },
    {
      title: "Híbrido",
      desc:
        "PDF seu de R$29,90 + upsell de curso afiliado. Maior conversão. Lucro mixado: R$ 30 + R$ 80 = R$ 110 por lead qualificado.",
      icon: Sparkles,
    },
  ];
  return (
    <SectionShell id="03" tag="CONTEÚDO" title="Como Você Vai Monetizar">
      <p className="mb-8 text-sm text-muted-foreground">
        Três abordagens — escolha uma ou combine.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {opts.map((o) => (
          <div
            key={o.title}
            className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <o.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {o.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- 04 PIPELINE ---------- */

function Section04() {
  const steps = [
    { title: "Tema/Ideia", desc: "Gancho ou dica do nicho", icon: Wand2 },
    { title: "Imagem IA", desc: "Midjourney, APOB, Kling", icon: ImageIcon },
    { title: "Copy IA", desc: "ChatGPT/Claude com persona", icon: PenLine },
    { title: "Carousel", desc: "Canva ou Lovable AI", icon: Layout },
    { title: "Publicar + Link", desc: "Bio/sticker pra página", icon: Share2 },
  ];
  return (
    <SectionShell id="04" tag="PIPELINE" title="Fluxo 100% IA">
      <p className="mb-8 text-sm text-muted-foreground">
        Tempo total por conteúdo: <span className="text-primary">10–15 min</span>.
      </p>
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
        {steps.map((s, i) => (
          <Fragment key={s.title}>
            <div className="rounded-2xl border border-border bg-card p-5">
              <s.icon className="h-4 w-4 text-primary" />
              <div className="mt-3 font-mono text-xs text-muted-foreground">
                0{i + 1}
              </div>
              <div className="mt-1 text-base font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="mx-auto hidden h-4 w-4 text-primary md:block" />
            )}
          </Fragment>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            Templates prontos
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            Você não começa do zero. Temos templates de carrossel, reels e
            página de venda pra duplicar e adaptar pro seu nicho em minutos.
          </p>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            Reciclagem de vídeos
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            Reaproveitamos vídeos que já performaram — troca de capa, corte,
            legenda e voz IA. Mesmo conteúdo, novo gancho, mais alcance.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- 05 DESCOBERTA / NICHOS ---------- */

function Section05() {
  const cats = [
    {
      tag: "ESPIRITUALIDADE",
      dot: "bg-fuchsia-500",
      publico: "Mulheres 25–55, buscadores",
      tickets: "R$ 27–67 (PDF) + R$ 197–497 (curso)",
      produto: '"Manifestação em 21 Dias", numerologia, mapa astral',
    },
    {
      tag: "MOTIVACIONAL / MINDSET",
      dot: "bg-amber-500",
      publico: "Homens 20–45, hustle / disciplina",
      tickets: "R$ 19–47 (PDF) + R$ 297–697 (curso)",
      produto: '"Rotina 5AM", disciplina, mentalidade alpha',
    },
    {
      tag: "BELEZA & SKINCARE",
      dot: "bg-rose-500",
      publico: "Mulheres 18–40",
      tickets: "R$ 30–100 (PDF) + R$ 200–500 (curso)",
      produto: '"Rotina Skin 30 Dias" ou curso de skincare',
    },
    {
      tag: "FINANÇAS & RENDA EXTRA",
      dot: "bg-sky-500",
      publico: "Homens e mulheres 25–50",
      tickets: "R$ 39 (PDF) + R$ 400–800 (curso)",
      produto: '"Primeiros R$ 1k Online" ou curso de renda',
    },
    {
      tag: "EMAGRECIMENTO",
      dot: "bg-emerald-500",
      publico: "Mulheres 25–45",
      tickets: "R$ 29 (PDF) + R$ 150–300 (curso)",
      produto: '"Receitas Low Carb" ou plano de treino',
    },
    {
      tag: "PRODUTIVIDADE",
      dot: "bg-violet-500",
      publico: "Profissionais 30–55",
      tickets: "R$ 49 (PDF) + R$ 300–600 (curso)",
      produto: '"Organiza Sua Vida" ou sistema de produção',
    },
  ];
  return (
    <SectionShell id="05" tag="DESCOBERTA" title="Como Escolher Seu Nicho">
      <p className="mb-8 text-sm text-muted-foreground">
        Nichos com maior conversão hoje — <span className="text-primary">espiritualidade</span> e <span className="text-primary">motivacional</span> liderando.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {cats.map((c) => (
          <div key={c.tag} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${c.dot}`} />
              <div className="font-mono text-xs tracking-widest text-primary">
                {c.tag}
              </div>
            </div>
            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <div>
                <span className="text-foreground/70">Público:</span> {c.publico}
              </div>
              <div>
                <span className="text-foreground/70">Tickets:</span> {c.tickets}
              </div>
              <div>
                <span className="text-foreground/70">Produto:</span> {c.produto}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="font-mono text-xs tracking-widest text-muted-foreground">
          FERRAMENTAS DE VALIDAÇÃO
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["TikTok Discover", "Pinterest Trends", "Google Trends"].map((it) => (
            <span
              key={it}
              className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/80"
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- 06 OPERAÇÃO / VENDA ---------- */

function Section06() {
  const steps = [
    {
      title: "Página de Venda Pronta",
      desc: "Lovable com AI gera em 5 min (ou Leadpages template).",
    },
    {
      title: "PDF Hospedado",
      desc: "Sendowl ou Hotmart — entrega automática na compra.",
    },
    {
      title: "Link da Bio",
      desc: "Instagram > bio > link.dasuapagina.",
    },
    {
      title: "Sticker no Reel/Carousel",
      desc: "Clique direto leva pra página de venda.",
    },
    {
      title: "Automação de Email",
      desc: "EmailMarketing básico responde interesse e faz upsell.",
    },
  ];
  return (
    <SectionShell id="06" tag="OPERAÇÃO" title="Como Vender">
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5"
          >
            <span className="font-mono text-xs text-primary">0{i + 1}</span>
            <div>
              <div className="text-base font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/[0.04] p-6">
        <div className="font-mono text-xs tracking-widest text-primary">
          FLUXO DO CLIENTE
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90">
          Vê post IA → clica no sticker/bio → cai na página → lê copy + vê
          número de vendas → compra PDF → recebe automático → entra no email
          do upsell do curso.
        </p>
      </div>
    </SectionShell>
  );
}

/* ---------- 07 VOLUME ---------- */

function Section07() {
  return (
    <SectionShell id="07" tag="VOLUME" title="Produção em Escala">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            INICIANTE
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground">
            Primeiros 30 dias
          </div>
          <div className="mt-6 space-y-4">
            <Stat n="5" label="conteúdos/semana" />
            <Stat n="20" label="conteúdos/mês" />
            <Stat n="~40 min" label="por dia (~3h/sem)" />
          </div>
        </div>
        <div className="rounded-2xl border border-primary/40 bg-primary/[0.04] p-6 shadow-[0_0_40px_-20px_var(--neon)]">
          <div className="font-mono text-xs tracking-widest text-primary">
            ESCALADO
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground">
            Depois de validar
          </div>
          <div className="mt-6 space-y-4">
            <Stat n="15" label="conteúdos/semana" />
            <Stat n="2" label="contas rodando (máx)" />
            <Stat n="45" label="conteúdos/mês" />
            <Stat n="~2h" label="por dia" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-3xl font-semibold text-foreground">{n}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------- 08 SIMULADOR ---------- */

type Niche = {
  key: string;
  label: string;
  pdf: number;
  course: number;
};

function Section08() {
  const niches: Niche[] = [
    { key: "beleza", label: "Beleza", pdf: 50, course: 150 },
    { key: "emagrecimento", label: "Emagrecimento", pdf: 30, course: 120 },
    { key: "financas", label: "Finanças", pdf: 40, course: 250 },
    { key: "saude", label: "Saúde", pdf: 25, course: 80 },
  ];
  const convOptions = [
    { key: "c1", label: "1% — conservador", v: 0.01 },
    { key: "c2", label: "2% — realista", v: 0.02 },
    { key: "c3", label: "3% — agressivo", v: 0.03 },
  ];

  const [niche, setNiche] = useState<Niche>(niches[0]);
  const [conv, setConv] = useState(convOptions[1]);

  // Assumptions: 200 perfil views/dia, 10% cliques no link
  const visitorsDay = 200 * 0.1; // 20
  const visitorsMonth = visitorsDay * 30; // 600
  const pdfSales = Math.round(visitorsMonth * conv.v);
  const courseSales = Math.round(pdfSales * 0.3); // 30% pega upsell
  const oneAccount = pdfSales * niche.pdf + courseSales * niche.course;
  const fiveAccounts = oneAccount * 5;
  const fmt = (n: number) =>
    "R$ " + n.toLocaleString("pt-BR", { maximumFractionDigits: 0 });

  return (
    <SectionShell id="08" tag="SIMULADOR" title="Simule Sua Renda">
      <p className="mb-8 text-sm text-muted-foreground">
        Base: ~200 views/dia, 10% clicam no link, {Math.round(conv.v * 100)}% convertem.
      </p>

      <div className="space-y-6">
        <div>
          <div className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
            ESCOLHA SEU NICHO
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {niches.map((n) => {
              const active = niche.key === n.key;
              return (
                <button
                  key={n.key}
                  onClick={() => setNiche(n)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    active
                      ? "border-primary bg-primary/10 shadow-[0_0_30px_-10px_var(--neon)]"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div
                    className={`text-base font-semibold ${active ? "text-primary" : "text-foreground"}`}
                  >
                    {n.label}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                    PDF R$ {n.pdf} · Curso R$ {n.course}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
            ESCOLHA SUA CONVERSÃO
          </div>
          <div className="grid grid-cols-3 gap-3">
            {convOptions.map((c) => {
              const active = conv.key === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setConv(c)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    active
                      ? "border-primary bg-primary/10 shadow-[0_0_30px_-10px_var(--neon)]"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div
                    className={`text-base font-semibold ${active ? "text-primary" : "text-foreground"}`}
                  >
                    {c.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-xs tracking-widest text-muted-foreground">
              1 CONTA · POR MÊS
            </div>
            <div className="mt-4 font-mono text-3xl font-semibold text-primary">
              {fmt(oneAccount)}
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              {pdfSales} vendas PDF + {courseSales} cursos afiliados
            </div>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-primary/[0.04] p-6 shadow-[0_0_40px_-20px_var(--neon)]">
            <div className="font-mono text-xs tracking-widest text-primary">
              5 CONTAS · POR MÊS
            </div>
            <div className="mt-4 font-mono text-3xl font-semibold text-primary">
              {fmt(fiveAccounts)}
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Renda passiva real · ~2h/dia
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- 09 PROJEÇÃO REALISTA ---------- */

function Section09() {
  const base = [
    { v: "30", l: "posts/mês" },
    { v: "2.000", l: "views médias/post (~2k/dia)" },
    { v: "60.000", l: "views/mês por conta" },
    { v: "8%", l: "CTR pra bio/link" },
    { v: "4.800", l: "cliques na página/mês" },
  ];
  // PDF R$ 29,90 + upsell de curso afiliado (30% pegam, comissão ~R$ 80)
  const ticket = 29.9 + 0.3 * 80;
  const clicks = 4800;
  const scenarios = [
    { conv: 1 },
    { conv: 2 },
    { conv: 3 },
    { conv: 5 },
    { conv: 7 },
  ].map((s) => {
    const sales = Math.round((clicks * s.conv) / 100);
    const rev1 = sales * ticket;
    const fmt = (n: number) =>
      n.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      });
    return {
      conv: `${s.conv}%`,
      sales,
      rev1: fmt(rev1),
      rev2: fmt(rev1 * 2),
    };
  });

  return (
    <SectionShell id="09" tag="PROJEÇÃO" title="Progressão por Views & Conversão">
      <p className="mb-8 text-sm text-muted-foreground">
        Base: <span className="text-primary">30 posts/mês</span> ×{" "}
        <span className="text-primary">1.500 views médias</span> · PDF R$ 29,90 +
        upsell curso afiliado (R$ 80 comissão).
      </p>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {base.map((r, i) => (
          <div
            key={r.l}
            className="flex items-baseline justify-between gap-6 border-b border-border/60 px-6 py-4 last:border-b-0"
          >
            <span className="font-mono text-lg text-foreground">{r.v}</span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {r.l}
            </span>
            <ArrowDown
              className={`h-3.5 w-3.5 ${
                i === base.length - 1 ? "opacity-0" : "text-primary/60"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-card">
        <div className="grid grid-cols-4 border-b border-border bg-primary/[0.04] px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-primary">
          <span>Conversão</span>
          <span>Vendas/mês</span>
          <span>1 conta</span>
          <span>2 contas</span>
        </div>
        {scenarios.map((s) => (
          <div
            key={s.conv}
            className="grid grid-cols-4 items-baseline border-b border-border/60 px-6 py-4 last:border-b-0"
          >
            <span className="font-mono text-base text-foreground">{s.conv}</span>
            <span className="font-mono text-base text-foreground/80">
              {s.sales}
            </span>
            <span className="font-mono text-base text-foreground/80">
              {s.rev1}
            </span>
            <span className="font-mono text-lg font-semibold text-primary">
              {s.rev2}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Cenário realista de operação madura fica em 2–3% de conversão — já
        passando dos R$ 3k/mês com 2 contas. 5–7% é cenário otimizado (oferta,
        copy e nicho alinhados).
      </p>
    </SectionShell>
  );
}

/* ---------- 10 CICLO ---------- */

function Section10() {
  const steps = [
    {
      title: "Testar",
      desc: "Publica 5 variações de um tema — gancho, ângulo e copy diferentes.",
    },
    {
      title: "Analisar",
      desc: "Veja qual post deu mais cliques. Salva o que funciona, deleta o flop.",
    },
    {
      title: "Otimizar",
      desc: "Repete a fórmula do vencedor — mesma estrutura, conteúdo novo.",
    },
    {
      title: "Escalar",
      desc: "Quando 3–4 posts performam, replica em outra conta.",
    },
    {
      title: "Repete",
      desc: "O ciclo nunca termina. Cada volta: mais eficiente, mais renda.",
    },
  ];
  return (
    <SectionShell id="10" tag="CICLO" title="O Loop de Crescimento">
      <div className="grid gap-3 md:grid-cols-5">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="group relative rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
          >
            <div className="font-mono text-xs text-primary">0{i + 1}</div>
            <div className="mt-3 text-base font-semibold">{s.title}</div>
            <div className="mt-2 text-xs text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-2 rounded-2xl border border-border bg-card p-6 text-sm">
        {[
          ["Semana 1", "Testa (0 vendas, ok)"],
          ["Semana 2", "Acha 1 fórmula que clica"],
          ["Semana 3", "Replica 3x a fórmula"],
          ["Semana 4", "Já gera R$ 200–300/mês"],
          ["Mês 2", "Abre conta 2, replica tudo"],
          ["Mês 3", "2 contas × R$ 300 = R$ 600"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {k}
            </span>
            <span className="text-right text-foreground/90">{v}</span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- 11 MAPA ---------- */

function Section11() {
  const chain = [
    "Instagram Dark",
    "Criar Conta",
    "Nicho",
    "Produção IA",
    "Imagem",
    "Copy",
    "Carousel",
    "Página de Venda",
    "PDF ou Afiliado",
    "Tráfego Orgânico",
    "Monetização",
    "Testar",
    "Otimizar",
    "Escalar",
  ];
  return (
    <SectionShell id="11" tag="MAPA" title="Resumo da Operação">
      <div className="flex flex-wrap items-center gap-2">
        {chain.map((c, i) => (
          <div key={c} className="flex items-center gap-2">
            <span className="rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 font-mono text-xs text-foreground">
              {c}
            </span>
            {i < chain.length - 1 && (
              <ArrowRight className="h-3 w-3 text-primary/60" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/[0.04] p-8">
        <div className="font-mono text-xs tracking-widest text-primary">
          CTA FINAL
        </div>
        <h3 className="mt-3 text-2xl font-bold leading-tight">
          Essa é a estrutura. Agora você quer:
        </h3>
        <ul className="mt-6 space-y-3 text-sm text-foreground/90">
          {[
            "Ver exemplos de PDFs prontos pra usar",
            "Template de página de venda (Lovable)",
            "Prompts de IA pra gerar o conteúdo",
            "Nicho específico — qual você quer começar?",
          ].map((it) => (
            <li key={it} className="flex items-start gap-3">
              <span className="mt-1 h-3 w-3 rounded-sm border border-primary/60" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Me chama aqui que eu monto do jeito que você quer.
        </p>
      </div>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-5 py-2.5 font-mono text-xs tracking-widest text-primary shadow-[0_0_30px_-10px_var(--neon)]">
        ● OPERAÇÃO COMPLETA
      </div>
    </SectionShell>
  );
}
