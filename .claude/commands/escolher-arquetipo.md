---
name: mapa-do-criador:escolher-arquetipo
description: Definir Arquetipo de marca do criador. Combina Brand Archetypes (Jung / Mark & Pearson, 12 padroes universais) + Vantagens da Fascinacao (Sally Hogshead, 7 modos de atrair atencao). Resultado: combinacao que define como o criador se posiciona no mercado de atencao.
---

# Escolher Arquetipo. Brand + Fascinacao

Define o **Arquetipo** do criador combinando dois frameworks consagrados de posicionamento:

- **Brand Archetypes** (12 padroes de Carl Jung popularizados por Mark & Pearson em "The Hero and the Outlaw"): Hero, Sage, Outlaw, Magician, Caregiver, Innocent, Explorer, Lover, Jester, Everyman, Creator, Ruler.
- **Vantagens da Fascinacao** (Sally Hogshead, "How to Fascinate"): 7 modos pelos quais voce naturalmente atrai e mantem atencao — Innovation, Passion, Power, Prestige, Trust, Mystique, Alert.

A combinacao (1 Brand Archetype + Vantagem Primaria + Vantagem Secundaria) define como o criador aparece no mercado de atencao.

## Usage

```
/escolher-arquetipo
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`, `dna-criativo.md`, `posicao-autoral.md`.
2. Se Anthem nao existe, recomendar `/definir-anthem` primeiro (o arquetipo refina o que a Anthem ja apontou).

### Passo 1. Brand Archetype (Jung / Mark & Pearson)

Apresentar os 12 arquetipos em 4 grupos (Ordem / Pertencimento / Mudanca / Independencia):

```
Grupo 1. Ordem (estabilidade, controle)
- Caregiver. Cuida do outro. (Maya Angelou, mae arquetipica)
- Ruler. Lidera com autoridade. (Steve Jobs late stage, juiz)
- Creator. Constroi o novo. (Frida Kahlo, designer autoral)

Grupo 2. Pertencimento (conexao, comunidade)
- Innocent. Pureza, otimismo. (Forrest Gump)
- Lover. Conexao emocional. (Marilyn Monroe)
- Jester. Humor, alegria. (Robin Williams, Casseta e Planeta)
- Everyman. Pertencer ao grupo. (Tom Hanks)

Grupo 3. Mudanca (transformacao, jornada)
- Hero. Vencer obstaculos. (Joana D'Arc, atletas)
- Magician. Transformar realidade. (Oprah, terapeuta poderoso)
- Outlaw. Quebrar regras. (Madonna, hackers)

Grupo 4. Independencia (sabedoria, exploracao)
- Sage. Buscar verdade. (Dalai Lama, professor)
- Explorer. Aventurar-se. (Indiana Jones, viajante autoral)

Qual desses arquetipos voce sente que mais corresponde a sua presenca publica?
1. Listar todos com 1 frase de descricao detalhada
2. Voce me ajuda a descobrir pelo meu conteudo
3. Ja sei, vou digitar
```

Para opcao 2: pedir 2 a 3 frases sobre como o criador atua nas redes, qual e o tom dele, o que ele defende — usar para sugerir 2 a 3 arquetipos compativeis.

### Passo 2. Vantagem Primaria (Sally Hogshead)

```
Vantagens da Fascinacao (Sally Hogshead). Como voce atrai atencao quando esta no seu melhor:

1. Innovation. Voce surpreende. Criatividade, originalidade, design imprevisivel.
2. Passion. Voce conecta emocionalmente. Calor, energia, expressividade.
3. Power. Voce comanda. Lideranca, autoridade, certeza.
4. Prestige. Voce eleva. Excelencia, sofisticacao, padrao alto.
5. Trust. Voce e confiavel. Consistencia, estabilidade, presenca solida.
6. Mystique. Voce intriga. Reserva, profundidade, deixar o publico ir atras.
7. Alert. Voce protege. Pragmatismo, urgencia, atencao ao detalhe.

Qual desses voce sente que e seu modo dominante de atrair atencao?
```

### Passo 3. Vantagem Secundaria

```
Agora a Vantagem Secundaria. Qual a SEGUNDA forma mais natural?
(Sally Hogshead chama de Dual Advantage. A combinacao das duas e o que te torna unico.)

{listar as 7 de novo, excluindo a Primaria}
```

### Passo 4. Combinacao (Arquetipo Fascinante)

Sally Hogshead tem 49 combinacoes pre-nomeadas. Algumas referencias:
- Innovation + Trust = The Anchor (inovador confiavel)
- Passion + Mystique = The Intrigue (paixao introspectiva)
- Power + Prestige = The Maestro (lider de elite)
- Mystique + Alert = The Architect (pensador estrutural)
- Innovation + Mystique = The Provocateur (cria desconforto pra fazer pensar)
- Passion + Trust = The Beloved (autoridade carinhosa)

Apresentar 2 a 3 combinacoes proximas das escolhas do criador e perguntar:
```
A combinacao mais proxima das suas Vantagens e {X}. Faz sentido?
1. Sim, e essa
2. Quero ver as outras combinacoes
3. Quero compor um nome proprio
```

### Passo 5. Como aparece

Gerar 2 a 4 frases descrevendo como a combinacao Brand Archetype + Dual Advantage SE MANIFESTA no conteudo do criador.

Exemplo: para "Sage + Mystique + Trust":
> "Voce ensina sem ser professoral, com posturas que sao mais sentidas que afirmadas. Seu conteudo cria espaco para o leitor concluir antes da resposta. Voce ganha autoridade por nao se vender — por escolher o que omite, nao o que mostra."

### Passo 6. Confirmacao

```
Resumo:

- Brand Archetype: {nome}
- Vantagem Primaria: {nome}
- Vantagem Secundaria: {nome}
- Combinacao: {nome}
- Como aparece: {2 a 4 frases}

1. Aprovar e salvar
2. Quero ajustar algo
```

### Passo 7. Salvar

Editar `meus-produtos/{ativo}/posicao-autoral.md` na secao `## Arquetipo`:

```markdown
## Arquetipo
- **Brand Archetype:** {nome}
- **Vantagem Primaria:** {nome}
- **Vantagem Secundaria:** {nome}
- **Combinacao:** {nome}
- **Como aparece:** {texto}
```

### Passo 8. Entrega

```
✅ Arquetipo definido. Caminho: meus-produtos/{ativo}/posicao-autoral.md.

Brand Archetype: {nome}
Combinacao Sally: {nome}

Proximo passo sugerido:
- /definir-pilares para listar os 3 a 5 temas recorrentes
- /escrever-manifesto se Anthem + Arquetipo ja estao prontos
```

## Principios operacionais

- **Nao force arquetipo unico.** Brand Archetypes raramente sao puros. Mark & Pearson dizem que cada marca tem 1 dominante + 1 a 2 secundarias.
- **Vantagens vem do natural, nao do desejado.** Sally Hogshead enfatiza: voce nao escolhe sua Vantagem, voce descobre. Pergunte como o criador atrai atencao QUANDO ESTA RELAXADO, nao como ele gostaria de ser visto.
- **Combinacao com Anthem.** O arquetipo deve REFORCAR o Anthem ja escolhido, nao contradizer. Se conflito aparecer, e sinal de que o Anthem ou o arquetipo precisam ser reescritos.
