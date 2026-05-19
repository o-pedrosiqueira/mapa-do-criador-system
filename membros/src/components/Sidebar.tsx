"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { TRILHA, itensDoDia, totalItens } from "@/lib/trilha";
import { useProgresso } from "@/lib/progresso";
import { signOut } from "@/lib/auth-actions";

export default function Sidebar({ userEmail = "voce@email.com" }: { userEmail?: string }) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const { prog, contarConcluidos } = useProgresso();
  const total = totalItens();
  const concluidos = Object.entries(prog).filter(([, v]) => v).length;
  const percentual = total > 0 ? Math.round((concluidos / total) * 100) : 0;

  return (
    <aside
      style={{
        width: 248,
        padding: "24px 20px",
        borderRight: "1px solid var(--line)",
        background: "oklch(95% 0.020 82 / 0.96)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Branding */}
      <div style={{ marginBottom: 32 }}>
        <Link href="/tutorial" style={{ textDecoration: "none" }}>
          <div className="font-display" style={{ fontSize: 24, fontStyle: "italic", color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            <span style={{ color: "var(--moss)", fontStyle: "normal", marginRight: 6 }}>✦</span>
            Mapa do Criador
          </div>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 6 }}>
            Área de Membros
          </div>
        </Link>
      </div>

      {/* Progresso global */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span className="font-mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Seu progresso
          </span>
          <span className="font-display" style={{ fontSize: 18, fontStyle: "italic", color: "var(--moss)" }}>
            {percentual}%
          </span>
        </div>
        <div style={{ height: 4, background: "var(--line-soft)", borderRadius: 2, overflow: "hidden" }}>
          <div style={{ width: `${percentual}%`, height: "100%", background: "var(--moss)", transition: "width 0.3s ease" }} />
        </div>
        <div className="font-serif" style={{ fontSize: 13, fontStyle: "italic", color: "var(--ink-soft)", marginTop: 6 }}>
          {concluidos} de {total} itens concluídos
        </div>
      </div>

      {/* Navegação */}
      <nav style={{ flex: 1 }}>
        <NavItem href="/tutorial" label="Início" active={pathname === "/tutorial"} />
        {TRILHA.map((dia) => {
          const itensDia = itensDoDia(dia.slug);
          const idsDia = itensDia.map((i) => i.id);
          const concluidosDia = contarConcluidos(idsDia);
          const totalDia = idsDia.length;
          return (
            <NavItem
              key={dia.slug}
              href={`/tutorial/${dia.slug}`}
              label={`Dia ${dia.numero}`}
              progress={`${concluidosDia}/${totalDia}`}
              completed={concluidosDia === totalDia}
              active={pathname === `/tutorial/${dia.slug}`}
            />
          );
        })}

        <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--line-soft)" }}>
          <NavItem href="/faq" label="FAQ" active={pathname === "/faq"} />
          <NavItem href="/suporte" label="Suporte" active={pathname === "/suporte"} />
        </div>
      </nav>

      {/* Footer com usuário */}
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
        <div className="font-mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginBottom: 8, wordBreak: "break-all" }}>
          {userEmail}
        </div>
        <button
          className="btn-ghost"
          style={{ width: "100%", justifyContent: "center", padding: "8px 12px", fontSize: 12, opacity: isPending ? 0.6 : 1 }}
          disabled={isPending}
          onClick={() => startTransition(() => signOut())}
        >
          {isPending ? "Saindo..." : "Sair"}
        </button>
      </div>
    </aside>
  );
}

function NavItem({
  href, label, progress, completed = false, active = false,
}: { href: string; label: string; progress?: string; completed?: boolean; active?: boolean }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: 2,
        background: active ? "var(--moss-soft)" : "transparent",
        borderLeft: active ? "3px solid var(--moss)" : "3px solid transparent",
        color: active ? "var(--moss-deep)" : "var(--ink-soft)",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: active ? 500 : 400,
        transition: "all 0.15s ease",
      }}
    >
      <span>{label}</span>
      {progress && (
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            color: completed ? "var(--moss)" : "var(--ink-mute)",
            letterSpacing: "0.08em",
          }}
        >
          {progress}
        </span>
      )}
    </Link>
  );
}
