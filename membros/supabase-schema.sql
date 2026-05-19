-- ============================================================
-- Schema Supabase. Mapa do Criador. Area de Membros.
-- Rode esse SQL inteiro no SQL Editor do Supabase apos criar o projeto.
-- ============================================================

-- Tabela de progresso por usuario. Cada linha = 1 item da trilha marcado por 1 usuario.
create table if not exists user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  item_id text not null,
  checked boolean default true not null,
  checked_at timestamptz default now() not null,
  unique (user_id, item_id)
);

-- Indice para query rapida por usuario
create index if not exists user_progress_user_id_idx on user_progress (user_id);

-- RLS (Row Level Security): cada usuario so ve e modifica o proprio progresso
alter table user_progress enable row level security;

-- Politica de leitura: usuario logado le so seus proprios itens
drop policy if exists "users_can_read_own_progress" on user_progress;
create policy "users_can_read_own_progress" on user_progress
  for select using (auth.uid() = user_id);

-- Politica de insercao: usuario logado pode marcar seu proprio item
drop policy if exists "users_can_insert_own_progress" on user_progress;
create policy "users_can_insert_own_progress" on user_progress
  for insert with check (auth.uid() = user_id);

-- Politica de remocao: usuario pode desmarcar seu proprio item
drop policy if exists "users_can_delete_own_progress" on user_progress;
create policy "users_can_delete_own_progress" on user_progress
  for delete using (auth.uid() = user_id);

-- ============================================================
-- Pronto. Volta para o aplicativo e preencha .env.local com:
--   NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
--   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
-- ============================================================
