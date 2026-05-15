---
name: cure
description: >
  Base de conhecimento da segunda coordenada do Mapa do Criador (Cure).
  Revisa a Caixa de Entrada da semana, escolhe 4 a 5 ideias e gera um briefing por ideia
  (gancho + tese central + ângulo + formato + CTA). Acionada por /cure ou dentro de /ritual-3x3.
---

# Cure. Segunda Coordenada do Mapa do Criador

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Esta skill faz operações curtas (1 a 2 minutos) e várias decisões interativas. Anuncie quando ler a Caixa de Entrada e quando salvar os briefings. Confirme entregas com caminho.

## Objetivo

Transformar 8 a 20 ideias brutas da Caixa de Entrada em **4 a 5 briefings prontos para o Crie**.

Tempo médio do Cure: 30 minutos (parte do Ritual 3x3 semanal).

## Critérios de seleção

Não toda ideia da Caixa vira conteúdo. Selecione 4 a 5 usando os critérios abaixo:

1. **Densidade.** A ideia tem matéria para sustentar uma tese inteira? Se é uma frase solta sem desdobramento, talvez vire stories ou post avulso, não newsletter.
2. **Voltagem.** A ideia provoca alguma coisa em você? Se você releu e sentiu "ainda quero falar disso", é candidata. Se sentiu "agora não me toca mais", descarta ou guarda para outra semana.
3. **Tempo certo.** Algumas ideias são ganchos jornalísticos com prazo (lançamento da semana, debate em alta). Outras são ensaios atemporais. Para a semana corrente, priorize as com prazo (perdem valor se esperar). Atemporais entram quando a Caixa de prazo está vazia.
4. **Encaixe com o DNA.** A ideia bate com a linha editorial do criador? Algumas vão estar fora do escopo. Não force.
5. **Variedade na semana.** Evitar entregar 3 newsletters densas + 0 stories. Mistura ideal: 1 newsletter densa + 2 carrosséis (de pesos diferentes) + 1 sequência de stories conversacional.

## Direcionamento de formato

Para cada ideia selecionada, decida o formato com base em:

- **Newsletter (1 por semana).** Ideia profunda, com tese, contexto e análise. Densa o suficiente para 800 a 1500 palavras. Tem ângulo editorial-jornalístico (gancho da semana + análise) ou ensaio atemporal.
- **Carrossel (2 a 3 por semana).** Ideia estruturada, com sequência clara. Cabe em 10 slides. Pode ser variação do tema da newsletter (ampliação ou contraponto) ou tema independente.
- **Stories (1 sequência por semana).** Ideia conversacional, bastidor, ampliação. Faz sentido como serial de 3 a 6 frames com pergunta no último.
- **Post avulso.** Ensaio breve (200 a 400 palavras), comentário cultural curto, observação afiada. Não cabe em carrossel (porque é texto, não slide) mas não tem peso de newsletter.

**Regra antiga do Mapa:** ideia profunda vira newsletter, estruturada vira carrossel, conversacional vira stories. Mas a regra é heurística, não dogma. Quando a ideia for ambígua, escolha pela voltagem do criador (qual formato ele tem mais energia para criar agora).

## Estrutura do briefing

Para cada ideia selecionada, gere um briefing com 5 campos:

```markdown
### Briefing. {slug da ideia}

- **formato:** {newsletter | carrossel | stories | post avulso}
- **gancho:** {a abertura. Para newsletter, geralmente é um fato/notícia/evento. Para carrossel, é a tese-capa. Para stories, é a pergunta inicial}
- **tese central:** {a frase que sustenta o conteúdo inteiro. 1 a 2 linhas. Algo que o criador defende}
- **ângulo:** {como o criador entra no tema. Pode ser ângulo cultural, técnico, pessoal, contraponto, ampliação. Define o que distingue essa peça de qualquer outra do nicho sobre o mesmo assunto}
- **CTA:** {convite à conversa | pitch comercial | leitura adicional | nenhum}
```

O briefing é o **insumo do Crie**. Sem briefing, o Crie começa do zero. Com briefing, começa direcionado.

## Onde salvar

1. **Atualizar `meus-produtos/{ativo}/banco-de-ideias.md`:** mover as ideias selecionadas da seção `## Caixa de Entrada` para a seção `## Histórico (já curadas)`, mudando `[ ]` para `[x]` e anotando o destino:

```markdown
- [x] **{slug}** → newsletter "{título de trabalho}" (semana W21)
- [x] **{slug}** → carrossel "{tema}" (semana W21)
```

2. **Criar `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md`** com os 4 a 5 briefings completos. Esse arquivo é consumido pelo Crie.

## Descarte e adiamento

Para ideias **não selecionadas** desta semana:

- Se ainda fazem sentido para outra semana: mantenha em `## Caixa de Entrada` com `[ ]`. Aparecem no próximo Cure.
- Se você decidiu que não vai virar conteúdo (perdeu o tempo, não bateu com o DNA, ficou fraca depois de ler de novo): mover para `## Histórico (já curadas)` com `[x]` e anotar `→ descartada`. Não deletar (pode virar referência futura).

## Princípios operacionais

- **UMA decisão por vez.** Mostrar uma ideia, perguntar destino, mover. Não tentar processar 20 ideias em paralelo na conversa.
- **Não pressionar a Caixa.** Se a Caixa só tem 3 ideias e o criador acha que não vale a sessão, ofereça pular o Ritual desta semana.
- **Briefing é breve.** Cada briefing cabe em 4 a 8 linhas. Não é texto-base, é direção.
- **Tese tem dono.** A tese central deve ser do criador, não da IA. Se o criador titubear na tese, fazer 2 a 3 perguntas para fazê-lo formular.
