import Sidebar from "@/components/Sidebar";

export default function SuportePage() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "248px 1fr", minHeight: "100vh" }}>
      <Sidebar userEmail="aluno@exemplo.com" />
      <main style={{ padding: "64px 64px 96px", maxWidth: 820 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          <span className="sp">✦</span><span>Suporte direto</span>
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(48px, 6.5vw, 80px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
            marginBottom: 24,
          }}
        >
          Travou em <em style={{ color: "var(--moss)", fontStyle: "italic" }}>algo</em>?
        </h1>
        <p
          className="font-serif"
          style={{
            fontStyle: "italic",
            fontSize: 21,
            lineHeight: 1.5,
            color: "var(--ink-soft)",
            marginBottom: 48,
            maxWidth: "56ch",
          }}
        >
          Antes de me escrever, confere se sua dúvida está no <a href="/faq" style={{ color: "var(--moss)" }}>FAQ</a>. Se não estiver, escreve abaixo. Respondo em até 3 dias úteis.
        </p>

        <div
          style={{
            border: "1px solid var(--moss)",
            background: "var(--moss-soft)",
            padding: 32,
            marginBottom: 32,
          }}
        >
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--moss-deep)", marginBottom: 12 }}>
            E-mail direto
          </div>
          <a
            href="mailto:contato@mapadocriador.com?subject=Suporte%20Mapa%20do%20Criador"
            className="font-display"
            style={{
              fontSize: 32,
              fontStyle: "italic",
              color: "var(--ink)",
              textDecoration: "none",
              letterSpacing: "-0.015em",
            }}
          >
            contato@mapadocriador.com
          </a>
        </div>

        <div
          style={{
            background: "var(--paper-deep)",
            borderLeft: "3px solid var(--gold)",
            padding: "20px 24px",
            marginBottom: 32,
          }}
        >
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
            ✦ Pra acelerar a resposta
          </div>
          <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-soft)" }}>
            Inclua no e-mail: (1) seu modelo de Mac (M1, M2, Intel...), (2) versão do macOS, (3) print da tela quando o erro aparece, (4) o que você tentou antes. Quanto mais contexto, mais rápido eu consigo te tirar da pedra.
          </p>
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: 32,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            marginBottom: 16,
            marginTop: 64,
          }}
        >
          Quer falar com <em style={{ color: "var(--moss)", fontStyle: "italic" }}>outros alunos</em>?
        </h2>
        <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: "60ch" }}>
          A comunidade de alunos fundadores está sendo construída. Quando ela abrir, você recebe convite por e-mail — automático, sem precisar fazer nada.
        </p>
      </main>
    </div>
  );
}
