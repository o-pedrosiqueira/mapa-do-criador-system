// Trilha do Mapa do Criador. 3 etapas x ~7 itens cada = 20 itens totais.
// Cada item tem id estavel para persistencia do checkbox no Supabase.

export type ItemTrilha = {
  id: string;
  titulo: string;
  descricao: string;
  comando?: string; // ex: "/dna-criativo"
  link?: { texto: string; url: string };
};

export type GrupoTrilha = {
  titulo: string;
  itens: ItemTrilha[];
};

export type Etapa = {
  slug: string;
  numero: number;
  rotulo: string; // ex: "Primeira Etapa"
  rotulo_curto: string; // ex: "Etapa 1" (usado em sidebar mobile e progresso)
  titulo: string;
  titulo_destaque: string;
  resumo: string;
  grupos: GrupoTrilha[];
};

// Mantido o nome Dia como alias por compatibilidade interna
export type Dia = Etapa;

export const TRILHA: Etapa[] = [
  {
    slug: "etapa-1",
    numero: 1,
    rotulo: "Primeira Etapa",
    rotulo_curto: "Etapa 1",
    titulo: "Instalação e",
    titulo_destaque: "primeiros passos.",
    resumo: "Coloque o Mapa do Criador na sua máquina. App desktop, Claude da Anthropic, primeira abertura do painel.",
    grupos: [
      {
        titulo: "Antes de começar",
        itens: [
          {
            id: "d1-1-claude",
            titulo: "Claude da Anthropic",
            descricao: "O motor de IA do sistema. Crie sua conta gratuita em claude.ai (Pro opcional, US$ 20/mês para usar mais).",
            link: { texto: "Criar conta no Claude", url: "https://claude.ai" },
          },
          {
            id: "d1-1-notion",
            titulo: "Notion (opcional, recomendado)",
            descricao: "A Oficina do Criador vive aqui. Conta gratuita basta. Você captura ideias da semana no Notion durante o ciclo Capture.",
            link: { texto: "Criar conta no Notion", url: "https://notion.so" },
          },
        ],
      },
      {
        titulo: "Instalar o Mapa do Criador",
        itens: [
          {
            id: "d1-2-baixar",
            titulo: "Baixar o instalador",
            descricao: "Apple Silicon (M1/M2/M3) ou Intel. O arquivo .dmg tem cerca de 122 MB e está hospedado no GitHub Releases.",
            link: { texto: "Baixar DMG", url: "/download" },
          },
          {
            id: "d1-2-abrir-dmg",
            titulo: "Abrir o DMG e arrastar para Applications",
            descricao: "Dê duplo-clique no .dmg baixado. Arraste o ícone 'Mapa do Criador' para o atalho 'Applications' que aparece ao lado.",
          },
          {
            id: "d1-2-primeira-abertura",
            titulo: "Primeira abertura: botão direito → Abrir",
            descricao: "Na primeira vez o macOS bloqueia o app porque não tem certificado Apple Developer. Clique com botão direito no app em Applications, escolha 'Abrir' e confirme.",
          },
          {
            id: "d1-2-setup",
            titulo: "Aguardar o setup automático",
            descricao: "O app instala Homebrew, Python, Git e Node.js automaticamente. Em algum momento pede sua senha do Mac (é a senha do usuário, não aparece ao digitar). Tempo: cerca de 10 minutos.",
          },
          {
            id: "d1-2-painel",
            titulo: "Painel abre no navegador",
            descricao: "Quando terminar o setup, o painel-entregas.html abre automaticamente. Você vê a capa do Mapa, a sidebar com 16 seções editoriais e a Sala dos Agentes.",
          },
        ],
      },
      {
        titulo: "Validação",
        itens: [
          {
            id: "d1-3-claude-abre",
            titulo: "Claude abre na pasta do Mapa",
            descricao: "Confirme que o Claude conhece o projeto: abra o app Claude, navegue até ~/Documents/mapa-do-criador, mande 'oi'. O sistema deve responder reconhecendo o produto ativo.",
          },
        ],
      },
    ],
  },
  {
    slug: "etapa-2",
    numero: 2,
    rotulo: "Segunda Etapa",
    rotulo_curto: "Etapa 2",
    titulo: "Configurar seu",
    titulo_destaque: "DNA e Posição.",
    resumo: "Antes de produzir conteúdo, o sistema precisa conhecer sua voz e sua posição autoral. Cinco comandos, uma sessão de cerca de 45 a 60 minutos.",
    grupos: [
      {
        titulo: "DNA Criativo (a voz)",
        itens: [
          {
            id: "d2-1-dna-criativo",
            titulo: "Rodar /dna-criativo no Claude",
            descricao: "O comando analisa 1 a 3 textos seus autênticos (post antigo, e-mail longo, transcrição de áudio) e extrai padrões de voz: tom, vocabulário, mantras, linha editorial, cosmovisão.",
            comando: "/dna-criativo",
          },
          {
            id: "d2-1-textos",
            titulo: "Colar 1 a 3 textos autênticos",
            descricao: "Cole textos que soam VOCÊ de verdade, não filtrados para soar profissionais. Quanto mais cru, melhor a extração da voz.",
          },
          {
            id: "d2-1-validar",
            titulo: "Validar o DNA gerado",
            descricao: "O sistema mostra o DNA pronto. Leia. Se algum mantra ou bloco não soa você, peça ajuste antes de aprovar. O DNA filtra TODA peça gerada depois.",
          },
        ],
      },
      {
        titulo: "Posição Autoral (a marca)",
        itens: [
          {
            id: "d2-2-anthem",
            titulo: "Rodar /definir-anthem",
            descricao: "Frase única que captura sua diferença distintiva (Sally Hogshead). Formula: 'Eu sou o(a) [adjetivo] [substantivo].' Não é tagline; é o que você defenderia em 5 segundos.",
            comando: "/definir-anthem",
          },
          {
            id: "d2-2-arquetipo",
            titulo: "Rodar /escolher-arquetipo",
            descricao: "Combinação de Brand Archetype (12 padrões Jung/Mark&Pearson: Hero, Sage, Outlaw, Magician...) + Vantagens da Fascinação (Sally Hogshead: Innovation, Mystique, Trust, Passion...).",
            comando: "/escolher-arquetipo",
          },
          {
            id: "d2-2-pilares",
            titulo: "Rodar /definir-pilares",
            descricao: "3 a 5 territórios temáticos que dão coerência ao seu perfil. Todo conteúdo encaixa em pelo menos 1 pilar.",
            comando: "/definir-pilares",
          },
          {
            id: "d2-2-manifesto",
            titulo: "Rodar /escrever-manifesto",
            descricao: "O que você defende publicamente + o que rejeita (inimigo nomeado). Sem manifesto, conteúdo perde nervo.",
            comando: "/escrever-manifesto",
          },
        ],
      },
      {
        titulo: "Validação",
        itens: [
          {
            id: "d2-3-painel-completo",
            titulo: "Painel mostra Posição Autoral preenchida",
            descricao: "Abra o painel-entregas.html. As 4 seções do grupo POSIÇÃO AUTORAL (Anthem, Arquétipo, Pilares, Manifesto) devem estar com cards editoriais, não com empty states.",
          },
        ],
      },
    ],
  },
  {
    slug: "etapa-3",
    numero: 3,
    rotulo: "Terceira Etapa",
    rotulo_curto: "Etapa 3",
    titulo: "Primeiro",
    titulo_destaque: "Ritual 3x3.",
    resumo: "Com DNA + Posição prontos, a primeira sessão semanal: Capture, Cure, Crie. Três horas, uma newsletter, dois carrosséis e uma sequência de stories.",
    grupos: [
      {
        titulo: "Capture (durante a semana)",
        itens: [
          {
            id: "d3-1-capturas",
            titulo: "Capturar 5 a 10 ideias da semana",
            descricao: "Use /capture quantas vezes precisar durante a semana. Anote frases, perguntas de seguidores, observações de leitura, conversas. Sem julgar, sem editar.",
            comando: "/capture",
          },
        ],
      },
      {
        titulo: "Cure (início da sessão semanal)",
        itens: [
          {
            id: "d3-2-cure",
            titulo: "Rodar /cure",
            descricao: "Revisa a Caixa de Entrada com você, escolhe 4 a 5 ideias da semana e gera um briefing por ideia (gancho, tese, ângulo, formato, CTA).",
            comando: "/cure",
          },
        ],
      },
      {
        titulo: "Crie (bloco principal)",
        itens: [
          {
            id: "d3-3-ritual",
            titulo: "Rodar /ritual-3x3",
            descricao: "Conduz a sessão inteira: Cure → Crie principal (newsletter + 2 carrosseis) → Crie complementar (stories). Cerca de 2h30 de produção guiada.",
            comando: "/ritual-3x3",
          },
          {
            id: "d3-3-newsletter",
            titulo: "Aprovar a primeira newsletter",
            descricao: "Editorial-jornalística no formato Bárbara Torres / Dan Koe: gancho + contexto + análise + provocação + CTA. Leia em voz alta antes de aprovar. Se travar em alguma frase, é porque não soou você. Peça ajuste.",
          },
          {
            id: "d3-3-carrosseis",
            titulo: "Aprovar 2 carrosseis",
            descricao: "10 slides com tese central, voz autoral preservada, sem listicle. CTA do tipo certo (convite à conversa ou pitch quando o conteúdo levou).",
          },
          {
            id: "d3-3-stories",
            titulo: "Aprovar 1 sequência de stories",
            descricao: "3 a 6 frames conversacionais (bastidor / ampliação / contraponto). Tom de áudio para amigo, não post profissional.",
          },
        ],
      },
      {
        titulo: "Publicar",
        itens: [
          {
            id: "d3-4-publicar",
            titulo: "Publicar a primeira peça",
            descricao: "Escolha 1 das peças geradas (newsletter, carrossel ou stories) e publique HOJE. Não espere o pacote completo. A primeira publicação quebra a inércia.",
          },
          {
            id: "d3-4-proxima-semana",
            titulo: "Marcar a próxima sessão Ritual 3x3 na agenda",
            descricao: "Mesmo horário, mesmo dia da semana. O Mapa só funciona se o ritual virar agenda fixa. 3 horas semanais, sem domingo de planejamento.",
          },
        ],
      },
    ],
  },
];

export function totalItens(): number {
  return TRILHA.reduce(
    (acc, dia) => acc + dia.grupos.reduce((a, g) => a + g.itens.length, 0),
    0
  );
}

export function itensDaEtapa(slug: string): ItemTrilha[] {
  const etapa = TRILHA.find((e) => e.slug === slug);
  if (!etapa) return [];
  return etapa.grupos.flatMap((g) => g.itens);
}

// Alias antigo, mantido para compatibilidade interna durante a transicao
export const itensDoDia = itensDaEtapa;
