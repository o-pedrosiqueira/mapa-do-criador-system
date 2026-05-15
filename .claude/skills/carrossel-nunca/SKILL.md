---
name: workshop-marketing:carrossel-nunca
description: Skill que gera carrossel viral de 6 slides no estilo "Nunca [faça X]" para Instagram. Lê perfil.md e idconsumidor.md, alimenta as proibições com as Urgências Ocultas (DORES, DÚVIDAS) e os Argumentos Incontestáveis do produto, conduz escolha de tom de escrita e estilo de design visual, gera texto dos 5 "Nuncas" + CTA do slide 6, e entrega arquivo .md com texto + 6 prompts de imagem prontos para colar no ChatGPT, Whisk ou Gemini.
allowed-tools: Read, Write, Bash
---

# Carrossel Nunca. Gerador de 6 Slides de Proibições Virais

Esta skill cria um carrossel de Instagram com formato fixo: 5 slides começando com "Nunca [ação]" + 1 slide de CTA. Cada "Nunca" é uma proibição CONTRAINTUITIVA, PRÁTICA e FUNCIONAL alimentada pelo perfil do produto.

A skill **não gera as imagens**. O ChatGPT, Whisk, Gemini ou outra ferramenta de imagem é quem gera. A skill entrega texto + prompts.

---

## Passo 0. Contexto

Anuncie:

```
🔍 Próximo passo: gerar carrossel de 6 slides no formato Nunca, com texto e prompts de imagem. Tempo estimado: cerca de 90 segundos.
```

Carregue:
1. `meus-produtos/.ativo` para identificar o produto ativo. Se vazio, oriente a usar `/produto-novo` antes.
2. `meus-produtos/{ativo}/perfil.md`. Se não existir, oriente a usar `/produto-concepcao` antes.
3. `meus-produtos/{ativo}/idconsumidor.md` se existir.
4. `.claude/rules/copy/checklist-light-copy.md` para aplicar as 12 proibições de copy.

Extraia internamente do perfil (NÃO mostrar ainda):

| Campo | De onde tirar |
|---|---|
| **Nicho** | Campo "Nicho" no `perfil.md` |
| **Quadro** | Transformação principal |
| **Handle (@)** | Campo de Instagram no `perfil.md`, se existir |
| **Cores da marca** | Paleta no `perfil.md`, se existir. Default: creme bege #F2EAD9 (slides 1-5) + verde-sálvia escuro #3D4A3F (slide 6) |
| **Urgências DORES** | 10 itens da categoria DORES |
| **Urgências DÚVIDAS** | 10 itens da categoria DÚVIDAS |
| **Argumentos Incontestáveis** | Lista de argumentos fortes do perfil |
| **Identidade do Consumidor** | Crenças, paliativos, objeções para encontrar erros comuns |

Verificar carrosséis "Nunca" anteriores em `meus-produtos/{ativo}/entregas/criativos/` para evitar repetição de proibições.

---

## Passo 1. Pré-preenchimento e perguntas restantes

Mostre ao aluno o pré-preenchimento e faça as perguntas que faltam, em sequência (UMA por vez).

### 1.1. Mostrar contexto extraído

```
Vou montar seu carrossel Nunca com base no produto ativo.

📋 Pré-preenchimento (extraído do perfil):

NICHO: [nicho]
@ INSTAGRAM: [handle ou "não encontrado"]
CORES: [paleta do perfil ou "default creme + verde-sálvia"]

Está tudo certo ou quer ajustar algo?

1. Tudo certo, seguir
2. Quero ajustar
```

Se escolher 2: pergunte o que ajustar (uma linha por vez), atualize e mostre de novo. Não avance sem aprovação.

### 1.2. Se @ não estiver no perfil

```
Qual o @ do Instagram que vai aparecer no slide 6? (ex: @joao.tarot)
```

### 1.3. Tom de escrita

```
Qual tom de comunicação você quer no texto?

1. Clássica direta (elegante, sem floreios)
2. Bem-humorada (trocadilhos, ironia leve)
3. Técnica (apoiada em dados e fatos)
4. Inspiracional (aspiracional, transformação)
5. Casual (conversa de amigo)
6. Polêmica (provocações, contraintuição forte)

Digite o número:
```

Default se não quiser escolher: **1. Clássica direta**.

### 1.4. Estilo de design visual

```
Qual estilo de design visual você quer nos slides?

1. Sofisticado e elegante
2. Editorial e cinematográfico
3. Despojado e bem-humorado
4. Energético e vibrante
5. Sério e técnico
6. Aconchegante e humano
7. Provocativo e ousado
8. Quero descrever do meu jeito

Digite o número:
```

Se 8: pergunte "Descreva o estilo que você quer (ex: minimalista com toques retrô, fotografia de revista, cores cruas e contraste forte)".

NUNCA mostre ao aluno os termos técnicos da tabela de tradução (serifada, sans-serif, mono, condensada). Use linguagem leiga.

---

## Passo 2. Geração do texto dos 6 slides

### 2.1. Critério das ideias (REGRA CENTRAL)

Cada uma das 5 proibições precisa ser:

- **CONTRAINTUITIVA**. Proíbe algo que a maioria do nicho faz achando que é certo. Não é proibição óbvia.
- **PRÁTICA**. Proibição real, específica, com exemplo concreto do dano que causa.
- **FUNCIONAL**. A pessoa entende imediatamente o que parar de fazer.

**Fontes obrigatórias para extrair os 5 "Nuncas":**

1. Cruzar Urgências DÚVIDAS (o que a pessoa pergunta) com Argumentos Incontestáveis (o que o método ensina) para encontrar mitos que o produto quebra.
2. Cruzar Urgências DORES com paliativos da Identidade do Consumidor para encontrar comportamentos sabotadores que a pessoa repete.
3. Olhar objeções no `idconsumidor.md` para descobrir crenças erradas que travam o resultado.

Cada "Nunca" deve atacar UM erro comum específico, com dano concreto explicado no subtítulo.

### 2.2. Estrutura dos slides

| Slide | Estrutura |
|---|---|
| 1 | Título: "Nunca [ação]..." Subtítulo: explica o porquê e o dano. |
| 2 | Título: "Nunca [ação]..." Subtítulo: explica o porquê e o dano. |
| 3 | Título: "Nunca [ação]..." Subtítulo: explica o porquê e o dano. |
| 4 | Título: "Nunca [ação]..." Subtítulo: explica o porquê e o dano. |
| 5 | Título: "Nunca [ação]..." Subtítulo: explica o porquê e o dano. |
| 6 | CTA com verbo DIFERENTE de "Nunca". Ex: "Siga", "Comece", "Salve", "Pare". |

### 2.3. Tamanho do texto

- TÍTULO de cada slide: até 8 palavras.
- SUBTÍTULO de cada slide: até 15 palavras.
- Total por slide: máximo cerca de 25 palavras.

### 2.4. Adaptação por tom escolhido

| Tom | Como escrever |
|---|---|
| Clássica direta | Frases curtas, sem adjetivo desnecessário, argumento limpo |
| Bem-humorada | Trocadilhos sutis, ironia, exagero controlado |
| Técnica | Dados, números, comparações concretas, mecanismo |
| Inspiracional | Foco no resultado, linguagem de transformação |
| Casual | "Você", contrações, frase como conversa |
| Polêmica | Afirmação que contraria o senso comum, peso na proibição |

### 2.5. Regras OBRIGATÓRIAS da CTA (slide 6)

A CTA precisa ter:

1. **MOTIVO CLARO**. Por que seguir esse perfil ajuda no problema dos 5 slides.
2. **RELAÇÃO DIRETA** com as 5 proibições mostradas.
3. **GERAÇÃO DE DESEJO**. A pessoa entende o que ganha ao seguir.

Exemplos certos:
- "Siga @joao.tarot e pare de sabotar suas leituras sem perceber."
- "Siga @nutri.ana e elimine os hábitos que travam seu emagrecimento."
- "Salve este post e comece a parar de cometer estes 5 erros hoje mesmo."

Exemplos errados (não usar):
- "Siga para mais conteúdos." (genérico)
- "Siga e fique por dentro." (sem motivo claro)
- "Compartilha aí." (sem relação com a proibição)

### 2.6. Aplicar Light Copy

Antes de mostrar qualquer texto, aplique frase por frase:

- Travessão (—) proibido. Use vírgula, ponto, dois pontos ou parênteses.
- Exclamação proibida.
- "mesmo que" e "sem precisar" proibidos.
- Pergunta no título do slide proibida (transforme em afirmação).
- Estrutura "Não é X. É Y." proibida.
- Promessa vaga proibida. Substitua por dado concreto, número, prazo ou cena específica.
- Lero-lero proibido (palavras genéricas que poderiam servir para qualquer nicho).
- Toda proibição precisa de TESE: por que esse comportamento prejudica.
- Sigla ou nome de técnica precisa de explicação no mesmo slide.

### 2.7. Auto-revisão obrigatória

Após gerar internamente os 6 slides:

1. Acione a skill `revisora` passando o texto completo dos 6 slides.
2. Aplique todas as correções no texto. Não exiba a lista de problemas, não avise que rodou a revisora.
3. Se houver alerta sobre dado faltante (ex: dado específico para sustentar uma proibição), reescreva usando informação do `perfil.md` ou peça o dado ao aluno antes de mostrar.

### 2.8. Apresentar para aprovação

Mostre os 6 slides com tom de design já considerado e peça aprovação:

```
📱 Carrossel Nunca pronto. Texto dos 6 slides:

╭──────────────╮
│ SLIDE 1      │
╰──────────────╯
TÍTULO: Nunca [ação]
SUBTÍTULO: [explicação do porquê e do dano]

╭──────────────╮
│ SLIDE 2      │
╰──────────────╯
[...]

╭──────────────╮
│ SLIDE 6 (CTA) │
╰──────────────╯
TÍTULO: [verbo diferente]
SUBTÍTULO: [motivo claro + relação com os 5 nuncas + desejo]

1. Aprovar e seguir para os prompts de imagem
2. Quero ajustar algum slide
```

Se 2: pergunte qual slide ajustar e qual ajuste, refaça apenas esse slide e mostre de novo.

---

## Passo 3. Geração dos 6 prompts de imagem

Após aprovação do texto, anuncie:

```
⏳ Passo 3/3: gerar os 6 prompts de imagem.
```

### 3.1. Tradução do estilo de design (uso interno, NÃO mostrar ao aluno)

| Estilo escolhido | Tradução visual aplicada no prompt |
|---|---|
| Sofisticado e Elegante | Tipografia serifada, espaçamento generoso, paleta neutra, sem decoração |
| Editorial e Cinematográfico | Layout de revista, hierarquia tipográfica forte, espaço negativo amplo |
| Despojado e Bem-humorado | Tipografia bold rounded, cores mais vivas, elementos gráficos lúdicos |
| Energético e Vibrante | Tipografia condensada e impactante, cores fortes, energia gráfica alta |
| Sério e Técnico | Grid rígido, tipografia mono ou sans-serif limpa, ícones funcionais |
| Aconchegante e Humano | Tipografia casual ou manuscrita, paleta quente, elementos orgânicos |
| Provocativo e Ousado | Tipografia bold com peso, cores cruas, contraste alto, zero decoração |
| Descrição livre | Traduzir a descrição do aluno em diretrizes equivalentes |

### 3.2. Template de prompt por slide (slides 1 a 5)

Cada prompt segue esta estrutura, em português, parametrizada por estilo + cores:

```
Imagem 4:5 para Instagram. Layout em dois blocos verticais.

BLOCO SUPERIOR (cor [cor primária do produto, default #F2EAD9]):
Composição com [descrição visual coerente com o tema do slide, sensação de alerta ou consequência, sem rosto humano visível, sem texto na imagem]. Atmosfera fotográfica, iluminação natural, profundidade de campo média. [Detalhe específico do nicho extraído do perfil].

BLOCO INFERIOR (cor [cor primária]):
Tipografia [tradução do estilo escolhido]. 
Texto principal: "Nunca [ação do slide]"
Texto secundário: "[subtítulo do slide]"
Indicador de slide: [N/6] no canto.

Estilo geral: [tradução visual completa do estilo escolhido].
Sem rostos visíveis. Sem mãos em primeiro plano. Foco no objeto, ambiente ou consequência.
Qualidade fotográfica profissional, 4:5, alta definição.
```

Para cada slide, troque [tema, descrição visual, ação, subtítulo, N] pelos dados correspondentes.

### 3.3. Template de prompt do slide 6 (CTA)

```
Imagem 4:5 para Instagram. Slide de fechamento.

BLOCO ÚNICO (cor [cor secundária do produto, default #3D4A3F]):

Pessoa em pose [coerente com tom escolhido], em ambiente [coerente com nicho], iluminação natural, sem rosto totalmente visível (recorte de costas, perfil, mãos ou silhueta). [Detalhe visual do nicho].

Tipografia [tradução do estilo].
Texto principal: "[verbo do slide 6] @[handle]"
Texto secundário: "[subtítulo da CTA]"
Indicador: 6/6 no canto.

Estilo geral: [tradução visual completa].
Cor de fundo: [cor secundária do produto].
Qualidade fotográfica profissional, 4:5, alta definição.
```

### 3.4. Regras dos prompts

- Sempre 4:5 (não 1:1, não 9:16).
- Sem rosto humano visível nos slides 1-5. No slide 6, pessoa pode aparecer mas com recorte (perfil, costas, silhueta, mãos).
- Sem texto sobreposto que gere alerta de violação de direitos.
- Sensação de alerta ou consequência nos slides 1-5 (coerente com tom de "Nunca").
- Slide 6 com sensação de continuidade, não de proibição.
- Detalhe do nicho em cada prompt (puxar do perfil, ex: cartas de tarô, prato de comida, livro, computador).

---

## Passo 4. Salvar e entregar

Determinar o número do próximo carrossel "Nunca" em `meus-produtos/{ativo}/entregas/criativos/`. Se não existir nenhum, é 1. Caso contrário, próximo número.

Salvar em:

```
meus-produtos/{ativo}/entregas/criativos/carrossel-nunca-{numero}.md
```

Conteúdo do arquivo:

```markdown
# Carrossel Nunca. {numero}

**Produto:** {nome do produto}
**Nicho:** {nicho}
**Handle:** @{handle}
**Tom:** {tom escolhido}
**Estilo de design:** {estilo escolhido}
**Cores:** {cores}
**Data:** {data}

---

## Texto dos 6 slides

### Slide 1
**TÍTULO:** Nunca {ação}
**SUBTÍTULO:** {subtítulo}

### Slide 2
[...]

### Slide 6 (CTA)
**TÍTULO:** {verbo} @{handle}
**SUBTÍTULO:** {subtítulo}

---

## Prompts de imagem (cole no ChatGPT, Whisk ou Gemini)

### Prompt slide 1
{prompt completo}

### Prompt slide 2
[...]

### Prompt slide 6
{prompt completo}

---

## Como usar

1. Cole cada prompt de imagem na ferramenta de IA (ChatGPT com imagem, Gemini, Whisk, Midjourney).
2. Aplique o texto sobre a imagem gerada usando Canva, Figma ou Photoshop.
3. Poste no Instagram em ordem de 1 a 6.
```

Anuncie:

```
✅ Concluído: carrossel salvo. Caminho: meus-produtos/{ativo}/entregas/criativos/carrossel-nunca-{numero}.md.
```

Mostrar caminho absoluto:

```
{raiz-do-projeto}/meus-produtos/{ativo}/entregas/criativos/carrossel-nunca-{numero}.md
```

Sugerir próximo passo:

```
Próximo passo sugerido:
- Cole o primeiro prompt no ChatGPT ou Gemini para gerar a imagem
- Use /carrossel-nunca de novo para gerar variações com outros tons ou estilos
- Use /copy-social se quiser também legenda do post para o feed
```

---

## Regras gerais

- Português brasileiro com acentuação correta.
- Tom direto e profissional.
- Aprovação obrigatória entre Passo 2 (texto) e Passo 3 (prompts).
- Não citar termos técnicos de tipografia ao aluno (serifada, sans-serif, mono, condensada).
- Não citar a revisora ou o checklist de Light Copy nas mensagens ao aluno.
- Se o produto não tiver Urgências Ocultas e Argumentos preenchidos, oriente o aluno a rodar `/produto-concepcao` antes, pois sem essas fontes os "Nuncas" saem genéricos.
