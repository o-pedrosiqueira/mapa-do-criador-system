# Setup Supabase — Mapa do Criador Membros

## 1. Projeto criado

- Project URL: `https://nyhhukzggqoimdpqxdjq.supabase.co`
- Region: South America (sa-east-1)
- Plano: Free

## 2. Schema rodado

A tabela `user_progress` foi criada com RLS habilitada. Schema em `supabase-schema.sql`.

## 3. URL Configuration

Em **Authentication → URL Configuration** do dashboard Supabase, definidas:

- **Site URL:** `https://mapa-do-criador-membros.vercel.app`
- **Redirect URLs:**
  - `https://mapa-do-criador-membros.vercel.app/**`
  - `http://localhost:3001/**` (dev)
  - `http://localhost:3002/**` (dev)

## 4. Variaveis de ambiente

- **Local (`.env.local`):** credenciais reais (gitignored).
- **Vercel:** `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` adicionadas no projeto `mapa-do-criador-membros` em production.

## 5. Deploy

URL: `https://mapa-do-criador-membros.vercel.app`

## 6. Manutencao da tabela

Para resetar o progresso de um usuario:
```sql
delete from user_progress where user_id = 'UUID-DO-USER';
```

Para listar usuarios:
```sql
select id, email, created_at from auth.users order by created_at desc;
```
