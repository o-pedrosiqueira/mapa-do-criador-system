// Store de progresso. Le e grava na tabela user_progress do Supabase.
// Hook React: useProgresso() devolve { prog, toggle, contarConcluidos, loading }.
"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";

type Progresso = Record<string, boolean>;

export function useProgresso() {
  const [prog, setProg] = useState<Progresso>({});
  const [loading, setLoading] = useState(true);
  // Instancia unica por hook (evita recriar client a cada render)
  const supabase = useMemo(() => createClient(), []);

  // Funcao para (re)carregar progresso do banco
  const recarregar = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setProg({});
      setLoading(false);
      return;
    }
    const { data } = await supabase
      .from("user_progress")
      .select("item_id, checked")
      .eq("user_id", user.id);
    const mapa: Progresso = {};
    (data || []).forEach((r: { item_id: string; checked: boolean }) => {
      if (r.checked) mapa[r.item_id] = true;
    });
    setProg(mapa);
    setLoading(false);
  }, [supabase]);

  // Carga inicial
  useEffect(() => {
    recarregar();
  }, [recarregar]);

  // Realtime subscription. Nome do canal unico por mount para nao colidir
  // com canais antigos em React Strict Mode (que faz mount > unmount > mount).
  useEffect(() => {
    const nomeCanal = `user_progress_${Math.random().toString(36).slice(2, 10)}`;
    const channel = supabase
      .channel(nomeCanal)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "user_progress" },
        () => recarregar()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, recarregar]);

  const toggle = useCallback(
    async (itemId: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const atualEstaMarcado = !!prog[itemId];

      // Update otimista
      setProg((p) => {
        const novo = { ...p };
        if (atualEstaMarcado) delete novo[itemId];
        else novo[itemId] = true;
        return novo;
      });

      if (atualEstaMarcado) {
        await supabase
          .from("user_progress")
          .delete()
          .eq("user_id", user.id)
          .eq("item_id", itemId);
      } else {
        await supabase.from("user_progress").upsert(
          {
            user_id: user.id,
            item_id: itemId,
            checked: true,
            checked_at: new Date().toISOString(),
          },
          { onConflict: "user_id,item_id" }
        );
      }
    },
    [prog, supabase]
  );

  const contarConcluidos = useCallback(
    (ids: string[]) => ids.filter((id) => prog[id]).length,
    [prog]
  );

  return { prog, toggle, contarConcluidos, loading };
}
