import Sidebar from "@/components/Sidebar";

const FAQS = [
  {
    q: "O app trava na primeira abertura. O que fazer?",
    a: "O macOS bloqueia apps sem certificado Apple Developer. Vá em Applications, clique com botão direito no 'Mapa do Criador' e escolha 'Abrir'. Confirme o aviso. Funciona a partir daí.",
  },
  {
    q: "O setup pediu minha senha e eu não digitei certo. Como recomeço?",
    a: "Feche o app. Em ~/Documents/mapa-do-criador apague o arquivo .installed e a pasta node_modules. Reabra o app — o setup roda do início.",
  },
  {
    q: "Preciso pagar Claude Pro?",
    a: "Não. O plano gratuito do Claude funciona. Pro (US$ 20/mês) só compensa quando você passar a usar todos os dias e bater o limite de mensagens.",
  },
  {
    q: "O conteúdo gerado está parecendo IA genérica. O que faço?",
    a: "Rode /dna-revisar no Claude. Provavelmente seu DNA Criativo precisa de ajuste — alguns mantras podem não estar refletindo sua voz atual. Cole 2 textos seus recentes e o sistema sugere ajustes.",
  },
  {
    q: "Como atualizo o sistema quando sai versão nova?",
    a: "Automático. Toda vez que o app abre, ele faz git pull em background e mostra o toast '✓ Mapa do Criador atualizado' se houver mudança nova. Você não faz nada manual.",
  },
  {
    q: "Posso usar em mais de um Mac?",
    a: "Sim. O sistema é licenciado para uso pessoal — você pode instalar em quantos Macs próprios precisar. Não pode compartilhar com terceiros.",
  },
  {
    q: "E se eu quiser cancelar?",
    a: "Você tem 7 dias de garantia incondicional. Após esse prazo, o sistema é seu para sempre (acesso vitalício), sem cobrança recorrente.",
  },
  {
    q: "Quando sai a versão Windows?",
    a: "Em desenvolvimento. Quando sair, o acesso é automático — não precisa comprar de novo.",
  },
];

export default function FAQPage() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "248px 1fr", minHeight: "100vh" }}>
      <Sidebar userEmail="aluno@exemplo.com" />
      <main style={{ padding: "64px 64px 96px", maxWidth: 980 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          <span className="sp">✦</span><span>Perguntas frequentes</span>
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(48px, 6.5vw, 80px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
            marginBottom: 48,
          }}
        >
          O que sempre <em style={{ color: "var(--moss)", fontStyle: "italic" }}>perguntam</em>.
        </h1>
        {FAQS.map((faq, i) => (
          <details
            key={i}
            style={{
              borderTop: "1px solid var(--line)",
              padding: "20px 0",
            }}
          >
            <summary
              className="font-display"
              style={{
                fontSize: 22,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                cursor: "pointer",
                listStyle: "none",
                color: "var(--ink)",
              }}
            >
              {faq.q}
            </summary>
            <p
              className="font-serif"
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--ink-soft)",
                marginTop: 12,
                maxWidth: "64ch",
              }}
            >
              {faq.a}
            </p>
          </details>
        ))}
      </main>
    </div>
  );
}
