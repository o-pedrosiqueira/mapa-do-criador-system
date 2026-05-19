"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { signup } from "@/lib/auth-actions";

export default function CadastroPage() {
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    setErro("");
    setSucesso("");
    startTransition(async () => {
      const res = await signup(formData);
      if (res?.error) setErro(res.error);
      else if (res?.ok) setSucesso(res.message);
    });
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
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
        <div aria-hidden style={{ position: "absolute", inset: 12, border: "1px solid var(--ink)", pointerEvents: "none" }} />

        <div className="eyebrow" style={{ marginBottom: 24 }}>
          <span className="sp">✦</span>
          <span>Primeira vez aqui</span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: 40,
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            marginBottom: 12,
          }}
        >
          Crie sua <em style={{ color: "var(--moss)", fontStyle: "italic" }}>conta</em>
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
          Use o mesmo e-mail da compra na Hotmart. Você recebe um link de confirmação no seu e-mail.
        </p>

        <form action={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" autoComplete="email" />
          <Field label="Senha (mínimo 8 caracteres)" name="password" type="password" placeholder="••••••••" autoComplete="new-password" minLength={8} />

          {erro && <Aviso tipo="erro">{erro}</Aviso>}
          {sucesso && <Aviso tipo="sucesso">{sucesso}</Aviso>}

          <button
            type="submit"
            disabled={isPending || !!sucesso}
            className="btn-primary"
            style={{
              justifyContent: "center",
              padding: "14px 24px",
              opacity: isPending ? 0.7 : 1,
              cursor: isPending ? "wait" : "pointer",
              marginTop: 8,
            }}
          >
            {isPending ? "Criando conta..." : sucesso ? "Verifique seu e-mail" : "Criar conta →"}
          </button>
        </form>

        <div
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: "1px solid var(--line-soft)",
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          Já tem conta?{" "}
          <Link href="/login" style={{ color: "var(--moss)" }}>Entrar →</Link>
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...input }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        className="font-mono"
        style={{ display: "block", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 6 }}
      >
        {label}
      </label>
      <input {...input} required />
    </div>
  );
}

function Aviso({ tipo, children }: { tipo: "erro" | "sucesso"; children: React.ReactNode }) {
  const cor = tipo === "erro" ? "var(--gold)" : "var(--moss)";
  const bg = tipo === "erro" ? "oklch(72% 0.110 86 / 0.1)" : "var(--moss-soft)";
  return (
    <div
      className="font-mono"
      style={{
        fontSize: 12,
        color: cor,
        background: bg,
        border: `1px solid ${cor}`,
        padding: "10px 14px",
        lineHeight: 1.4,
      }}
    >
      {children}
    </div>
  );
}
