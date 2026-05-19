// Store de progresso. Por enquanto usa localStorage; depois vai pra Supabase.
"use client";

import { useEffect, useState, useCallback } from "react";

const KEY = "mapa-criador-progresso-v1";

type Progresso = Record<string, boolean>;

function ler(): Progresso {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function gravar(prog: Progresso) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(prog));
    window.dispatchEvent(new CustomEvent("progresso-mudou"));
  } catch {}
}

export function useProgresso() {
  const [prog, setProg] = useState<Progresso>({});

  useEffect(() => {
    setProg(ler());
    const handler = () => setProg(ler());
    window.addEventListener("progresso-mudou", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("progresso-mudou", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const atual = ler();
    const novo = { ...atual, [id]: !atual[id] };
    gravar(novo);
    setProg(novo);
  }, []);

  const contarConcluidos = useCallback((ids: string[]) => {
    return ids.filter((id) => prog[id]).length;
  }, [prog]);

  return { prog, toggle, contarConcluidos };
}
