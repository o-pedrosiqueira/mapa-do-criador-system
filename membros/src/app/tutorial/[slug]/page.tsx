"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TRILHA, itensDaEtapa } from "@/lib/trilha";
import { useProgresso } from "@/lib/progresso";
import ItemChecklist from "@/components/ItemChecklist";

export default function PaginaEtapa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const etapa = TRILHA.find((e) => e.slug === slug);
  if (!etapa) notFound();
  const { contarConcluidos } = useProgresso();
  const idsTotais = itensDaEtapa(slug).map((i) => i.id);
  const c = contarConcluidos(idsTotais);
  const t = idsTotais.length;

  const etapaAnterior = TRILHA.find((e) => e.numero === etapa.numero - 1);
  const etapaProxima = TRILHA.find((e) => e.numero === etapa.numero + 1);

  return (
    <div style={{ padding: "64px 64px 96px", maxWidth: 1080 }}>
      <Link
        href="/tutorial"
        className="font-mono"
        style={{
          display: "inline-block",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          textDecoration: "none",
          marginBottom: 32,
        }}
      >
        ← Voltar para a trilha
      </Link>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          <span className="sp">✦</span>
          <span>{etapa.rotulo}</span>
          <span style={{ marginLeft: 16, color: "var(--ink-mute)" }}>
            {c} / {t} concluídos
          </span>
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(48px, 7vw, 84px)",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: 16,
          }}
        >
          {etapa.titulo}{" "}
          <em style={{ color: "var(--moss)", fontStyle: "italic" }}>{etapa.titulo_destaque}</em>
        </h1>
        <p
          className="font-serif"
          style={{
            fontStyle: "italic",
            fontSize: 21,
            lineHeight: 1.45,
            color: "var(--ink-soft)",
            maxWidth: "60ch",
          }}
        >
          {etapa.resumo}
        </p>
      </div>

      {/* Grupos */}
      {etapa.grupos.map((grupo, idxGrupo) => {
        const idsGrupo = grupo.itens.map((i) => i.id);
        const cGrupo = contarConcluidos(idsGrupo);
        const tGrupo = idsGrupo.length;
        return (
          <section key={idxGrupo} style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid var(--line)",
                paddingBottom: 12,
                marginBottom: 24,
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                }}
              >
                <em style={{ color: "var(--moss)", fontStyle: "italic" }}>{grupo.titulo}</em>
              </h2>
              <span
                className="font-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: cGrupo === tGrupo ? "var(--moss)" : "var(--ink-mute)",
                }}
              >
                {cGrupo}/{tGrupo}
              </span>
            </div>
            {grupo.itens.map((item) => (
              <ItemChecklist key={item.id} item={item} />
            ))}
          </section>
        );
      })}

      {/* Navegação entre etapas */}
      <nav
        style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        {etapaAnterior ? (
          <Link href={`/tutorial/${etapaAnterior.slug}`} style={{ color: "var(--ink-soft)", textDecoration: "none" }}>
            ← {etapaAnterior.rotulo_curto}
          </Link>
        ) : (
          <span />
        )}
        {etapaProxima ? (
          <Link href={`/tutorial/${etapaProxima.slug}`} style={{ color: "var(--moss)", textDecoration: "none" }}>
            {etapaProxima.rotulo_curto} →
          </Link>
        ) : (
          <Link href="/tutorial" style={{ color: "var(--moss)", textDecoration: "none" }}>
            ← Voltar para a trilha
          </Link>
        )}
      </nav>
    </div>
  );
}
