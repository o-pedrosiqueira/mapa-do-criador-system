#!/bin/bash
set -e

INSTALL_DIR="$HOME/Documents/mapa-do-criador"
# TODO: substituir pelo repositorio publico oficial do Mapa do Criador quando criado
REPO_URL="${MAPA_REPO_URL:-https://github.com/pedrosiqueira/mapa-do-criador.git}"
DESKTOP="$HOME/Desktop"

echo ""
echo "========================================"
echo "   Mapa do Criador - Instalador Mac"
echo "========================================"
echo ""
echo "  Sistema de criacao de conteudo autoral com IA"
echo "  Pedro Siqueira"
echo ""

# Homebrew
if ! command -v brew &>/dev/null; then
  echo "[1/7] Instalando Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  eval "$(/opt/homebrew/bin/brew shellenv)" 2>/dev/null || eval "$(/usr/local/bin/brew shellenv)" 2>/dev/null || true
else
  echo "[1/7] Homebrew ja instalado."
fi

# Python
echo "[2/7] Instalando Python 3..."
brew install python3 2>/dev/null || true

# Git
echo "[3/7] Instalando Git..."
brew install git 2>/dev/null || true

# Node
echo "[4/7] Instalando Node.js..."
brew install node 2>/dev/null || true

# Claude
echo "[5/7] Instalando Claude da Anthropic..."
brew install --cask claude 2>/dev/null || true

# Clone ou atualizar
echo "[6/7] Baixando o Mapa do Criador..."
if [ -d "$INSTALL_DIR/.git" ]; then
  echo "  Mapa do Criador encontrado. Atualizando..."
  cd "$INSTALL_DIR" && git pull origin main
else
  echo "  Clonando repositorio..."
  git clone -b main "$REPO_URL" "$INSTALL_DIR"
fi

# Dependencias
echo "[7/7] Instalando dependencias do painel..."
cd "$INSTALL_DIR"
npm install

# Launcher na area de trabalho
LAUNCHER="$DESKTOP/Mapa do Criador.command"
cat > "$LAUNCHER" << 'EOF'
#!/bin/bash
cd "$HOME/Documents/mapa-do-criador"
npm start
EOF
chmod +x "$LAUNCHER"
xattr -cr "$LAUNCHER" 2>/dev/null || true

# Abre o Claude apontando para a pasta para o aluno comecar a operar o Ritual 3x3
if command -v claude &>/dev/null; then
  echo "  Abrindo Claude na pasta do Mapa do Criador..."
  (cd "$INSTALL_DIR" && claude &) 2>/dev/null || true
fi

echo ""
echo "========================================"
echo "  Instalacao concluida"
echo "========================================"
echo ""
echo "  Pasta:  $INSTALL_DIR"
echo "  Atalho: 'Mapa do Criador.command' na sua Area de Trabalho"
echo ""
echo "  Proximos passos:"
echo "  1. Abra o Claude (deve ter aberto sozinho)"
echo "  2. Rode /dna-criativo para configurar sua voz autoral"
echo "  3. Rode /capture durante a semana, /ritual-3x3 no dia da sessao"
echo ""
