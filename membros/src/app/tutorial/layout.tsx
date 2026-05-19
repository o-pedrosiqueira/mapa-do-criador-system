import Sidebar from "@/components/Sidebar";

export default function TutorialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "248px 1fr", minHeight: "100vh" }}>
      <Sidebar userEmail="aluno@exemplo.com" />
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}
