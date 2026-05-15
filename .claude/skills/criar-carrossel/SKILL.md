---
name: criar-carrossel
description: >
  Base de conhecimento para criar carrossel autoral de 10 slides para Instagram.
  Tese central + estrutura editorial. Preserva a voz do criador via DNA Criativo.
  Acionada por /criar-carrossel ou dentro de /crie. Diferente do /carrossel-nunca
  (que é um formato específico viral) e do /carrossel-visual (que é geração de imagens).
---

# Criar Carrossel. Base de Conhecimento

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Esta skill faz operação longa (gerar 10 slides + briefing visual). Anuncie com `🔍 Próximo passo: gerar carrossel "{tema}" aplicando o DNA Criativo. Tempo estimado: cerca de 90 segundos.`

## Carrossel autoral. O que é

Carrossel de 10 slides com **tese central** sustentada por argumento, preservando a voz autoral do criador. Não é listicle ("5 erros que..."). Não é tutorial passo a passo. É argumento editorial em formato slide.

Referência de estrutura: o carrossel autoral funciona como uma newsletter condensada em 10 movimentos visuais. Cada slide carrega uma ideia inteira, não uma frase solta.

## Estrutura padrão (10 slides)

### Slide 1. Capa (gancho + tese)
- **Comprimento:** título com 4 a 9 palavras + 1 a 2 linhas de subtexto
- **Função:** parar o scroll. Mostrar a tese central já na capa. Quem viu a capa entendeu sobre o que é.
- **Padrões que funcionam:** afirmação afiada, paradoxo, contraponto à narrativa dominante, observação afiada
- **Proibido:** pergunta retórica ("Você sabe por que X?"), pergunta como gancho, "tudo o que você precisa saber sobre X"

### Slides 2 a 4. Contexto
- **Comprimento por slide:** 30 a 70 palavras
- **Função:** situar o leitor no debate. Cronologia, fato citado, observação cultural, cena pessoal.
- **Ritmo:** um slide pode ser só uma frase forte com bastante espaço em branco. Outro pode ter parágrafo curto.

### Slides 5 a 7. Análise / argumento
- **Comprimento por slide:** 40 a 80 palavras
- **Função:** desenvolver a tese em 2 a 3 movimentos. É o coração do carrossel.
- **Movimentos típicos:** contraponto, ampliação, distinção, paradoxo, conexão inesperada
- **Regra:** a tese precisa ter dono. Frase que qualquer um do nicho poderia ter escrito é banida.

### Slides 8 a 9. Provocação ou exemplo
- **Comprimento por slide:** 30 a 70 palavras
- **Função:** apertar o argumento. Exemplo concreto, contraexemplo, anti-conclusão, ou conexão com um caso da vida do leitor.

### Slide 10. Assinatura + CTA
- **Comprimento:** 1 a 3 frases + CTA
- **CTA por tipo (do DNA Criativo do criador):**
  - Convite à conversa: "Salva e me conta nos comentários: você concorda?"
  - Pitch comercial (só se conteúdo levou): "Se você quer o sistema completo, [link na bio]"
  - Leitura adicional: "Se quiser puxar o fio, leia [obra]"
  - Sem CTA: assinatura + frase de fechamento que ressoa

### Briefing visual (anexo ao carrossel)

Junto com o texto dos 10 slides, gere um **briefing visual** descrevendo:

- Paleta de cor (puxar do DNA do criador, se definido)
- Tipografia (geralmente serif editorial + sans para subtítulo)
- Densidade de texto por slide (muito espaço em branco vs. denso)
- Sugestão de imagem por slide (se aplicável: fotografia, ilustração, só tipografia)
- Animação ou estática (geralmente estática para autoral; animação só em capa)

O briefing visual é input para `/banner-visual`, `/carrossel-visual` ou para o próprio criador montar no Canva / Figma.

## Voz autoral. Aplicação obrigatória do DNA

Antes de entregar, aplicar frase por frase o DNA Criativo do criador ativo. Em particular:

- Cada slide carrega o tom do criador (mesmo registro em todos os 10)
- Mantras / jargões próprios aparecem em 1 a 3 slides centrais (5 a 8)
- Vocabulário base aparece pelo menos em 2 slides
- Nenhuma palavra da lista "evitar" do DNA está em qualquer slide
- Nenhuma das 10 proibições do CLAUDE.md está em qualquer slide
- CTA respeita o tipo definido no DNA / briefing

## Convenção de arquivo

Salvar em `meus-produtos/{ativo}/entregas/carrosseis/{AAAA-MM-DD-tema-em-slug}.md`.

Estrutura do arquivo:

```markdown
# Carrossel. {tema}

**Data:** {AAAA-MM-DD}
**Tese central:** {tese}
**CTA:** {tipo de CTA}

---

## Slide 1. Capa

{título}

{subtexto, se houver}

---

## Slide 2. Contexto

{texto do slide}

---

(repetir até Slide 10)

---

## Briefing visual

- **Paleta:** {...}
- **Tipografia:** {...}
- **Densidade:** {...}
- **Sugestão de imagem por slide:** {...}
```

## Anti-padrões do carrossel autoral

- ❌ Listicle ("5 erros", "7 dicas", "10 coisas que você não sabe")
- ❌ Tutorial passo a passo ("Como fazer X em 10 slides")
- ❌ Pergunta retórica na capa
- ❌ Slide 10 só com "siga, curte, salva, compartilha" sem fechamento autoral
- ❌ Frase que qualquer criador do nicho poderia ter escrito (genericismo)
- ❌ Texto longo demais por slide (acima de 90 palavras = leitor não lê)

## Skills relacionadas

- `cure` (gera briefings que alimentam o carrossel)
- `dna-criativo` (DNA aplicado como filtro)
- `carrossel-visual` (geração de imagens com IA para cada slide)
- `banner-visual` (capa avulsa, se quiser destacar como banner)
- `revisora` (revisão final, em transição)
