---
name: criar-stories
description: >
  Base de conhecimento para criar sequência de stories conversacional do Mapa do Criador.
  Bastidor / ampliação / contraponto em 3 a 6 frames. Preserva voz autoral via DNA Criativo.
  Acionada por /criar-stories ou dentro de /crie.
---

# Criar Stories. Base de Conhecimento

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Operação curta (30 a 60 segundos). Anuncie com `🔍 Próximo passo: gerar sequência de stories. Tempo estimado: cerca de 45 segundos.`

## O que é uma sequência de stories no Mapa do Criador

Não são stories de "rotina de manhã", "ootd", ou "stories de dica do dia". Stories do Mapa são **extensão conversacional** de uma tese que está saindo em newsletter ou carrossel na mesma semana, ou são **ensaio breve em ritmo de fala** sobre algo que não cabia em formato longo.

Função operacional:
- Aproxima o leitor (conversacional, não editorial)
- Amplia ou contraponta uma tese de outro formato
- Mostra bastidor de raciocínio (ex: "Tava escrevendo a newsletter e travei aqui:")
- Encaminha tráfego para newsletter, carrossel, link na bio (quando faz sentido)

## Estrutura padrão (3 a 6 frames)

### Frame 1. Abertura conversacional
- **Comprimento:** 1 a 2 frases
- **Função:** abrir como se estivesse mandando áudio para um amigo. Sem formalismo, sem pose editorial.
- **Exemplos:**
  - "Tava terminando a newsletter e me dei conta de uma coisa."
  - "Pergunta honesta:"
  - "Ó, isso aqui me incomodou hoje."

### Frames 2 a 4. Núcleo (bastidor / ampliação / contraponto)
- **Comprimento por frame:** 2 a 4 frases
- **Função:** desenvolver o pensamento. Pode ser uma das 3 modalidades:
  - **Bastidor:** "Tô escrevendo sobre X. Travei aqui: {dilema}. Você já passou por isso?"
  - **Ampliação:** "A newsletter dessa semana fala sobre X. O que não coube lá foi Y: {desdobramento}."
  - **Contraponto:** "Defendi X na newsletter, mas dou desconto pra outro lado: {nuance}."

### Frame final (CTA + ressonância)
- **Comprimento:** 1 a 2 frases + recurso
- **Recurso:** link, caixa de pergunta, enquete, ou link da newsletter / carrossel
- **Função:** deixar o leitor com algo na cabeça e abrir a porta para resposta
- **Exemplos:**
  - "Manda áudio aqui, quero ouvir você sobre isso."
  - "Newsletter completa tá no link da bio."
  - "Caixa de pergunta aqui pra continuar: 'qual o seu X?'"

## Voz autoral. Aplicação obrigatória do DNA

Stories são o formato em que a voz aparece **mais nua**. Quase nenhum filtro editorial entre o criador e o leitor. Por isso o DNA precisa estar dobrado de cuidado:

- Tom de voz tem que soar como áudio para amigo, não como post profissional
- Mantras / jargões próprios aparecem em pelo menos 1 frame (geralmente no de abertura ou final)
- Nenhuma palavra da lista "evitar" do DNA
- Nenhum coachês ("vem comigo", "bora", "se liga", "anota aí" — exceto se "anota aí" estiver na lista de mantras do DNA do criador, como é o caso do Pedro Siqueira)
- Frase curta, ritmo de respiração, espaço em branco entre frames

## Anti-padrões do stories autoral

- ❌ "Bom dia, gente!" / "E aí, pessoal!" (formato influencer genérico)
- ❌ "Olha só que legal isso que vou contar pra vocês"
- ❌ Frase profissional demais (ex: parágrafo de artigo cortado em frames)
- ❌ Caixa de pergunta vaga ("Conta aqui sua história!")
- ❌ "Stories de bom dia" estilo motivational
- ❌ Frame final só com "swipe pra próximo!" sem fechamento

## Convenção de arquivo

Salvar em `meus-produtos/{ativo}/entregas/stories/{AAAA-MM-DD-tema-em-slug}.md`.

Estrutura:

```markdown
# Stories. {tema}

**Data:** {AAAA-MM-DD}
**Modalidade:** {bastidor | ampliação | contraponto}
**Amarração:** {se conecta com newsletter / carrossel da semana, citar slug}

---

## Frame 1. Abertura

{texto}

[recurso visual: foto pessoal / bastidor / texto puro]

---

## Frame 2. Núcleo

{texto}

---

(repetir até frame final)

---

## Frame final. CTA + ressonância

{texto}

**Recurso:** {caixa de pergunta com texto X | enquete com opções Y/Z | link da newsletter [link] | sticker emoji}
```

## Sugestões de recursos por frame

- **Caixa de pergunta:** texto específico, nunca vago. Ex: "Qual sua tese sobre voz autoral?" não "Conta aqui!"
- **Enquete:** 2 opções claras e provocativas. Não "sim / não".
- **Texto puro sobre fundo:** quando o frame é só sentença afiada.
- **Foto pessoal / bastidor:** quando o frame é cena ou momento real.
- **Print / screenshot:** quando o frame cita algo que o criador leu, viu, ouviu.

## Skills relacionadas

- `cure` (gera briefings)
- `dna-criativo`
- `criar-newsletter` e `criar-carrossel` (geralmente stories amarra com um destes na mesma semana)
