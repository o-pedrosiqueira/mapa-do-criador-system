"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const userEmail = localStorage.getItem("mapa-criador-user-email");
    router.replace(userEmail ? "/tutorial" : "/login");
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--ink-mute)",
      }}
    >
      ✦ Carregando…
    </div>
  );
}
