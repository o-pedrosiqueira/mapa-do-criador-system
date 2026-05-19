import Sidebar from "@/components/Sidebar";
import { createClient } from "@/lib/supabase/server";

export default async function TutorialLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const email = user?.email ?? "voce@email.com";

  return (
    <div style={{ display: "grid", gridTemplateColumns: "248px 1fr", minHeight: "100vh" }}>
      <Sidebar userEmail={email} />
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}
