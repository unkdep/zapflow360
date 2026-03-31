import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Sparkles, Mail, MessageCircle, Lock, Users, Share2, Eye, FileText, Cookie, RefreshCw } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511980003836";

const sections = [
  {
    icon: FileText,
    number: "1",
    title: "Introdução",
    color: "sky",
    text: "Bem-vindo ao ZapFlow360. Sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações ao utilizar nossa plataforma focada em automatização de agendamentos online pelo WhatsApp.",
  },
  {
    icon: Eye,
    number: "2",
    title: "Dados que podemos coletar",
    color: "emerald",
    text: "Podemos coletar dados de contato, dados de conta, informações técnicas de acesso, interações com a plataforma, mensagens relacionadas ao fluxo de agendamento e conteúdos compartilhados durante o uso do sistema, quando necessários para operação, suporte e melhoria do serviço.",
  },
  {
    icon: Users,
    number: "3",
    title: "Como utilizamos as informações",
    color: "sky",
    text: "Utilizamos os dados para operar a plataforma, organizar fluxos de agendamento, personalizar a experiência, prestar suporte, enviar comunicações relacionadas ao serviço, melhorar funcionalidades, monitorar segurança e prevenir fraudes ou abusos.",
  },
  {
    icon: Share2,
    number: "4",
    title: "Compartilhamento de dados",
    color: "emerald",
    text: "Não vendemos informações pessoais. Os dados podem ser compartilhados com prestadores de serviço essenciais para funcionamento da plataforma, em hipóteses legais ou em eventual reorganização societária, sempre observando a legislação aplicável.",
  },
  {
    icon: Lock,
    number: "5",
    title: "Segurança e proteção",
    color: "sky",
    text: "Adotamos medidas razoáveis de segurança para proteger informações contra acesso não autorizado, alteração, divulgação ou destruição, incluindo controle de acesso, monitoramento e proteção dos dados em trânsito e armazenamento.",
  },
  {
    icon: Shield,
    number: "6",
    title: "Direitos do titular",
    color: "emerald",
    text: "Nos termos da LGPD, o titular pode solicitar acesso, correção, exclusão, portabilidade, oposição e revogação de consentimento, observadas as hipóteses legais aplicáveis.",
  },
  {
    icon: Cookie,
    number: "7",
    title: "Cookies e tecnologias semelhantes",
    color: "sky",
    text: "Podemos utilizar cookies e tecnologias semelhantes para melhorar a navegação, lembrar preferências e analisar uso da plataforma. A configuração pode ser ajustada no navegador do usuário.",
  },
  {
    icon: RefreshCw,
    number: "8",
    title: "Alterações nesta política",
    color: "emerald",
    text: "Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos revisão regular desta página para acompanhar eventuais mudanças.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050B18] text-slate-100 selection:bg-sky-400/30 selection:text-white">
      {/* Background layers */}
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,255,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.10),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.10),transparent_28%),linear-gradient(180deg,#050B18_0%,#071326_50%,#0B1730_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      {/* Animated orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-sky-500/7 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -right-32 bottom-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/7 blur-[90px]"
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071326]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-zapflow360.png" alt="Logo ZapFlow360" className="h-10 w-auto rounded-xl object-contain" />
            <span className="text-sm font-medium text-slate-300">ZapFlow360</span>
          </Link>
          <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400/20 hover:bg-white/[0.09] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Link>
          </motion.div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            Transparência e segurança
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Política de{" "}
            <span className="bg-gradient-to-r from-[#0EA5FF] via-[#38BDF8] to-[#34D399] bg-clip-text text-transparent">
              Privacidade
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-400">
            Entenda como o ZapFlow360 cuida das suas informações com responsabilidade e em conformidade com a LGPD.
          </p>

          {/* Decorative gradient line */}
          <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-sky-400/0 via-sky-400/60 to-emerald-400/0" />
        </motion.div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isEmerald = section.color === "emerald";
            return (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(2,8,23,0.4)] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(14,165,255,0.07),0_25px_70px_rgba(2,8,23,0.5)]">
                  {/* Hover glow overlay */}
                  <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${isEmerald ? "bg-gradient-to-br from-emerald-400/4 to-sky-400/4" : "bg-gradient-to-br from-sky-400/4 to-emerald-400/4"}`} />

                  {/* Top accent line on first card */}
                  {index === 0 && (
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-sky-400/0 via-sky-300/70 to-emerald-400/0" />
                  )}

                  <div className="relative flex gap-5 p-6 sm:p-7">
                    {/* Icon + number */}
                    <div className="shrink-0">
                      <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${
                        isEmerald
                          ? "border-emerald-400/20 bg-emerald-900/40 text-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.15)] group-hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]"
                          : "border-sky-400/20 bg-slate-900/80 text-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.15)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
                      }`}>
                        <Icon className="h-5 w-5" />
                        {/* Number badge */}
                        <div className={`absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-[#071326] ${
                          isEmerald
                            ? "bg-gradient-to-br from-emerald-300 to-emerald-400"
                            : "bg-gradient-to-br from-sky-300 to-sky-400"
                        }`}>
                          {section.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="text-lg font-semibold text-white sm:text-xl">{section.title}</h2>
                      <p className="mt-2 text-sm leading-8 text-slate-300 sm:text-base">{section.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sections.length * 0.07 }}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/8 via-white/[0.04] to-sky-400/8 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(52,211,153,0.06),0_20px_60px_rgba(2,8,23,0.45),0_0_60px_rgba(52,211,153,0.06)]">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-300/70 to-sky-400/0" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/8 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-400/8 blur-3xl" />

              <div className="relative flex gap-5 p-6 sm:p-7">
                <div className="shrink-0">
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-900/50 text-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.2)]">
                    <Mail className="h-5 w-5" />
                    <div className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-400 text-[10px] font-bold text-[#071326]">
                      9
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-white sm:text-xl">Contato</h2>
                  <p className="mt-2 text-sm leading-8 text-slate-300">
                    Para dúvidas, solicitações ou exercício de direitos relacionados a dados pessoais:
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: MessageCircle, label: "WhatsApp", value: "+55 11 98000-3836", href: WHATSAPP_LINK, color: "emerald" },
                      { icon: Mail, label: "E-mail", value: "zapflow360@gmail.com", href: "mailto:zapflow360@gmail.com", color: "sky" },
                      { icon: FileText, label: "CNPJ", value: "60.720.417/0001-50", href: null, color: "sky" },
                      { icon: Shield, label: "Empresa", value: "ZapFlow360", href: null, color: "emerald" },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isEm = item.color === "emerald";
                      const content = (
                        <div className={`flex items-center gap-3 rounded-2xl border p-3.5 transition-all duration-300 ${
                          item.href
                            ? isEm
                              ? "border-emerald-400/15 bg-emerald-400/[0.06] hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:shadow-[0_0_20px_rgba(52,211,153,0.12)] cursor-pointer"
                              : "border-sky-400/15 bg-sky-400/[0.06] hover:border-sky-400/30 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(14,165,255,0.12)] cursor-pointer"
                            : "border-white/8 bg-white/[0.03]"
                        }`}>
                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                            isEm
                              ? "border-emerald-400/20 bg-emerald-900/40 text-emerald-300"
                              : "border-sky-400/20 bg-slate-900/60 text-sky-300"
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                            <p className={`text-sm font-medium ${item.href ? (isEm ? "text-emerald-200" : "text-sky-200") : "text-slate-200"}`}>{item.value}</p>
                          </div>
                        </div>
                      );
                      return item.href ? (
                        <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          {content}
                        </a>
                      ) : (
                        <div key={item.label}>{content}</div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="mx-auto mb-5 h-px max-w-xs bg-gradient-to-r from-sky-400/0 via-white/15 to-emerald-400/0" />
          <p className="text-sm text-slate-500">
            Última atualização: 2026 · ZapFlow360 · CNPJ 60.720.417/0001-50
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </motion.div>
      </div>
    </div>
  );
}