import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Search,
  Clock3,
  Sparkles,
  Bot,
  Workflow,
  MessageCircle,
  Webhook,
  BellRing,
  Shield,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  FileText,
  Wrench,
  X,
  Hash,
  LayoutGrid,
  List,
  ArrowRight,
  Zap,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511980003836";

type Article = {
  id: number;
  title: string;
  category: string;
  categoryIcon: React.ElementType;
  level: "Básico" | "Intermediário" | "Avançado";
  readTime: string;
  keywords: string[];
  excerpt: string;
  steps: string[];
};

const LEVEL_CONFIG = {
  Básico:        { color: "#34d399", bg: "rgba(52,211,153,0.1)",  border: "rgba(52,211,153,0.2)" },
  Intermediário: { color: "#60a5fa", bg: "rgba(96,165,250,0.1)",  border: "rgba(96,165,250,0.2)" },
  Avançado:      { color: "#f472b6", bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.2)" },
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Primeiros passos": Zap,
  "WhatsApp": MessageCircle,
  "Assistente virtual": Bot,
  "IA e prompt": Sparkles,
  "Fluxos": Workflow,
  "Agenda Inteligente": BookOpen,
  "MCP": Webhook,
  "Webhook": Webhook,
  "Lembretes": BellRing,
  "CRM": LayoutGrid,
  "Testes e validação": CheckCircle2,
};

const articles: Article[] = [
  {
    id: 1,
    title: "Como começar a usar o ZapFlow360 para agendamentos",
    category: "Primeiros passos",
    categoryIcon: Zap,
    level: "Básico",
    readTime: "4 min",
    keywords: ["começar", "início", "configuração inicial", "agendamento", "primeiros passos"],
    excerpt: "Entenda a estrutura básica do ZapFlow360 para agendamentos e veja a ordem certa para configurar tudo sem bagunça.",
    steps: [
      "Conecte o canal principal de atendimento, normalmente o WhatsApp.",
      "Crie ou selecione o assistente virtual que fará o atendimento inicial.",
      "Defina o objetivo da automação: atender, consultar horários e confirmar agendamentos.",
      "Revise as integrações que serão usadas, como Agenda Inteligente, MCP e webhook.",
      "Faça um teste simples para validar se a conversa está chegando corretamente no sistema.",
    ],
  },
  {
    id: 2,
    title: "Como conectar seu WhatsApp no sistema",
    category: "WhatsApp",
    categoryIcon: MessageCircle,
    level: "Básico",
    readTime: "3 min",
    keywords: ["whatsapp", "conectar", "qr code", "canal", "api", "chat"],
    excerpt: "Aprenda a conectar o WhatsApp no ZapFlow360 para começar a receber mensagens e iniciar os fluxos de agendamento.",
    steps: [
      "Acesse a área de Assistente Virtual dentro da automação.",
      "Localize a opção de conexão do WhatsApp disponível no sistema.",
      "Clique para conectar e aguarde a exibição do QR Code, se estiver usando a conexão por leitura.",
      "Leia o QR Code pelo celular e aguarde a autenticação ser concluída.",
      "Atualize a página e confirme se o status do canal aparece como conectado.",
    ],
  },
  {
    id: 3,
    title: "Como criar um assistente virtual para atendimento de agendamentos",
    category: "Assistente virtual",
    categoryIcon: Bot,
    level: "Básico",
    readTime: "5 min",
    keywords: ["assistente", "ia", "chatbot", "prompt", "atendimento", "agendamento"],
    excerpt: "Veja como montar um assistente virtual claro, organizado e preparado para conduzir conversas até o agendamento.",
    steps: [
      "Adicione o card de configuração do chatbot no fluxo.",
      "Crie ou edite um assistente com nome, modelo e instruções.",
      "Defina que o objetivo principal do assistente é atender, entender a necessidade e conduzir ao agendamento.",
      "Organize as instruções para que a IA responda de forma clara, curta e profissional.",
      "Salve, selecione o assistente no card e valide se ele foi aplicado corretamente no fluxo.",
    ],
  },
  {
    id: 4,
    title: "Como estruturar um bom prompt para agendamento",
    category: "IA e prompt",
    categoryIcon: Sparkles,
    level: "Intermediário",
    readTime: "6 min",
    keywords: ["prompt", "ia", "roteiro", "instruções", "agendamento", "assistente"],
    excerpt: "Um bom prompt deixa a IA mais natural, mais organizada e mais precisa na condução do atendimento.",
    steps: [
      "Defina o papel do assistente, por exemplo: recepção, triagem ou agendamento.",
      "Explique quais serviços ou tipos de atendimento o cliente pode solicitar.",
      "Determine como a IA deve falar: objetiva, educada, organizada e sem excesso de texto.",
      "Explique quando a IA deve consultar horários e quando deve coletar dados do cliente.",
      "Inclua regras para confirmação final, reagendamento e encaminhamento quando necessário.",
    ],
  },
  {
    id: 5,
    title: "Como criar o fluxo principal de atendimento",
    category: "Fluxos",
    categoryIcon: Workflow,
    level: "Intermediário",
    readTime: "6 min",
    keywords: ["fluxo", "automação", "gatilho", "entrada", "chatbot", "atendimento"],
    excerpt: "Monte o fluxo principal que recebe a mensagem do cliente, aciona a IA e conduz a conversa para o agendamento.",
    steps: [
      "Crie um fluxo em branco dentro da área de automação.",
      "Defina a entrada principal, normalmente mensagem recebida no WhatsApp ou conversão.",
      "Adicione o card do chatbot para o assistente responder ao cliente.",
      "Organize as ações complementares, como tag, espera ou preenchimento de campo quando necessário.",
      "Teste o fluxo do início ao fim para confirmar se a conversa segue a ordem esperada.",
    ],
  },
  {
    id: 6,
    title: "Como configurar a Agenda Inteligente",
    category: "Agenda Inteligente",
    categoryIcon: BookOpen,
    level: "Intermediário",
    readTime: "6 min",
    keywords: ["agenda", "agenda inteligente", "profissionais", "horários", "calendário", "disponibilidade"],
    excerpt: "A Agenda Inteligente é a base da disponibilidade. É nela que você organiza profissionais, horários e regras de atendimento.",
    steps: [
      "Cadastre os profissionais ou atendentes que terão agenda disponível.",
      "Defina dias, horários, intervalo e duração de cada atendimento.",
      "Revise se a agenda será individual ou compartilhada entre profissionais.",
      "Confirme se os links de agendamento estão gerados corretamente.",
      "Teste a disponibilidade para validar se os horários aparecem como esperado.",
    ],
  },
  {
    id: 7,
    title: "Como ativar MCP para agendamentos automáticos",
    category: "MCP",
    categoryIcon: Webhook,
    level: "Avançado",
    readTime: "7 min",
    keywords: ["mcp", "agenda", "agendamento automático", "tools", "integração", "ia"],
    excerpt: "Com MCP, a IA deixa de apenas conversar e passa a consultar horários, criar agendamentos e editar compromissos.",
    steps: [
      "Acesse a área de integrações da Agenda Inteligente e localize o MCP.",
      "Ative o protocolo e gere o token necessário.",
      "Copie a URL do servidor MCP e configure a autenticação no ambiente correto.",
      "No assistente, habilite o modo agente e associe a ferramenta da agenda.",
      "Faça testes de consulta de horários e criação de agendamento para validar a integração.",
    ],
  },
  {
    id: 8,
    title: "Como integrar webhook entre agenda e ZapFlow360",
    category: "Webhook",
    categoryIcon: Webhook,
    level: "Avançado",
    readTime: "7 min",
    keywords: ["webhook", "integração", "agenda", "payload", "crm", "campos"],
    excerpt: "O webhook permite que a agenda envie eventos automaticamente para o ZapFlow360, como criação, atualização e lembretes.",
    steps: [
      "Crie a integração de webhook no ZapFlow360.",
      "Copie a URL gerada e cole na área de webhooks da Agenda Inteligente.",
      "Selecione os eventos que deseja receber, como agendamento criado ou lembrete.",
      "Mapeie os campos necessários, como nome, telefone, data, hora e link de reunião, se existir.",
      "Salve e faça um teste para confirmar que os dados chegam corretamente ao sistema.",
    ],
  },
  {
    id: 9,
    title: "Como criar lembretes automáticos de agendamento",
    category: "Lembretes",
    categoryIcon: BellRing,
    level: "Intermediário",
    readTime: "5 min",
    keywords: ["lembrete", "follow-up", "aviso", "agendamento", "whatsapp", "mensagem"],
    excerpt: "Use lembretes automáticos para reduzir faltas, melhorar a experiência do cliente e manter a agenda organizada.",
    steps: [
      "Ative os horários de lembrete na Agenda Inteligente.",
      "Escolha os intervalos desejados, como 15 minutos, 1 hora ou 1 dia antes.",
      "Garanta que o evento de lembrete esteja habilitado no webhook.",
      "Crie um fluxo no ZapFlow360 para receber esse evento e disparar a mensagem.",
      "Faça um teste real para validar se a mensagem chega no tempo correto.",
    ],
  },
  {
    id: 10,
    title: "Como usar CRM para acompanhar agendamentos",
    category: "CRM",
    categoryIcon: LayoutGrid,
    level: "Intermediário",
    readTime: "5 min",
    keywords: ["crm", "kanban", "funil", "etapas", "agendado", "cliente"],
    excerpt: "O CRM pode ser usado para acompanhar o estágio de cada contato dentro do processo de agendamento de forma visual.",
    steps: [
      "Crie um funil simples voltado para agendamentos.",
      "Defina etapas claras, como novo contato, em atendimento, aguardando confirmação e agendado.",
      "Adicione no fluxo a ação de mover o lead para a etapa correta.",
      "Use o CRM apenas como apoio visual e operacional, sem complicar a rotina.",
      "Revise periodicamente se as etapas estão coerentes com o processo real.",
    ],
  },
  {
    id: 11,
    title: "Como pausar a IA quando um humano responde",
    category: "WhatsApp",
    categoryIcon: MessageCircle,
    level: "Intermediário",
    readTime: "4 min",
    keywords: ["pausar ia", "humano", "celular", "whatsapp web", "bot", "automação"],
    excerpt: "Essa configuração evita conflito entre atendimento humano e IA quando alguém da equipe responde fora do sistema.",
    steps: [
      "Crie um fluxo específico para detectar a conversão de resposta manual.",
      "Use essa conversão como gatilho de entrada no fluxo.",
      "Adicione a ação de pausar o bot automaticamente.",
      "Se quiser, adicione um tempo de espera para reativar a IA depois.",
      "Teste pelo celular ou WhatsApp Web para confirmar que o comportamento ficou correto.",
    ],
  },
  {
    id: 12,
    title: "Checklist final para validar seu sistema de agendamento",
    category: "Testes e validação",
    categoryIcon: CheckCircle2,
    level: "Básico",
    readTime: "5 min",
    keywords: ["checklist", "teste", "validação", "agendamento", "crm", "mcp", "webhook"],
    excerpt: "Antes de entregar ou usar em produção, revise os pontos principais para garantir que tudo está funcionando sem falhas.",
    steps: [
      "Teste o recebimento da mensagem inicial no canal principal.",
      "Valide se a IA responde corretamente e consulta horários quando necessário.",
      "Confirme se o agendamento é criado na agenda sem erro.",
      "Verifique se webhook, CRM e lembretes estão recebendo os dados certos.",
      "Faça pelo menos um teste completo de ponta a ponta antes de publicar.",
    ],
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// ── Article Modal / Drawer ────────────────────────────────────────────────────

function ArticleDrawer({ article, onClose }: { article: Article; onClose: () => void }) {
  const level = LEVEL_CONFIG[article.level];
  const Icon = article.categoryIcon;

  React.useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        style={{ background: "rgba(3,6,16,0.82)", backdropFilter: "blur(12px)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto"
          style={{
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "linear-gradient(145deg, rgba(8,19,39,0.98), rgba(5,12,28,0.98))",
            boxShadow: "0 0 0 1px rgba(14,165,255,0.06), 0 40px 120px rgba(0,0,0,0.7), 0 0 60px rgba(14,165,255,0.06)",
          }}
        >
          {/* Header */}
          <div style={{
            padding: "28px 32px 22px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            position: "sticky", top: 0, zIndex: 10,
            background: "rgba(8,19,39,0.96)", backdropFilter: "blur(20px)",
            borderRadius: "28px 28px 0 0",
          }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: "rgba(14,165,255,0.1)",
                  border: "1px solid rgba(14,165,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#60a5fa",
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", color: "#3b82f6", marginBottom: 2 }}>
                    {article.category.toUpperCase()}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{
                      fontFamily: "monospace", fontSize: 10, letterSpacing: "0.12em",
                      color: level.color, background: level.bg,
                      border: `1px solid ${level.border}`,
                      padding: "2px 8px", borderRadius: 20,
                    }}>{article.level}</span>
                    <span className="flex items-center gap-1" style={{ fontFamily: "monospace", fontSize: 10, color: "#475569" }}>
                      <Clock3 size={10} /> {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#64748b", cursor: "pointer", transition: "color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
              >
                <X size={16} />
              </motion.button>
            </div>

            <h2 style={{ fontSize: "clamp(1.2rem,3vw,1.55rem)", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.35, marginTop: 18 }}>
              {article.title}
            </h2>
          </div>

          {/* Body */}
          <div style={{ padding: "28px 32px 32px" }}>
            {/* Excerpt */}
            <div style={{
              padding: "16px 20px", borderRadius: 14, marginBottom: 28,
              background: "rgba(14,165,255,0.06)",
              border: "1px solid rgba(14,165,255,0.12)",
              borderLeft: "3px solid #3b82f6",
            }}>
              <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8 }}>{article.excerpt}</p>
            </div>

            {/* Steps */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <FileText size={15} color="#34d399" />
                <span style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", letterSpacing: "0.02em" }}>
                  Passo a passo
                </span>
                <span style={{
                  fontFamily: "monospace", fontSize: 10, color: "#475569",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "2px 8px", borderRadius: 20, marginLeft: 4,
                }}>{article.steps.length} etapas</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {article.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    style={{
                      display: "flex", gap: 14, alignItems: "flex-start",
                      padding: "16px 18px", borderRadius: 14,
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,255,0.15)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(14,165,255,0.04)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                      background: "linear-gradient(135deg, #0EA5FF, #34D399)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 800, color: "#071326", fontFamily: "monospace",
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.8, paddingTop: 4 }}>{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontFamily: "monospace", fontSize: 10, color: "#334155", letterSpacing: "0.18em", marginBottom: 10 }}>PALAVRAS-CHAVE</p>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map(k => (
                  <span key={k} style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    fontFamily: "monospace", fontSize: 10, letterSpacing: "0.08em",
                    color: "#475569", background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "3px 10px", borderRadius: 20,
                  }}>
                    <Hash size={9} />{k}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{
              marginTop: 28, padding: "18px 22px", borderRadius: 16,
              background: "linear-gradient(135deg, rgba(14,165,255,0.08), rgba(52,211,153,0.06))",
              border: "1px solid rgba(14,165,255,0.15)",
            }}>
              <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 14, lineHeight: 1.7 }}>
                Ficou com alguma dúvida sobre este conteúdo? Fale direto com o suporte pelo WhatsApp.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", borderRadius: 10,
                  background: "linear-gradient(135deg, #0EA5FF, #34D399)",
                  color: "#071326", fontFamily: "monospace", fontSize: 11,
                  letterSpacing: "0.12em", fontWeight: 700, textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(14,165,255,0.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <MessageCircle size={13} /> FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Article Card ──────────────────────────────────────────────────────────────

function ArticleCard({ article, onClick, index }: { article: Article; onClick: () => void; index: number }) {
  const [hov, setHov] = React.useState(false);
  const level = LEVEL_CONFIG[article.level];
  const Icon = article.categoryIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <motion.button
        onClick={onClick}
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.99 }}
        style={{
          width: "100%", textAlign: "left", cursor: "pointer",
          borderRadius: 20, padding: "22px 24px",
          border: `1px solid ${hov ? "rgba(14,165,255,0.2)" : "rgba(255,255,255,0.07)"}`,
          background: hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          boxShadow: hov
            ? "0 0 0 1px rgba(14,165,255,0.06), 0 20px 60px rgba(0,0,0,0.45), 0 0 36px rgba(14,165,255,0.06)"
            : "0 4px 30px rgba(0,0,0,0.3)",
          transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)",
          display: "flex", flexDirection: "column", gap: 14,
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: hov ? "rgba(14,165,255,0.14)" : "rgba(14,165,255,0.08)",
              border: `1px solid ${hov ? "rgba(14,165,255,0.25)" : "rgba(14,165,255,0.12)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#60a5fa", transition: "all 0.2s",
            }}>
              <Icon size={17} />
            </div>
            <div>
              <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "0.18em", color: "#3b82f6", marginBottom: 2 }}>
                {article.category.toUpperCase()}
              </p>
              <div className="flex items-center gap-2">
                <span style={{
                  fontFamily: "monospace", fontSize: 9, letterSpacing: "0.1em",
                  color: level.color, background: level.bg,
                  border: `1px solid ${level.border}`,
                  padding: "1px 7px", borderRadius: 20,
                }}>{article.level}</span>
                <span className="flex items-center gap-1" style={{ fontFamily: "monospace", fontSize: 9, color: "#334155" }}>
                  <Clock3 size={9} /> {article.readTime}
                </span>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ x: hov ? 4 : 0, opacity: hov ? 1 : 0.35 }}
            transition={{ duration: 0.2 }}
            style={{ color: "#60a5fa", flexShrink: 0, marginTop: 8 }}
          >
            <ChevronRight size={18} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: "clamp(0.95rem,2vw,1.08rem)", fontWeight: 700, color: hov ? "#f1f5f9" : "#e2e8f0", lineHeight: 1.45, transition: "color 0.2s" }}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {article.excerpt}
        </p>

        {/* Steps preview */}
        <div style={{
          padding: "10px 14px", borderRadius: 10,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#334155", letterSpacing: "0.1em" }}>
            {article.steps.length} ETAPAS
          </span>
          <span style={{
            fontFamily: "monospace", fontSize: 10, letterSpacing: "0.1em",
            color: "#0ea5e9", background: "rgba(14,165,255,0.08)",
            border: "1px solid rgba(14,165,255,0.15)",
            padding: "3px 10px", borderRadius: 20,
          }}>
            VER PASSO A PASSO →
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}

// ── Floating Orbs ─────────────────────────────────────────────────────────────

function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 50, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 20, 0], y: [0, 40, -20, 0], scale: [1, 0.95, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute left-1/2 bottom-1/4 h-[300px] w-[300px] rounded-full bg-blue-600/8 blur-[90px]"
      />
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

export default function Blog() {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");
  const [openArticle, setOpenArticle] = React.useState<Article | null>(null);
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const categories = React.useMemo(
    () => ["Todos", ...Array.from(new Set(articles.map(a => a.category)))],
    []
  );

  const filteredArticles = React.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles.filter(article => {
      const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;
      const haystack = [article.title, article.category, article.level, article.excerpt, ...article.keywords, ...article.steps].join(" ").toLowerCase();
      const matchesSearch = normalized === "" || haystack.includes(normalized);
      return matchesCategory && matchesSearch;
    });
  }, [query, selectedCategory]);

  const clearSearch = () => { setQuery(""); inputRef.current?.focus(); };

  const stats = [
    { value: articles.length.toString(), label: "Artigos" },
    { value: articles.filter(a => a.level === "Básico").length.toString(), label: "Básico" },
    { value: articles.filter(a => a.level === "Intermediário").length.toString(), label: "Intermediário" },
    { value: articles.filter(a => a.level === "Avançado").length.toString(), label: "Avançado" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050B18] text-slate-50">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_20%_85%,rgba(34,197,94,0.12),transparent_26%),linear-gradient(180deg,#050B18_0%,#071326_48%,#0B1730_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <FloatingOrbs />

      {/* Article Modal */}
      {openArticle && <ArticleDrawer article={openArticle} onClose={() => setOpenArticle(null)} />}

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 lg:px-8">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-300 transition hover:border-sky-400/20 hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a landing
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5FF] to-[#34D399] px-5 py-3 text-sm font-semibold text-[#071326] transition hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(14,165,255,0.3)]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative mb-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 sm:p-10 lg:p-12"
          style={{ boxShadow: "0 0 0 1px rgba(14,165,255,0.05), 0 30px 80px rgba(0,0,0,0.45)" }}
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-sky-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-20 top-0 h-px bg-gradient-to-r from-sky-400/0 via-sky-300/50 to-emerald-400/0" />

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-xl">
              <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
              </motion.span>
              Central de Ajuda
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Blog do{" "}
              <span className="bg-gradient-to-r from-[#0EA5FF] via-[#38BDF8] to-[#34D399] bg-clip-text text-transparent">
                ZapFlow360
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
              Tutoriais claros e organizados para configurar o ZapFlow360 com foco em IA, automação e agendamentos. Clique em qualquer artigo para ler o passo a passo completo.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-4">
              {stats.map(s => (
                <div key={s.label} style={{
                  padding: "10px 18px", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.03)",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{
                    fontSize: 20, fontWeight: 800, color: "#60a5fa",
                    background: "linear-gradient(135deg, #0EA5FF, #34D399)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{s.value}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#475569", letterSpacing: "0.12em" }}>{s.label.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Search + Filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-8"
        >
          {/* Search bar */}
          <div className="relative mb-5">
            <div style={{
              position: "absolute", left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 20, height: 20,
              color: query ? "#60a5fa" : "#475569",
              pointerEvents: "none",
              transition: "color 0.2s",
            }}>
              <Search size={18} />
            </div>

            {/* The input itself, with padding for centered icon */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder='Pesquisar: "mcp", "webhook", "crm", "whatsapp", "prompt"...'
              style={{
                width: "100%",
                padding: "16px 52px",
                borderRadius: 16,
                border: `1px solid ${query ? "rgba(14,165,255,0.25)" : "rgba(255,255,255,0.08)"}`,
                background: "rgba(8,19,39,0.7)",
                color: "#f1f5f9", fontSize: 15, outline: "none",
                backdropFilter: "blur(20px)",
                boxShadow: query ? "0 0 0 3px rgba(14,165,255,0.08), 0 0 40px rgba(14,165,255,0.06)" : "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                textAlign: "center",
              }}
              onFocus={e => {
                (e.target as HTMLElement).style.borderColor = "rgba(14,165,255,0.3)";
                (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(14,165,255,0.08)";
              }}
              onBlur={e => {
                if (!query) {
                  (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }
              }}
            />

            <AnimatePresence>
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={clearSearch}
                  style={{
                    position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                    width: 28, height: 28, borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#64748b", cursor: "pointer", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
                >
                  <X size={13} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Filters + view toggle row */}
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const active = selectedCategory === category;
                const CatIcon = category === "Todos" ? LayoutGrid : (CATEGORY_ICONS[category] || Hash);
                return (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "7px 14px", borderRadius: 10, cursor: "pointer",
                      fontFamily: "monospace", fontSize: 11, letterSpacing: "0.08em",
                      fontWeight: active ? 700 : 400,
                      color: active ? "#071326" : "#64748b",
                      background: active ? "linear-gradient(135deg, #0EA5FF, #34D399)" : "rgba(255,255,255,0.04)",
                      border: active ? "1px solid transparent" : "1px solid rgba(255,255,255,0.07)",
                      boxShadow: active ? "0 0 20px rgba(14,165,255,0.2)" : "none",
                      transition: "all 0.22s",
                    }}
                    onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,255,0.2)"; (e.currentTarget as HTMLElement).style.color = active ? "#071326" : "#93c5fd"; }}
                    onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.color = active ? "#071326" : "#64748b"; }}
                  >
                    <CatIcon size={11} />
                    {category}
                  </motion.button>
                );
              })}
            </div>

            {/* View mode toggle */}
            <div style={{
              display: "flex", borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden",
            }}>
              {(["grid", "list"] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  style={{
                    padding: "7px 12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: viewMode === mode ? "rgba(14,165,255,0.12)" : "rgba(255,255,255,0.03)",
                    borderRight: mode === "grid" ? "1px solid rgba(255,255,255,0.07)" : "none",
                    color: viewMode === mode ? "#60a5fa" : "#475569",
                    cursor: "pointer", transition: "all 0.2s",
                  }}
                >
                  {mode === "grid" ? <LayoutGrid size={15} /> : <List size={15} />}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <AnimatePresence>
            {query && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-3"
                style={{ fontFamily: "monospace", fontSize: 11, color: "#334155", letterSpacing: "0.12em" }}
              >
                {filteredArticles.length > 0
                  ? `${filteredArticles.length} RESULTADO${filteredArticles.length !== 1 ? "S" : ""} PARA "${query.toUpperCase()}"`
                  : `NENHUM RESULTADO PARA "${query.toUpperCase()}"`
                }
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Articles grid/list */}
        <AnimatePresence mode="wait">
          {filteredArticles.length > 0 ? (
            <motion.div
              key={`${viewMode}-${selectedCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "grid",
                gridTemplateColumns: viewMode === "grid"
                  ? "repeat(auto-fill, minmax(min(100%, 420px), 1fr))"
                  : "1fr",
                gap: 16,
              }}
            >
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={index}
                  onClick={() => setOpenArticle(article)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div style={{
                padding: "60px 40px", borderRadius: 24, textAlign: "center",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16, margin: "0 auto 20px",
                  background: "rgba(14,165,255,0.08)", border: "1px solid rgba(14,165,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6",
                }}>
                  <Search size={24} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginBottom: 10 }}>
                  Nenhum conteúdo encontrado
                </h3>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.75, maxWidth: 420, margin: "0 auto 24px" }}>
                  Tente pesquisar com outro termo, como <strong style={{ color: "#64748b" }}>crm</strong>,{" "}
                  <strong style={{ color: "#64748b" }}>whatsapp</strong>,{" "}
                  <strong style={{ color: "#64748b" }}>mcp</strong>,{" "}
                  <strong style={{ color: "#64748b" }}>webhook</strong> ou{" "}
                  <strong style={{ color: "#64748b" }}>agenda</strong>.
                </p>
                <button
                  onClick={() => { setQuery(""); setSelectedCategory("Todos"); }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 20px", borderRadius: 10, cursor: "pointer",
                    border: "1px solid rgba(14,165,255,0.2)",
                    background: "rgba(14,165,255,0.08)",
                    color: "#60a5fa", fontFamily: "monospace", fontSize: 11, letterSpacing: "0.1em",
                    transition: "all 0.2s",
                  }}
                >
                  <X size={12} /> LIMPAR FILTROS
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feature highlights */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {[
            { Icon: Bot, color: "sky", title: "Assistente virtual", desc: "Configure IA, prompt, modo agente e organização do atendimento para conduzir o cliente até o agendamento." },
            { Icon: Workflow, color: "emerald", title: "Fluxos e automações", desc: "Estruture entradas, ações e segmentações da forma correta para que o processo fique lógico, limpo e funcional." },
            { Icon: Webhook, color: "sky", title: "Integrações e lembretes", desc: "Integre webhook, agenda, CRM e lembretes para transformar o sistema em uma operação realmente automatizada." },
          ].map(({ Icon, color, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div style={{
                padding: 24, borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                height: "100%",
                transition: "all 0.28s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = color === "emerald" ? "rgba(52,211,153,0.2)" : "rgba(14,165,255,0.2)";
                  (e.currentTarget as HTMLElement).style.background = color === "emerald" ? "rgba(52,211,153,0.04)" : "rgba(14,165,255,0.04)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12, marginBottom: 16,
                  background: color === "emerald" ? "rgba(52,211,153,0.1)" : "rgba(14,165,255,0.1)",
                  border: `1px solid ${color === "emerald" ? "rgba(52,211,153,0.2)" : "rgba(14,165,255,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: color === "emerald" ? "#34d399" : "#60a5fa",
                }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Banner */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div style={{
            padding: "40px 40px",
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "linear-gradient(135deg, rgba(8,20,46,0.9), rgba(5,14,32,0.95))",
            position: "relative", overflow: "hidden",
            boxShadow: "0 0 0 1px rgba(14,165,255,0.05), 0 30px 80px rgba(0,0,0,0.4)",
          }}>
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: "0 5rem", top: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(14,165,255,0.35), rgba(52,211,153,0.35), transparent)", pointerEvents: "none" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap", position: "relative" }}>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
                  <BellRing className="h-3.5 w-3.5 text-emerald-300" />
                  Próximos conteúdos
                </div>
                <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 700, color: "#f1f5f9", marginBottom: 12, lineHeight: 1.35 }}>
                  Quer aprofundar ainda mais a configuração?
                </h2>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, maxWidth: 520 }}>
                  O blog cresce com novos tutoriais sobre agendamento, CRM, agenda inteligente, MCP, webhook, lembretes e boas práticas de implantação.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0,
                  padding: "14px 24px", borderRadius: 14,
                  background: "linear-gradient(135deg, #0EA5FF, #34D399)",
                  color: "#071326", fontFamily: "monospace", fontSize: 12,
                  letterSpacing: "0.12em", fontWeight: 700, textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 0 24px rgba(14,165,255,0.2)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.04) translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(14,165,255,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(14,165,255,0.2)";
                }}
              >
                <Wrench size={14} />
                TIRAR DÚVIDA
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#1e293b", letterSpacing: "0.08em" }}>
              © 2026 ZAPFLOW360 · CENTRAL DE AJUDA
            </p>
            <div className="flex flex-wrap items-center gap-5">
              {[
                { to: "/", label: "Home" },
                { to: "/politica-de-privacidade", label: "Política" },
                { to: "/termos-de-uso", label: "Termos" },
              ].map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  style={{ fontFamily: "monospace", fontSize: 11, color: "#334155", letterSpacing: "0.1em", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#334155"; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}