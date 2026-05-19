---
name: mapa-do-criador:definir-pilares
description: Definir os 3 a 5 Pilares de Conteudo do criador. Territorios tematicos recorrentes onde todas as pecas se encaixam. Salva em posicao-autoral.md. Cada pilar tem nome + descricao em 1 linha.
---

# Definir Pilares de Conteudo

Define os **3 a 5 territorios tematicos** que o criador aborda regularmente. Todo conteudo publicado encaixa em pelo menos 1 pilar. Eles dao coerencia ao perfil sem prender o criador em um nicho unico.

## Por que pilares importam

- Quem segue pode prever de que tipo sera o conteudo
- O algoritmo aprende a categorizar e distribuir
- O criador tem mapa claro para alimentar a Caixa de Entrada
- Pecas que nao caem em nenhum pilar viram alerta de "fora do mapa"

## Usage

```
/definir-pilares
```

## O Que Fazer

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`, `dna-criativo.md`, `posicao-autoral.md`, `perfil.md`.
2. Se houver entregas em `entregas/newsletter/`, `entregas/carrosseis/`, `entregas/stories/`, `entregas/posts/` — usar como evidencia (o que o criador JA publica versus o que ele diz que publica).

### Passo 1. Diagnostico inicial

Se ja ha pecas publicadas, oferecer auditoria:
```
Voce ja tem {N} pecas em entregas/. Quer que eu analise os temas recorrentes antes de pedir pilares novos?
1. Sim, analisa primeiro e mostra o que ja apareceu
2. Nao, comeca do zero — quero declarar quais pilares vou seguir
```

Para opcao 1: ler os titulos das pecas, agrupar por temas similares, propor 3 a 5 clusters.

### Passo 2. Entrevista guiada (UMA pergunta por vez)

Se opcao 2 ou se nao tem pecas:
1. **"Tres assuntos da semana."** "Sobre quais 3 a 5 assuntos voce escreveria essa semana, sem hesitar?"
2. **"O que une."** "Voce ve algum fio que une esses assuntos? Algum padrao?"
3. **"Verifique tensao."** "Tem algum tema que parece que falta? Algum que voce escreveria mas se sente inseguro?"

### Passo 3. Gerar 5 propostas de pilares

Apresentar 5 candidatos com nome + descricao curta (1 linha). Pedir para o criador refinar:
```
Pilares candidatos:

1. **{Nome}** — {descricao em 1 linha}
2. **{Nome}** — {descricao}
3. **{Nome}** — {descricao}
4. **{Nome}** — {descricao}
5. **{Nome}** — {descricao}

Quais voce quer manter? Pode aprovar 3, 4 ou 5. Mais que 5 perde foco; menos que 3 aperta demais.
```

### Passo 4. Refinar nomes

Os nomes dos pilares devem ser:
- **Curtos** (1 a 3 palavras)
- **Especificos** (nao genericos como "Conteudo de Valor")
- **No vocabulario do criador** (puxar do DNA Criativo)
- **Diferentes entre si** (nao deve haver sobreposicao de >30% entre dois pilares)

Exemplos bons:
- "Mordomia de Conteudo" (puxando da cosmovisao crista do Pedro)
- "Ritual 3x3" (puxando do metodo)
- "Voz Autoral" (puxando do DNA)
- "Anti-guru" (puxando do que o criador rejeita)

Exemplos ruins:
- "Conteudo" (generico)
- "Estrategia" (generico)
- "Marketing Digital" (jargao)

### Passo 5. Validar com a Anthem

Para cada pilar finalizado, perguntar: "Este pilar reforca seu Anthem ou diverge?" Se algum pilar nao reforca, retrabalhar.

### Passo 6. Confirmacao

```
Resumo:

Pilares de Conteudo do criador:

1. **{Nome 1}** — {descricao}
2. **{Nome 2}** — {descricao}
3. **{Nome 3}** — {descricao}
{4. **{Nome 4}** — {descricao} (se houver)}
{5. **{Nome 5}** — {descricao} (se houver)}

1. Aprovar e salvar
2. Refinar
```

### Passo 7. Salvar

Em `meus-produtos/{ativo}/posicao-autoral.md`, secao `## Pilares de Conteudo`:

```markdown
## Pilares de Conteudo
1. **Nome 1** — descricao
2. **Nome 2** — descricao
3. **Nome 3** — descricao
```

### Passo 8. Entrega

```
✅ Pilares definidos. Caminho: meus-produtos/{ativo}/posicao-autoral.md.

{N} pilares:
{lista}

Proximo passo sugerido:
- Toda nova captura agora encaixe em 1 dos pilares; se nao encaixa, esta fora do mapa
- /escrever-manifesto para fechar a Posicao Autoral
- /ritual-3x3 para rodar a semana com os pilares ativos
```

## Principios operacionais

- **3 a 5, nao mais.** Acima de 5 perde foco. Abaixo de 3 prende em nicho unico.
- **Pilares evoluem.** A cada 3 a 6 meses, rever. Pilares que nao geram conteudo viram candidatos a remocao.
- **Pilar nao e formato.** "Newsletter" nao e pilar; tema da newsletter sim.
- **Conexao com Caixa de Entrada.** Idealmente, toda ideia no `/capture` deve poder ser etiquetada com um pilar. Idea sem pilar = sinal de tema novo emergindo.
