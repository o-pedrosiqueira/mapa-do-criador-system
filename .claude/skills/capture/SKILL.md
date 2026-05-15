---
name: capture
description: >
  Base de conhecimento da primeira coordenada do Mapa do Criador (Capture).
  Registra ideias soltas na Caixa de Entrada em segundos, sem julgar, sem editar.
  Acionada pelo command /capture, usada durante a semana entre sessões do Ritual.
---

# Capture. Primeira Coordenada do Mapa do Criador

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Esta skill é rápida (registro de ideia em segundos), normalmente não exige anúncio de "Próximo passo". Confirme apenas a entrega com `✅ Concluído: ideia capturada. Caminho: meus-produtos/{ativo}/banco-de-ideias.md.`

## Princípio operacional

A regra do Capture é capturar. Sem editar, sem julgar, sem decidir se vale a pena ou não. O Cure (segunda coordenada) é quem cura. O Capture só preserva a fagulha antes que ela suma.

Tempo médio por captura: 20 a 60 segundos.

Frequência típica: 2 a 5 vezes por semana. Quem captura 5 vezes tem uma Caixa de Entrada robusta no Cure. Quem captura 0 vezes não tem matéria-prima para a sessão.

## O que é uma ideia capturável

Qualquer fagulha que apareceu durante a semana:
- Frase que veio no banho ou no trânsito
- Pergunta de seguidor (DM, comentário, story respondido)
- Trecho de leitura (livro, newsletter, post de outro criador)
- Conversa de mesa de bar, dentista, terapia
- Observação afiada sobre algo do mundo
- Tese que apareceu pronta na cabeça
- Sentimento ou desconforto que pede expressão
- Gancho jornalístico do dia (notícia, polêmica, lançamento)
- Discordância de algo que você leu / ouviu
- Conexão entre dois assuntos aparentemente desconexos

## Estrutura de uma ideia capturada

Cada ideia capturada vira uma linha na Caixa de Entrada, com 5 campos:

```markdown
- [ ] **{slug curto, 3 a 6 palavras}**
  - data: {AAAA-MM-DD}
  - texto: {1 a 3 frases descrevendo a ideia em estado bruto}
  - origem: {onde apareceu: banho, DM @fulano, leitura de Y, conversa, X notícia}
  - tom inicial: {se já apareceu pronto, ex: provocação, comentário cultural, ensaio breve}
```

Marcação `[ ]` indica "nova, ainda não curada". Vira `[x]` quando o Cure decide o destino (newsletter / carrossel / stories / post avulso / descarte) e gera o briefing.

## Onde a Caixa de Entrada mora

Em dois lugares:

1. **`meus-produtos/{ativo}/banco-de-ideias.md`** (local, sempre disponível). Fonte de verdade.
2. **Notion (opcional, espelhamento).** Se o criador tem o template "Oficina do Criador" no Notion configurado, o `/capture` pode espelhar a ideia lá automaticamente quando a integração Notion estiver disponível. Por enquanto, manter só o local.

## O que NÃO fazer

- Pedir ao criador para classificar a ideia já no Capture (newsletter? carrossel? stories?). Isso é função do Cure.
- Pedir ao criador para expandir a ideia. Capture preserva o estado bruto.
- Sugerir melhorias na frase ou no enquadramento. Isso quebra o fluxo.
- Recusar uma ideia "fraca". O Capture não filtra. O Cure filtra.

## Quando reusar

Ideias antigas marcadas `[x]` (já curadas) ficam no banco-de-ideias.md como histórico. Podem ser referenciadas em novas ideias ou em retrospectivas trimestrais. Não deletar.
