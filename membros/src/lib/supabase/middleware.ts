// Helper para o middleware.ts da raiz proteger rotas autenticadas.
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Atualiza sessao se valida; expira se nao
  const { data: { user } } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const rotaProtegida = path.startsWith("/tutorial") || path.startsWith("/faq") || path.startsWith("/suporte");
  const rotaPublica = path.startsWith("/login") || path.startsWith("/cadastro") || path.startsWith("/recuperar") || path.startsWith("/auth");

  // Se nao logado e tentando acessar rota protegida -> redireciona pra login
  if (!user && rotaProtegida) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", path);
    return NextResponse.redirect(url);
  }

  // Se ja logado e tentando ver login -> redireciona pra tutorial
  // Excecoes: /auth/callback (em processo) e /recuperar/nova-senha (sessao temporaria de reset)
  if (user && rotaPublica && path !== "/auth/callback" && path !== "/recuperar/nova-senha") {
    const url = request.nextUrl.clone();
    url.pathname = "/tutorial";
    return NextResponse.redirect(url);
  }

  return response;
}
