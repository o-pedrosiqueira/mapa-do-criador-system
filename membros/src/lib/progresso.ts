// Store de progresso. Le e grava na tabela user_progress do Supabase.
// Hook React: useProgresso() devolve { prog, toggle, contarConcluidos, loading }.
"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

type Progresso = Record<string, boolean>;

export function useProgresso() {
  const [prog, setProg] = useState<Progresso>({});
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  // Carregar progresso ao montar
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        if (mounted) setLoading(false);
        return;
      }
      const { data } = await supabase
        .from("user_progress")
        .select("item_id, checked")
        .eq("user_id", user.id);
      if (!mounted) return;
      const mapa: Progresso = {};
      (data || []).forEach((r: { item_id: string; checked: boolean }) => {
        if (r.checked) mapa[r.item_id] = true;
      });
      setProg(mapa);
      setLoading(false);
    })();

    // Realtime: outras abas/dispositivos atualizam
    const channel = supabase
      .channel("user_progress_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "user_progress" }, async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data } = await supabase
          .from("user_progress")
          .select("item_id, checked")
          .eq("user_id", user.id);
        if (!mounted) return;
        const mapa: Progresso = {};
        (data || []).forEach((r: { item_id: string; checked: boolean }) => {
          if (r.checked) mapa[r.item_id] = true;
        });
        setProg(mapa);
      })
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const toggle = useCallback(
    async (itemId: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const atualEstaMarcado = !!prog[itemId];

      // Otimista: atualiza UI primeiro
      setProg((p) => {
        const novo = { ...p };
        if (atualEstaMarcado) delete novo[itemId];
        else novo[itemId] = true;
        return novo;
      });

      if (atualEstaMarcado) {
        // Desmarcar -> deletar linha
        await supabase
          .from("user_progress")
          .delete()
          .eq("user_id", user.id)
          .eq("item_id", itemId);
      } else {
        // Marcar -> upsert
        await supabase.from("user_progress").upsert(
          { user_id: user.id, item_id: itemId, checked: true, checked_at: new Date().toISOString() },
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
