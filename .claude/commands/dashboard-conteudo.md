---
name: mapa-do-criador:dashboard-conteudo
description: Gerar dashboard analytics da producao editorial do criador ativo. Mostra peças por formato, semanas mais produtivas, palavras totais escritas, formato mais frequente, ritmo medio do Ritual 3x3, peças com agendamento vs publicadas. HTML standalone editorial.
---

# Dashboard Conteúdo. Analytics da Produção Editorial

Gera um dashboard HTML standalone com analytics da produção do criador ativo. Mostra padrões e tendências: o que você produz mais, qual semana foi mais densa, quanto você escreveu no total, em qual ritmo do Ritual está operando.

## Usage

```
/dashboard-conteudo
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/perfil.md` (nome do criador).
3. Verificar se há entregas em qualquer pasta:
   - `meus-produtos/{ativo}/entregas/newsletter/`
   - `meus-produtos/{ativo}/entregas/carrosseis/`
   - `meus-produtos/{ativo}/entregas/stories/`
   - `meus-produtos/{ativo}/entregas/posts/`

Se nenhuma peça em nenhuma pasta:
```
Voce ainda nao tem pecas editoriais salvas. Use /capture para registrar ideias e /criar-newsletter, /criar-carrossel ou /criar-stories para criar a primeira peca.
```

### Passo 1. Coletar métricas

Anunciar: `🔍 Próximo passo: gerar dashboard analytics. Tempo estimado: cerca de 30 segundos.`

Varrer as 4 pastas de entrega e calcular:

**Métricas absolutas:**
- Total de peças por formato
- Total de peças geral
- Total de palavras escritas (contar apenas o corpo, descontar cabeçalhos)
- Total de carrosséis × 10 = slides escritos
- Total de stories × frames médios = frames roteirizados
- Total de briefings salvos em `briefings/`
- Total de ideias capturadas (Caixa de Entrada + Histórico)

**Métricas temporais:**
- Período coberto (data da primeira peça → data da última peça)
- Semana mais produtiva (qual semana ISO tem mais peças)
- Frequência média (peças por semana ao longo do período)
- Status do Ritual 3x3: quantas semanas tiveram newsletter + carrossel + stories completos
- Semanas puladas (registradas em `banco-de-ideias.md ## Semanas puladas`)

**Métricas por status (se houver metadata de agendamento):**
- Rascunhos (sem `publicar_em`)
- Agendadas (`status: agendada`)
- Publicadas (`status: publicada`)
- Pausadas (`status: pausada`)

**Top temas (análise rasa):**
- Palavras mais frequentes nos títulos das peças (excluindo stopwords)
- Top 5 ângulos editoriais detectados (heurística por padrões nos títulos)

### Passo 2. Gerar HTML standalone

Salvar em `meus-produtos/{ativo}/dashboard-conteudo.html`.

Aplicar Checklist 2 (Design HTML) do CLAUDE.md: paleta editorial (paper + ink + moss), Instrument Serif + Newsreader + Geist + Geist Mono, sinete ✦ no topo.

Estrutura da página:

```
[HEADER]
✦ Mapa do Criador. Dashboard de Conteúdo · {nome do criador}
{periodo coberto} · gerado em {AAAA-MM-DD HH:MM}

[BIG METRICS — grade 4 colunas]
Total de peças. {N}
Total de palavras. {M}
Semanas ativas. {Q}
Frequência média. {X} peças/semana

[BREAKDOWN POR FORMATO — grade 4 colunas]
Newsletter {N} · Carrossel {N} · Stories {N} · Post {N}
(cada um com mini-chart de evolução semanal)

[CALENDARIO SEMANAL]
Heatmap visual: cada celula = semana. Cor = quantidade de peças (paper → moss conforme densidade).

[TOP TEMAS]
Lista das 10 palavras mais frequentes nos titulos com contagem

[STATUS DE PUBLICACAO — donut/barras]
Rascunhos vs Agendadas vs Publicadas vs Pausadas

[FOOTER]
✦ Pedro Siqueira · 2026
"Três horas, sete dias"
```

Usar componentes editoriais reutilizáveis do design system. Não inventar CSS novo do zero.

### Passo 3. Abrir no navegador

Depois de salvar, abrir o HTML no navegador padrão (mesma lógica do `/painel-abrir`).

### Passo 4. Entrega

```
✅ Concluído: dashboard de conteúdo salvo. Caminho: meus-produtos/{ativo}/dashboard-conteudo.html.

Resumo rapido:
- Total de pecas: {N}
- Periodo coberto: {datas}
- Frequencia media: {X} pecas/semana
- Semana mais produtiva: {AAAA-Www} com {N} pecas

Use esse dashboard para:
- Identificar formatos em que voce gera mais (sinal de afinidade)
- Detectar semanas em que pulou Ritual (talvez seja hora de revisar ritmo)
- Ver o volume real escrito em palavras (motivacao em meses de dúvida)
```

## Princípios operacionais

- **Sem analytics de engajamento.** O dashboard é da PRODUÇÃO, não da performance. Quantas curtidas o post teve está fora do escopo (isso vai em `/dashboard-social` que puxa dados de Instagram via Apify).
- **Heurístico, não exato.** Top temas usa análise rasa (palavras frequentes em títulos). Não usa NLP nem clustering. É só para o criador olhar e refletir.
- **HTML standalone.** Não depende do painel-entregas.html. Pode ser exportado, mandado por email, hospedado em outro lugar.
- **Atualizável.** Rodar `/dashboard-conteudo` de novo sobrescreve o arquivo. Idempotente.
- **Paleta editorial.** Sempre. Não inventar cores. Usar variáveis do design system.
