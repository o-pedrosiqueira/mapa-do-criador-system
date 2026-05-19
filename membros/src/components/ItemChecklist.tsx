"use client";

import { useProgresso } from "@/lib/progresso";
import type { ItemTrilha } from "@/lib/trilha";

export default function ItemChecklist({ item }: { item: ItemTrilha }) {
  const { prog, toggle } = useProgresso();
  const checked = !!prog[item.id];

  return (
    <article
      style={{
        border: "1px solid var(--line)",
        background: checked ? "var(--moss-soft)" : "var(--paper)",
        padding: "20px 24px",
        marginBottom: 12,
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 20,
        alignItems: "start",
        transition: "background 0.2s ease, border-color 0.2s ease",
        borderColor: checked ? "var(--moss)" : "var(--line)",
      }}
    >
      <div>
        <h3
          className="font-display"
          style={{
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "-0.015em",
            lineHeight: 1.2,
            color: "var(--ink)",
            marginBottom: 8,
            textDecoration: checked ? "line-through" : "none",
            opacity: checked ? 0.7 : 1,
          }}
        >
          {item.titulo}
        </h3>
        <p
          className="font-serif"
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: "var(--ink-soft)",
            marginBottom: item.comando || item.link ? 12 : 0,
          }}
        >
          {item.descricao}
        </p>
        {item.comando && (
          <code
            className="font-mono"
            style={{
              display: "inline-block",
              fontSize: 13,
              background: "var(--paper-deep)",
              color: "var(--ink)",
              padding: "6px 12px",
              border: "1px solid var(--moss)",
              borderRadius: 3,
              userSelect: "all",
              cursor: "text",
              marginRight: 8,
            }}
          >
            {item.comando}
          </code>
        )}
        {item.link && (
          <a
            href={item.link.url}
            target={item.link.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="font-mono"
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--moss)",
              borderBottom: "1px solid var(--moss)",
              paddingBottom: 1,
              textDecoration: "none",
            }}
          >
            {item.link.texto} →
          </a>
        )}
      </div>

      <label style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, minWidth: 64 }}>
        <button
          type="button"
          onClick={() => toggle(item.id)}
          aria-label={checked ? "Marcar como pendente" : "Marcar como feito"}
          style={{
            width: 28,
            height: 28,
            border: `1.5px solid ${checked ? "var(--moss)" : "var(--ink-mute)"}`,
            borderRadius: 4,
            background: checked ? "var(--moss)" : "var(--paper)",
            color: checked ? "var(--paper)" : "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            lineHeight: 1,
            fontFamily: "var(--font-display)",
            transition: "all 0.15s ease",
          }}
        >
          {checked ? "✓" : ""}
        </button>
        <span
          className="font-mono"
          style={{
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: checked ? "var(--moss)" : "var(--ink-mute)",
          }}
        >
          {checked ? "Feito" : "Pendente"}
        </span>
      </label>
    </article>
  );
}
