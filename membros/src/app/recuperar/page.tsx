"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { resetPassword } from "@/lib/auth-actions";

export default function RecuperarPage() {
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    setErro("");
    setSucesso("");
    startTransition(async () => {
      const res = await resetPassword(formData);
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
        <div className="eyebrow" style={{ marginBottom: 24 }}><span className="sp">✦</span><span>Recuperar senha</span></div>
        <h1 className="font-display" style={{ fontSize: 40, fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 12 }}>
          Sem <em style={{ color: "var(--moss)", fontStyle: "italic" }}>drama</em>.
        </h1>
        <p className="font-serif" style={{ fontStyle: "italic", fontSize: 17, lineHeight: 1.5, color: "var(--ink-soft)", marginBottom: 32 }}>
          Digite seu e-mail. Te mandamos um link para criar nova senha.
        </p>

        <form action={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label className="font-mono" style={{ display: "block", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 6 }}>E-mail</label>
            <input type="email" name="email" required placeholder="voce@email.com" autoComplete="email" />
          </div>

          {erro && <div className="font-mono" style={{ fontSize: 12, color: "var(--gold)", background: "oklch(72% 0.110 86 / 0.1)", border: "1px solid var(--gold)", padding: "10px 14px" }}>{erro}</div>}
          {sucesso && <div className="font-mono" style={{ fontSize: 12, color: "var(--moss)", background: "var(--moss-soft)", border: "1px solid var(--moss)", padding: "10px 14px", lineHeight: 1.4 }}>{sucesso}</div>}

          <button type="submit" disabled={isPending} className="btn-primary" style={{ justifyContent: "center", padding: "14px 24px", opacity: isPending ? 0.7 : 1, marginTop: 8 }}>
            {isPending ? "Enviando..." : "Enviar link →"}
          </button>
        </form>

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--line-soft)", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
          <Link href="/login" style={{ color: "var(--moss)" }}>← Voltar ao login</Link>
        </div>
      </div>
    </div>
  );
}
