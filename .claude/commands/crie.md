---
name: mapa-do-criador:crie
description: Terceira coordenada do Mapa do Criador. Bloco principal de criação. Lê briefings curados da semana e gera newsletter + carrosséis + stories em sequência, com aprovação por peça. Acionada por /crie ou dentro de /ritual-3x3.
---

# Crie. Bloco Principal de Criação

Roda o bloco principal do Ritual 3x3. Lê briefings da semana e gera todas as peças (newsletter, carrosséis, stories), com aprovação por peça, em sequência.

## Usage

```
/crie
```

Tempo médio: 2h30.

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md`. Se não existir, oriente a rodar `/dna-criativo` primeiro.
3. Ler `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md`. Se não existir, oriente:
   ```
   Não achei briefings da semana corrente. Use /cure para gerar antes de rodar /crie.
   ```

### Passo 1. Plano da sessão

Mostrar o panorama dos briefings:

```
Briefings curados da semana {AAAA-Www}:

1. Newsletter — "{tema}"
2. Carrossel — "{tema}"
3. Carrossel — "{tema}"
4. Stories — "{tema}"

Modo de execução?
1. Automático: rodo um após o outro, com aprovação por peça (recomendado)
2. Manual: te mostro o plano e você aciona cada /criar-* na ordem que quiser
3. Selecionar quais peças criar agora
```

### Passo 2. Execução (modo automático)

Para cada peça, na ordem (newsletter → carrosséis → stories → posts avulsos):

1. Anunciar a peça: `🔍 Próximo passo: gerar {tipo} "{tema}". Tempo estimado: cerca de {X} segundos.`
2. Acionar o sub-command correspondente:
   - Newsletter: `/criar-newsletter {slug}`
   - Carrossel: `/criar-carrossel {slug}`
   - Stories: `/criar-stories {slug}`
   - Post avulso: `/criar-post-avulso {slug}` (se a skill existir; senão, pular ou sinalizar pendência)
3. Aguardar aprovação do criador na peça.
4. Após aprovação, oferecer:
   ```
   Peça {N}/{total} concluída.
   1. Continuar para próxima peça
   2. Pausar (continua quando você rodar /crie de novo)
   3. Encerrar a sessão por aqui
   ```

Se o criador escolher pausar, salvar estado em `meus-produtos/{ativo}/briefings/{AAAA-Www}-progresso.md` com:
```markdown
# Progresso do Crie. Semana {AAAA-Www}

- [x] Newsletter "{tema}"
- [x] Carrossel "{tema}"
- [ ] Carrossel "{tema}" (próxima)
- [ ] Stories "{tema}"

Última sessão: {AAAA-MM-DD HH:MM}
```

Quando o criador rodar `/crie` de novo, ler esse arquivo e continuar de onde parou.

### Passo 3. Execução (modo manual)

Mostrar:
```
Para rodar manualmente, acione na ordem que preferir:

1. /criar-newsletter {slug}
2. /criar-carrossel {slug}
3. /criar-carrossel {slug}
4. /criar-stories {slug}

Estado vai ficar em meus-produtos/{ativo}/briefings/{AAAA-Www}-progresso.md à medida que você concluir.
```

Sair do `/crie`. O controle volta para o criador.

### Passo 4. Resumo final

Ao concluir todas as peças (modo automático completo):

```
✅ Crie da semana {AAAA-Www} concluído:

- Newsletter: "{título}" → meus-produtos/{ativo}/entregas/newsletter/{slug}.md
- Carrossel 1: "{título}" → meus-produtos/{ativo}/entregas/carrosseis/{slug}.md
- Carrossel 2: "{título}" → meus-produtos/{ativo}/entregas/carrosseis/{slug}.md
- Stories: "{título}" → meus-produtos/{ativo}/entregas/stories/{slug}.md

Próximos passos sugeridos:
- Revisar cada peça em voz alta antes de publicar
- /carrossel-visual ou /banner-visual para gerar as imagens dos carrosséis
- /pagina-vercel ou /pagina-active para publicar a newsletter
```

## Princípios operacionais

- **Delegar, não duplicar.** O Crie só orquestra. A geração real acontece nos sub-commands.
- **Aprovação granular.** Cada peça passa pelo seu fluxo de aprovação. Nunca empurrar bloco.
- **Pausa amigável.** Se o criador precisar parar no meio, salvar progresso e retomar exatamente onde parou.
- **Tempo é orientação, não prisão.** 2h30 é a média. Se demorar mais, OK. Se demorar bem mais, sugerir dividir em 2 dias.
- **Não exceder o briefing.** Se a Cure trouxe 1 newsletter + 2 carrosséis + 1 stories, não gerar 3 carrosséis.
