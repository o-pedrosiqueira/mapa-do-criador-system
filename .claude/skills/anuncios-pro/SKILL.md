---
name: workshop-marketing:anuncios-pro
description: Skill que gera o prompt mestre dos 6 anúncios estáticos com direção de arte profissional, preenchido com os dados do produto ativo. Lê perfil.md e idconsumidor.md, sugere preenchimento de Nicho, Promessa, Dor e Sonho, pergunta apenas o que não está salvo (descrição visual do produtor e CTA), monta o arquivo final pronto para colar no ChatGPT junto com 1 a 3 fotos do produtor.
allowed-tools: Read, Write, Bash
---

# Anúncios Pro. Gerador do Prompt Mestre dos 6 Criativos

Esta skill transforma o prompt mestre profissional de 6 criativos (em `references/prompt-mestre.md`) num arquivo final preenchido com os dados do produto ativo, pronto para o aluno colar no ChatGPT.

A skill **não gera as imagens**. O ChatGPT (GPT-5 ou 4o com imagem ativada) é quem gera. A skill entrega o briefing perfeito.

---

## Passo 0. Contexto

Anuncie:

```
🔍 Próximo passo: gerar o prompt mestre dos 6 anúncios estáticos preenchido com os dados do produto. Tempo estimado: cerca de 60 segundos.
```

Carregue:
1. `meus-produtos/.ativo` para identificar o produto ativo. Se vazio, oriente a usar `/produto-novo` antes.
2. `meus-produtos/{ativo}/perfil.md`. Se não existir, oriente a usar `/produto-concepcao` antes.
3. `meus-produtos/{ativo}/idconsumidor.md` se existir.
4. `.claude/skills/anuncios-pro/references/prompt-mestre.md`. É o template completo (cerca de 670 linhas) que vai ser preenchido.

Extraia internamente do perfil:

| Campo do prompt mestre | De onde tirar do perfil |
|---|---|
| **NICHO** | Campo "Nicho" no `perfil.md`. Se não houver, inferir do Quadro e da Identidade do Produto. |
| **PROMESSA PRINCIPAL** | Quadro do produto (transformação principal). |
| **DOR PRINCIPAL DO AVATAR** | Urgência mais forte da categoria DORES (Urgências Ocultas). Se houver objeção #1 no `idconsumidor.md`, usar a dor por trás da objeção. |
| **SONHO PRINCIPAL DO AVATAR** | Urgência mais forte da categoria DESEJOS, ou Decorado mais aspiracional ligado ao Quadro. |
| **PRODUTOR (descrição visual)** | NÃO está no perfil. Vai precisar perguntar. |
| **CTA DESEJADO** | NÃO está no perfil. Sugerir padrão e perguntar se aceita. |

---

## Passo 1. Mostrar o pré-preenchimento e confirmar

Mostre ao aluno os campos que você extraiu do perfil:

```
Vou montar o prompt mestre com base no seu produto.

📋 Pré-preenchimento (extraído do perfil):

NICHO: [nicho extraído]
PROMESSA PRINCIPAL: [Quadro]
DOR PRINCIPAL DO AVATAR: [Urgência mais forte de DORES]
SONHO PRINCIPAL DO AVATAR: [Decorado/Desejo aspiracional]

Está tudo certo ou quer ajustar alguma dessas 4 linhas?

1. Tudo certo, seguir
2. Quero ajustar alguma linha
```

Se escolher 2: pergunte qual linha ajustar (uma por vez), receba o novo texto, atualize o pré-preenchimento e mostre de novo. Não avance até o aluno aprovar com "1".

---

## Passo 2. Perguntar a descrição visual do produtor

Esta é a única informação que não está no perfil e é essencial. Pergunte:

```
Agora preciso de 2 dados que não estão no seu perfil.

🧑 1/2. Descrição visual do produtor (rosto da marca):
Descreva quem aparece nas fotos. Gênero, idade aproximada, cabelo, barba (se for o caso), estilo geral.

Exemplo: "homem brasileiro, 35 anos, cabelo curto castanho, barba aparada, estilo casual"
Exemplo: "mulher brasileira, 42 anos, cabelo longo liso preto, óculos de grau, estilo profissional"

Como descreveria você (ou quem vai aparecer nas fotos)?
```

Receba a resposta. Se vier muito curta (menos de 5 palavras), peça para detalhar mais antes de avançar.

---

## Passo 3. Perguntar o CTA

```
🔘 2/2. Qual CTA quer no botão dos anúncios?

1. Saiba mais →
2. Saiba como →
3. Comece hoje →
4. Garanta sua vaga →
5. Quero saber →
6. Outro (vou digitar)

Digite o número (ou o texto se escolher 6).
```

Receba o CTA. Limite 4 palavras + seta. Se vier mais longo, sugira encurtar.

---

## Passo 4. Resumo e aprovação

Mostre o resumo final e peça aprovação:

```
📋 Resumo do que vou gerar:

NICHO: [nicho]
PRODUTOR: [descrição]
PROMESSA: [Quadro]
DOR: [dor]
SONHO: [sonho]
CTA: [cta]

O arquivo final terá cerca de 670 linhas e vai ser salvo em:
meus-produtos/{ativo}/entregas/criativos/anuncios-pro/anuncios-pro-{slug}-{numero}.md

1. Aprovar e salvar
2. Quero ajustar algo
```

Se escolher 2: pergunte o que ajustar e refaça os passos correspondentes.

---

## Passo 5. Geração do arquivo

Quando o aluno aprovar:

1. Carregue o conteúdo de `.claude/skills/anuncios-pro/references/prompt-mestre.md`.
2. Substitua dentro do bloco BRIEFING os placeholders:
   - `[NICHO]` pelo nicho confirmado
   - `[DESCRIÇÃO. Ex: ...]` pela descrição do produtor (mantenha apenas a descrição, sem o "Ex:")
   - `[PROMESSA. Ex: ...]` pela promessa
   - `[DOR. Ex: ...]` pela dor
   - `[SONHO. Ex: ...]` pelo sonho
   - `[CTA do anúncio. Ex: ...]` pelo CTA escolhido
   - `[URL]` por `(não se aplica, anúncio leva para a página de vendas)`
3. **Mantenha 100% intacto** o resto do prompt mestre. Princípios de direção de arte, sistema de layout, CTA visual, vocabulário visual por nicho, regras de clareza de público, os 6 formatos, sistema de variações, formato de saída, dicas finais. Tudo continua igual.
4. Adicione um cabeçalho próprio do projeto no topo do arquivo gerado (acima do `# PROMPT MESTRE`):

```markdown
> Arquivo gerado pelo command `/anuncios-pro` em {data}.
> Produto: {nome do produto} ({slug})
> Para usar: abra o ChatGPT (GPT-5 ou 4o com geração de imagem ativada),
> faça upload de 1 a 3 fotos do produtor (rosto bem visível, ângulos diferentes, boa luz),
> diga "essas fotos são a referência de rosto do produtor",
> e em seguida cole TODO o conteúdo abaixo da linha "---" como uma única mensagem.

---
```

5. Numere o arquivo. Procure dentro de `meus-produtos/{ativo}/entregas/criativos/anuncios-pro/` por arquivos `anuncios-pro-{slug}-*.md` e use o próximo número sequencial (começando em 1).

6. Crie a pasta se ainda não existir e salve o arquivo final com `Write`.

7. Não mostre o conteúdo gigante do arquivo na tela. Apenas confirme onde foi salvo.

---

## Passo 6. Entrega e instruções

```
✅ Concluído: prompt mestre dos 6 anúncios pronto.

📁 Arquivo: {raiz-projeto}/meus-produtos/{ativo}/entregas/criativos/anuncios-pro/anuncios-pro-{slug}-{numero}.md

🎬 Como usar agora:

1. Abra o ChatGPT (GPT-5 recomendado, ou 4o com geração de imagem ativada).
2. Faça upload de 1 a 3 fotos do produtor (rosto bem visível, ângulos diferentes, luz boa).
3. Diga: "essas fotos são a referência de rosto do produtor. Use elas como base sempre que o criativo pedir o rosto dele, mantendo as feições reconhecíveis."
4. Abra o arquivo .md acima, copie todo o conteúdo abaixo da linha "---" e cole no ChatGPT como uma única mensagem.
5. O ChatGPT vai entregar os 6 criativos com texto + legenda + prompt de imagem (feed e Stories).
6. Para gerar cada imagem, peça: "agora gere a imagem do CRIATIVO N para feed". E depois: "agora gere para Stories".

Quer pedir variações depois? Volte ao mesmo chat do ChatGPT e diga "mais uma rodada de variações dos 6". O prompt mestre tem regras específicas pra cada nova rodada explorar ângulos novos.

Próximos passos sugeridos:
- /copy-anuncio. Para criar a copy (texto do post) que vai junto com cada criativo.
- /trafego-criar-campanha. Para subir os criativos no Meta Ads quando estiverem prontos.
```

Sempre exibir o caminho absoluto do arquivo (raiz do projeto + caminho relativo) como texto copiável.

---

## Regras

- **Nunca** mostrar o conteúdo gigante do prompt mestre na tela do chat. Salvar e apontar o caminho.
- **Nunca** alterar princípios, sistema de layout, vocabulário visual ou regras de clareza de público do template. Substituir SOMENTE os 6 placeholders do BRIEFING.
- **Sempre** validar a descrição do produtor (mínimo 5 palavras com gênero, idade aproximada e traços visíveis).
- **Sempre** numerar o arquivo de saída para não sobrescrever versões anteriores.
- Se o produto não tem perfil completo (sem Urgências Ocultas), avise o aluno e oriente a usar `/produto-concepcao` antes.
- Português brasileiro com acentuação correta em todo texto exibido ao aluno.
- Anúncio de "Próximo passo" obrigatório no Passo 0 (Nível 1, gera arquivo) e nas operações longas internas.
- Travessão (—) proibido em todo texto exibido ao aluno (mas pode aparecer dentro do arquivo final, que é template literal do prompt mestre, intocável).
