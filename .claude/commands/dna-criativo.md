---
name: mapa-do-criador:dna-criativo
description: Configurar ou atualizar o DNA Criativo (voz autoral) do criador ativo. Tom, valores, mantras, vocabulário, linha editorial, cosmovisão, referências, CTA por tipo. Analisa textos autênticos colados pelo criador. Filtro obrigatório aplicado a todo conteúdo gerado depois.
---

# DNA Criativo. Configurar Voz Autoral do Criador

Configura ou atualiza o DNA Criativo do criador ativo. Cobre 11 blocos (Identidade, Valores, Tom, Linha editorial, Cosmovisão, Mantras, Vocabulário, Evitar, Referências, Tonalidade, Formatos) + análise de 1 a 3 textos autênticos.

## Usage

```
/dna-criativo
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Esta skill faz operações longas (analisar textos autênticos, extrair padrões de voz, gerar dna-criativo.md). Antes de cada uma, anuncie em UMA linha com `🔍 Próximo passo: {ação}. Tempo estimado: cerca de X segundos.` Ao concluir, confirme com `✅ Concluído: {entrega}. Caminho: {caminho}.`

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`. Se não existir, oriente a usar `/produto-novo` primeiro.
2. Ler `meus-produtos/{ativo}/perfil.md` (se existir, usar como ponto de partida; em particular, a seção "Identidade do Comunicador" pode já ter parte do conteúdo).
3. Ler `meus-produtos/{ativo}/dna-criativo.md` (se existir, oferecer atualização em vez de criação do zero).

### Passo 1. Decisão de fluxo

Se o DNA já existe:
- Mostrar resumo (Identidade + Tom + Valores + Linha editorial em 4 a 6 linhas).
- Perguntar: 1) Atualizar bloco específico, 2) Reconstruir tudo, 3) Cancelar.

Se não existe: ir direto para o Passo 2.

### Passo 2. Entrevista guiada (UMA pergunta por vez)

Carregue a skill `dna-criativo` para o detalhe de cada bloco. Pergunte:

1. **Identidade do Comunicador.** Nome, especialidade, posicionamento autoral em uma frase.
2. **Valores.** "Liste 3 a 5 valores nucleares. O que você defende? O que organiza suas decisões editoriais?"
3. **Tom de voz.** "Como você descreveria seu tom em 3 frases curtas?" + perguntas auxiliares (pessoa gramatical, humor, comprimento de frase).
4. **Linha editorial.** "O que você publica?" depois "O que você evita publicar?" (separadamente).
5. **CTA por tipo de conteúdo.** "Quando o conteúdo termina em pitch comercial e quando termina em convite à conversa?"
6. **Cosmovisão.** "Qual é sua lente sobre o mundo? (filosófica, religiosa, política) Lembre: aparece como **olhar**, nunca como rótulo."
7. **Mantras / jargões próprios.** "Liste de 5 a 10 frases recorrentes que você usa e que assinam seu estilo."
8. **Vocabulário base.** "Liste 10 a 20 palavras que aparecem com naturalidade no seu universo semântico."
9. **Evitar na comunicação.** "Quais palavras, expressões e estruturas você proíbe?"
10. **Referências comunicacionais.** "Liste autores e perfis de inspiração de **estrutura**, não para imitação literal."
11. **Tonalidade emocional predominante.** "Capture seu registro emocional típico em uma frase."
12. **Formatos que combinam mais.** "Quais formatos acolhem sua voz? Quais não?"

### Passo 3. Análise de textos autênticos

Peça ao criador para colar entre 1 e 3 textos autênticos. Reforce:
- Post antigo, e-mail longo, áudio transcrito, mensagem em DM
- Texto que soe **ele de verdade**, não filtrado para soar profissional
- Pelo menos 1 texto com 300 palavras ou mais (para análise robusta)

Anuncie: `🔍 Próximo passo: analisar textos autênticos e extrair padrões de voz. Tempo estimado: cerca de 45 segundos.`

Extraia 3 a 5 padrões nítidos como **Sinais de voz**:
- Comprimento médio de frase
- Pessoa gramatical predominante
- Vocabulário recorrente (palavras-fagulha)
- Estruturas sintáticas favoritas
- Marcadores discursivos típicos
- Uso de pontuação
- Presença e tipo de humor

### Passo 4. Confirmação

Resumo do DNA + Sinais de voz extraídos. Perguntar:
```
1. Aprovar e salvar
2. Quero ajustar algo
```

### Passo 5. Geração

Anuncie: `🔍 Próximo passo: gerar dna-criativo.md completo. Tempo estimado: cerca de 30 segundos.`

Gere o arquivo `meus-produtos/{ativo}/dna-criativo.md` com os 11 blocos + Sinais de voz.

Atualize `meus-produtos/{ativo}/perfil.md` na seção "Identidade do Comunicador" para refletir a versão consolidada (manter os dois arquivos em sincronia).

### Passo 6. Painel

Acione `python3 scripts/painel-incremental.py --secao identidade-comunicador` para atualizar o painel-entregas.html.

### Passo 7. Entrega

Confirme:
```
✅ Concluído: DNA Criativo configurado. Caminho: meus-produtos/{ativo}/dna-criativo.md.
```

Sugira próximo comando:
- Se ainda não tem banco de ideias: `agora você pode rodar /capture para começar a registrar ideias da semana, ou /pesquisa-mercado para mapear seu nicho.`
- Se já tem banco de ideias: `agora você pode rodar /ritual-3x3 para a sessão semanal completa.`

## Princípios operacionais

- **UMA pergunta por vez.** Nunca empilhar perguntas.
- **Progresso visual** a cada 3 a 4 blocos completados.
- **Não inventar dados.** Se o criador não respondeu um bloco, deixar o bloco com `_a definir_` e flagar no resumo final.
- **Cosmovisão como lente.** Se o criador descrever cosmovisão como linguagem (ex: usar termos religiosos explícitos), reformular para postura/olhar sem rótulos.
- **Edição cirúrgica.** Em atualizações, mexer só no bloco pedido. Não reescrever o que estava bom.
