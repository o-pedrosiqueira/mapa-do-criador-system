"use client";

import { useState, useTransition, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { updatePassword } from "@/lib/auth-actions";
import { createClient } from "@/lib/supabase/client";

export default function NovaSenhaPage() {
  const [erro, setErro] = useState("");
  const [verificando, setVerificando] = useState(true);
  const [sessaoOk, setSessaoOk] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Confirmar que existe sessao de recovery (callback ja foi processado)
  useEffect(() => {
    const supabase = createClient();
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setSessaoOk(true);
      } else {
        // Sem sessao -> link expirou ou nao veio do callback. Volta pra /recuperar
        setTimeout(() => router.replace("/recuperar?expirado=1"), 2500);
      }
      setVerificando(false);
    })();
  }, [router]);

  function onSubmit(formData: FormData) {
    setErro("");
    startTransition(async () => {
      const res = await updatePassword(formData);
      if (res?.error) setErro(res.error);
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
          <span>Nova senha</span>
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
          Defina sua <em style={{ color: "var(--moss)", fontStyle: "italic" }}>nova senha</em>
        </h1>

        {verificando && (
          <p
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
              margin: "32px 0",
            }}
          >
            ✦ Verificando o link...
          </p>
        )}

        {!verificando && !sessaoOk && (
          <div
            className="font-serif"
            style={{
              fontSize: 16,
              lineHeight: 1.55,
              color: "var(--ink-soft)",
              padding: "16px 20px",
              border: "1px solid var(--gold)",
              background: "oklch(72% 0.110 86 / 0.1)",
              margin: "24px 0",
              fontStyle: "italic",
            }}
          >
            Esse link expirou ou já foi usado. Redirecionando para você pedir um novo...
          </div>
        )}

        {!verificando && sessaoOk && (
          <>
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
              Escolha uma senha forte, mínimo 8 caracteres. Depois você entra direto no Mapa.
            </p>

            <form action={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Field label="Nova senha" name="password" type="password" placeholder="••••••••" autoComplete="new-password" minLength={8} />
              <Field label="Confirma nova senha" name="confirma" type="password" placeholder="••••••••" autoComplete="new-password" minLength={8} />

              {erro && (
                <div
                  className="font-mono"
                  style={{
                    fontSize: 12,
                    color: "var(--gold)",
                    background: "oklch(72% 0.110 86 / 0.1)",
                    border: "1px solid var(--gold)",
                    padding: "10px 14px",
                    lineHeight: 1.4,
                  }}
                >
                  {erro}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="btn-primary"
                style={{
                  justifyContent: "center",
                  padding: "14px 24px",
                  opacity: isPending ? 0.7 : 1,
                  cursor: isPending ? "wait" : "pointer",
                  marginTop: 8,
                }}
              >
                {isPending ? "Salvando..." : "Salvar e entrar →"}
              </button>
            </form>
          </>
        )}

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
          <Link href="/login" style={{ color: "var(--moss)" }}>← Voltar ao login</Link>
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
        style={{
          display: "block",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      <input {...input} required />
    </div>
  );
}
