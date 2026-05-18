---
name: mapa-do-criador:exportar-semana
description: Exportar um arquivo consolidado com tudo que foi produzido na semana corrente (ou outra semana especifica). Inclui newsletter, carrosseis, stories, posts avulsos e briefings. Util para arquivar, compartilhar com cliente ou revisar tudo em um documento unico.
---

# Exportar Semana. Consolidar Produção em Arquivo Único

Gera um arquivo `.md` consolidado com toda a produção editorial de uma semana específica. Útil para arquivar, mandar para um cliente, fazer retrospectiva mensal ou compartilhar com a equipe.

## Usage

```
/exportar-semana
```

Ou especificando semana:

```
/exportar-semana 2026-W21
```

Ou intervalo (último mês):

```
/exportar-semana ultimo-mes
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`. Se não existir, oriente a usar `/produto-novo`.
2. Detectar argumento:
   - Sem argumento ou `semana` ou `atual`: semana ISO corrente
   - `AAAA-Www` (ex: `2026-W21`): semana específica
   - `ultimo-mes` ou `last-month`: últimas 4 semanas
   - `mes-corrente` ou `current-month`: do dia 1 até hoje
   - `tudo` ou `all`: histórico completo

### Passo 1. Listar peças do escopo

Varrer as 4 pastas de entrega e filtrar por data ou semana:

- `meus-produtos/{ativo}/entregas/newsletter/`
- `meus-produtos/{ativo}/entregas/carrosseis/`
- `meus-produtos/{ativo}/entregas/stories/`
- `meus-produtos/{ativo}/entregas/posts/`

Para cada arquivo, ler:
- Título (primeiro `#` do conteúdo)
- Slug (filename)
- Data (do filename ou metadata `publicar_em` se existir)
- Conteúdo completo (sem o cabeçalho YAML/metadata)

Também listar briefings da semana em `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md`, se existir.

### Passo 2. Gerar arquivo consolidado

Anunciar: `🔍 Próximo passo: gerar export consolidado de {escopo}. Tempo estimado: cerca de 20 segundos.`

Estrutura do arquivo de export (Markdown):

```markdown
# Export Editorial. {escopo}

**DNA do Criador:** {nome do criador}
**Período:** {data inicio} a {data fim}
**Total de peças:** {N}
**Gerado em:** {AAAA-MM-DD HH:MM}

---

## Resumo

- {N} newsletters
- {N} carrosseis
- {N} sequências de stories
- {N} posts avulsos

{Se houver briefings:}
Briefings da semana ({slugs}) anexados ao final.

---

## Newsletters

### {titulo da newsletter 1}

**Slug:** {slug}
**Data:** {data}
**Plataforma:** {plataforma ou "—"}
**Status:** {status}

{conteúdo completo do .md, sem cabeçalho}

---

(repete para cada newsletter)

## Carrosseis

### {titulo do carrossel 1}

(mesma estrutura)

---

## Stories

(mesma estrutura)

## Posts Avulsos

(mesma estrutura)

---

## Briefings da Semana

(se houver, anexar conteúdo dos arquivos de briefings encontrados)
```

### Passo 3. Salvar export

Caminho de saída:
```
meus-produtos/{ativo}/exports/{AAAA-Www}-export.md
```

Ou para escopo de mês:
```
meus-produtos/{ativo}/exports/{AAAA-MM}-export.md
```

Criar a pasta `exports/` se não existir.

### Passo 4. Estatísticas finais

Mostrar resumo curto:

```
✅ Export consolidado salvo. Caminho: meus-produtos/{ativo}/exports/{slug}.md

Conteudo:
- {N} newsletters ({N1} palavras totais)
- {N} carrosseis ({N2} slides totais)
- {N} sequencias de stories ({N3} frames totais)
- {N} posts avulsos

Tamanho: {KB} KB | {N} linhas totais.

Use esse arquivo para:
- Arquivar em pasta local de backup
- Mandar para revisor humano (editor, copy)
- Revisar tudo de uma vez em retrospectiva mensal
- Importar para Notion / Obsidian como referencia
```

### Passo 5. Opção de exportar em formato adicional

Perguntar se quer também gerar PDF (opcional):

```
Quer tambem gerar versao PDF?
1. Sim (vou abrir no navegador e usar Imprimir → Salvar como PDF)
2. Nao, so o .md basta
```

Se sim: o script pode gerar uma versão `{slug}.html` formatada e abrir no navegador para o criador imprimir como PDF. Reutilizar paleta editorial do design system.

## Princípios operacionais

- **Inclui só peças do escopo.** Não floda o export com arquivos antigos se você pediu só "semana atual".
- **Conteúdo limpo.** Remove cabeçalhos de metadata (publicar_em, plataforma, status) do conteúdo exportado para que fique legível como documento contínuo.
- **Ordem cronológica.** Dentro de cada formato (newsletter, carrossel, etc.), ordenar por data crescente.
- **Conta palavras de verdade.** Conta apenas o corpo das peças, não o boilerplate de cabeçalhos.
- **Idempotente.** Rodar `/exportar-semana` duas vezes no mesmo escopo sobrescreve o arquivo anterior. Não cria duplicatas.
