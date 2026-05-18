---
name: mapa-do-criador:dna-revisar
description: Auditar o DNA Criativo atual contra o que o criador efetivamente publica nas redes (Instagram, newsletter, posts recentes). Sugere ajustes se o DNA descrito divergir do DNA praticado. Use a cada 4 a 6 semanas, ou quando sentir que a voz evoluiu.
---

# DNA Revisar. Auditar Voz Descrita Contra Voz Praticada

Audita o DNA Criativo atual cruzando com o que o criador realmente publica nas redes. Identifica divergências (tom descrito não bate com tom publicado, mantras listados nunca aparecem, vocabulário que aparece muito mas não está listado) e sugere ajustes.

A voz do criador evolui. O DNA precisa acompanhar. Sem revisão periódica, a IA acaba escrevendo com a voz de 6 meses atrás.

## Usage

```
/dna-revisar
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`. Se não existir, oriente a usar `/produto-novo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md`. Se não existir, oriente:
   ```
   Ainda nao existe DNA configurado. Use /dna-criativo primeiro para criar a versao inicial.
   ```
3. Ler `meus-produtos/{ativo}/perfil.md` (Identidade do Comunicador, se preenchida).

### Passo 1. Coletar material publicado

Pergunte:
```
Vamos cruzar seu DNA atual com o que voce realmente tem publicado. Como prefere alimentar a auditoria?

1. Cola aqui 3 a 5 textos publicados recentes (newsletter, posts, threads)
2. Manda link do seu Instagram, eu rodo /dados-instagram primeiro para coletar
3. Manda link da sua newsletter no Substack/Beehiiv/etc.
4. Combinacao (texto colado + link)
```

Default mais rico: opção 4.

Carregue também, se existir, `meus-produtos/{ativo}/entregas/newsletter/`, `entregas/carrosseis/`, `entregas/stories/`, `entregas/posts/` — pode haver peças já publicadas via o próprio sistema que servem de material.

### Passo 2. Análise comparativa

Anuncie: `🔍 Próximo passo: cruzar DNA descrito com material publicado. Tempo estimado: 2 a 3 minutos.`

Faça a análise em 4 dimensões. Para cada uma, registre:
- O que está no `dna-criativo.md` atual
- O que aparece no material publicado
- Divergência (se houver)

#### Dimensão 1. Tom de voz
- DNA descreve tom em quantas frases?
- O tom dos textos publicados bate?
- Pessoa gramatical, comprimento de frase, humor: estão alinhados?

#### Dimensão 2. Mantras e jargões próprios
- Quais mantras estão listados no DNA?
- Quais aparecem de fato nos textos publicados?
- Mantras listados que nunca aparecem (candidatos a remoção)
- Frases recorrentes nos textos que NÃO estão no DNA (candidatos a adição)

#### Dimensão 3. Vocabulário base
- Quais palavras-fagulha estão listadas?
- Quais aparecem de fato?
- Palavras novas que apareceram com frequência (candidatas a adição)
- Palavras listadas que nunca aparecem (candidatas a remoção)

#### Dimensão 4. Linha editorial
- O que o DNA diz que o criador publica?
- O que o criador realmente publica?
- Algum formato/ângulo apareceu novo (ex: começou a fazer ensaios mais filosóficos depois de ler X)?
- Algum formato/ângulo deixou de aparecer?

### Passo 3. Apresentar diagnóstico

Devolva um relatório editorial:

```
## Diagnóstico do DNA Criativo

Material analisado: {N} textos publicados ({datas}).

### Dimensão 1. Tom de voz
- Status: {alinhado | desvio leve | desvio importante}
- Observação: {frase descrevendo o que mudou ou bate}

### Dimensão 2. Mantras
- Mantras listados que aparecem: {N de N}
- Mantras candidatos a remover: {lista, com justificativa}
- Frases recorrentes não listadas: {lista, candidatos a adicionar}

### Dimensão 3. Vocabulário
- Palavras-fagulha vivas: {N de N}
- Candidatas a adicionar: {lista}
- Candidatas a remover: {lista}

### Dimensão 4. Linha editorial
- Status: {alinhado | desvio leve | desvio importante}
- Observação: {o que apareceu novo ou sumiu}

### Recomendação

{1 a 3 frases descrevendo o ajuste sugerido. Pode ser:
- "Seu DNA está afiado, sem ajustes necessários"
- "Sugiro ajustar o bloco X com {detalhe}"
- "Sua voz mudou bastante. Recomendo refazer o DNA do zero com /dna-criativo"}
```

### Passo 4. Decisão do criador

```
Como quer prosseguir?
1. Aplicar todos os ajustes sugeridos (mantras, vocabulario, linha editorial)
2. Aplicar so os ajustes que eu confirmar (um a um)
3. Refazer o DNA do zero com /dna-criativo
4. So registrei a recomendacao, vou pensar e ajusto manualmente depois
```

### Passo 5. Aplicar ajustes

Se opção 1 ou 2: usar `Edit` no `dna-criativo.md` para aplicar os ajustes confirmados.

Cada ajuste deve ser cirúrgico:
- Bloco "Mantras / jargões próprios": adicionar/remover linhas específicas
- Bloco "Vocabulário base": adicionar/remover palavras
- Bloco "Linha editorial": ajustar a descrição ou a lista de "evita"
- Não reescrever blocos vizinhos não afetados

Atualizar também `perfil.md` na seção "Identidade do Comunicador" para manter sincronia.

### Passo 6. Painel

Acione `python3 scripts/painel-incremental.py --secao identidade-comunicador` para atualizar o painel (o hook auto-painel-mapa.js já faria isso, mas anunciar explicitamente é didático).

### Passo 7. Entrega

```
✅ DNA Criativo revisado. Caminho: meus-produtos/{ativo}/dna-criativo.md.

{Se houve ajustes:}
Ajustes aplicados:
- {bullet de cada ajuste}

Proximo passo sugerido: rodar /criar-newsletter ou /ritual-3x3 e ver se a voz nas pecas geradas agora bate melhor com como voce escreve.

{Se nada mudou:}
Seu DNA esta afiado. Volte aqui em 4 a 6 semanas, ou quando sentir que a voz evoluiu.
```

## Princípios operacionais

- **Mantra/vocabulário só remove com evidência.** Se o DNA lista um mantra e ele aparece em 0 dos textos analisados, candidato a remover. Mas pergunte ao criador antes — pode ser mantra que ele usa em contexto específico que não cobrimos.
- **Adição requer recorrência.** Frase candidata a virar mantra deve aparecer em 2 ou mais textos publicados, não apenas 1.
- **Linha editorial não muda só por moda.** Se o criador publicou 1 listicle por engano, isso não significa que a linha editorial mudou. Tratar como exceção, não regra.
- **Refazer do zero é radical.** Só sugerir opção "refazer com /dna-criativo" se a divergência for ampla (3 das 4 dimensões em desvio importante).
- **Edição cirúrgica nos blocos.** Mexer só no bloco que pediu ajuste. Não reescrever o DNA inteiro por inércia.
