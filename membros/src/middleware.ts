import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Aplicar em todas as rotas exceto:
    // - _next/static, _next/image, favicon, arquivos publicos
    "/((?!_next/static|_next/image|favicon.ico|sinete.svg|apple-touch-icon.svg|logo-mapa.svg|social-card.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
