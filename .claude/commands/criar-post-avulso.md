---
name: mapa-do-criador:criar-post-avulso
description: Criar post avulso autoral. Ensaio breve (200 a 400 palavras), comentario cultural curto ou observacao afiada. Formato entre a newsletter (densa) e o stories (conversacional). Aplica DNA Criativo como filtro. Use entre os ciclos do Ritual quando uma ideia precisa de resposta rapida.
---

# Criar Post Avulso. Ensaio Breve Autoral

Cria um post avulso de 200 a 400 palavras aplicando o DNA Criativo. 3 movimentos: abertura afiada + desenvolvimento + fechamento que ressoa. Não é newsletter encurtada nem stories transcrita.

## Usage

```
/criar-post-avulso
```

Ou direto com tema:

```
/criar-post-avulso a-ia-nao-roubou-minha-voz
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md` (filtro obrigatório). Se não existir, oriente a rodar `/dna-criativo` primeiro.
3. Ler `meus-produtos/{ativo}/perfil.md`.
4. Procurar briefing em `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md` ou no `banco-de-ideias.md`. Se o command veio com slug, localizar a ideia. Se não, perguntar:
   ```
   Para qual ideia o post avulso?
   1. Listar ideias da Caixa de Entrada
   2. Criar do zero respondendo perguntas
   3. Cancelar
   ```

### Passo 1. Decisão de plataforma

```
Onde o post vai ser publicado primeiro?
1. Twitter/X (ate 280 caracteres, pode virar thread)
2. LinkedIn (1300 antes do "ver mais", tese tem que caber no primeiro bloco)
3. Threads (ate 500 caracteres por post)
4. Instagram (legenda ou design simples com citacao)
5. Newsletter de boas-vindas
6. Multiplas (gerar versao genérica e adaptacoes)
```

Default: gerar versão genérica + 1 adaptação para a plataforma preferida.

### Passo 2. Coletar tese e gancho

Se ainda não tem tese formada, perguntar (UMA pergunta):
```
Em uma frase, qual é a tese central do post?
```

Se o gancho jornalístico não está claro, perguntar:
```
Tem alguma ancora externa? (evento da semana, post viral, observacao do cotidiano)
Se nao, OK: post pode ser atemporal.
```

### Passo 3. Geração

Anuncie: `🔍 Próximo passo: gerar post avulso "{tema}" aplicando o DNA Criativo. Tempo estimado: cerca de 60 segundos.`

Carregue a skill `criar-post-avulso` e gere o post seguindo os 3 movimentos:
- **Movimento 1.** Abertura afiada (20 a 50 palavras) com tese já presente
- **Movimento 2.** Desenvolvimento (150 a 280 palavras) em 2 a 4 parágrafos curtos
- **Movimento 3.** Fechamento (20 a 50 palavras) que ressoa

**Aplicação obrigatória do DNA Criativo (antes de exibir):**

1. Tom soa exatamente como o criador escreveria, quase sem retoque?
2. Mantras / jargões próprios aparecem em pelo menos 1 dos 3 movimentos?
3. Vocabulário base aparece pelo menos 1 vez?
4. Nenhuma palavra da lista "evitar" do DNA?
5. Nenhuma das 10 proibições do CLAUDE.md (travessão, exclamação, listicle, coach, "não é X é Y" como frase pronta, pergunta retórica vazia)?
6. A tese aparece já na abertura (Movimento 1), não no terceiro parágrafo?
7. Fechamento ressoa em vez de pedir engajamento?

Se algum item falhar: reescreva o trecho.

### Passo 4. Adaptação por plataforma

Se o criador escolheu Twitter/X e o post avulso passou de 280 caracteres, oferecer:
```
O post passa de 280 caracteres. Quer:
1. Reescrever em thread de 3 a 5 tweets (recomendado)
2. Encurtar para caber em 1 tweet
3. Manter assim e usar em outra plataforma
```

Se LinkedIn: garantir que a tese (Movimento 1) cabe nos primeiros 1300 caracteres antes do "ver mais".

### Passo 5. Aprovação

Mostrar o post completo com os 3 movimentos identificados + a versão única para colar. Pedir:
```
1. Aprovar e salvar
2. Quero ajustar (especifique movimento ou trecho)
```

Edição cirúrgica em ajustes.

### Passo 6. Salvar

Salvar em `meus-produtos/{ativo}/entregas/posts/{AAAA-MM-DD-tema-em-slug}.md`.

Convenção de slug: `2026-05-18-a-ia-nao-roubou-minha-voz.md`.

### Passo 7. Painel

Acione `python3 scripts/painel-incremental.py --secao newsletter` se for newsletter de boas-vindas, senão pular (a seção posts será adicionada no painel quando começarem a ter volume suficiente).

### Passo 8. Entrega

```
✅ Concluído: post avulso "{tema}" salvo. Caminho: meus-produtos/{ativo}/entregas/posts/{slug}.md.

Plataforma sugerida: {plataforma}.

Sugestão de próximo passo:
- Cola a versão única no fim do arquivo e publica
- Se ressoar bem, pode virar tema do próximo Ritual (newsletter ou carrossel)
```

## Princípios operacionais

- **Tese na abertura.** Diferente da newsletter (que constrói até a tese), o post avulso entrega a tese no Movimento 1.
- **Um exemplo, não três.** Brevidade é o critério #1.
- **Concentração de voz.** Cada frase ocupa um terço do post. O DNA precisa estar nítido em cada uma.
- **Não é listicle.** Não usar "3 coisas que aprendi com X" mesmo que tente disfarçar.
- **Edição cirúrgica em ajustes.**
- **Pitch fora.** Post avulso vive de tese, não de venda. Pitch quebra a linha editorial.
