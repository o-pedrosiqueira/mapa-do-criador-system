// Root: redireciona conforme sessao. Middleware ja cobre, mas mantemos esse fallback
// pra usuario que acessa "/" sem cookie ainda preenchido.
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  redirect(user ? "/tutorial" : "/login");
}
