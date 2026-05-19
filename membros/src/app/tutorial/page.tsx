"use client";

import Link from "next/link";
import { TRILHA, itensDoDia, totalItens } from "@/lib/trilha";
import { useProgresso } from "@/lib/progresso";

export default function TutorialHome() {
  const { prog, contarConcluidos } = useProgresso();
  const total = totalItens();
  const concluidos = Object.entries(prog).filter(([, v]) => v).length;
  const percentual = total > 0 ? Math.round((concluidos / total) * 100) : 0;

  return (
    <div style={{ padding: "64px 64px 96px", maxWidth: 1080 }}>
      {/* Hero */}
      <div
        style={{
          border: "1px solid var(--ink)",
          padding: "48px 40px",
          position: "relative",
          marginBottom: 48,
        }}
      >
        <div
          style={{
            content: '""',
            position: "absolute",
            inset: 12,
            border: "1px solid var(--ink)",
            pointerEvents: "none",
          }}
        />
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          <span className="sp">✦</span>
          <span>Trilha oficial · v1.0</span>
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(48px, 6vw, 76px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: 24,
            maxWidth: "16ch",
          }}
        >
          Tudo para <em style={{ color: "var(--moss)", fontStyle: "italic" }}>instalar e usar</em> o Mapa do Criador.
        </h1>
        <p
          className="font-serif"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 21,
            lineHeight: 1.45,
            color: "var(--ink-soft)",
            maxWidth: "60ch",
          }}
        >
          Um guia interativo de instalação e primeiros passos. Marque cada item conforme avança. Seu progresso fica salvo automaticamente.
        </p>
      </div>

      {/* 3 cards de dias */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: 64,
        }}
      >
        {TRILHA.map((dia) => {
          const ids = itensDoDia(dia.slug).map((i) => i.id);
          const c = contarConcluidos(ids);
          const t = ids.length;
          const p = t > 0 ? Math.round((c / t) * 100) : 0;
          const completo = c === t;
          return (
            <Link
              key={dia.slug}
              href={`/tutorial/${dia.slug}`}
              style={{
                border: completo ? "1px solid var(--moss)" : "1px solid var(--line)",
                background: completo ? "var(--moss-soft)" : "var(--paper)",
                padding: 32,
                textDecoration: "none",
                transition: "all 0.15s ease",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--moss)",
                }}
              >
                Dia {dia.numero}
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "var(--ink)",
                }}
              >
                {dia.titulo}{" "}
                <em style={{ color: "var(--moss)", fontStyle: "italic" }}>{dia.titulo_destaque}</em>
              </h2>
              <p
                className="font-serif"
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--ink-soft)",
                  flex: 1,
                }}
              >
                {dia.resumo}
              </p>
              <div
                style={{
                  borderTop: "1px solid var(--line-soft)",
                  paddingTop: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: completo ? "var(--moss)" : "var(--ink-mute)",
                }}
              >
                <span>{c}/{t} concluídos</span>
                <span>{p}%</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--line)",
          paddingTop: 32,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: 0.14,
          color: "var(--ink-mute)",
        }}
      >
        Trilha de Instalação · Mapa do Criador. Seu progresso está salvo na sua conta. Para imprimir como PDF, tecle <strong>Cmd+P</strong> (Mac) e escolha &ldquo;Salvar como PDF&rdquo;.
      </footer>
    </div>
  );
}
