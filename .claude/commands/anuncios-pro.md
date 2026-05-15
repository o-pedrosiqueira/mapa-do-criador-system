---
name: workshop-marketing:anuncios-pro
description: Gera o prompt mestre de 6 anúncios estáticos com direção de arte profissional (institucional editorial, caixinha nativa, surreal publicitário, emocional positivo, emocional negativo, notícia jornalística), preenchido com os dados do produto ativo. Entrega o arquivo .md pronto para colar no ChatGPT (GPT-5/4o com geração de imagem). Cada criativo sai em duas versões (feed 4:5 e Stories 9:16) com CTA visual, layout em grid, tipografia hierárquica e regras anti-violação de direitos.
allowed-tools: Read, Write, Bash
---

# Anúncios Pro. 6 Criativos Estáticos com Direção de Arte

Gera o prompt mestre completo de 6 anúncios estáticos com direção de arte premium, já preenchido com os dados do seu produto ativo. O entregável é um arquivo `.md` pronto para colar no ChatGPT junto com 1 a 3 fotos do produtor.

## Quando usar

- Você quer 6 criativos estáticos profissionais para Meta Ads (feed + Stories)
- Quer um prompt único, organizado e com direção de arte clara para colar no ChatGPT
- Já tem (ou vai tirar) fotos do produtor em boa qualidade
- Quer que cada criativo carregue elementos visuais do nicho (anti-genericismo)

## Diferença para `/criativo-estatico`

- `/criativo-estatico`. Gera 1 criativo no fluxo 3-passos AIDA. Foco em rapidez, modo prompt OU API.
- `/anuncios-pro`. Gera o prompt mestre dos 6 formatos consagrados de uma vez (institucional, caixinha, surreal, emocional+, emocional-, notícia). Foco em direção de arte profissional. Saída é um arquivo `.md` para usar no ChatGPT.

## Como usar

```
/anuncios-pro
```

Aciona a skill `anuncios-pro`, que vai:
1. Ler o produto ativo, perfil e identidade do consumidor
2. Sugerir o preenchimento dos campos (nicho, promessa, dor, sonho)
3. Pedir 2 dados que não estão no perfil. descrição visual do produtor + CTA desejado
4. Mostrar resumo e pedir aprovação
5. Salvar o arquivo final pronto para colar no ChatGPT
