#!/usr/bin/env node
// PostToolUse hook: atualiza automaticamente o painel-entregas.html
// quando uma das pastas-chave do Mapa do Criador e tocada.
//
// Mapeamento file -> secoes a regerar:
//   banco-de-ideias.md      -> banco-de-ideias, esta-semana
//   dna-criativo.md         -> identidade-comunicador
//   entregas/newsletter/*   -> newsletter, esta-semana, calendario
//   entregas/carrosseis/*   -> carrosseis, esta-semana, calendario
//   entregas/stories/*      -> stories, esta-semana, calendario
//   entregas/posts/*        -> esta-semana, calendario
//   briefings/*             -> esta-semana
//   ritual/*                -> esta-semana
//
// Disparado em background (nao bloqueia). Falhas sao silenciosas (exit 0).
// Output via stderr aparece no log do Claude se algo der errado.

'use strict';

const path = require('path');
const { spawn } = require('child_process');

const PASTA_ENTREGAS = {
  'entregas/newsletter': ['newsletter', 'esta-semana', 'calendario'],
  'entregas/carrosseis': ['carrosseis', 'esta-semana', 'calendario'],
  'entregas/stories': ['stories', 'esta-semana', 'calendario'],
  'entregas/posts': ['esta-semana', 'calendario'],
  'briefings': ['esta-semana'],
  'ritual': ['esta-semana'],
};

const ARQUIVO_FIXO = {
  'banco-de-ideias.md': ['banco-de-ideias', 'esta-semana'],
  'dna-criativo.md': ['identidade-comunicador'],
  'posicao-autoral.md': ['anthem', 'arquetipo', 'pilares', 'manifesto'],
};

function detectarSecoes(filePath) {
  // Normalizar separadores
  const p = filePath.replace(/\\/g, '/');
  // Considerar apenas arquivos sob meus-produtos/{slug}/
  if (!p.includes('meus-produtos/')) return null;

  // Match pasta de entrega
  for (const [pasta, secoes] of Object.entries(PASTA_ENTREGAS)) {
    if (p.includes(`/${pasta}/`)) return secoes;
  }

  // Match arquivo fixo na raiz do produto
  for (const [arquivo, secoes] of Object.entries(ARQUIVO_FIXO)) {
    if (p.endsWith(`/${arquivo}`)) return secoes;
  }

  return null;
}

let input = '';
process.stdin.on('data', (c) => (input += c));
process.stdin.on('end', () => {
  try {
    const event = JSON.parse(input || '{}');
    const tool = event.tool_name || '';
    if (!['Write', 'Edit', 'MultiEdit'].includes(tool)) {
      process.exit(0);
    }

    const params = event.tool_input || {};
    const filePath = String(params.file_path || '');
    if (!filePath) process.exit(0);

    const secoes = detectarSecoes(filePath);
    if (!secoes || secoes.length === 0) {
      process.exit(0);
    }

    // Tentar localizar a raiz do projeto. O hook roda do cwd do Claude Code.
    // Se nao for o repo do Mapa, sair silenciosamente.
    const fs = require('fs');
    const cwd = process.cwd();
    const scriptPath = path.join(cwd, 'scripts', 'painel-incremental.py');
    if (!fs.existsSync(scriptPath)) {
      process.exit(0);
    }

    // Disparar regeração em background. Cada secao em sequencia, nao paralelo
    // (evita race condition no HTML compartilhado).
    let i = 0;
    function proxima() {
      if (i >= secoes.length) return;
      const secao = secoes[i++];
      const child = spawn('python3', ['scripts/painel-incremental.py', '--secao', secao], {
        cwd,
        stdio: 'ignore',
        detached: true,
      });
      child.on('exit', () => proxima());
      child.on('error', () => proxima());
    }
    proxima();

    // Hook nao espera o subprocess terminar. Exit imediato com 0.
    process.exit(0);
  } catch (e) {
    // Silencioso. Se algo deu errado, nao queremos bloquear o fluxo.
    process.exit(0);
  }
});
