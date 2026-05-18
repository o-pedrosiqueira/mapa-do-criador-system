---
name: criar-post-avulso
description: >
  Base de conhecimento para criar post avulso autoral. Ensaio breve (200 a 400 palavras),
  comentario cultural curto ou observacao afiada. Formato que vive entre a newsletter
  (densa, 1000+ palavras) e o stories (conversacional). Acionada por /criar-post-avulso.
---

# Criar Post Avulso. Base de Conhecimento

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Operação curta (45 a 90 segundos). Anuncie com `🔍 Próximo passo: gerar post avulso "{tema}" aplicando o DNA Criativo. Tempo estimado: cerca de 60 segundos.`

## O que é um post avulso no Mapa do Criador

Não é a newsletter da semana. Não é a sequência de stories. É um **ensaio breve** publicável em Twitter/X, LinkedIn, Threads, comentário aprofundado em DM, ou como post de Instagram quando o tema não cabe em carrossel mas exige resposta rápida.

Função operacional:
- Capturar a tese antes que ela esfrie
- Comentar evento cultural na hora certa (timing > densidade)
- Publicar entre os ciclos do Ritual 3x3, sem esperar a sessão semanal
- Servir de matéria-prima futura: um post avulso que ressoou pode virar newsletter ou carrossel no próximo Ritual

## Estrutura padrão (3 movimentos)

### Movimento 1. Abertura afiada
**Comprimento:** 1 a 2 frases (20 a 50 palavras)

Função: capturar atenção no scroll. Deve já trazer a tese central ou a observação seminal. Não é gancho de newsletter (que pode ser cena e contexto antes da tese). Aqui a tese vem cedo.

**Padrões que funcionam:**
- Afirmação afiada: "A IA não roubou minha voz. Ela amplificou meu eco."
- Observação cultural: "Reparei que ninguém mais comenta posts. Todo mundo curte e segue rolando."
- Contraponto: "Estão dizendo que X. Aposto que o que tá em jogo é Y."
- Pergunta direta (use com moderação): "Por que ninguém percebeu que Z?"

### Movimento 2. Desenvolvimento (corpo)
**Comprimento:** 2 a 4 parágrafos curtos (150 a 280 palavras)

Função: defender a tese em 1 a 2 movimentos argumentativos curtos. Por ser breve, o post avulso é mais asseverativo que a newsletter; defende mais que demonstra.

**Movimentos típicos:**
- Distinção: "Não é o mesmo que A. É outra coisa: B porque C."
- Ampliação: "Isso conecta com algo maior: D."
- Exemplo único e concreto (não 3, não 5. **Um**)
- Conexão inesperada com leitura/conversa/observação

### Movimento 3. Fechamento (a virada)
**Comprimento:** 1 a 2 frases (20 a 50 palavras)

Função: deixar a tese ressoando depois que o leitor terminar. Pode ser:
- Anti-conclusão (recusa de fechar com pacote redondinho)
- Implicação inquietante
- Pergunta aberta para o leitor (provoque resposta, não pergunta retórica)
- Convite à conversa explícito (apenas se respeitar a linha editorial do criador)

## Voz autoral. Aplicação obrigatória do DNA

Antes de entregar, aplicar frase por frase o DNA Criativo do criador ativo. No post avulso, o tom **precisa estar concentrado** porque cada frase ocupa um terço do post.

- Tom soa exatamente como o criador escreveria? Quase sem retoque?
- Mantras / jargões próprios aparecem em pelo menos 1 dos 3 movimentos?
- Vocabulário base aparece pelo menos 1 vez?
- Nenhuma palavra da lista "evitar" do DNA?
- Nenhuma das 10 proibições do CLAUDE.md (travessão, exclamação, listicle, coach, "não é X é Y" como **frase pronta** repetida, etc.)?
- A tese aparece já na abertura, não no terceiro parágrafo?

## Anti-padrões do post avulso

- ❌ Pretender ser newsletter encurtada (densidade alta sem espaço para sustentar)
- ❌ Pretender ser stories transcrita (conversa demais sem tese)
- ❌ Listicle ("3 coisas que aprendi com X")
- ❌ Tutorial ("como fazer X em 30 segundos")
- ❌ Pitch de produto sem contexto editorial
- ❌ Fechamento "siga, curte, salva" sem ressonância
- ❌ Frase que poderia ter sido escrita por qualquer um do nicho
- ❌ Hashtag spam no fim (uma ou duas, no contexto, OK)

## Convenção de arquivo

Salvar em `meus-produtos/{ativo}/entregas/posts/{AAAA-MM-DD-tema-em-slug}.md`.

Estrutura do arquivo:

```markdown
# Post. {tema}

**Data:** {AAAA-MM-DD}
**Plataforma sugerida:** {Twitter/X | LinkedIn | Threads | Instagram | Newsletter de boas-vindas}
**Amarração:** {se conecta com newsletter / carrossel / debate em alta}

---

## Movimento 1. Abertura

{texto}

## Movimento 2. Desenvolvimento

{paragrafo 1}

{paragrafo 2 (opcional)}

{paragrafo 3 (opcional)}

## Movimento 3. Fechamento

{texto}

---

**Versão única para colar (sem subtítulos):**

{texto completo concatenado sem os subtítulos de movimento}
```

A versão única no final é importante: nenhuma plataforma de microblog aceita títulos de movimento. O criador cola essa versão direto.

## Plataformas e adaptações

- **Twitter/X:** até 280 caracteres por tweet. Post avulso longo pode virar thread de 3 a 5 tweets.
- **LinkedIn:** comprimento livre, mas até 1300 caracteres antes do "ver mais". A tese tem que caber no primeiro bloco.
- **Threads:** até 500 caracteres por post.
- **Instagram (legenda):** até 2200 caracteres. Não é foto, é texto carregado em design simples (citação editorial).
- **Newsletter de boas-vindas:** post avulso pode virar 1ª newsletter automática do leitor que se inscreveu.

## Skills relacionadas

- `cure` (gera briefings, embora post avulso muitas vezes nasça sem briefing prévio)
- `dna-criativo` (DNA aplicado como filtro)
- `criar-newsletter`, `criar-carrossel`, `criar-stories` (formatos mais densos quando o tema pede)
