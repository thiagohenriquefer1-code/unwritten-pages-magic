import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, Fragment } from "react";
import {
  UserPlus,
  ShoppingBag,
  Video,
  Search,
  Link2,
  PlayCircle,
  DollarSign,
  Rocket,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Image as ImageIcon,
  Film,
  Wand2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TikTok Shop com IA — Mini Aula" },
      {
        name: "description",
        content:
          "Como criar uma operação de conteúdo automatizada com IA para promover produtos físicos e ganhar comissões no TikTok Shop.",
      },
      { property: "og:title", content: "TikTok Shop com IA — Mini Aula" },
      {
        property: "og:description",
        content:
          "Como criar uma operação de conteúdo automatizada com IA para promover produtos físicos e ganhar comissões no TikTok Shop.",
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
  { id: "06", label: "afiliação" },
  { id: "07", label: "escala" },
  { id: "08", label: "monetização" },
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
      {/* Top nav */}
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
          <span>● TIKTOK.SHOP / IA</span>
          <span>{new Date().getFullYear()} — operação completa</span>
        </div>
      </footer>
    </main>
  );
}

/* ---------- shared bits ---------- */

function SectionShell({
  id,
  num,
  tag,
  title,
  children,
}: {
  id: string;
  num: string;
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 px-6 py-28 md:py-40"
    >
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

/* ---------- 01 ---------- */

function Section01() {
  const steps = [
    { icon: UserPlus, label: "Criar Conta" },
    { icon: ShoppingBag, label: "Liberar TikTok Shop" },
    { icon: Video, label: "Produzir Conteúdo" },
    { icon: Search, label: "Minerar Produtos" },
    { icon: Link2, label: "Afiliar Produto" },
    { icon: PlayCircle, label: "Publicar" },
    { icon: DollarSign, label: "Monetizar" },
    { icon: Rocket, label: "Escalar" },
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
          TikTok Shop com IA
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Como criar uma operação de conteúdo automatizada para promover produtos físicos e
          receber comissões através do TikTok Shop.
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

/* ---------- 02 ---------- */

function Section02() {
  return (
    <SectionShell id="02" num="02" tag="FUNDAÇÃO" title="Estrutura Inicial">
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="font-mono text-xs tracking-widest text-muted-foreground">
          TikTok
        </div>
        <div className="mt-6 space-y-4">
          {["Criar Conta", "Alcançar 1.000 Seguidores", "Liberar TikTok Shop"].map(
            (label, i) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-border/70 bg-background/50 p-4"
              >
                <span className="font-mono text-xs text-primary">
                  0{i + 1}
                </span>
                <span className="text-sm text-foreground/90">{label}</span>
              </div>
            ),
          )}
        </div>
        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>PROGRESSO</span>
            <span className="text-primary">LIBERAÇÃO</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary shadow-[0_0_12px_var(--neon)]"
              style={{ width: "66%" }}
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- 03 ---------- */

function Section03() {
  const opts = [
    {
      title: "Minha Imagem",
      desc:
        "Você grava com seu próprio rosto. Maior conexão e autoridade. Ideal para nichos onde confiança importa.",
      icon: Video,
    },
    {
      title: "Avatar IA",
      desc:
        "Avatar gerado por IA fala por você. Permite escalar volume sem aparecer. Ótimo para múltiplas contas.",
      icon: Sparkles,
    },
    {
      title: "Vídeos Existentes",
      desc:
        "Reaproveite cortes, edits e referências já gravados. Velocidade máxima e custo zero de produção.",
      icon: Film,
    },
  ];
  return (
    <SectionShell id="03" num="03" tag="CONTEÚDO" title="Produção de Conteúdo">
      <p className="mb-8 text-sm text-muted-foreground">
        Como vamos produzir os vídeos?
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

/* ---------- 04 ---------- */

function Section04() {
  const steps = [
    { title: "Imagem", desc: "Foto base ou referência", icon: ImageIcon },
    { title: "Flow", desc: "Criar imagem ou substituir elementos", icon: Wand2 },
    { title: "Kling AI", desc: "Gerar movimento e câmera", icon: Sparkles },
    { title: "Vídeo Final", desc: "Pronto para postar", icon: PlayCircle },
  ];
  return (
    <SectionShell id="04" num="04" tag="PIPELINE" title="Fluxo de Produção com IA">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
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
    </SectionShell>
  );
}

/* ---------- 05 ---------- */

function Section05() {
  const cats = [
    { tag: "BELEZA", items: ["Gloss", "Skin Care", "Babyliss", "Escovas"] },
    {
      tag: "MODA",
      items: ["Roupas Femininas", "Óculos", "Bolsas", "Relógios", "Botas"],
    },
    {
      tag: "CASA",
      items: ["Organizadores", "Produtos de Limpeza", "Utensílios de Cozinha"],
    },
    {
      tag: "ACESSÓRIOS ELETRÔNICOS",
      items: ["Ring Light", "Fones", "Suporte de Celular"],
    },
    { tag: "PET", items: ["Brinquedos", "Produtos Engraçados"] },
  ];
  return (
    <SectionShell id="05" num="05" tag="DESCOBERTA" title="Mineração de Produtos">
      <div className="grid gap-4 md:grid-cols-2">
        {cats.map((c) => (
          <div
            key={c.tag}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="font-mono text-xs tracking-widest text-primary">
              {c.tag}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/80"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- 06 ---------- */

function Section06() {
  const steps = [
    {
      title: "Produto Encontrado",
      desc: "Validado no TikTok Shop pelo histórico de vendas.",
    },
    {
      title: "Solicitar Afiliação",
      desc: "Pedido direto no painel de Affiliate Center.",
    },
    {
      title: "Aprovação",
      desc: "Lojista libera comissão e amostra opcional.",
    },
    {
      title: "Link Gerado",
      desc: "Link rastreável pronto para colar em qualquer vídeo.",
    },
  ];
  return (
    <SectionShell id="06" num="06" tag="OPERAÇÃO" title="Afiliação">
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5"
          >
            <span className="font-mono text-xs text-primary">
              0{i + 1}
            </span>
            <div>
              <div className="text-base font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- 07 ---------- */

function Section07() {
  return (
    <SectionShell id="07" num="07" tag="VOLUME" title="Produção em Escala">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            CONSERVADOR
          </div>
          <div className="mt-6 space-y-4">
            <Stat n="3" label="conteúdos por dia" />
            <Stat n="90" label="conteúdos por mês" />
          </div>
        </div>
        <div className="rounded-2xl border border-primary/40 bg-primary/[0.04] p-6 shadow-[0_0_40px_-20px_var(--neon)]">
          <div className="font-mono text-xs tracking-widest text-primary">
            ESCALA
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Stat n="10" label="conteúdos por dia" />
            <Stat n="5" label="contas operando" />
            <Stat n="50" label="conteúdos por dia" />
            <Stat n="1.500" label="conteúdos por mês" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-3xl font-semibold text-foreground">
        {n}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------- 08 ---------- */

function Section08() {
  const tiers = [3, 5, 10, 20];
  const [sel, setSel] = useState(10);
  const venda = 10000;
  const ganho = (venda * sel) / 100;
  return (
    <SectionShell id="08" num="08" tag="ECONOMIA" title="Entendendo a Monetização">
      <p className="mb-8 text-sm text-muted-foreground">
        Cada produto tem uma comissão diferente. Clique em uma faixa para simular.
      </p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {tiers.map((t) => {
          const active = sel === t;
          return (
            <button
              key={t}
              onClick={() => setSel(t)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                active
                  ? "border-primary bg-primary/10 shadow-[0_0_30px_-10px_var(--neon)]"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <div
                className={`font-mono text-3xl font-semibold ${active ? "text-primary" : "text-foreground"}`}
              >
                {t}%
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Faixa de comissão
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <div className="font-mono text-xs tracking-widest text-muted-foreground">
          COMISSÃO SELECIONADA · {sel}%
        </div>
        <div className="mt-4 text-base text-foreground/90">
          Em{" "}
          <span className="font-mono text-primary">
            R$ {venda.toLocaleString("pt-BR")}
          </span>{" "}
          vendidos → você recebe{" "}
          <span className="font-mono text-2xl font-semibold text-primary">
            R$ {ganho.toLocaleString("pt-BR")}
          </span>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- 09 ---------- */

function Section09() {
  const rows = [
    { v: "767", l: "views por dia" },
    { v: "69.030", l: "views por mês" },
    { v: "10%", l: "clicam no produto" },
    { v: "6.903", l: "visitantes" },
    { v: "3%", l: "conversão" },
    { v: "207", l: "vendas" },
    { v: "R$ 250,00", l: "ticket médio" },
    { v: "R$ 51.750,00", l: "total em vendas" },
    { v: "10%", l: "comissão" },
    { v: "R$ 5.175,00", l: "seu ganho", highlight: true },
  ];
  return (
    <SectionShell id="09" num="09" tag="PROJEÇÃO" title="Exemplo de Projeção">
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {rows.map((r, i) => (
          <div
            key={r.l}
            className={`flex items-baseline justify-between gap-6 border-b border-border/60 px-6 py-4 last:border-b-0 ${
              r.highlight ? "bg-primary/5" : ""
            }`}
          >
            <span
              className={`font-mono text-lg ${r.highlight ? "text-primary text-2xl font-semibold" : "text-foreground"}`}
            >
              {r.v}
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {r.l}
            </span>
            <ArrowDown
              className={`h-3.5 w-3.5 ${i === rows.length - 1 ? "opacity-0" : "text-primary/60"}`}
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- 10 ---------- */

function Section10() {
  const steps = [
    {
      title: "Analisar",
      desc: "Veja métricas de retenção, cliques e conversão por vídeo.",
    },
    {
      title: "Testar",
      desc: "Mude gancho, ângulo ou produto, mantendo o resto igual.",
    },
    {
      title: "Otimizar",
      desc: "Aproveite o que funcionou e descarte o que travou.",
    },
    {
      title: "Escalar",
      desc: "Multiplique o vídeo vencedor em quantidade e contas.",
    },
  ];
  return (
    <SectionShell id="10" num="10" tag="LOOP" title="O Ciclo de Crescimento">
      <div className="grid gap-3 md:grid-cols-4">
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
      <p className="mt-6 text-sm text-muted-foreground">
        O ciclo nunca termina. Cada volta deixa a operação mais eficiente.
      </p>
    </SectionShell>
  );
}

/* ---------- 11 ---------- */

function Section11() {
  const chain = [
    "TikTok",
    "Criar Conta",
    "1.000 Seguidores",
    "TikTok Shop",
    "Produção IA",
    "Mineração",
    "Afiliação",
    "Conteúdo",
    "Monetização",
    "Analisar",
    "Testar",
    "Otimizar",
    "Escalar",
  ];
  return (
    <SectionShell id="11" num="11" tag="MAPA" title="Resumo da Operação">
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
      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-5 py-2.5 font-mono text-xs tracking-widest text-primary shadow-[0_0_30px_-10px_var(--neon)]">
        ● OPERAÇÃO COMPLETA
      </div>
    </SectionShell>
  );
}
