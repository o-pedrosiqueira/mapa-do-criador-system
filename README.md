# Mapa do Criador. Sistema de Criação de Conteúdo Autoral com IA

Toolkit completo para produzir uma semana inteira de conteúdo (1 newsletter + 2 a 3 carrosséis + 1 sequência de stories) em até 3 horas semanais, **preservando a voz do criador**. Baseado no método proprietário **Mapa do Criador**: Capture, Cure, Crie (Ritual 3x3).

Roda dentro do **Claude Code** (VS Code) ou do **Cursor**, transformando o chat em um parceiro de criação autoral que conhece sua voz, seu nicho e sua linha editorial, e que escreve **com você**, não no seu lugar.

Não é software tradicional: é um sistema de prompts estruturados (CLAUDE.md, regras, comandos, agentes, skills e scripts) que orquestra o assistente do Capture (durante a semana) ao Crie (sessão semanal de 3 horas).

## Por onde começar

| Arquivo | Para quê serve |
|---|---|
| `COMO-USAR.md` | Guia passo a passo para o aluno. Inclui o primeiro Ritual 3x3 e a configuração do DNA Criativo. |
| `CLAUDE.md` | Instruções e regras do assistente. Autoritativo, lido em toda conversa. |
| `AGENTS.md` | Mapa rápido para agentes de IDEs (Cursor, etc.) |
| `ARQUITETURA.md` | Visão técnica da arquitetura. Como inserir novas capacidades. |
| `/dna-criativo` | Configurar a voz autoral do criador (tom, valores, mantras, vocabulário, linha editorial). |
| `/ritual-3x3` | Rodar a sessão semanal completa de 3 horas (Capture, Cure, Crie). |

## Onde roda

### Claude Code (VS Code)
Abra a pasta do projeto, instale a extensão Claude Code, use os slash commands `/ritual-3x3`, `/criar-newsletter`, `/capture`, etc.

### Cursor
Abra a pasta com **File → Open Folder**. As regras em `.cursor/rules/` e o `CLAUDE.md` passam a orientar o chat. No Cursor, a barra `/` não é equivalente à do Claude Code. Para seguir um fluxo, diga no chat "segue o comando criar-newsletter" ou anexe o arquivo `.claude/commands/criar-newsletter.md` com `@`.

## Pré-requisitos

### Obrigatórios

| Ferramenta | Como instalar | Para que serve |
|---|---|---|
| **Claude Code** | Extensão do VS Code (recomendado) ou `npm install -g @anthropic-ai/claude-code` | Runtime do assistente |
| **Python 3** | 3.10+ (o assistente guia a instalação se necessário) | Scripts do painel e dashboards |
| **Git** | [git-scm.com](https://git-scm.com) | Versionar o projeto |
| **Notion** | [notion.so](https://notion.so), conta gratuita | Oficina do Criador (Capture e Caixa de Entrada) |

### Opcionais (instalados sob demanda)

| Ferramenta | Ativa |
|---|---|
| **Vercel CLI** | `/pagina-vercel` (publicar newsletter como página ou página de captura) |
| **Apify** | Dashboards de Instagram, TikTok e YouTube |

### APIs (todas opcionais. O toolkit funciona 100% sem nenhuma)

Copie `.env.example` para `.env` e preencha só o que for usar:

| Nível | O que preencher | O que desbloqueia |
|---|---|---|
| **Básico** | Nada | Todas as entregas em arquivo local (Markdown + HTML) |
| **Intermediário** | `APIFY_API_TOKEN`, `OPENROUTER_API_KEY` | Dashboards das redes + criativos visuais com IA |
| **Avançado** | `VERCEL_TOKEN`, `HEYGEN_API_KEY` | Newsletter publicada como página + vídeo curto autoral com avatar |

Para configurar qualquer integração, use o comando correspondente no chat (`/configurar-apify`, `/configurar-imagens`, etc.). Ele guia o processo completo.

## Método base

### Mapa do Criador. Ritual 3x3

3 horas por semana, divididas em 3 momentos:

1. **Capture (durante a semana, 0 horas dedicadas).** Você percebe ideias e captura no Notion em segundos. Frases que vieram no banho, perguntas de seguidores, trechos de leitura, conversas. Sem julgar, sem editar.
2. **Cure (início da sessão, 30 minutos).** Revisa a Caixa de Entrada, escolhe 4 a 5 ideias e direciona cada uma para o formato certo: profunda vira newsletter, estruturada vira carrossel, conversacional vira stories.
3. **Crie (bloco principal, 2h30).** Usa o Claude com as skills personalizadas do Mapa para transformar cada briefing em conteúdo pronto: 1 newsletter completa, 2 a 3 carrosséis para Instagram e 1 sequência de stories. Revisa, ajusta na própria voz e publica.

### DNA Criativo

Antes do primeiro ciclo, o aluno configura o **DNA Criativo** do seu perfil de criador. Inclui:

- Identidade do Comunicador (nome, especialidade, posicionamento autoral)
- Valores (3 a 5 valores nucleares)
- Tom de voz (conversacional, primeira pessoa, humor, profundidade)
- Linha editorial (o que publica, o que evita)
- Cosmovisão (lente filosófica/religiosa, presente sem virar linguagem)
- Mantras / jargões próprios
- Vocabulário base
- Lista de termos a evitar
- Referências comunicacionais (autores e perfis de inspiração de estrutura, não de imitação)
- CTA por tipo de conteúdo (quando pitchar, quando convidar à conversa)

É o que separa um conteúdo que parece IA genérica de um conteúdo que soa como você.

### 3 Formatos da semana

Newsletter, Carrossel, Stories. Não inclui vídeo, Reels nem edição. O sistema cobre produção textual e visual estática.

- **Newsletter.** Editorial-jornalística (gancho + contexto + análise/opinião + provocação + CTA). Inspiração de estrutura: Bárbara Torres, BrandsDecoded, Dan Koe.
- **Carrossel.** 10 slides com tese central, voz autoral preservada.
- **Stories.** Sequência conversacional de bastidor / ampliação / contraponto.

## Regras absolutas de estilo

1. **Nada de travessão (—)** em nenhum texto gerado. Sem exceção.
2. **Português do Brasil** em tudo que é visível ao usuário.
3. **Nunca mostrar código HTML no chat.** Salvar silenciosamente e informar o caminho.
4. **Sempre pedir aprovação antes de salvar.** Resumo + opções numeradas.
5. **Uma pergunta por vez** nas entrevistas, com progresso visual entre blocos.
6. **Voz autoral acima de tudo.** Filtro de DNA Criativo aplicado a todo conteúdo antes de entregar.

Checklists completos (Voz Autoral + Design HTML) estão no topo do `CLAUDE.md`.

## Arquitetura

4 tipos de componentes trabalham juntos:

| Componente | Local | Papel |
|---|---|---|
| **CLAUDE.md** | raiz | Persona, regras globais, fluxo padrão. Lido em toda conversa. |
| **Commands** | `.claude/commands/*.md` | Slash commands interativos (`/ritual-3x3`, `/criar-newsletter`, etc.) |
| **Agents** | `.claude/agents/*.md` | Subprocessos autônomos (orquestradores e especialistas) |
| **Skills** | `.claude/skills/` | Base de conhecimento consultada por commands e agents |

**Fluxo típico:**
```
Usuário digita /comando
  → Command carrega .md correspondente
  → Lê meus-produtos/{ativo}/perfil.md, idconsumidor.md e banco-de-ideias.md
  → Aplica o DNA Criativo como filtro
  → Roda entrevista (perguntas uma por vez)
  → Gera o conteúdo aplicando o filtro de voz autoral
  → Pede aprovação
  → Salva em meus-produtos/{ativo}/entregas/[tipo]/
  → Sugere próximo comando do Ritual
```

## Estrutura de pastas

```
mapa-do-criador/
├── CLAUDE.md                    Regras e papel do assistente (autoritativo)
├── AGENTS.md                    Mapa para IDEs
├── ARQUITETURA.md               Guia técnico completo
├── COMO-USAR.md                 Guia passo a passo
├── README.md                    Este arquivo
│
├── .claude/                     Núcleo do assistente
│   ├── commands/                Slash commands (.md)
│   ├── agents/                  Agentes orquestradores e especialistas
│   ├── skills/                  Base de conhecimento (Capture, Cure, Crie, DNA Criativo, etc.)
│   └── settings.json            Permissões
│
├── scripts/                     Utilitários Python
│   ├── painel-incremental.py        Gera/atualiza painel-entregas.html por DNA
│   ├── painel_template.py           Shell HTML e renderers de cada seção
│   ├── painel-atualizar.py          Regenera manifest meus-produtos/index.js
│   ├── montar-pagina-copias.py      Monta HTML final a partir de cópias de seção
│   └── ...
│
├── meus-produtos/               DNAs do Criador (ignorado pelo git)
│   ├── .ativo                   Slug do DNA ativo
│   ├── index.js                 Manifest gerado pelo painel-atualizar.py
│   └── {slug-do-criador}/
│       ├── perfil.md                Quadro, Furadeira, Identidades, Decorados, Urgências
│       ├── idconsumidor.md          Identidade do leitor-alvo
│       ├── dna-criativo.md          DNA Criativo (será gerado pelo /dna-criativo)
│       ├── banco-de-ideias.md       Caixa de Entrada (Capture)
│       ├── pesquisa-mercado.md      Pesquisa de nicho
│       ├── painel-entregas.html     Painel visual do DNA
│       └── entregas/                Output do assistente
│           ├── newsletter/          Newsletters semanais
│           ├── carrosseis/          Carrosséis para Instagram
│           ├── stories/             Sequências de stories
│           ├── posts/               Posts avulsos e ensaios curtos
│           ├── criativos/           Prompts de imagem e referências
│           ├── paginas/             HTML de captura, vendas, obrigado
│           ├── instagram-dashboard/ Dashboard IG
│           ├── tiktok-dashboard/    Dashboard TT
│           └── youtube-dashboard/   Dashboard YT
│
├── painel/                      Painel global (lista de DNAs)
├── instalador/                  Scripts de instalação Mac/Windows
├── package.json
├── vercel.json
└── .env.example                 Modelo de chaves de API
```

A pasta `meus-produtos/` contém os dados de cada aluno e não sobe para o git.

## Painel de entregas

Cada DNA do Criador tem seu `painel-entregas.html` em `meus-produtos/{slug}/`. O painel é gerado e atualizado seção a seção pelo `painel-incremental.py` conforme o aluno avança nos commands. Inclui um seletor de DNA no sidebar quando há mais de um cadastrado (útil para criadores que atendem clientes).

- **Gerar/atualizar uma seção:** `python3 scripts/painel-incremental.py --secao quadro`
- **Atualizar o manifest:** `python3 scripts/painel-atualizar.py` (ou `/painel-atualizar` no chat)

## Comandos principais

### Ritual 3x3 (núcleo do método)
`/ritual-3x3`, `/capture`, `/cure`, `/crie`

### Criação por formato
`/criar-newsletter`, `/criar-carrossel`, `/criar-stories`, `/criar-post-avulso`

### DNA Criativo
`/dna-criativo`, `/dna-revisar`

### Gestão de DNA do Criador
`/produto-novo`, `/produto-trocar`, `/produto-excluir`, `/produto-zerar`, `/produto-concepcao`

### Pesquisa e inteligência de nicho
`/pesquisa-mercado`, `/pesquisa-mercado-instagram`, `/dados-instagram`, `/dados-nicho`

### Dashboards de presença digital
`/instagram-dashboard`, `/tiktok-dashboard`, `/youtube-dashboard`

### Criativos visuais
`/criativo-estatico`, `/banner-visual`, `/carrossel-visual`, `/usar-referencia-visual`

### Páginas
`/copy-pagina`, `/pagina-ajuste`, `/pagina-performance`, `/pagina-pixel`, `/pagina-checkout`, `/pagina-active`, `/pagina-precheckout`, `/pagina-lovable`, `/pagina-vercel`, `/pagina-visual`

### Toolkit (projetos editoriais estruturados)
`/toolkit-novo`, `/toolkit-planejar`, `/toolkit-executar`, `/toolkit-verificar`, `/toolkit-progresso`, `/toolkit-anotar`, `/toolkit-pausar`, `/toolkit-retomar`

### Configuração de integrações
`/configurar-apify`, `/configurar-heygen`, `/configurar-imagens`, `/configurar-telegram`, `/configurar-zapi`

A lista completa com descrições está no `CLAUDE.md`.

> **Skills em transição (fluxo-criativo).** As skills `/copy-anuncio`, `/copy-carrossel`, `/copy-variacao-post`, `/copy-social`, `/copy-roteiro`, `/comercial-playbook`, `/lt-*`, `/ht-*`, `/trafego-*`, `/vsl-*`, `/feedback-pagina`, `/feedback-low-ticket`, `/elementos-literarios`, `/criar-gpt` continuam invocáveis. Foram herdadas do fluxo-criativo e ainda não foram adaptadas ao tom do Mapa. Use sob demanda, mas saiba que estão na fila para curadoria.

## Agentes especialistas

Orquestradores autônomos que executam tarefas completas acionando múltiplas skills:

- `produtor-de-conteudo`. Sessão completa de criação semanal (a ser criado na Fase 3, hoje use `copywriter` como reserva).
- `construtor-de-paginas`. Páginas profissionais do zero (newsletter como página, captura de leitores, vendas do Mapa).
- `clonador-de-bloco-visual`. Reproduz seções de página a partir de prints de referência (usado por `/pagina-visual`).
- `executor-de-plano-de-acao`. Executa plano de ação acionando skills e agentes.

> Agentes herdados do fluxo-criativo (`estrategista-de-produto`, `estrategista-low-ticket`, `estrategista-middle-ticket`, `consultor-comercial`, `criador-de-campanhas`, `copywriter`, `video-maker`) continuam disponíveis e serão classificados como manter, adaptar ou remover na Fase 3.

Para projetos editoriais multi-etapas (lançamento de newsletter, série temática de 6 carrosséis, ciclo trimestral), use os comandos `/toolkit-*` (fluxo proprietário com estado persistente).

## Scripts principais

### Painel de entregas
```
python3 scripts/painel-incremental.py --secao quadro
python3 scripts/painel-atualizar.py
```
O primeiro atualiza uma seção específica do `painel-entregas.html` do DNA ativo. O segundo regenera o manifest `meus-produtos/index.js` usado pelo seletor.

### Páginas (fluxo visual)
```
python3 scripts/montar-pagina-copias.py --slug {slug}
```
Monta o HTML final a partir das cópias de seção geradas por `/pagina-visual`.

### Geração de criativos visuais
- `scripts/generate-creative.py`. Banners e fotos com IA via OpenRouter.
- `scripts/gerar-carrossel-foto.py`. Carrossel com foto IA por card.

## Integrações externas (opcionais)

Configuradas via `.env` (veja `.env.example`):

| Integração | Finalidade | Comando de setup |
|---|---|---|
| Apify | Coleta de dados do Instagram, TikTok e YouTube | `/configurar-apify` |
| OpenRouter | Geração de imagens IA | `/configurar-imagens` |
| HeyGen | Vídeo curto autoral com avatar IA | `/configurar-heygen` |
| Lovable / Vercel | Publicação de páginas (newsletter publicável, captura) | `/pagina-lovable`, `/pagina-vercel` |
| Hotmart, Kiwify, Eduzz, Cakto, Pepper, Stripe | Checkout das páginas do criador | `/pagina-checkout` |
| ActiveCampaign | Lista de leitores e automação de email | `/pagina-active` |
| Telegram | Notificações de routine | `/configurar-telegram` |

## Fluxos recomendados

### Primeiro uso (onboarding)

1. `/produto-novo` (cria o DNA do Criador. Roda na abertura da sessão automaticamente)
2. `/dna-criativo` (configura voz autoral, tom, mantras, linha editorial)
3. `/pesquisa-mercado` (mapeia o nicho)
4. `/dados-nicho` (descobre 10 a 20 perfis de referência)

### Semana típica (Ritual 3x3)

1. **Durante a semana:** `/capture` para registrar ideias soltas
2. **Sessão semanal (3 horas):** `/ritual-3x3` (roda Cure → Crie completo)
3. Ou granular: `/cure` → `/criar-newsletter` → `/criar-carrossel` (1 ou 2 vezes) → `/criar-stories`

### Lançamento de newsletter

1. `/dna-criativo` (DNA bem afiado)
2. `/copy-pagina` (página de captura de leitores)
3. `/pagina-active` (lista + automação de boas-vindas)
4. `/criar-newsletter` (primeira edição)

### Venda do próprio infoproduto (a partir do conteúdo)

1. `/produto-concepcao` (estruturar o produto digital com VTSD, herdado do fluxo-criativo)
2. `/copy-pagina` (página de vendas)
3. `/pagina-checkout` (checkout Hotmart/Kiwify)
4. `/criar-carrossel` (lançamento via Instagram)
5. `/criar-newsletter` (ensaio sobre o produto, fechando com pitch natural)

## Fluxo padrão de qualquer comando (6 passos)

1. **Contexto.** Ler `meus-produtos/.ativo`, depois `perfil.md`, `idconsumidor.md` e `banco-de-ideias.md`.
2. **Entrevista.** 2 a 4 perguntas, uma por vez, com progresso visual.
3. **Confirmação.** Resumo do que vai criar, pedir OK numerado.
4. **Geração.** Criar o entregável aplicando o DNA Criativo e o filtro de voz autoral.
5. **Aprovação.** Mostrar o resultado e perguntar `1. Aprovar e salvar / 2. Ajustar`.
6. **Entrega.** Salvar, informar caminho absoluto, sugerir próximo comando do Ritual.

## O que sobe para o git

**Sobe:** `.claude/commands/`, `.claude/agents/`, `.claude/skills/`, `.claude/settings.json`, `CLAUDE.md`, `AGENTS.md`, `ARQUITETURA.md`, `README.md`, `COMO-USAR.md`, `.env.example`, `scripts/`, `painel/`.

**Não sobe:** `.env`, `meus-produtos/` (dados do aluno), `node_modules/` e demais arquivos de runtime.

## Adicionando novas capacidades

Para criar um novo command, agent, skill ou integração, siga o guia completo em `ARQUITETURA.md`. Inclui frontmatter obrigatório, checklist e exemplo de como adicionar suporte a um novo domínio editorial (ex: ensaio longo, série de e-mails, podcast roteirizado).
