# Como Usar o Mapa do Criador. Guia Completo

## Antes de começar

### Opção A. Claude Code (VS Code) — recomendado

1. VS Code instalado
2. Extensão Claude Code instalada (ou `npm install -g @anthropic-ai/claude-code`)
3. Pasta `mapa-do-criador` aberta no VS Code

### Opção B. Cursor

1. Cursor instalado ([cursor.com](https://cursor.com))
2. **File → Open Folder** e escolha a pasta `mapa-do-criador`
3. Pronto. As regras em `.cursor/rules/` e o `CLAUDE.md` orientam o chat.

**Comandos `/alguma-coisa` no Cursor:** a barra `/` não é equivalente à do Claude Code. Para seguir um fluxo (ex: criar-newsletter), diga no chat **"segue o comando criar-newsletter"** ou anexe o arquivo **`.claude/commands/criar-newsletter.md`** com `@`. O assistente executa o mesmo roteiro do `.md`.

### Conta no Notion

O Mapa do Criador usa o Notion como **Oficina do Criador** (Caixa de Entrada de ideias). Se ainda não tem, crie uma conta gratuita em [notion.so](https://notion.so). Vai ser onde você captura ideias soltas durante a semana antes do Cure.

---

## Seu primeiro uso

### 1. Abra o chat do assistente

**No VS Code:** procure o ícone do Claude Code na barra lateral.

**No Cursor:** use o chat do agente (Composer ou Chat) com o projeto aberto.

### 2. Configure seu DNA do Criador

Na primeira mensagem, o assistente já inicia o fluxo automaticamente. O Mapa do Criador é um sistema personalizável: cada "produto" representa um **DNA do Criador**, ou seja, o perfil autoral de uma pessoa ou projeto editorial.

O assistente vai te guiar com perguntas sobre:

- Quem você é (nome, especialidade, posicionamento autoral)
- Valores (3 a 5 valores nucleares)
- Tom de voz (conversacional, primeira pessoa, humor, profundidade)
- Linha editorial (o que publica, o que evita)
- Cosmovisão (lente filosófica/religiosa, presente sem virar linguagem)
- Mantras / jargões próprios (frases recorrentes que assinam seu estilo)
- Vocabulário base
- Lista de termos a evitar
- Referências comunicacionais
- CTA por tipo de conteúdo

Responda uma pergunta por vez. **Importante:** o assistente vai pedir que você cole entre 1 e 3 textos autênticos seus (post antigo, e-mail longo, mensagem de áudio transcrita, qualquer coisa que soe **você** de verdade). É a base da análise da voz. Sem isso, o DNA fica genérico.

Ao final, o `dna-criativo.md` e o `painel-entregas.html` ficam salvos em `meus-produtos/{seu-slug}/`.

### 3. Faça a pesquisa de nicho

Logo depois do DNA, rode `/pesquisa-mercado` e `/dados-nicho`. O primeiro mapeia o seu nicho (tamanho, concorrência, ângulos disponíveis). O segundo descobre de 10 a 20 perfis de referência no Brasil e no mundo. É importante para alimentar a sua Caixa de Entrada com ganchos jornalísticos da semana.

### 4. Comece a capturar

Da hora que o DNA está pronto, qualquer ideia que aparecer durante a semana vai pra Caixa de Entrada. Use:

```text
/capture
```

E descreva a ideia (uma frase, um gancho, uma pergunta de seguidor, qualquer coisa). Não edite, não julgue, não cure ainda. Só capture.

### 5. Rode o primeiro Ritual 3x3

No dia da sua sessão semanal (geralmente segunda de manhã, mas você escolhe), digite:

```text
/ritual-3x3
```

O assistente conduz a sessão inteira em 3 blocos:

- **Cure (30 min).** Revisa a Caixa de Entrada com você, escolhe 4 a 5 ideias da semana e direciona cada uma para o formato certo.
- **Crie principal (90 min).** Gera 1 newsletter completa + 2 a 3 carrosséis para Instagram.
- **Crie complementar (60 min).** Gera 1 sequência de stories e finaliza ajustes na sua voz.

Ao final, você tem a semana inteira de conteúdo pronta para revisar e publicar.

---

## A semana típica do Mapa do Criador

### Capture (durante a semana, sem hora marcada)

Sempre que aparecer uma ideia (post de outro criador que provocou você, pergunta de seguidor, leitura, conversa, sentimento), abra o chat e:

```text
/capture
```

Cola a ideia em texto livre. O assistente registra no `banco-de-ideias.md` e, se você quiser, espelha no Notion.

Tempo médio: 30 segundos por ideia. Faz isso 2 a 5 vezes por semana e a Caixa de Entrada se enche sozinha.

### Cure (30 min, início da sessão semanal)

```text
/cure
```

O assistente lê a Caixa de Entrada inteira com você, mostra cada ideia e ajuda você a decidir:

- Vira newsletter (profunda, mais densa, com tese central)?
- Vira carrossel (estruturada, sequencial, instagram-friendly)?
- Vira stories (conversacional, bastidor, ampliação)?
- Vira post avulso (ensaio breve, comentário afiado)?
- Descarta (não amadureceu)?

Você termina o Cure com 4 a 5 briefings prontos para o Crie.

### Crie (2h30, bloco principal)

```text
/crie
```

Ou granular, um por vez:

```text
/criar-newsletter
/criar-carrossel
/criar-stories
```

O assistente usa o DNA Criativo configurado e gera cada peça aplicando o filtro de voz autoral. Você revisa, ajusta o que não soou você e publica.

---

## O que cada comando faz

### Ritual 3x3 (núcleo)

#### /ritual-3x3

Roda o ciclo completo da semana: Cure → Crie principal → Crie complementar. 3 horas guiadas.

#### /capture

Registra uma ideia solta na Caixa de Entrada. Não cura, só captura. Use entre sessões, durante a semana.

Resultado: linha adicionada em `meus-produtos/{ativo}/banco-de-ideias.md`.

#### /cure

Revisa a Caixa de Entrada e seleciona 4 a 5 ideias da semana, criando um briefing por ideia (gancho + tese + ângulo + formato).

Resultado: `meus-produtos/{ativo}/banco-de-ideias.md` atualizado + briefings no chat.

#### /crie

Bloco principal de criação. Lê os briefings curados e gera newsletter + carrosséis + stories em sequência.

### Criação por formato

#### /criar-newsletter

Newsletter editorial-jornalística no formato Bárbara Torres / BrandsDecoded / Dan Koe: gancho da semana + contexto + análise/opinião + provocação + CTA.

Resultado: `meus-produtos/{ativo}/entregas/newsletter/{AAAA-Www-tema}.md` (e `.html` publicável se você pedir).

#### /criar-carrossel

Carrossel autoral de 10 slides para Instagram com tese central, voz preservada e CTA do tipo certo (pitch só se o conteúdo levou naturalmente, senão convite à conversa).

Resultado: `meus-produtos/{ativo}/entregas/carrosseis/{AAAA-MM-DD-tema}.md`.

#### /criar-stories

Sequência conversacional de stories para acompanhar uma newsletter ou um carrossel (bastidor / ampliação / contraponto).

Resultado: `meus-produtos/{ativo}/entregas/stories/{AAAA-MM-DD-stories}.md`.

#### /criar-post-avulso

Post curto autoral (ensaio breve, comentário cultural, observação afiada). Use entre os ciclos do Ritual, quando uma ideia exige resposta rápida.

Resultado: `meus-produtos/{ativo}/entregas/posts/{AAAA-MM-DD-tema}.md`.

### DNA Criativo

#### /dna-criativo

Configura ou atualiza o DNA Criativo: tom, valores, mantras, vocabulário, linha editorial, cosmovisão, referências, CTA por tipo.

Resultado: `meus-produtos/{ativo}/dna-criativo.md` + `perfil.md` atualizado.

#### /dna-revisar

Audita o DNA atual contra o que você efetivamente tem publicado nas redes (Instagram, newsletter, posts recentes). Sugere ajustes se o DNA descrito divergir do DNA praticado.

### Gestão de DNA do Criador

#### /produto-novo

Cria um novo DNA do Criador. Útil se você atende clientes (agência, ghostwriter de marca pessoal) ou opera mais de um projeto editorial. O novo DNA vira o ativo.

#### /produto-trocar

Lista todos os DNAs cadastrados e troca o ativo.

#### /produto-excluir

Remove um DNA e suas entregas. Atenção: irreversível.

#### /produto-zerar

Zera o `perfil.md` e/ou `idconsumidor.md` sem apagar o DNA. Útil quando você quer começar a configuração do zero.

#### /produto-concepcao

Roda a concepção VTSD herdada do fluxo-criativo (Quadro, Furadeira, Decorados, 3 Identidades, Urgências Ocultas, Identidade do Consumidor). Útil se você for **vender** um infoproduto a partir do seu conteúdo (curso, mentoria, e-book pago). Para o uso só editorial do Mapa, o `/dna-criativo` é suficiente.

### Pesquisa e inteligência

#### /pesquisa-mercado

Pesquisa de mercado completa do seu nicho (9 eixos): tamanho, concorrência, preços, público, objeções, assuntos virais, top 10 YouTube, biblioteca de anúncios, riscos regulatórios.

#### /pesquisa-mercado-instagram

Descobre perfis de referência do seu nicho via Apify e analisa conteúdo dos top perfis. Gera dashboard HTML interativo.

#### /dados-instagram

Analisa um perfil específico do Instagram (o seu ou de um concorrente) com insights de copy e voz.

#### /dados-nicho

Descobre de 10 a 20 perfis de referência do nicho no Brasil e no mundo via WebSearch. Entrega relatório com links, posicionamento, tipo de conteúdo e sugestões práticas.

### Dashboards de presença digital

#### /instagram-dashboard, /tiktok-dashboard, /youtube-dashboard

Dashboards HTML de métricas das suas redes via Apify. O aluno roda o script manualmente para atualizar.

### Criativos visuais

#### /criativo-estatico

Gera criativo estático (imagem para post ou anúncio). Pergunta se você quer apenas o prompt para colar em ferramenta externa ou geração automática via API.

#### /banner-visual

Banner estático para Instagram (1080x1350) com foto IA cinematográfica.

#### /carrossel-visual

Carrossel com foto IA por card. Dois modos: criação do zero ou replicação fiel a partir de uma imagem de referência.

#### /usar-referencia-visual

Cria banner ou carrossel a partir de uma imagem de referência sua (troca personagem, altera texto, ajusta cor).

### Páginas

#### /copy-pagina

Cria copy e/ou página HTML profissional. Três tipos: vendas (do seu produto), captura (de leitores da newsletter), obrigado.

Resultado: `meus-produtos/{ativo}/entregas/paginas/[tipo]-[nome].html`. Como ver: abra no navegador.

#### /pagina-ajuste

Ajustes pontuais em uma página HTML já gerada: headline, cores, CTA, FAQ, SEO.

#### /pagina-performance, /pagina-pixel, /pagina-checkout, /pagina-active, /pagina-precheckout

Infraestrutura pós-página: otimização de performance, instalação do Meta Pixel, conexão com checkout, lista de leitores no ActiveCampaign, pré-checkout com captura de leads.

#### /pagina-lovable, /pagina-vercel

Publicação da página no Lovable ou Vercel.

#### /pagina-visual

Reproduz seções de página HTML a partir de prints de referência que você envia.

### Toolkit (projetos editoriais estruturados)

Para projetos grandes (lançamento de newsletter, série temática de 6 carrosséis, ciclo trimestral de pilares, e-book a partir de newsletters acumuladas):

#### /toolkit-novo, /toolkit-planejar, /toolkit-executar, /toolkit-verificar, /toolkit-progresso, /toolkit-anotar, /toolkit-pausar, /toolkit-retomar

Fluxo proprietário com estado persistente entre sessões. Quebra o objetivo em etapas, aciona as skills certas e mantém o `roteiro.md`, `plano.md` e `estado.md` em `meus-produtos/{ativo}/projeto/{slug}/`. Use `/toolkit-progresso` para retomar de onde parou.

### Skills do fluxo-criativo em transição

`/copy-anuncio`, `/copy-carrossel`, `/copy-social`, `/copy-roteiro`, `/copy-variacao-post`, `/comercial-playbook`, `/lt-*`, `/ht-*`, `/trafego-*`, `/vsl-*`, `/feedback-pagina`, `/feedback-low-ticket`, `/elementos-literarios`, `/criar-gpt`, `/adaptar-plataforma` continuam funcionando. Foram herdadas do fluxo-criativo e ainda não foram adaptadas ao tom do Mapa. Use sob demanda, mas saiba que estão na fila para curadoria.

---

## Dicas para melhores resultados

1. **Configure o DNA Criativo com calma.** É a base de tudo. 30 minutos bem investidos no `/dna-criativo` poupam horas de retrabalho nos Crie de cada semana.
2. **Cole textos autênticos.** Quando o `/dna-criativo` pedir, cole 1 a 3 textos que soem você de verdade. Não cole texto editado para soar profissional. Cole o que parecer áudio transcrito, conversa em DM, ensaio cru. A IA precisa ler o você sem filtro.
3. **Capture sem julgar.** A regra do Capture é capturar. Curar é outra etapa, em outro momento. Não tente decidir "isso vale a pena?" na hora. Captura tudo, depois o Cure escolhe.
4. **Revise tudo na sua voz.** O assistente entrega "está perto". Leia em voz alta antes de publicar. Se travar em alguma frase, é porque ela não soou você. Ajuste.
5. **Não force o Ritual em um dia que está ruim.** Se a Caixa de Entrada da semana está fraca, é melhor pular um ciclo do que produzir conteúdo medíocre. O Mapa não é prisão.
6. **Use o `/dna-revisar` a cada 4 a 6 semanas.** Sua voz evolui. O DNA precisa acompanhar.

---

## Perguntas frequentes

**Preciso saber programar?**
Não. Tudo funciona por conversa.

**Posso usar as newsletters geradas em qualquer ferramenta?**
Sim. O Markdown é universal: cola no Substack, Beehiiv, ConvertKit, Mailchimp, ActiveCampaign, ou em qualquer editor de texto. O HTML pode ser publicado direto ou hospedado em Vercel / Lovable.

**Posso pedir alterações?**
Sim. Basta pedir no chat: "deixa a abertura mais provocativa", "tira o CTA, esse conteúdo é cultural", "encurta o terceiro parágrafo". Ou use `/pagina-ajuste` para edição guiada em páginas HTML.

**Onde ficam meus arquivos?**
Na pasta `meus-produtos/{seu-slug}/entregas/`, organizada por formato (newsletter, carrosseis, stories, posts, paginas, criativos). O painel de entregas em `meus-produtos/{seu-slug}/painel-entregas.html` mostra tudo centralizado.

**O que é o método Mapa do Criador?**
Sistema próprio para criadores de conteúdo: Capture, Cure, Crie (Ritual 3x3). Produz 1 newsletter + 2 a 3 carrosséis + 1 sequência de stories por semana em 3 horas, preservando a voz do criador. Não inclui vídeo, Reels nem edição.

**Tenho mais de um perfil de criador (atendo clientes). Como organizo?**
Crie um DNA do Criador para cada um com `/produto-novo`. Cada DNA tem perfil, banco de ideias e entregas isoladas. Use `/produto-trocar` para alternar entre eles. O seletor no painel também navega entre os DNAs cadastrados.

**O que diferencia o Mapa do Criador dos outros cursos de IA?**
Foco explícito em preservação de voz. Enquanto a maioria entrega volume e escala em modo agência, o Mapa entrega consistência com identidade. Stack-específico: Claude + Skills personalizadas + Notion, não 7 ferramentas conectadas no improviso.

**Como vendo o que eu criar?**
O Mapa cobre a produção textual e visual estática (newsletter + carrosséis + stories). Para vender um infoproduto a partir do seu conteúdo (curso, mentoria, e-book pago), use também `/produto-concepcao`, `/copy-pagina`, `/pagina-checkout` e os comandos de tráfego herdados do fluxo-criativo.

**E se eu também usar Substack / Beehiiv para a newsletter?**
Sem problema. O Markdown da newsletter cola direto. O HTML também. O Mapa não força você a usar nenhuma plataforma de envio específica.
