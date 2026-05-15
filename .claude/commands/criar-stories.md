---
name: mapa-do-criador:criar-stories
description: Criar sequência de stories conversacional do Mapa do Criador. Bastidor, ampliação ou contraponto em 3 a 6 frames. Aplica DNA Criativo como filtro. Geralmente amarra com newsletter ou carrossel da semana.
---

# Criar Stories. Sequência Conversacional

Cria uma sequência de stories de 3 a 6 frames aplicando o DNA Criativo do criador ativo. Modalidades: bastidor, ampliação, contraponto.

## Usage

```
/criar-stories
```

Ou com slug do briefing:

```
/criar-stories renovacao-de-voz-bastidor
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md` (filtro obrigatório).
3. Ler `meus-produtos/{ativo}/perfil.md`.
4. Procurar briefing em `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md`. Localizar briefing de stories. Se não há, perguntar:
   ```
   Não achei briefing curado para stories. Quer:
   1. Rodar /cure primeiro (recomendado)
   2. Criar do zero respondendo perguntas
   3. Stories como amarração de newsletter ou carrossel já criados nesta semana?
   ```

### Passo 1. Decisão de modalidade

Se o briefing não trouxe modalidade explícita, perguntar:
```
Qual modalidade dessas stories?
1. Bastidor (tô escrevendo X, travei em Y, conta pra mim)
2. Ampliação (a newsletter falou de X, o que não coube foi Y)
3. Contraponto (defendi X mas dou desconto pra outro lado)
```

Se a stories amarra com newsletter/carrossel da semana, ler também esse arquivo para pegar a tese e gerar amarração coerente.

### Passo 2. Decisão de número de frames

```
Quantos frames?
1. 3 frames (curto, abertura + núcleo + CTA)
2. 4 frames (recomendado)
3. 5 frames
4. 6 frames (longo, justificável se o tema pede)
```

Default: 4 frames.

### Passo 3. Geração

Anuncie: `🔍 Próximo passo: gerar sequência de {N} frames. Tempo estimado: cerca de 45 segundos.`

Carregue a skill `criar-stories` e gere:
- Frame 1: abertura conversacional
- Frames 2 a N-1: núcleo (bastidor / ampliação / contraponto)
- Frame final: CTA + ressonância (com recurso específico)

**Aplicação obrigatória do DNA Criativo (antes de exibir):**

1. Tom soa áudio-para-amigo, não post profissional?
2. Mantras / jargões próprios aparecem em pelo menos 1 frame?
3. Nenhuma palavra "evitar" do DNA?
4. Nenhum coachês ("vem comigo", "bora", "se liga", etc., exceto se estiver nos mantras do DNA)?
5. Nenhuma das 10 proibições do CLAUDE.md?
6. Frame final tem fechamento real, não só "swipe pra próximo!"?
7. Caixa de pergunta / enquete é específica, não vaga?

Se algum item falhar: reescreva.

### Passo 4. Aprovação

Mostrar sequência completa. Pedir:
```
1. Aprovar e salvar
2. Quero ajustar (especifique frame)
```

Edição cirúrgica.

### Passo 5. Salvar

Salvar em `meus-produtos/{ativo}/entregas/stories/{AAAA-MM-DD-tema-em-slug}.md`.

Se a stories amarra com newsletter / carrossel da semana, anotar o slug do amarrado no cabeçalho.

### Passo 6. Painel

Acione `python3 scripts/painel-incremental.py --secao stories` (se a seção existir).

### Passo 7. Entrega

```
✅ Concluído: stories "{tema}" salva. Caminho: meus-produtos/{ativo}/entregas/stories/{slug}.md.

{Se ainda não criou outros formatos da semana:}
Sugestão de próximo passo:
- /criar-newsletter {slug} para a newsletter da semana
- /criar-carrossel {slug} para o carrossel da semana

{Se já fez todos os formatos da semana:}
Você fechou a semana editorial: newsletter + carrossel + stories. Boa.
```

## Princípios operacionais

- **Áudio para amigo, não post profissional.** Tom é o critério #1 das stories.
- **Específico, não vago.** Caixa de pergunta com texto específico. Enquete com opções polarizadas.
- **Frame curto.** Cada frame cabe em 2 a 4 frases. Mais que isso, leitor não lê.
- **Recurso visual com intenção.** Cada frame indica o tipo de recurso (foto, sticker, texto puro, print, caixa de pergunta, enquete).
- **Edição cirúrgica em ajustes.**
