---
name: workshop-marketing:carrossel-nunca
description: Gera carrossel viral de 6 slides no estilo "Nunca [faça X]" para Instagram. 5 slides com proibições contraintuitivas, práticas e funcionais (alimentadas pelas Urgências Ocultas e Argumentos do produto ativo) + 1 slide de CTA. Entrega arquivo .md com texto dos 6 slides e 6 prompts de imagem prontos para colar no ChatGPT, Whisk ou Gemini.
allowed-tools: Read, Write, Bash
---

# Carrossel Nunca. 6 Slides de Proibições Virais

Gera carrossel no formato "Nunca [faça X]" para Instagram, com 5 proibições contraintuitivas + 1 CTA, prontas para postar.

## Quando usar

- Você quer um carrossel de gancho forte (proibições funcionam bem para alcance e salvamento)
- O nicho do produto tem mitos ou erros comuns que o aluno pode quebrar
- Quer um arquivo `.md` pronto com texto + prompts de imagem para gerar os slides em ferramenta externa

## Diferença para `/carrossel`

- `/carrossel` (skill `carrossel-visual`). Carrossel genérico em 9 etapas guiadas, com geração automática de foto por card via API (OpenRouter ou Freepik).
- `/carrossel-nunca`. Formato fixo de 6 slides "Nunca [ação]", focado em proibições contraintuitivas. Entrega prompts de imagem para gerar fora do projeto (ChatGPT, Whisk, Gemini).

## Como usar

```
/carrossel-nunca
```

Aciona a skill `carrossel-nunca`, que vai:
1. Ler o produto ativo, perfil e identidade do consumidor
2. Pré-preencher nicho, @ e cores a partir do perfil
3. Perguntar tom de comunicação e estilo de design visual
4. Gerar 6 slides usando Urgências Ocultas e Argumentos como base
5. Pedir aprovação do texto
6. Gerar 6 prompts de imagem parametrizados
7. Salvar arquivo final em `entregas/criativos/`
