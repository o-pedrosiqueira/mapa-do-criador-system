---
name: mapa-do-criador:definir-anthem
description: Definir o Anthem do criador. Frase de posicionamento (Sally Hogshead) que captura a diferenca distintiva. 'You are most fascinating when you are most distinct.' Salva em meus-produtos/{ativo}/posicao-autoral.md.
---

# Definir Anthem. Posicao Autoral em Uma Frase

Conduz o criador para escrever a **Anthem** dele: a frase unica que captura o que o torna distinto. Conceito de Sally Hogshead (How to Fascinate). Forma final: uma sentenca curta que combina (a) o que voce defende + (b) como voce entrega.

## Usage

```
/definir-anthem
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md` (se existir). Se nao existir, oriente a rodar `/dna-criativo` antes — o Anthem depende do DNA.
3. Ler `meus-produtos/{ativo}/posicao-autoral.md` (se ja existir, oferecer atualizar).

### Passo 1. Explicar o conceito

```
Anthem (Sally Hogshead). Uma frase que captura sua diferenca distintiva.

Formula: "Eu [adjetivo unico] [substantivo da minha competencia central]."

Exemplos:
- "Eu sou o estrategista honesto" (alguem que recusou a guru-fication do marketing)
- "Eu sou a terapeuta que ri" (combinando profundidade com humor)
- "Eu sou o pastor sem palanque" (cristao que rejeita o gospel hustle)

Anthem nao e tagline de marketing. E o que voce defenderia se tivesse 5 segundos para se apresentar a alguem que importa.

Pronta para escrever a sua?
1. Sim, comecar
2. Quero ver mais exemplos primeiro
```

### Passo 2. Entrevista guiada (UMA pergunta por vez)

1. **"Adjetivo distintivo."** "Qual e a palavra unica que descreve como voce e diferente das outras pessoas que fazem o que voce faz? Nao tagline. Adjetivo." (ex: honesto, contemplativo, surpreendente)
2. **"Substantivo da competencia."** "Qual e o papel central que voce ocupa? Em uma palavra ou expressao curta?" (ex: terapeuta, estrategista, pastor, criadora, redatora)
3. **"Teste com cena."** "Imagine que voce esta em uma mesa de jantar e alguem pergunta: 'e voce, o que voce faz?' Como voce gostaria de responder? Escreva a resposta ideal em uma frase."

### Passo 3. Iterar 3 versoes

A partir das respostas, gere 3 versoes da Anthem e mostre lado a lado:
```
Versao 1. {adjetivo + substantivo simples}
Versao 2. {com clausula de contraponto que mostra a diferenca}
Versao 3. {ousada, com tensao explicita ou paradoxo}

Qual ressoa mais?
1. Versao 1
2. Versao 2
3. Versao 3
4. Quero misturar partes de cada
```

### Passo 4. Refinar

Aplicar o filtro de voz autoral (`.claude/rules/voz-autoral/checklist-voz-autoral.md`):
- Sem travessao
- Sem exclamacao (a menos que o DNA permita)
- Sem linguagem de coach (mindset, gamechanger)
- Vocabulario do DNA presente
- Especifico, nao generico

### Passo 5. Confirmacao e salvamento

```
Resumo:

Anthem final:
"{frase}"

1. Aprovar e salvar
2. Refinar mais
```

Ao aprovar, escrever em `meus-produtos/{ativo}/posicao-autoral.md` na secao `## Anthem`. Se o arquivo nao existir, criar com a estrutura:

```markdown
# Posicao Autoral

## Anthem
{frase aprovada}

## Arquetipo
_a definir via /escolher-arquetipo_

## Pilares de Conteudo
_a definir via /definir-pilares_

## Manifesto
_a definir via /escrever-manifesto_
```

### Passo 6. Painel

O hook auto-painel-mapa.js detecta a edicao em `posicao-autoral.md` e regera a secao `anthem` no painel automaticamente. (Se o hook ainda nao mapeia esse arquivo, rodar manualmente: `python3 scripts/painel-incremental.py --secao anthem`.)

### Passo 7. Entrega

```
✅ Concluido: Anthem definida. Caminho: meus-produtos/{ativo}/posicao-autoral.md.

Anthem:
"{frase}"

Proximo passo sugerido:
- /escolher-arquetipo para definir o arquetipo de marca + Vantagens de Fascinacao
- /definir-pilares para listar os 3 a 5 temas recorrentes
- /escrever-manifesto para declarar o que voce defende e rejeita
```

## Principios operacionais

- **Anthem nasce de tensao, nao de marketing.** Se ficou bonita demais, provavelmente esta vazia. A frase boa tem nervo.
- **Adjetivo unico, nao 3.** Tentar empilhar adjetivos enfraquece o Anthem.
- **Substantivo simples, nao composto.** "terapeuta" em vez de "terapeuta-consultora-mentora".
- **Filtro de voz autoral OBRIGATORIO.** A frase precisa soar a voz do criador, nao uma tagline.
