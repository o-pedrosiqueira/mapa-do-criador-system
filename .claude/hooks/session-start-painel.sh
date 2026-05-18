#!/usr/bin/env bash
# SessionStart hook: abre o painel-entregas.html do DNA do Criador ativo
# no navegador padrao do sistema operacional quando uma nova sessao Claude
# Code comeca na pasta do Mapa do Criador.
#
# Comportamento:
#   - Sai silenciosamente (exit 0) se nao for a pasta do Mapa, se o painel
#     nao existir ou se o flag MAPA_AUTO_OPEN=0 estiver no .env.
#   - Caso contrario, abre o painel uma unica vez por sessao (controle via
#     marker file em /tmp/mapa-painel-aberto-<pid-parent>.flag, que e
#     removido quando o Claude Code encerra).

set -e

CWD="$(pwd)"

# Sai silencioso se nao for o repo do Mapa
if [ ! -f "$CWD/CLAUDE.md" ]; then exit 0; fi
if ! grep -q "Mapa do Criador" "$CWD/CLAUDE.md" 2>/dev/null; then exit 0; fi

# Sai silencioso se nao tem .ativo
if [ ! -f "$CWD/meus-produtos/.ativo" ]; then exit 0; fi

ATIVO="$(cat "$CWD/meus-produtos/.ativo" | tr -d '[:space:]')"
PAINEL="$CWD/meus-produtos/$ATIVO/painel-entregas.html"

if [ ! -f "$PAINEL" ]; then exit 0; fi

# Respeita opt-out via .env
if [ -f "$CWD/.env" ]; then
  if grep -q "^MAPA_AUTO_OPEN=0" "$CWD/.env" 2>/dev/null; then exit 0; fi
fi

# Marker para nao reabrir em hooks subsequentes da mesma sessao
PARENT_PID="${PPID:-0}"
MARKER="/tmp/mapa-painel-aberto-${PARENT_PID}.flag"
if [ -f "$MARKER" ]; then exit 0; fi
touch "$MARKER"

# Detecta SO e abre
case "$(uname -s)" in
  Darwin*)  open "$PAINEL" 2>/dev/null & ;;
  Linux*)   xdg-open "$PAINEL" 2>/dev/null & ;;
  CYGWIN*|MINGW*|MSYS*)  start "$PAINEL" 2>/dev/null & ;;
esac

# Limpeza assincrona: marker some apos 8 horas (sessao geralmente termina antes)
( sleep 28800 && rm -f "$MARKER" ) &

exit 0
