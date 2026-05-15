---
name: crie
description: >
  Base de conhecimento da terceira coordenada do Mapa do Criador (Crie).
  Bloco principal de criação. Lê briefings curados e gera newsletter + carrosséis + stories
  da semana, em sequência, aplicando DNA Criativo a cada peça. Acionada por /crie ou dentro de /ritual-3x3.
---

# Crie. Terceira Coordenada do Mapa do Criador

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Esta skill é orquestradora. Cada sub-skill (criar-newsletter, criar-carrossel, criar-stories) tem seu próprio anúncio. O Crie anuncia o início e o fim do bloco.

## Objetivo

Transformar os 4 a 5 briefings curados da semana em **conteúdo pronto para publicar**: 1 newsletter completa, 2 a 3 carrosséis para Instagram, 1 sequência de stories (e opcionalmente posts avulsos).

Tempo médio: 2h30 (bloco principal do Ritual 3x3 semanal).

## Como o Crie funciona

O Crie **não escreve** diretamente. Ele lê o arquivo de briefings da semana e **delega** para os comandos especializados na ordem certa:

1. `/criar-newsletter` para o briefing de newsletter
2. `/criar-carrossel` para cada briefing de carrossel (1 a 3 chamadas)
3. `/criar-stories` para a sequência de stories
4. (opcional) `/criar-post-avulso` para briefings de post avulso, se houver

Entre uma peça e outra, oferecer pausa para o criador respirar e revisar o que foi entregue até ali. Não empurrar tudo de uma vez sem janela de revisão.

## Modos de execução

### Modo automático (default)

Roda tudo em sequência, com aprovação por peça, mas sem necessidade de o criador acionar cada command. O Crie:

1. Lê briefings da semana
2. Anuncia o plano: "Vou criar 1 newsletter + 2 carrosséis + 1 stories. Posso começar?"
3. Para cada peça, chama o command correspondente e aguarda aprovação do criador
4. Avança para a próxima peça
5. Ao final, mostra resumo da semana

### Modo manual

Se o criador prefere granular, mostra o plano e pede para ele acionar manualmente cada `/criar-*`. O Crie sai e deixa o controle com o criador.

## Aprovação por peça (obrigatória)

A cada peça gerada, o sub-command faz seu próprio fluxo de aprovação. O criador pode:
- Aprovar e ir para a próxima
- Pedir ajustes na peça (edição cirúrgica)
- Pular a peça (não criar agora)
- Pausar o Crie e continuar depois

## Resumo de fim de Crie

Ao final, o Crie mostra:

```
✅ Crie da semana {AAAA-Www} concluído:

- Newsletter: "{título}" → meus-produtos/{ativo}/entregas/newsletter/{slug}.md
- Carrossel 1: "{título}" → meus-produtos/{ativo}/entregas/carrosseis/{slug}.md
- Carrossel 2: "{título}" → meus-produtos/{ativo}/entregas/carrosseis/{slug}.md
- Stories: "{título}" → meus-produtos/{ativo}/entregas/stories/{slug}.md

Próximos passos sugeridos:
- Revisar cada peça em voz alta antes de publicar
- /carrossel-visual ou /banner-visual para gerar as imagens dos carrosséis
- /pagina-vercel ou /pagina-active para publicar a newsletter como página ou enviar por email
```

## Princípios operacionais

- **Delegar, não duplicar.** O Crie não reimplementa lógica dos sub-commands. Só orquestra.
- **Aprovar por peça.** Nunca empurrar tudo em bloco sem aprovação granular.
- **Pausa opcional entre peças.** Criador pode parar no meio e retomar depois.
- **Não escalar peças além do briefing.** Se o briefing diz 1 newsletter + 2 carrosséis, não criar 4 carrosséis.
- **Respeitar a regra dos 3x3.** Se a sessão estourar muito além de 3 horas, sugerir pausa e continuação em outro dia.
