---
name: mapa-do-criador:onboarding-completo
description: Conduzir o criador do zero ate o primeiro Ritual 3x3 completo numa unica sessao guiada. Configura DNA Criativo, captura 5 ideias da semana, cura 4 a 5 briefings e cria a primeira newsletter + carrossel + stories. Duração total: 2 a 3 horas. Use na primeira sessao do criador no Mapa.
---

# Onboarding Completo. Do Zero ao Primeiro Ritual 3x3

Conduz o criador, em uma única sessão guiada, do zero (sistema recém-instalado, nada configurado) até ter a primeira semana de conteúdo pronta: DNA configurado + 1 newsletter + 2 a 3 carrosséis + 1 sequência de stories.

Diferente das skills individuais (que assumem que o criador sabe qual comando usar quando), este onboarding é um trilho contínuo: o assistente sempre sabe o próximo passo e conduz sem o criador precisar perguntar.

## Usage

```
/onboarding-completo
```

## Quando usar

- Primeira sessão do criador no Mapa (recém-instalado)
- Quando o criador zerou tudo com `/produto-zerar` e quer recomeçar
- Quando o criador atende um cliente novo e quer rodar o setup inteiro em uma sessão

## Quando NÃO usar

- Quando o DNA já está configurado e ele só quer rodar o Ritual da semana → use `/ritual-3x3`
- Quando ele quer ajustar UMA peça específica → use `/criar-*` direto

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Anuncie cada fase do onboarding antes de começar com `🔍 Próximo passo: ...`.

### Etapa 0. Verificação e expectativa

1. Ler `meus-produtos/.ativo`. Se não existir, oriente a usar `/produto-novo` primeiro.
2. Ler `meus-produtos/{ativo}/dna-criativo.md`, `banco-de-ideias.md`, `briefings/`, `entregas/`.

Detectar em qual estado está:
- **Estado A. Zero absoluto.** Sem DNA, sem ideias, sem briefings, sem entregas. → Rodar onboarding completo (Etapas 1 a 4).
- **Estado B. DNA existe mas resto vazio.** → Pular Etapa 1, ir direto para Etapa 2.
- **Estado C. DNA + ideias mas sem briefings/entregas.** → Pular Etapa 1 e 2, ir para Etapa 3.
- **Estado D. Já tem peças entregues.** → Alertar que onboarding completo não se aplica, sugerir `/ritual-3x3`.

Mostrar expectativa:
```
Onboarding completo do Mapa do Criador.

Vamos do zero a sua primeira semana de conteudo publicavel.

Fases:
1. DNA Criativo (30 a 45 min): configurar sua voz autoral
2. Capture (15 a 20 min): registrar 5 a 10 ideias da semana
3. Cure (20 a 30 min): selecionar 4 a 5 e gerar briefings
4. Crie (60 a 90 min): newsletter + 2 carrosseis + stories

Tempo total estimado: 2h30 a 3h30. Pode dividir em 2 dias se preferir.

Pronto para comecar?
1. Sim, vamos
2. So as 2 primeiras fases hoje, o Crie em outro dia
3. Cancelar
```

### Etapa 1. DNA Criativo (se Estado A)

Anuncie: `🔍 Próximo passo: configurar seu DNA Criativo. Tempo estimado: 30 a 45 minutos.`

Acione `/dna-criativo` internamente. Aguarde conclusão (arquivo `dna-criativo.md` salvo).

Após conclusão, mostre:
```
✦ DNA Criativo configurado.

Sua voz agora esta salva como filtro. Toda peca que o sistema gerar daqui pra frente vai aplicar esse DNA.

Caminho: meus-produtos/{ativo}/dna-criativo.md.

Pausa de 5 a 10 minutos antes da proxima fase?
1. Sim, te dou um sinal quando voltar
2. Nao, bora pra Captura
```

### Etapa 2. Capture (se Estado A ou B)

Anuncie: `🔍 Próximo passo: capturar 5 a 10 ideias da semana. Tempo estimado: 15 a 20 minutos.`

Mostre orientação:
```
Vou pedir 5 a 10 ideias capturadas. Use o melhor que voce viveu nesta semana:
- Frase no banho
- Pergunta de seguidor
- Observacao de leitura
- Cena de conversa
- Notícia que te marcou
- Tese que apareceu pronta

Nao precisa estar editada. Pode ser fragmento. So registre.
```

Para cada ideia (até 10), pergunte:
```
Ideia {N}/10. Cola a ideia aqui (texto bruto):
{aguarda resposta}
```

Para cada resposta, acione `/capture` internamente para salvar.

Após 5+ ideias, pergunte:
```
Voce ja tem {N} ideias na Caixa. Quer:
1. Capturar mais 1 a 5
2. Suficiente, vamos pro Cure
```

### Etapa 3. Cure (se Estado A, B ou C)

Anuncie: `🔍 Próximo passo: revisar Caixa de Entrada e gerar briefings. Tempo estimado: 20 a 30 minutos.`

Acione `/cure` internamente. Aguarde conclusão (arquivo `briefings/{AAAA-Www}-briefings.md` salvo).

Após:
```
✦ {N} briefings gerados.

Pausa antes do Crie?
1. Sim
2. Nao, bora pra criacao
3. Encerrar a sessao por aqui (Crie em outro dia com /ritual-3x3)
```

### Etapa 4. Crie (sempre que aluno topar)

Anuncie: `🔍 Próximo passo: criar suas primeiras pecas editoriais. Tempo estimado: 60 a 90 minutos.`

Acione `/ritual-3x3` em modo continuo (ou `/crie` se você quer pular o Cure já feito).

Para cada peça gerada:
- Newsletter → aprovação → próximo
- Carrossel 1 → aprovação → próximo
- Carrossel 2 → aprovação → próximo (se houver no briefing)
- Stories → aprovação → próximo

### Etapa 5. Fechamento

Quando todas as peças aprovadas e salvas:

```
✦ Onboarding completo concluido.

Sua primeira semana editorial:
- DNA Criativo: meus-produtos/{ativo}/dna-criativo.md
- Caixa de Entrada: {N} ideias capturadas
- Briefings: meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md
- Newsletter: "{titulo}"
- Carrossel 1: "{titulo}"
- Carrossel 2: "{titulo}"
- Stories: "{titulo}"

Tempo total: cerca de {duracao} horas.

Proximos passos:
- Revisar cada peca em voz alta antes de publicar
- /carrossel-visual para gerar imagens dos carrosseis
- /pagina-vercel ou /pagina-active para publicar a newsletter
- Voltar a /capture durante a proxima semana para alimentar o proximo Ritual

Boa semana editorial. Da proxima vez, /ritual-3x3 conduz a sessao semanal direto.
```

## Princípios operacionais

- **Trilho contínuo.** O criador nunca precisa perguntar "e agora?". Cada fase anuncia a próxima.
- **Pausa entre fases.** Sempre oferecer 5 a 10 min de pausa entre Etapas. Onboarding longo cansa.
- **Estado preservado.** Se o criador escolher pausar, salvar progresso em `meus-produtos/{ativo}/ritual/{AAAA-Www}-onboarding.md`. Ele pode retomar com `/onboarding-completo` (que detecta estado e pula fases já feitas).
- **Respeitar interrupções.** Se o criador quiser sair no meio, NÃO criar peça incompleta. Salvar progresso e oferecer retomada.
- **DNA é fundação.** Não pular Etapa 1 nunca, exceto se o DNA já existir. Sem DNA, todo o resto sai genérico.
- **Não acelerar Capture.** Se o criador travar e só vier 3 ideias, OK. Continue com Cure de 3 ideias e produza 1 newsletter + 1 carrossel + 1 stories. Melhor 3 peças com voz que 5 mornas.
- **Aprovação por peça mantida.** Mesmo dentro do trilho, cada peça passa pelo fluxo de aprovação do `/criar-*`.
