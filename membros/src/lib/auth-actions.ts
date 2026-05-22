// Server Actions de autenticacao. Login, signup, signout, reset.
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: error.message };
  }
  revalidatePath("/", "layout");
  redirect("/tutorial");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"}/auth/callback`,
    },
  });
  if (error) {
    return { error: error.message };
  }
  return { ok: true, message: "Confirma seu e-mail. Acabamos de mandar um link para você." };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login");
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient();
  const password = formData.get("password") as string;
  const confirma = formData.get("confirma") as string;

  if (!password || password.length < 8) {
    return { error: "A senha precisa ter ao menos 8 caracteres." };
  }
  if (password !== confirma) {
    return { error: "As duas senhas digitadas não coincidem." };
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return { error: error.message };
  }
  revalidatePath("/", "layout");
  redirect("/tutorial");
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"}/auth/callback?next=/recuperar/nova-senha`,
  });
  if (error) {
    return { error: error.message };
  }
  return { ok: true, message: "Se o e-mail está cadastrado, você receberá um link para criar nova senha." };
}
