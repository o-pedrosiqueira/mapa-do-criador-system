"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setLoading(true);
    // Placeholder de auth. Vai virar Supabase no proximo passo.
    // Por enquanto qualquer email + senha entra (so pra desenvolver UI).
    setTimeout(() => {
      if (email && senha.length >= 4) {
        if (typeof window !== "undefined") {
          localStorage.setItem("mapa-criador-user-email", email);
        }
        router.push("/tutorial");
      } else {
        setErro("Preencha e-mail e senha (mínimo 4 caracteres).");
        setLoading(false);
      }
    }, 400);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          border: "1px solid var(--ink)",
          padding: "48px 40px",
          position: "relative",
          background: "var(--paper)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 12,
            border: "1px solid var(--ink)",
            pointerEvents: "none",
          }}
        />

        <div className="eyebrow" style={{ marginBottom: 24 }}>
          <span className="sp">✦</span>
          <span>Área de Membros</span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: 44,
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            marginBottom: 12,
          }}
        >
          Mapa do <em style={{ color: "var(--moss)", fontStyle: "italic" }}>Criador</em>
        </h1>
        <p
          className="font-serif"
          style={{
            fontStyle: "italic",
            fontSize: 17,
            lineHeight: 1.5,
            color: "var(--ink-soft)",
            marginBottom: 32,
          }}
        >
          Entre com o e-mail que você usou na compra.
        </p>

        <form onSubmit={entrar} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label
              className="font-mono"
              style={{
                display: "block",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                marginBottom: 6,
              }}
            >
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              className="font-mono"
              style={{
                display: "block",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                marginBottom: 6,
              }}
            >
              Senha
            </label>
            <input
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {erro && (
            <div
              className="font-mono"
              style={{
                fontSize: 12,
                color: "var(--gold)",
                background: "oklch(72% 0.110 86 / 0.1)",
                border: "1px solid var(--gold)",
                padding: "10px 14px",
              }}
            >
              {erro}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{
              justifyContent: "center",
              padding: "14px 24px",
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "wait" : "pointer",
              marginTop: 8,
            }}
          >
            {loading ? "Entrando..." : "Entrar no Mapa →"}
          </button>
        </form>

        <div
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: "1px solid var(--line-soft)",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          <a href="#" style={{ color: "var(--ink-mute)", textDecoration: "none" }}>
            Esqueci a senha
          </a>
          <a
            href="https://mapa-do-criador-system.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--ink-mute)", textDecoration: "none" }}
          >
            Ainda não comprei →
          </a>
        </div>
      </div>
    </div>
  );
}
