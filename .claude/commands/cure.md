---
name: mapa-do-criador:cure
description: Segunda coordenada do Mapa do Criador. Revisa a Caixa de Entrada da semana, escolhe 4 a 5 ideias e gera um briefing por ideia (gancho + tese central + ângulo + formato + CTA). Acionada por /cure ou dentro de /ritual-3x3.
---

# Cure. Curar Caixa de Entrada da Semana

Revisa a Caixa de Entrada do criador ativo e seleciona 4 a 5 ideias da semana, gerando um briefing por ideia. Output é o insumo direto do `/crie` ou de `/criar-newsletter`, `/criar-carrossel`, `/criar-stories`.

## Usage

```
/cure
```

Tempo médio: 30 minutos (parte do Ritual 3x3 semanal).

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Antes de cada operação longa, anuncie em UMA linha com `🔍 Próximo passo: {ação}. Tempo estimado: cerca de X segundos.`

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`. Se não existir, oriente a usar `/produto-novo` primeiro.
2. Ler `meus-produtos/{ativo}/dna-criativo.md` (filtro de seleção). Se não existir, sugerir rodar `/dna-criativo` primeiro.
3. Ler `meus-produtos/{ativo}/banco-de-ideias.md`. Se não existir ou estiver vazio, oriente:
   ```
   Sua Caixa de Entrada está vazia. Use /capture algumas vezes durante a semana e volte para o Cure.
   ```

### Passo 1. Visão geral

Conte e mostre as ideias da `## Caixa de Entrada`:

```
Sua Caixa de Entrada tem {N} ideias novas nesta semana:

1. **{slug}** — {primeiras 10 a 15 palavras do texto}
2. **{slug}** — {...}
...

Vamos curar?
1. Sim, mostra uma de cada vez
2. Quero ler todas primeiro e decidir
3. Cancelar
```

### Passo 2. Curadoria interativa

Modo padrão (opção 1): mostrar UMA ideia por vez. Para cada ideia:

```
{N}/{total}. **{slug}**
{texto completo}

Origem: {origem}
Tom inicial: {tom inicial ou "a curar"}

Destino para esta semana?
1. Newsletter (densa, ensaio com tese central)
2. Carrossel (10 slides, sequencial)
3. Stories (sequência conversacional)
4. Post avulso (ensaio breve, 200 a 400 palavras)
5. Adiar (mantém na Caixa para próxima semana)
6. Descartar (não vai virar conteúdo)
```

Após a escolha (1-4), faça 2 a 3 perguntas curtas para gerar o briefing:

- "Qual a tese central que você quer defender aqui?" (1 a 2 linhas)
- "Qual o gancho da semana ou o gancho atemporal?" (1 a 2 linhas)
- "CTA: convite à conversa, pitch, leitura adicional, ou nenhum?"

Se a ideia já trouxer pista nos campos `texto` ou `tom inicial`, use como ponto de partida e confirme com o criador antes de perguntar.

### Passo 3. Geração de briefing

Para cada ideia selecionada (formato 1-4), gere o briefing em formato Markdown:

```markdown
### Briefing. {slug}

- **formato:** {newsletter | carrossel | stories | post avulso}
- **gancho:** {abertura}
- **tese central:** {1 a 2 linhas}
- **ângulo:** {como o criador entra no tema, o que distingue essa peça}
- **CTA:** {convite à conversa | pitch comercial | leitura adicional | nenhum}
```

### Passo 4. Validação da semana

Antes de salvar, mostre o panorama:

```
Semana {AAAA-Www} curada:
- 1 newsletter: "{tese da newsletter}"
- 2 carrosséis: "{tema 1}" e "{tema 2}"
- 1 sequência de stories: "{tema}"
- {N} ideias adiadas
- {N} descartadas

1. Aprovar e salvar
2. Quero ajustar algum briefing
3. Quero adicionar mais uma ideia
```

Se a seleção tiver mais de 1 newsletter + 4 carrosséis, alerte:
```
Atenção: você curou {N} peças. O Ritual 3x3 cabe 1 newsletter + 2 a 3 carrosséis + 1 stories. Quer mover alguma para "adiar"?
```

### Passo 5. Salvar

Anuncie: `🔍 Próximo passo: salvar briefings e atualizar Caixa de Entrada. Tempo estimado: cerca de 15 segundos.`

1. Criar `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md` com todos os briefings da semana.
2. Atualizar `meus-produtos/{ativo}/banco-de-ideias.md`:
   - Mover ideias selecionadas (1-4) da Caixa de Entrada para `## Histórico (já curadas)` com `[x]` e o destino anotado.
   - Mover ideias descartadas (6) para o Histórico com `→ descartada`.
   - Manter ideias adiadas (5) na Caixa de Entrada.

### Passo 6. Entrega

```
✅ Concluído: {N} briefings da semana {AAAA-Www}. Caminho: meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md.

Próximo passo do Ritual: /crie para gerar tudo de uma vez (cerca de 2h30) ou granular:
- /criar-newsletter {slug da newsletter}
- /criar-carrossel {slug do carrossel}
- /criar-stories {slug das stories}
```

## Princípios operacionais

- **UMA ideia por vez** na curadoria interativa.
- **Não fingir tese.** Se o criador não tem tese formada para uma ideia, ele descobre nessa hora. Faça perguntas socráticas se ele titubear; não invente a tese por ele.
- **Mistura saudável.** Avise se a seleção da semana ficar enviesada (3 newsletters, 0 stories etc.).
- **Caixa vazia é OK.** Se o criador escolher pular o Ritual da semana, registre o pulo em `banco-de-ideias.md` com:
  ```markdown
  ## Semanas puladas
  - {AAAA-Www}: Caixa fraca, motivo: {opcional}
  ```
- **Briefing é breve.** Cada briefing cabe em 4 a 8 linhas. Não é texto-base, é direção para o Crie.
