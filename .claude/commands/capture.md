---
name: mapa-do-criador:capture
description: Registrar uma ideia solta na Caixa de Entrada do criador ativo. Primeira coordenada do Mapa do Criador. Sem editar, sem julgar. Use entre sessões do Ritual 3x3 durante a semana.
---

# Capture. Registrar Ideia na Caixa de Entrada

Registra uma ideia bruta na Caixa de Entrada do criador ativo. Sem editar, sem julgar, sem decidir formato. O Cure (depois) é quem decide o destino.

## Usage

```
/capture
```

Ou direto com a ideia inline:

```
/capture A IA não roubou minha voz, ela amplificou meu eco. Talvez seja isso que assusta as pessoas.
```

## O Que Fazer

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`. Se não existir, oriente a usar `/produto-novo` primeiro.
2. Ler `meus-produtos/{ativo}/banco-de-ideias.md` (se não existir, criar com cabeçalho).

### Passo 1. Receber a ideia

Se a mensagem do criador já trouxe texto após `/capture`, use direto.

Se veio só `/capture` sem texto, pergunte (UMA pergunta):
```
Cola a ideia em estado bruto. Pode ser frase incompleta, pergunta, observação, link com comentário.
```

### Passo 2. Capturar metadados (sem atrapalhar)

A partir da ideia, derive:
- **slug:** 3 a 6 palavras representativas (kebab-case, sem acento)
- **data:** data de hoje no formato AAAA-MM-DD
- **texto:** o que o criador colou, sem editar
- **origem:** se a ideia tem pista (ex: "isso veio na DM do João" → "DM @joao"; "li no livro de X" → "leitura de X"). Se não tem pista, perguntar UMA pergunta curta: "De onde veio essa ideia?" (1 a 3 palavras). Se o criador disser "sei lá", deixar `origem: indefinida`.
- **tom inicial:** se a ideia já trouxe pista de formato/tom (ex: "isso podia ser um carrossel" → `tom inicial: carrossel`). Se não trouxer, deixar `tom inicial: a curar`.

### Passo 3. Salvar

Adicionar entrada no final da seção `## Caixa de Entrada` em `meus-produtos/{ativo}/banco-de-ideias.md` no formato:

```markdown
- [ ] **{slug}**
  - data: {AAAA-MM-DD}
  - texto: {texto bruto do criador}
  - origem: {origem ou "indefinida"}
  - tom inicial: {se já trouxe pista ou "a curar"}
```

Se o `banco-de-ideias.md` ainda não existe, crie com a estrutura:

```markdown
# Banco de Ideias. Caixa de Entrada

> Capturas brutas do Mapa do Criador. Use `/capture` para adicionar.
> O Cure (acionado por `/cure` ou dentro de `/ritual-3x3`) escolhe 4 a 5 por semana e gera os briefings.

## Caixa de Entrada

<!-- ideias novas (não curadas) entram aqui -->

## Histórico (já curadas)

<!-- ideias movidas pelo Cure entram aqui marcadas com [x] e o destino -->
```

### Passo 4. Confirmar entrega

Resposta curta, sem cerimônia:
```
✅ Capturado: "{slug}". Caminho: meus-produtos/{ativo}/banco-de-ideias.md.
```

Se for a primeira ideia da semana, complementar:
```
Boa. Roda /capture quantas vezes precisar durante a semana. No dia da sua sessão, /cure pega tudo de uma vez.
```

Se o criador já capturou 8 ou mais ideias na semana, complementar:
```
Sua Caixa de Entrada tem {N} ideias nesta semana. Pronta para o Cure quando você for rodar a sessão.
```

## Princípios operacionais

- **Velocidade primeiro.** Captura idealmente acontece em 20 a 60 segundos. Não atrapalhar com perguntas longas.
- **Zero julgamento.** Nunca dizer "essa ideia precisa de mais contexto" ou "isso parece fraco". Só registrar.
- **Zero edição.** Não corrija português, não melhore a frase, não amplie. O Cure ou o Crie fazem isso.
- **Zero classificação.** Não decidir formato (newsletter/carrossel/stories) no Capture. Isso é função do Cure.
- **UMA pergunta no máximo** (só sobre origem, e só se não tiver pista no texto).
