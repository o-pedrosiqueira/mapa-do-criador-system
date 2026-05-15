---
name: mapa-do-criador:ritual-3x3
description: Rodar o Ritual 3x3 semanal completo do Mapa do Criador. Sessão de 3 horas que orquestra Cure (30 min) + Crie principal (90 min) + Crie complementar (60 min). Entrega 1 newsletter + 2 a 3 carrosséis + 1 stories da semana.
---

# Ritual 3x3. Sessão Semanal Completa

Roda o ciclo completo do Mapa do Criador: revisa a Caixa de Entrada, escolhe 4 a 5 ideias da semana, gera briefings e cria todas as peças (newsletter + carrosséis + stories). Total: 3 horas.

## Usage

```
/ritual-3x3
```

Ou continuar de onde parou (retomar sessão pausada):

```
/ritual-3x3 retomar
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md`. Se não existir, oriente a rodar `/dna-criativo` primeiro.
3. Ler `meus-produtos/{ativo}/banco-de-ideias.md`. Se estiver vazio ou tiver menos de 3 ideias, alertar:
   ```
   Sua Caixa de Entrada tem {N} ideias. O Ritual costuma rodar bem a partir de 5 ideias.

   1. Rodar mesmo assim
   2. Capturar mais ideias agora antes de continuar
   3. Pular o Ritual desta semana
   ```
4. Verificar se existe `meus-produtos/{ativo}/ritual/{AAAA-Www}-ritual.md`:
   - Se existe e tem `Status: em andamento`: oferecer retomar de onde parou
   - Se existe e tem `Status: concluído`: alertar que o Ritual da semana já foi feito e perguntar se quer rodar de novo

### Passo 1. Boas-vindas e plano

```
Ritual 3x3 da semana {AAAA-Www}. Vamos.

Plano:
- Cure (30 min): revisar Caixa de Entrada e gerar 4 a 5 briefings
- Crie principal (90 min): 1 newsletter + 2 a 3 carrosséis
- Crie complementar (60 min): 1 stories + posts avulsos (se houver)
- Pausas de 5 a 10 min entre os blocos

Modo:
1. Contínuo (recomendado se você reservou as 3 horas)
2. Dividir em 2 dias (Cure + Crie principal hoje, Crie complementar outro dia)
3. Só o Cure agora (deixar Crie para depois)
```

### Passo 2. Bloco 1. Cure

Anuncie: `🔍 Próximo passo: bloco 1, Cure. Revisar Caixa de Entrada e gerar briefings. Tempo estimado: cerca de 30 minutos.`

Acionar `/cure` internamente (delegação). Aguardar conclusão (briefings salvos em `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md`).

Após Cure, salvar/atualizar `ritual/{AAAA-Www}-ritual.md` marcando bloco 1 concluído.

Oferecer pausa:
```
Bloco 1 concluído. Pausa de 5 a 10 minutos?
1. Sim, te dou um sinal quando voltar
2. Não, bora seguir
3. Encerrar aqui (continua quando você rodar /ritual-3x3 retomar)
```

### Passo 3. Bloco 2. Crie principal

Anuncie: `🔍 Próximo passo: bloco 2, Crie principal. Gerar newsletter + carrosséis. Tempo estimado: 60 a 90 minutos.`

Acionar `/crie` em modo automático para newsletter e carrosséis. Cada peça passa pelo seu fluxo de aprovação.

Após cada peça, atualizar `ritual/{AAAA-Www}-ritual.md`.

Ao terminar o bloco 2, oferecer pausa:
```
Bloco 2 concluído. {N} peças entregues. Pausa?
1. Sim
2. Não, bora pro Crie complementar
3. Encerrar aqui (continua quando você rodar /ritual-3x3 retomar)
```

### Passo 4. Bloco 3. Crie complementar

Anuncie: `🔍 Próximo passo: bloco 3, Crie complementar. Gerar stories e posts avulsos. Tempo estimado: 30 a 60 minutos.`

Acionar `/criar-stories` para o briefing de stories. Acionar `/criar-post-avulso` para cada briefing de post avulso (se houver e a skill existir).

Após cada peça, atualizar `ritual/{AAAA-Www}-ritual.md`.

### Passo 5. Resumo final

Ao concluir todos os blocos, marcar `ritual/{AAAA-Www}-ritual.md` como `Status: concluído` e mostrar:

```
✅ Ritual 3x3 da semana {AAAA-Www} concluído.

Cure:
- {N} ideias revisadas, {M} curadas, {P} adiadas, {Q} descartadas

Crie:
- 1 newsletter: "{título}" → meus-produtos/{ativo}/entregas/newsletter/{slug}.md
- {N} carrosséis: "{título 1}", "{título 2}"
- 1 sequência de stories: "{título}"
- {N} posts avulsos: {títulos}

Tempo total aproximado: {duração}

Próximos passos sugeridos:
- Revisar cada peça em voz alta antes de publicar
- /carrossel-visual para gerar as imagens dos carrosséis
- /pagina-active ou /pagina-vercel para publicar a newsletter
- Voltar a /capture durante a semana para alimentar o próximo Ritual

Boa semana editorial.
```

### Passo 6. Painel

Acione `python3 scripts/painel-incremental.py` (sem flag --secao para regenerar todas as seções afetadas).

## Modo retomar

Se o command vem com `retomar` (ou se na sessão existe `ritual/{AAAA-Www}-ritual.md` com `Status: em andamento`):

1. Ler o arquivo de estado.
2. Mostrar o que já foi feito e o que falta:
   ```
   Retomando o Ritual da semana {AAAA-Www}:
   - [x] Cure
   - [x] Newsletter "{tema}"
   - [x] Carrossel "{tema}"
   - [ ] Carrossel "{tema}" (próxima)
   - [ ] Stories "{tema}"

   Continuar?
   1. Sim, segue de onde parei
   2. Encerrar a sessão (o que está feito permanece salvo)
   ```
3. Se sim, retomar exatamente na próxima peça pendente.

## Princípios operacionais

- **Orquestrar, não duplicar.** Toda lógica de geração mora nas sub-skills.
- **Pausa amigável entre blocos.** Sempre oferecer.
- **Estado preservado.** Pausa e retomada não perdem progresso.
- **Respeitar o "não".** Se o criador escolher pular, registrar e seguir.
- **Tempo é orientação.** 3 horas é a média.
