---
name: mapa-do-criador:criar-newsletter
description: Criar a newsletter da semana no formato editorial-jornalístico (gancho + contexto + análise + provocação + CTA). Aplica DNA Criativo do criador ativo como filtro de voz autoral. Acionada por /criar-newsletter ou dentro de /crie.
---

# Criar Newsletter. Editorial-Jornalística Autoral

Cria uma newsletter da semana aplicando o DNA Criativo do criador ativo. Formato Bárbara Torres / BrandsDecoded / Dan Koe: notícia + análise + provocação.

## Usage

```
/criar-newsletter
```

Ou com slug do briefing já curado:

```
/criar-newsletter claude-4-7-fim-da-promessa
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md` (filtro obrigatório). Se não existir, oriente a rodar `/dna-criativo` primeiro.
3. Ler `meus-produtos/{ativo}/perfil.md` e `meus-produtos/{ativo}/idconsumidor.md` (contexto adicional).
4. Procurar briefing da semana corrente em `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md`. Se o command veio com slug, localizar o briefing específico. Se não veio com slug, listar os briefings disponíveis e perguntar qual.
5. Se NÃO existe briefing, perguntar:
   ```
   Não achei briefing curado para esta newsletter. Quer:
   1. Rodar /cure primeiro (recomendado)
   2. Criar do zero respondendo perguntas
   ```

### Passo 1. Validação do briefing

Mostrar o briefing escolhido e confirmar:
```
Briefing selecionado:
- gancho: {...}
- tese central: {...}
- ângulo: {...}
- CTA: {...}

1. Pode gerar a newsletter
2. Quero ajustar o briefing antes
```

### Passo 2. Geração

Anuncie: `🔍 Próximo passo: gerar newsletter "{título de trabalho}" aplicando o DNA Criativo. Tempo estimado: 2 a 3 minutos.`

Carregue a skill `criar-newsletter` e gere a newsletter completa em 4 blocos + CTA, seguindo a estrutura editorial-jornalística e os parâmetros de comprimento.

**Aplicação obrigatória do DNA Criativo (antes de exibir):**

1. Tom de voz (pessoa, humor, comprimento de frase) bate com o DNA?
2. Mantras / jargões próprios aparecem em pelo menos 2 momentos centrais (sem forçação)?
3. Vocabulário base aparece em 1 a 2 trechos?
4. Nenhuma palavra da lista "evitar" do DNA está no texto?
5. Nenhuma das 10 proibições do CLAUDE.md (travessão, exclamação, listicle, coach, "não é X é Y", pergunta retórica vazia, "imagina que", listicle, "como fazer X") está no texto?
6. Cosmovisão como lente, não rótulo?
7. CTA respeita o tipo definido no briefing (e no DNA)?

Se algum item falhar: reescreva o trecho antes de mostrar.

### Passo 3. Aprovação

Mostrar a newsletter completa em formato Markdown. Pedir:
```
1. Aprovar e salvar
2. Quero ajustar (especifique o quê)
```

Se o criador pedir ajustes, fazer **edição cirúrgica** apenas no trecho indicado. Não reescrever blocos vizinhos.

### Passo 4. Salvar

Salvar em `meus-produtos/{ativo}/entregas/newsletter/{AAAA-Www-tema-em-slug}.md`.

Convenção de slug:
- Ano-Semana ISO no início (ex: 2026-W21)
- Tema em 3 a 6 palavras kebab-case sem acento
- Exemplo: `2026-W21-renovacao-de-voz.md`

### Passo 5. Versão HTML publicável (opcional)

Perguntar:
```
Quer também gerar a versão HTML publicável (para postar como página web, enviar como newsletter em HTML)?
1. Sim
2. Só Markdown está bom
```

Se sim: gerar `{slug}.html` aplicando o Checklist 2 (Design HTML) do CLAUDE.md. Paleta escuro + dourado, tipografia serif editorial premium.

### Passo 6. Painel

Acione `python3 scripts/painel-incremental.py --secao newsletter` (se a seção existir; senão, ignorar).

### Passo 7. Entrega

```
✅ Concluído: newsletter "{título}" salva. Caminho: meus-produtos/{ativo}/entregas/newsletter/{slug}.md.

{Se gerou HTML também:}
✅ Versão HTML: meus-produtos/{ativo}/entregas/newsletter/{slug}.html. Abra no navegador.

Sugestão de próximo passo:
- /criar-carrossel {slug do carrossel da semana} para ampliar a tese em outro formato
- /criar-stories {slug das stories da semana} para amarrar bastidor
```

## Princípios operacionais

- **Voz autoral é o critério #1.** Tudo passa pelo filtro de DNA antes de o criador ver.
- **Tese tem dono.** Se o briefing não tem tese formada, perguntar antes de gerar. Não inventar tese.
- **Não amplie sozinho.** Se o briefing pede 1000 palavras, entregar 1000. Não inflar para parecer mais profundo.
- **Edição cirúrgica em ajustes.** Mexer só no trecho pedido.
- **Pitch só quando o conteúdo levou.** Se o briefing pede convite à conversa e a IA quiser empurrar pitch, não empurra.
