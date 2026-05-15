---
name: ritual-3x3
description: >
  Base de conhecimento do Ritual 3x3 do Mapa do Criador. Sessão semanal de 3 horas
  que orquestra Cure (30 min) + Crie principal (90 min) + Crie complementar (60 min).
  Acionada por /ritual-3x3.
---

# Ritual 3x3. Base de Conhecimento

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. O Ritual 3x3 é orquestrador. Cada sub-bloco (Cure, Crie) anuncia o próprio tempo. O Ritual anuncia o início e o fim da sessão.

## O que é o Ritual 3x3

Sessão semanal de 3 horas que substitui o "vou postar todo dia" por "vou produzir uma semana inteira de conteúdo em 3 horas, uma vez por semana".

A regra de ouro do método: **3 horas que valem 7 dias de conteúdo, preservando a voz do criador**.

## Estrutura da sessão (3 blocos)

### Bloco 1. Cure (30 min)

Revisa a Caixa de Entrada da semana, escolhe 4 a 5 ideias e gera os briefings. Detalhe completo na skill `cure`.

Acionado por `/cure` dentro do Ritual.

### Bloco 2. Crie principal (90 min)

Gera as peças mais pesadas: 1 newsletter completa + 2 a 3 carrosséis para Instagram. Detalhe completo na skill `crie` (que por sua vez orquestra `criar-newsletter` e `criar-carrossel`).

### Bloco 3. Crie complementar (60 min)

Gera as peças mais leves: 1 sequência de stories + posts avulsos (se houver no briefing) + ajustes finais na voz própria do criador.

Acionado também pela skill `crie`.

## Modo de execução

### Modo contínuo (default)

O criador roda `/ritual-3x3` e o assistente conduz a sessão inteira em sequência:

1. Cure → criador escolhe ideias, gera briefings
2. Pausa de 5 a 10 minutos (criador respira)
3. Crie principal → newsletter + carrosséis
4. Pausa de 5 a 10 minutos
5. Crie complementar → stories + posts avulsos
6. Resumo final da semana

### Modo dividido

Se o criador prefere dividir a sessão em 2 dias (Cure + Crie principal em um dia, Crie complementar em outro), o Ritual respeita. Cada bloco pode ser rodado isoladamente em sessões diferentes, com o progresso preservado.

## Estado do Ritual

O Ritual salva estado em `meus-produtos/{ativo}/ritual/{AAAA-Www}-ritual.md` para permitir pausa e retomada:

```markdown
# Ritual 3x3. Semana {AAAA-Www}

**Iniciado em:** {AAAA-MM-DD HH:MM}
**Última atividade:** {AAAA-MM-DD HH:MM}

## Bloco 1. Cure (30 min)
- [x] Caixa de Entrada revisada
- [x] 4 ideias selecionadas
- [x] Briefings gerados

## Bloco 2. Crie principal (90 min)
- [x] Newsletter "{tema}"
- [x] Carrossel "{tema}"
- [ ] Carrossel "{tema}" (próxima)

## Bloco 3. Crie complementar (60 min)
- [ ] Stories
- [ ] Posts avulsos

**Status:** em andamento
```

Quando o criador rodar `/ritual-3x3` de novo, o assistente lê esse arquivo e retoma de onde parou.

## Quando pular o Ritual

Não é toda semana que cabe Ritual completo. Pular é OK quando:

- A Caixa de Entrada tem 0 a 2 ideias e não vale a pena curar
- A semana foi atípica (viagem, doença, evento de família)
- O criador percebe que não tem energia editorial naquele momento

O Ritual respeita o "não". Registrar em `ritual/{AAAA-Www}-pulado.md`:
```markdown
# Ritual pulado. Semana {AAAA-Www}

**Motivo:** {opcional}
**Decidido em:** {AAAA-MM-DD}
```

Pular 1 semana é manutenção. Pular 4 semanas consecutivas é alerta (provavelmente o método ou o DNA precisam de revisão, não a disciplina do criador).

## Resumo final da sessão

Ao concluir o Ritual completo, mostrar:

```
✅ Ritual 3x3 da semana {AAAA-Www} concluído.

Cure:
- {N} ideias revisadas, {M} curadas, {P} adiadas, {Q} descartadas

Crie:
- 1 newsletter: "{título}" → {caminho}
- {N} carrosséis: "{título 1}", "{título 2}" → {caminhos}
- 1 stories: "{título}" → {caminho}
- {N} posts avulsos: {títulos} → {caminhos}

Tempo total: {duração aproximada}

Próximos passos sugeridos:
- Revisar cada peça em voz alta antes de publicar
- /carrossel-visual para gerar imagens dos carrosséis
- /pagina-active para enviar a newsletter
- Voltar a /capture durante a semana

Boa semana editorial.
```

## Princípios operacionais

- **Orquestrar, não duplicar.** Tudo que é geração acontece nas sub-skills (cure, crie, criar-*). O Ritual só orquestra.
- **Pausa amigável.** Sempre oferecer pausa entre blocos. Não empurrar 3 horas sem janela.
- **Respeitar o "não".** Pular o Ritual de uma semana é decisão do criador, não falha.
- **Tempo é orientação.** 3 horas é a média. Variações de 30 minutos para mais ou menos são normais.
- **Estado preservado.** Pausa e retomada não perdem progresso.
