---
name: mapa-do-criador:agenda-publicacao
description: Agendar uma data de publicacao para uma peca ja criada (newsletter, carrossel, stories, post avulso). Adiciona metadata no inicio do arquivo .md (publicar_em: AAAA-MM-DD HH:MM, plataforma: X) e o calendario editorial passa a mostrar a peca como agendada para essa data, em vez de so a data de criacao.
---

# Agenda Publicação. Marcar Data Futura para uma Peça

Agenda a publicação de uma peça já criada. Adiciona metadados de agendamento (`publicar_em`, `plataforma`, `status`) no cabeçalho do arquivo `.md`. O Calendário Editorial no painel reflete a data agendada em vez da data de criação.

## Usage

```
/agenda-publicacao
```

Ou direto com peça e data:

```
/agenda-publicacao 2026-W20-renovacao-de-voz 2026-05-22 10:00 newsletter
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Operação curta (5 a 15 segundos), normalmente sem anúncio de Próximo passo.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Identificar a peça a agendar:
   - Se o command veio com slug, localizar em `entregas/newsletter/`, `entregas/carrosseis/`, `entregas/stories/`, `entregas/posts/`.
   - Se não, listar as 10 peças mais recentes em todas as pastas e pedir escolha.

### Passo 1. Coletar dados de agendamento

Se o command já veio com data, plataforma e horário, pular para o passo 2. Senão, perguntar UMA pergunta por vez:

```
Quando publicar essa peca?
1. Hoje
2. Amanha
3. Esta semana (escolho o dia)
4. Proxima semana
5. Data especifica (digito)
```

Default para newsletter: dia da semana definido pelo criador (geralmente segunda ou quinta). Para carrossel: dia diferente do da newsletter. Para stories: dia da newsletter ou dia seguinte. Para post avulso: qualquer dia.

Em seguida:
```
Que horas?
1. Manha (09:00)
2. Almoco (12:00)
3. Tarde (15:00)
4. Noite (19:00)
5. Outro (digito)
```

E plataforma (se ainda não definida pelo formato):
```
Plataforma principal?
1. Newsletter (Substack/Beehiiv/ActiveCampaign/Lovable/local)
2. Instagram (feed)
3. Instagram (stories)
4. LinkedIn
5. Twitter/X
6. Threads
7. Multiplas (todas)
```

### Passo 2. Validação

Antes de salvar, mostrar:
```
Resumo do agendamento:
- Peça: {tipo} "{titulo}"
- Arquivo: {caminho}
- Publicar em: {AAAA-MM-DD HH:MM}
- Plataforma: {plataforma}

1. Confirmar e salvar
2. Quero ajustar
```

### Passo 3. Aplicar metadata

Use `Edit` ou `Read` + `Write` para adicionar/atualizar os 3 campos no início do arquivo .md, logo após o título (linha `# {titulo}`):

```markdown
# {titulo}

**publicar_em:** 2026-05-22 10:00
**plataforma:** Substack
**status:** agendada
```

Se o arquivo já tiver esses campos (peça já tinha agenda anterior), substituir os valores. Não duplicar.

Status possíveis:
- `rascunho` (default em peças recém-criadas, sem agendamento)
- `agendada` (agendamento marcado, ainda não publicou)
- `publicada` (já saiu no ar — pode ser atualizado depois com `/publicacao-marcar`)
- `pausada` (criador pediu segurar)

### Passo 4. Painel

O hook `auto-painel-mapa.js` vai detectar a edição automaticamente e regerar as seções `calendario` e `esta-semana`. Não precisa rodar nada manualmente.

### Passo 5. Entrega

```
✅ Concluído: "{titulo}" agendada para {AAAA-MM-DD HH:MM} no {plataforma}.

Caminho: meus-produtos/{ativo}/entregas/{tipo}/{slug}.md.

Dica: no Calendário Editorial do painel, a peça agora aparece na semana {AAAA-Www}. Recarregue a aba do navegador.
```

### Sugestão de próximo passo

Se a peça é newsletter e ainda não tem versão HTML:
```
Sugestao: gerar versao HTML publicavel com /criar-newsletter --apenas-html {slug}
```

Se é carrossel sem imagens:
```
Sugestao: gerar imagens dos slides com /carrossel-visual {slug}
```

Se é stories sem briefing visual:
```
Sugestao: rodar /banner-visual para os frames que precisam de imagem
```

## Listagem e cancelamento

Para listar todas as peças agendadas:

```
/agenda-publicacao listar
```

Mostra cards com peça + data + status, ordenadas por data crescente.

Para cancelar um agendamento:

```
/agenda-publicacao cancelar {slug}
```

Volta o status para `rascunho` e remove `publicar_em` e `plataforma`.

## Princípios operacionais

- **Não publica nada de verdade.** O `/agenda-publicacao` só marca metadata. Publicar continua sendo manual (ou via integração com Substack, ActiveCampaign, etc. via outras skills).
- **Lembrete depois.** Quando o calendário mostrar peça agendada para hoje ou ontem, o painel destaca em moss. O criador é quem decide se publicou.
- **Não conflita com a convenção de nome.** O slug do arquivo continua `AAAA-Www-tema.md` (data de criação no formato semana ISO). A data de publicação é metadata separada no conteúdo. Isso permite criar uma peça hoje e agendar para 3 semanas adiante sem confundir o slug.
- **Edição cirúrgica.** Só os 3 campos (`publicar_em`, `plataforma`, `status`) são tocados. Resto do arquivo intacto.
