import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Calendar,
  CalendarCheck2,
  Cable,
  Check,
  ChevronDown,
  ChevronsUp,
  Clock3,
  Crown,
  Gem,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MessagesSquare,
  Rocket,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
  Star,
  Shield,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511980003836";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1c-2.5 0-4.2 1.5-4.2 4.4V11H7.5v3h2.8v8h3.2z" />
    </svg>
  );
}

const directPlans = [
  {
    icon: Rocket,
    name: "Iniciante",
    subtitle: "Para pequenas demandas",
    price: "R$197,00",
    features: [
      "1 canal conectado (WhatsApp)",
      "Até 2 usuários (você e mais um gerente ou atendente)",
      "Chatbots de IA ilimitados (não cobramos ChatGPT)",
    ],
  },
  {
    icon: Gem,
    name: "Profissional",
    subtitle: "Para atendimento multicanal",
    price: "R$297,00",
    recommended: true,
    features: [
      "Tudo do Plano Iniciante",
      "API para disparo de mensagens",
      "Chatbots de IA ilimitados (não cobramos ChatGPT)",
    ],
  },
  {
    icon: Crown,
    name: "Premium",
    subtitle: "Para altas demandas",
    price: "R$497,00",
    features: [
      "Tudo do Plano Profissional",
      "API para disparo de mensagens",
      "Chatbots de IA ilimitados (não cobramos ChatGPT)",
    ],
  },
];

const customPlan = {
  icon: Cable,
  name: "API Oficial",
  subtitle: "Para mais estabilidade e segurança",
  price: "Sob consulta",
  features: [
    "Qualquer quantidade de números",
    "Qualquer quantidade de fluxos",
    "Qualquer quantidade de IA's",
    "Setup customizado com integrações",
    "Apresentação da plataforma",
    "Suporte premium",
  ],
};

const faqs = [
  {
    q: "Como o assistente agenda pelo WhatsApp?",
    a: "O cliente manda uma mensagem, o assistente responde automaticamente, apresenta os horários disponíveis e confirma o agendamento — tudo dentro do próprio WhatsApp, sem precisar de app, link externo ou atendente humano.",
  },
  {
    q: "O cliente consegue escolher e confirmar horários pelo WhatsApp?",
    a: "Sim. A proposta da plataforma é facilitar a escolha e confirmação de horários com um fluxo claro, rápido e profissional.",
  },
  {
    q: "Serve apenas para empresas grandes?",
    a: "Não. Os planos atendem desde pequenas operações até demandas mais robustas.",
  },
  {
    q: "O sistema ajuda a evitar bagunça na agenda?",
    a: "Sim. A comunicação fica mais organizada, os horários mais claros e o processo reduz falhas manuais.",
  },
  {
    q: "A API Oficial tem valor fixo?",
    a: "Não. A modalidade API Oficial é sob consulta e personalizada conforme a operação.",
  },
];

const heroHighlights = [
  "Agendamentos automatizados pelo WhatsApp",
  "Horários organizados e confirmações mais claras",
  "Experiência premium para empresas e clientes",
];

const features = [
  {
    icon: CalendarCheck2,
    title: "Agendamento automatizado",
    text: "O cliente inicia o contato, escolhe o melhor horário e confirma o atendimento dentro de um fluxo claro.",
    color: "sky",
  },
  {
    icon: Clock3,
    title: "Organização de horários",
    text: "Mais previsibilidade, menos ruído manual e mais controle sobre a agenda.",
    color: "emerald",
  },
  {
    icon: MessagesSquare,
    title: "Centralização do atendimento",
    text: "O processo de marcação fica concentrado em um fluxo claro, reduzindo confusão.",
    color: "sky",
  },
  {
    icon: Workflow,
    title: "Fluxos inteligentes",
    text: "A automação conduz o atendimento para tornar a jornada mais rápida e organizada.",
    color: "emerald",
  },
  {
    icon: Bot,
    title: "Assistente virtual com IA",
    text: "A experiência transmite inteligência operacional até a confirmação do horário.",
    color: "sky",
  },
  {
    icon: Cable,
    title: "Estrutura escalável",
    text: "Base sólida para empresas que precisam profissionalizar a rotina de agendamento.",
    color: "emerald",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "O cliente chama no WhatsApp",
    text: "Tudo começa no canal mais natural para o público.",
  },
  {
    icon: Calendar,
    title: "O sistema conduz a escolha do horário",
    text: "A automação apresenta opções e organiza etapas.",
  },
  {
    icon: Check,
    title: "Agendamento confirmado",
    text: "A confirmação fica mais clara e a agenda mais estruturada.",
  },
];

const stats = [
  { icon: Users, value: "2.000+", label: "Agendamentos automatizados" },
  { icon: TrendingUp, value: "98%", label: "Taxa de confirmação" },
  { icon: Shield, value: "100%", label: "Segurança dos dados" },
  { icon: Globe, value: "24/7", label: "Disponibilidade" },
];

const testimonials = [
  {
    name: "Ana Lima",
    role: "Clínica de estética",
    text: "Reduzi os cancelamentos em 70% depois que implementei o ZapFlow360. Os clientes adoram a experiência pelo WhatsApp.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Barbearia Premium",
    text: "A agenda ficou muito mais organizada. Antes era uma bagunça, agora tudo chega confirmado direto no fluxo.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Consultório odontológico",
    text: "Meus pacientes elogiam o atendimento digital. Profissional, rápido e sem complicação nenhuma.",
    stars: 5,
  },
];

const navLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Blog", isRoute: true },
] as const;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-xl">
        <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{text}</p>}
    </motion.div>
  );
}

function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.045] backdrop-blur-2xl",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_90px_rgba(2,8,23,0.45)]",
        hover &&
          "transition-all duration-300 hover:border-sky-400/20 hover:bg-white/[0.065] hover:shadow-[0_0_0_1px_rgba(14,165,255,0.08),0_30px_90px_rgba(2,8,23,0.55),0_0_40px_rgba(14,165,255,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function IconBadge({ icon: Icon, color = "sky" }: { icon: React.ElementType; color?: string }) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
        color === "emerald"
          ? "border-emerald-400/20 bg-emerald-900/40 text-emerald-300 shadow-[0_0_28px_rgba(52,211,153,0.18)]"
          : "border-sky-400/20 bg-slate-900/80 text-sky-300 shadow-[0_0_28px_rgba(56,189,248,0.18)]"
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

function FloatingImage({
  src,
  alt,
  className = "",
  rotate = "rotate-0",
  glow = "from-sky-400/20 to-emerald-400/10",
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: string;
  glow?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      animate={{ y: [0, -8, 0] }}
      className={cn("group relative", className)}
    >
      <div className={cn("absolute -inset-6 rounded-[36px] bg-gradient-to-br blur-3xl", glow)} />
      <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.02]" />
      <div
        className={cn(
          "relative overflow-hidden rounded-[30px] border border-sky-300/20 bg-[#081327]/80 p-2 shadow-[0_25px_90px_rgba(2,8,23,0.65)]",
          "transition duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_35px_110px_rgba(2,8,23,0.8)] hover:border-sky-300/35",
          rotate
        )}
      >
        <img src={src} alt={alt} className="h-full w-full rounded-[24px] object-cover" />
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = React.useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <GlassCard className="p-1">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 rounded-[22px] px-5 py-4 text-left transition-all hover:bg-white/[0.06]"
        >
          <span className="text-base font-medium text-slate-50">{q}</span>
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              open
                ? "rotate-180 border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                : "border-white/10 bg-white/5 text-slate-300"
            )}
          >
            <ChevronDown className="h-4 w-4 transition-transform duration-300" />
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1 text-sm leading-7 text-slate-300">{a}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="group relative overflow-hidden p-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-emerald-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-900/30 text-sky-300">
          <Icon className="h-5 w-5" />
        </div>
        <div className="bg-gradient-to-r from-[#0EA5FF] to-[#34D399] bg-clip-text text-3xl font-bold text-transparent">
          {value}
        </div>
        <p className="mt-1 text-sm text-slate-400">{label}</p>
      </GlassCard>
    </motion.div>
  );
}

function TestimonialCard({
  name,
  role,
  text,
  stars,
  index,
}: {
  name: string;
  role: string;
  text: string;
  stars: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <GlassCard className="group relative h-full overflow-hidden p-6">
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/10 to-emerald-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="mb-4 flex gap-1">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mb-5 text-sm italic leading-7 text-slate-200">"{text}"</p>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA5FF] to-[#34D399] text-sm font-bold text-[#071326]">
            {name[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-slate-400">{role}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function AnimatedOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 60, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-500/8 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 50, -30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-400/6 blur-[90px]"
      />
    </div>
  );
}

function FloatingParticles() {
  const particles = [
    { x: "7%", y: "18%", size: 3, color: "bg-sky-400/40", duration: 8, delay: 0 },
    { x: "93%", y: "11%", size: 2, color: "bg-emerald-400/50", duration: 10, delay: 1.5 },
    { x: "14%", y: "73%", size: 2, color: "bg-sky-300/35", duration: 12, delay: 3 },
    { x: "87%", y: "66%", size: 3, color: "bg-emerald-300/40", duration: 9, delay: 0.8 },
    { x: "50%", y: "7%", size: 2, color: "bg-sky-400/30", duration: 11, delay: 2 },
    { x: "73%", y: "89%", size: 2, color: "bg-emerald-400/35", duration: 7, delay: 4 },
    { x: "24%", y: "44%", size: 1.5, color: "bg-sky-300/25", duration: 13, delay: 1 },
    { x: "79%", y: "39%", size: 1.5, color: "bg-emerald-300/30", duration: 14, delay: 5 },
    { x: "40%", y: "55%", size: 2, color: "bg-sky-400/20", duration: 16, delay: 2.5 },
    { x: "62%", y: "28%", size: 1.5, color: "bg-emerald-300/25", duration: 11, delay: 6 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full", p.color)}
          style={{ left: p.x, top: p.y, width: p.size * 4, height: p.size * 4 }}
          animate={{
            y: [0, -20, 8, -12, 0],
            x: [0, 8, -5, 10, 0],
            opacity: [0.4, 0.9, 0.5, 0.8, 0.4],
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}

function CornerGlows() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-sky-500/15 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-emerald-500/12 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-400/8 blur-[80px]"
      />
    </div>
  );
}

function NavItem({
  href,
  label,
  delay,
  onHover,
  isHovered,
}: {
  href: string;
  label: string;
  delay: number;
  onHover: (v: boolean) => void;
  isHovered: boolean;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      className="relative px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            layoutId="nav-hover-pill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 rounded-full border border-sky-400/15 bg-gradient-to-r from-sky-400/8 to-emerald-400/8"
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [pricingView, setPricingView] = React.useState<"direct" | "api">("direct");
  const [scrolled, setScrolled] = React.useState(false);
  const [hoveredNav, setHoveredNav] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen overflow-x-hidden bg-[#050B18] text-slate-50 selection:bg-sky-400/30 selection:text-white"
    >
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_20%_85%,rgba(34,197,94,0.12),transparent_26%),linear-gradient(180deg,#050B18_0%,#071326_48%,#0B1730_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <div className="fixed inset-0 -z-10 opacity-60 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <AnimatedOrbs />
      <FloatingParticles />
      <CornerGlows />

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-white/10 backdrop-blur-2xl transition-all duration-500",
          scrolled ? "bg-[#071326]/90 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-[#071326]/60"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 rounded-xl bg-gradient-to-br from-sky-400/30 to-emerald-400/20 blur-sm"
              />
              <img
                src="/logo-zapflow360.png"
                alt="Logo ZapFlow360"
                className="relative h-12 w-auto rounded-xl object-contain sm:h-14"
              />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide text-white sm:text-xl">ZapFlow360</p>
              <p className="hidden text-xs text-slate-400 sm:block">
                Automatização premium de agendamentos
              </p>
            </div>
          </motion.a>

          <nav className="hidden items-center md:ml-auto md:flex md:pr-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
            >
              {navLinks.map((link, i) =>
                "isRoute" in link ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="relative px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <NavItem
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    delay={0.15 + i * 0.07}
                    isHovered={hoveredNav === link.href}
                    onHover={(v) => setHoveredNav(v ? link.href : null)}
                  />
                )
              )}
            </motion.div>
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-200 transition hover:scale-[1.04] hover:bg-emerald-400/18 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(52,211,153,0.22)] md:inline-flex"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <MessageCircle className="h-4 w-4" />
              </motion.span>
              Testar agora
            </motion.a>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100 transition hover:bg-white/10 md:hidden"
              aria-label="Abrir menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/10 bg-[#071326]/95 px-4 py-4 md:hidden"
            >
              <nav className="flex flex-col gap-3 text-sm text-slate-200">
                {navLinks.map((link, i) =>
                  "isRoute" in link ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-3 py-2 hover:bg-white/[0.05]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-3 py-2 hover:bg-white/[0.05]"
                    >
                      {link.label}
                    </motion.a>
                  )
                )}

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5FF] to-[#34D399] px-4 py-3 font-semibold text-[#071326]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Testar agora
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:pb-28 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-xl"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                </motion.span>
                Agendamento automatizado no WhatsApp
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.03]"
              >
                Transforme a sua agenda em uma operação{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#0EA5FF] via-[#38BDF8] to-[#34D399] bg-clip-text text-transparent">
                    mais rápida
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-[#0EA5FF] to-[#34D399]"
                  />
                </span>
                , clara e profissional.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                O <span className="font-semibold text-white">ZapFlow360</span> foi criado
                exclusivamente para automatização de agendamentos online pelo WhatsApp.
                Organize horários, confirme atendimentos, centralize conversas e elimine a
                bagunça da agenda com uma experiência premium.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0EA5FF] to-[#34D399] px-6 py-4 text-sm font-semibold text-[#071326] transition hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(14,165,255,0.35)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#34D399] to-[#0EA5FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative flex items-center gap-2">
                    Testar agora
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

                <a
                  href="#planos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.09]"
                >
                  Ver planos
                  <CalendarCheck2 className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {heroHighlights.map((item, index) => (
                  <GlassCard
                    key={item}
                    className={cn(
                      "group relative flex min-h-[160px] items-center overflow-hidden px-5 py-5",
                      index === 1
                        ? "shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_0_40px_rgba(14,165,255,0.08)]"
                        : "",
                      index === 0
                        ? "before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-gradient-to-r before:from-emerald-400/0 before:via-emerald-300/80 before:to-sky-400/0"
                        : "",
                      index === 2
                        ? "after:absolute after:inset-y-5 after:right-0 after:w-px after:bg-gradient-to-b after:from-sky-400/0 after:via-sky-300/70 after:to-emerald-400/0"
                        : ""
                    )}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/5 to-emerald-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="flex w-full flex-col items-center gap-4 text-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="shrink-0 rounded-xl bg-emerald-400/10 p-2 text-emerald-300"
                      >
                        <Check className="h-4 w-4" />
                      </motion.div>
                      <p className="w-full text-center text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  </GlassCard>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative">
              <div className="pointer-events-none absolute -left-8 top-12 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -right-4 bottom-8 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
              <FloatingImage
                src="/dashboard-zapflow360.png"
                alt="Dashboard principal do ZapFlow360"
                className="mx-auto max-w-[980px]"
                rotate="rotate-[1.8deg] lg:rotate-[3deg]"
                glow="from-sky-400/25 via-sky-300/12 to-emerald-400/12"
              />
              <div className="pointer-events-none absolute -bottom-10 left-2 z-10 hidden w-[34%] lg:block">
                <FloatingImage
                  src="/chat-agendamento-zapflow360.png"
                  alt="Chat de agendamento do ZapFlow360"
                  rotate="-rotate-[8deg]"
                  glow="from-emerald-400/18 via-sky-400/12 to-sky-300/10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </section>

        <section
          id="funcionalidades"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        >
          <SectionTitle
            eyebrow="Funcionalidades"
            title="A estrutura ideal para profissionalizar seus agendamentos online."
            text="Nada de CRM genérico. Aqui, tudo foi desenhado para tornar o processo de agendamento mais claro, inteligente e organizado."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.09 }}
                >
                  <GlassCard
                    className={cn(
                      "group relative h-full p-6",
                      idx === 0
                        ? "before:absolute before:inset-y-6 before:left-0 before:w-px before:bg-gradient-to-b before:from-emerald-400/0 before:via-emerald-300/80 before:to-sky-400/0"
                        : "",
                      idx === 4
                        ? "after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-sky-400/0 after:via-sky-300/70 after:to-emerald-400/0"
                        : ""
                    )}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-sky-400/5 to-emerald-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={cn(
                        "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
                        item.color === "emerald"
                          ? "border-emerald-400/20 bg-emerald-900/40 text-emerald-300 shadow-[0_0_28px_rgba(52,211,153,0.16)]"
                          : "border-sky-400/20 bg-slate-900/80 text-sky-300 shadow-[0_0_28px_rgba(56,189,248,0.16)]"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section
          id="como-funciona"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        >
          <SectionTitle
            eyebrow="Como funciona"
            title="Uma jornada mais inteligente do primeiro contato até a confirmação."
            text="A experiência do ZapFlow360 comunica tecnologia e organização sem perder a simplicidade do WhatsApp."
          />

          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                  >
                    <GlassCard className="group relative p-6">
                      {index === 1 && (
                        <div className="pointer-events-none absolute inset-y-6 right-0 w-px bg-gradient-to-b from-sky-400/0 via-sky-300/80 to-emerald-400/0" />
                      )}
                      <div className="flex gap-4">
                        <motion.div
                          whileHover={{ scale: 1.12, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-slate-900/80 text-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.14)]"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        <div>
                          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                            Etapa {index + 1}
                          </div>
                          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{step.text}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-10 top-10 h-32 w-32 rounded-full bg-sky-400/15 blur-3xl" />
              <div className="pointer-events-none absolute bottom-8 right-6 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
              <FloatingImage
                src="/fluxo-automacao-zapflow360.png"
                alt="Fluxo de automação do ZapFlow360"
                className="mx-auto max-w-[860px]"
                rotate="rotate-[1deg] lg:rotate-[2.6deg]"
                glow="from-sky-400/25 via-sky-300/12 to-emerald-400/12"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative order-2 lg:order-1">
              <FloatingImage
                src="/chat-agendamento-zapflow360.png"
                alt="Simulação de conversa de agendamento no ZapFlow360"
                className="mx-auto max-w-[520px]"
                rotate="-rotate-[2deg] lg:-rotate-[5deg]"
                glow="from-sky-400/22 via-sky-300/12 to-emerald-400/15"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-xl">
                <Send className="h-3.5 w-3.5 text-emerald-300" />
                Atendimento centralizado
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                O cliente entende rápido, responde rápido e confirma melhor.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                O ZapFlow360 transforma uma conversa comum do WhatsApp em um fluxo guiado de
                agendamento.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Mais clareza para o cliente escolher o horário.",
                  "Menos mensagens soltas e menos confusão no atendimento.",
                  "Confirmação mais visível e profissional dentro do fluxo.",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 rounded-full bg-emerald-400/10 p-1 text-emerald-300">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-xl">
                <Bot className="h-3.5 w-3.5 text-emerald-300" />
                Assistente virtual e integrações
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Aparência de sistema robusto, operação mais inteligente e preparada para
                escalar.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                A apresentação visual do ZapFlow360 reforça tecnologia, IA e organização.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Zap, label: "Automação com aparência premium", color: "sky" },
                  { icon: Cable, label: "Integrações reforçando valor percebido", color: "emerald" },
                  { icon: LayoutDashboard, label: "Dashboard com leitura visual forte", color: "sky" },
                  { icon: Bot, label: "Experiência alinhada com IA", color: "emerald" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                    >
                      <GlassCard
                        className={cn(
                          "relative p-4",
                          idx === 0
                            ? "before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-gradient-to-r before:from-emerald-400/0 before:via-emerald-300/80 before:to-sky-400/0"
                            : ""
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <IconBadge icon={Icon} color={item.color} />
                          <p className="text-sm font-medium leading-6 text-slate-200">
                            {item.label}
                          </p>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-x-10 top-10 h-32 rounded-full bg-sky-400/15 blur-3xl" />
              <FloatingImage
                src="/assistente-virtual-zapflow360.png"
                alt="Assistente virtual e integrações do ZapFlow360"
                className="mx-auto max-w-[560px]"
                rotate="rotate-[1deg] lg:rotate-[4deg]"
                glow="from-sky-400/24 via-sky-300/10 to-emerald-400/14"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="Como funciona na prática"
            title="Menos bagunça operacional. Mais clareza, velocidade e confirmação."
          />

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <FloatingImage
                src="/antes-depois-zapflow360.png"
                alt="Comparativo antes versus depois com ZapFlow360"
                className="mx-auto max-w-[900px]"
                rotate="-rotate-[1deg] lg:-rotate-[2deg]"
                glow="from-sky-400/24 via-sky-300/12 to-emerald-400/14"
              />
            </div>

            <div className="grid gap-5">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/20 bg-slate-900/80 text-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.15)]">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Antes</h3>
                  </div>

                  <div className="space-y-3">
                    {["Bagunça no WhatsApp", "Cliente esperando retorno", "Erros e confusão de horário"].map(
                      (item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-sky-400/10 p-1 text-sky-300">
                            <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                          </div>
                          <p className="text-sm leading-7 text-slate-200">{item}</p>
                        </div>
                      )
                    )}
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <GlassCard className="border-emerald-400/20 bg-gradient-to-b from-emerald-400/10 to-white/[0.04] p-6 shadow-[0_0_70px_rgba(34,197,94,0.08)]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-slate-900/80 text-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.15)]">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Depois</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Tudo automatizado em um fluxo claro",
                      "Agenda mais organizada e previsível",
                      "Cliente confirmado com mais rapidez",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-emerald-400/10 p-1 text-emerald-300">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-sm leading-7 text-slate-100">{item}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="Depoimentos"
            title="Quem usa, aprova."
            text="Veja o que nossos clientes dizem sobre a transformação na rotina de agendamentos."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </section>

        <section id="planos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="Planos e preços"
            title="Escolha a estrutura ideal para o seu atendimento."
            text="Selecione entre conexão direta e API Oficial com um layout mais moderno e tecnológico."
          />

          <div className="relative overflow-hidden rounded-[40px] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(7,19,38,0.75),rgba(4,16,33,0.92))] p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -left-8 top-16 h-[75%] w-[75%] rounded-full border border-emerald-400/20" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-[85%] w-[65%] rounded-full border border-sky-400/20" />
            <div className="pointer-events-none absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-300/70 to-sky-400/0" />
            <div className="pointer-events-none absolute inset-0 rounded-[40px] opacity-30 [background:linear-gradient(135deg,rgba(14,165,255,0.15),transparent_40%,rgba(52,211,153,0.15))]" />

            <div className="relative">
              <div className="mx-auto mb-10 flex w-fit items-center rounded-full border border-emerald-400/20 bg-[#06213A]/80 p-1.5 shadow-[0_0_0_1px_rgba(52,211,153,0.08)]">
                {(["direct", "api"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setPricingView(v)}
                    className={cn(
                      "rounded-full px-7 py-3 text-base font-semibold transition-all duration-300",
                      pricingView === v
                        ? "bg-gradient-to-r from-[#0EA5FF] to-[#34D399] text-[#071326] shadow-[0_8px_30px_rgba(52,211,153,0.25)]"
                        : "text-slate-200 hover:text-white"
                    )}
                  >
                    {v === "direct" ? "Conexão direta" : "API Oficial"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {pricingView === "direct" ? (
                  <motion.div
                    key="direct"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-6 lg:grid-cols-3"
                  >
                    {directPlans.map((plan, planIdx) => {
                      const Icon = plan.icon;
                      return (
                        <motion.div
                          key={plan.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: planIdx * 0.1 }}
                          className={cn(
                            "group relative overflow-visible rounded-[32px] border border-white/10 bg-[#08152D]/92 shadow-[0_25px_80px_rgba(2,8,23,0.42)]",
                            plan.recommended
                              ? "border-emerald-400/30 bg-[linear-gradient(180deg,rgba(10,34,42,0.96),rgba(8,21,45,0.96))] shadow-[0_0_0_1px_rgba(52,211,153,0.08),0_30px_100px_rgba(2,8,23,0.5),0_0_80px_rgba(52,211,153,0.08)] lg:-translate-y-2"
                              : ""
                          )}
                        >
                          <div
                            className={cn(
                              "pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                              plan.recommended
                                ? "bg-gradient-to-br from-emerald-400/8 to-sky-400/8"
                                : "bg-gradient-to-br from-sky-400/5 to-emerald-400/5"
                            )}
                          />

                          {plan.recommended && (
                            <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/50 bg-gradient-to-r from-[#22C55E] to-[#34D399] px-5 py-2 text-sm font-semibold text-[#06213A] shadow-[0_10px_30px_rgba(52,211,153,0.25)]">
                              Recomendado
                            </div>
                          )}

                          <div className="p-7 pt-8">
                            <div className="mb-6">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: -8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={cn(
                                  "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
                                  plan.recommended
                                    ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                                    : "border-sky-400/20 bg-slate-900/80 text-sky-300"
                                )}
                              >
                                <Icon className="h-5 w-5" />
                              </motion.div>
                              <h4 className="text-2xl font-semibold text-white">{plan.name}</h4>
                              <p
                                className={cn(
                                  "mt-2 text-sm",
                                  plan.recommended ? "text-emerald-100/75" : "text-slate-400"
                                )}
                              >
                                {plan.subtitle}
                              </p>
                            </div>

                            <div className="mb-6 flex items-end gap-2">
                              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-5xl font-semibold tracking-tight text-transparent">
                                {plan.price}
                              </span>
                              <span className="pb-1 text-sm text-slate-400">/mês</span>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                              <div className="space-y-4">
                                {plan.features.map((feature) => (
                                  <div key={feature} className="flex items-start gap-3">
                                    <div className="mt-1 rounded-full bg-emerald-400/10 p-1 text-emerald-300">
                                      <Check className="h-3.5 w-3.5" />
                                    </div>
                                    <p className="text-base leading-8 text-slate-100">{feature}</p>
                                  </div>
                                ))}
                              </div>

                              <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(
                                  "group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold transition-all hover:scale-[1.02]",
                                  plan.recommended
                                    ? "bg-gradient-to-r from-[#0EA5FF] to-[#34D399] text-[#071326] shadow-[0_10px_30px_rgba(52,211,153,0.18)] hover:shadow-[0_15px_40px_rgba(52,211,153,0.28)]"
                                    : "border border-white/10 bg-white/[0.06] text-white hover:border-white/20 hover:bg-white/[0.10]"
                                )}
                              >
                                Assinar agora
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="api"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="mx-auto max-w-4xl"
                  >
                    <div className="relative overflow-visible rounded-[34px] border border-emerald-400/25 bg-[linear-gradient(180deg,rgba(9,26,46,0.98),rgba(6,22,38,0.98))] shadow-[0_0_0_1px_rgba(52,211,153,0.08),0_30px_100px_rgba(2,8,23,0.5),0_0_90px_rgba(52,211,153,0.08)]">
                      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/50 bg-gradient-to-r from-[#22C55E] to-[#34D399] px-5 py-2 text-sm font-semibold text-[#06213A] shadow-[0_10px_30px_rgba(52,211,153,0.25)]">
                        Recomendado
                      </div>

                      <div className="p-8 pt-10 sm:p-10 sm:pt-12">
                        <div className="mb-8 flex items-start gap-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                            <Cable className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-3xl font-semibold text-white">{customPlan.name}</h4>
                            <p className="mt-2 text-slate-300">{customPlan.subtitle}</p>
                          </div>
                        </div>

                        <div className="mb-8">
                          <span className="bg-gradient-to-r from-[#0EA5FF] to-[#34D399] bg-clip-text text-6xl font-semibold tracking-tight text-transparent">
                            {customPlan.price}
                          </span>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                          <p className="mb-5 text-xl font-semibold text-white">
                            Planos 100% customizados, pague somente o que usar:
                          </p>

                          <div className="space-y-4">
                            {customPlan.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-3">
                                <div className="mt-1 rounded-full bg-emerald-400/10 p-1 text-emerald-300">
                                  <Check className="h-3.5 w-3.5" />
                                </div>
                                <p className="text-lg leading-8 text-slate-100">{feature}</p>
                              </div>
                            ))}
                          </div>

                          <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5FF] to-[#34D399] px-5 py-4 text-base font-semibold text-[#071326] transition hover:scale-[1.01] hover:shadow-[0_15px_40px_rgba(14,165,255,0.3)]"
                          >
                            Fale conosco
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="FAQ"
            title="Respostas rápidas para dúvidas antes do contato."
            text="Uma seção feita para reduzir objeções e reforçar a proposta do ZapFlow360."
          />
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} q={item.q} a={item.a} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0c1f3a] via-[#081630] to-[#0a1e2e] p-10 text-center sm:p-14"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-[80px]" />
            <div className="pointer-events-none absolute inset-x-20 top-0 h-px bg-gradient-to-r from-sky-400/0 via-sky-300/70 to-emerald-400/0" />
            <div className="pointer-events-none absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-300/70 to-sky-400/0" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                Pronto para começar?
              </div>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                Leve seu atendimento a outro nível com o{" "}
                <span className="bg-gradient-to-r from-[#0EA5FF] to-[#34D399] bg-clip-text text-transparent">
                  ZapFlow360
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-base text-slate-300">
                Automatize seus agendamentos, elimine a bagunça e ofereça uma experiência
                premium para seus clientes.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5FF] to-[#34D399] px-8 py-4 text-base font-semibold text-[#071326] transition hover:scale-[1.04] hover:shadow-[0_15px_50px_rgba(14,165,255,0.35)]"
                >
                  Começar agora gratuitamente
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-4 text-base font-medium text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  Ver planos
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050B18]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logo-zapflow360.png"
                  alt="Logo ZapFlow360"
                  className="h-12 w-auto rounded-xl object-contain"
                />
                <div>
                  <p className="text-lg font-semibold tracking-wide text-white">ZapFlow360</p>
                  <p className="text-xs text-slate-400">Automatização premium de agendamentos</p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Plataforma criada para empresas que desejam automatizar agendamentos,
                organizar horários e elevar a experiência do atendimento no WhatsApp.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-sky-400/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-sky-400/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Navegação
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                <a href="#funcionalidades" className="text-sm text-slate-400 transition hover:text-white">
                  Funcionalidades
                </a>
                <a href="#como-funciona" className="text-sm text-slate-400 transition hover:text-white">
                  Como funciona
                </a>
                <a href="#planos" className="text-sm text-slate-400 transition hover:text-white">
                  Planos
                </a>
                <a href="#faq" className="text-sm text-slate-400 transition hover:text-white">
                  FAQ
                </a>
                <Link to="/blog" className="text-sm text-slate-400 transition hover:text-white">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Legal
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/politica-de-privacidade"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Política de Privacidade
                </Link>
                <Link
                  to="/termos-de-uso"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Termos de Uso
                </Link>
                <Link to="/blog" className="text-sm text-slate-400 transition hover:text-white">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Fale conosco
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Tire dúvidas, conheça os planos e veja como o ZapFlow360 pode se adaptar à
                sua operação.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5FF] to-[#34D399] px-5 py-3 text-sm font-semibold text-[#071326] transition hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(14,165,255,0.25)]"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[{ value: "2k+", label: "Agendamentos" }, { value: "98%", label: "Aprovação" }].map(
                  (s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-center"
                    >
                      <div className="bg-gradient-to-r from-[#0EA5FF] to-[#34D399] bg-clip-text text-lg font-bold text-transparent">
                        {s.value}
                      </div>
                      <div className="text-xs text-slate-500">{s.label}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/8 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-slate-500">
                © 2026 ZapFlow360. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                />
                <p className="text-xs text-slate-500">Sistema operacional · 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        aria-label="Voltar ao topo"
        className="fixed bottom-24 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-sky-300/20 bg-white/[0.08] text-sky-200 shadow-[0_20px_60px_rgba(14,165,255,0.2)] backdrop-blur-xl transition hover:scale-110 hover:border-sky-300/40 hover:bg-white/[0.14] hover:shadow-[0_20px_60px_rgba(14,165,255,0.35)]"
      >
        <ChevronsUp className="h-6 w-6" />
      </a>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="group fixed bottom-5 right-5 z-50"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400/50 to-sky-400/30 blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-emerald-300/30 shadow-[0_20px_60px_rgba(52,211,153,0.32)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_25px_70px_rgba(52,211,153,0.5)]">
          <img src="/whatsapp.png" alt="WhatsApp" className="h-full w-full object-cover" />
        </div>
      </a>
    </div>
  );
}