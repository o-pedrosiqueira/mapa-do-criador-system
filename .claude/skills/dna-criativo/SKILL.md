---
name: dna-criativo
description: >
  Base de conhecimento para configurar o DNA Criativo (voz autoral) de um criador.
  Captura tom, valores, mantras, vocabulário, linha editorial, cosmovisão, referências e CTA por tipo.
  Analisa textos autênticos do criador para extrair padrões de voz.
  Acionada pelo command /dna-criativo.
---

# DNA Criativo. Base de Conhecimento

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Esta skill faz várias operações longas (analisar 1 a 3 textos autênticos do criador, extrair padrões de voz, gerar o dna-criativo.md completo). Antes de cada uma, anuncie em UMA linha com `🔍 Próximo passo: {ação}. Tempo estimado: cerca de X segundos.` Ao concluir, confirme com `✅ Concluído: {entrega}. Caminho: {caminho}.`

## O que é o DNA Criativo

O DNA Criativo é a configuração da voz autoral do criador. É o que separa um conteúdo gerado por IA genérica de um conteúdo que soa como a pessoa escreveria se tivesse tempo. Todo conteúdo produzido pelo sistema passa pelo DNA Criativo como filtro de revisão obrigatório.

Mora em `meus-produtos/{ativo}/dna-criativo.md`. É lido em todo command que gera conteúdo publicável.

## Estrutura do DNA

O DNA Criativo tem 11 blocos. Cada bloco é preenchido a partir de uma combinação de respostas diretas do criador + análise de textos autênticos colados por ele.

### 1. Identidade do Comunicador
- Nome completo
- Especialidade (o que ele ensina ou entrega de verdade)
- Posicionamento autoral (uma frase que captura o ângulo dele no nicho)

### 2. Valores
3 a 5 valores nucleares. O que ele defende, no que acredita, o que organiza as decisões editoriais. Exemplos: autenticidade, simplicidade, didática, alegria, profundidade, transparência, contribuição, mordomia, leveza, coragem.

### 3. Tom de voz
Descrição em 3 a 5 frases curtas. Aborda:
- Pessoa gramatical predominante (primeira pessoa, segunda, terceira)
- Registro (conversacional, ensaístico, jornalístico, didático)
- Humor (presença, tipo: autodepreciativo, irônico, observacional, ausente)
- Comprimento médio de frase (curtas para impacto, longas para complexidade emocional)
- Referências de profundidade que **não** são para imitar (ex: "C.S. Lewis é referência de profundidade, não estilo a imitar")

### 4. Linha editorial
O que ele publica e o que ele **evita**. Frase afirmativa + lista de proibições.

Exemplos:
- Publica: ensaios sobre o tema X, comentário cultural sobre evento Y, ponto de vista sobre debate Z
- Evita: listicle de produtividade ("5 erros que..."), conteúdo formato "como fazer X" passo a passo, dicas práticas, pitch comercial fora de contexto, jargão de coach

Inclui aqui o **CTA por tipo de conteúdo:** quando o conteúdo termina em pitch comercial e quando termina em convite à conversa. Pitch só quando o conteúdo levou naturalmente até lá; conteúdo cultural fecha em provocação, não em venda.

### 5. Cosmovisão
A lente filosófica, religiosa ou política do criador que aparece como **olhar** sobre o mundo, não como linguagem explícita. Exemplos:
- "Fé sem fórmula. C.S. Lewis, não televangelismo. Postura cristã reformada presente como lente, não como linguagem religiosa explícita."
- "Esquerda libertária com ceticismo do mercado, mas sem cancelamento. Aparece em quem dou voz, não em panfleto."
- "Pragmatismo budista. Vazio e impermanência aparecem em metáforas, não em jargão zen."

Regra: aparece no tom (postura, escolha de exemplos, organização de prioridades), nunca em rótulos.

### 6. Mantras / jargões próprios
Frases recorrentes que o criador usa e que assinam o estilo dele. Coletar entre 5 e 10. Exemplos do Pedro Siqueira:
- "Talvez."
- "No fundo,"
- "Eu sei. Eu também."
- "Anota isso."
- "Você foi feito para isso."
- "Aposto que você já viveu essa."

Aparecem em momentos específicos no conteúdo (abertura, virada, fechamento), não polvilhados em qualquer parágrafo.

### 7. Vocabulário base
10 a 20 palavras que aparecem com naturalidade e assinam o universo semântico do criador. Exemplos: semeador, alicerce, peregrinação, fagulha, captura, texto-base, sistema, DNA, ritual.

A IA deve usar esse vocabulário onde fizer sentido, não forçar.

### 8. Evitar na comunicação
Lista de palavras, expressões e estruturas proibidas. Exemplos:
- Linguagem de coach: mindset, gamechanger, hackear, escala, ecossistema, destrave, disrupção
- Estruturas vazias: "Não é X. É Y.", "mesmo que", "sem precisar"
- Posicionamentos rejeitados: "especialista em IA", "palestrante de IA"
- Formatos rejeitados: listicle, "5 erros que você comete", "como fazer X em 5 passos"

### 9. Referências comunicacionais
Autores e perfis de inspiração, classificados por dimensão:
- Estrutura de ensaio: ex. Dan Koe
- Metáfora viva e profundidade: ex. C.S. Lewis
- Brevidade com impacto: ex. Seth Godin
- Storytelling com gancho: ex. Russell Brunson
- Formato editorial-jornalístico: ex. Bárbara Torres, BrandsDecoded
- Paradoxo e leitura cultural: ex. G.K. Chesterton

Importante: referências de **estrutura**, não de imitação literal. A voz final é a do criador, não a do autor referenciado.

### 10. Tonalidade emocional predominante
Uma frase capturando o registro emocional típico. Exemplos:
- "Leve com profundidade. Calor humano com clareza estratégica."
- "Provocativo com afeto. Não passa pano, mas não cancela."
- "Reflexivo com humor seco. Não busca consolo, busca lucidez."

### 11. Formatos que combinam mais
Lista dos formatos que naturalmente acolhem essa voz. Exemplos: newsletter longa, carrosséis, threads, reels curtos com tese central, ensaio breve, podcast roteirizado.

E os formatos que **não combinam**: vlog, dança de tendência, conteúdo de "rotina de manhã", listicle viral.

## Análise de textos autênticos (obrigatório)

Antes de gerar o DNA, peça ao criador para colar entre 1 e 3 textos autênticos:
- Post antigo que ele gostou
- E-mail longo enviado para alguém
- Áudio transcrito de explicação para amigo
- Trecho de conversa em DM
- Qualquer texto que soe **ele de verdade**, não filtrado para soar profissional

Analise extraindo:
- Comprimento médio de frase
- Pessoa gramatical
- Vocabulário recorrente
- Estruturas sintáticas favoritas (frase curta + expansão? pergunta + resposta? metáfora + literal?)
- Marcadores discursivos típicos (mas, e, então, agora, ó, olha, sabe?)
- Pontuação (uso de vírgula, dois-pontos, reticências)
- Humor (tipo, frequência)

Devolva 3 a 5 padrões nítidos como **sinais de voz**, e use-os para preencher os blocos 3 (Tom), 6 (Mantras), 7 (Vocabulário) e 10 (Tonalidade).

## Output esperado

Um arquivo único em `meus-produtos/{ativo}/dna-criativo.md` com os 11 blocos preenchidos, mais uma seção final **Sinais de voz** com os padrões extraídos da análise de textos autênticos.

Também atualizar `meus-produtos/{ativo}/perfil.md` na seção "Identidade do Comunicador" com a versão consolidada (alguns blocos do DNA são reflexo direto dessa seção, manter sincronia).
