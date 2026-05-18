#!/usr/bin/env node
// PreToolUse hook: bloqueia criacao de peca publicavel sem DNA Criativo configurado.
//
// Regra: se o assistente tenta Write/Edit em meus-produtos/{slug}/entregas/{newsletter|carrosseis|stories|posts}/
// E o arquivo meus-produtos/{slug}/dna-criativo.md NAO existe, bloqueia com exit 2 e mensagem
// de feedback explicando que o DNA Criativo e pre-requisito.
//
// Exit 0 em todos os outros casos. Falhas silenciosas (exit 0) se algo der errado.

'use strict';

const path = require('path');
const fs = require('fs');

const PASTAS_PROTEGIDAS = [
  '/entregas/newsletter/',
  '/entregas/carrosseis/',
  '/entregas/stories/',
  '/entregas/posts/',
];

function extrairSlugDoCaminho(filePath) {
  // Espera caminho contendo meus-produtos/{slug}/...
  const p = filePath.replace(/\\/g, '/');
  const match = p.match(/meus-produtos\/([^\/]+)\//);
  return match ? match[1] : null;
}

function isPastaProtegida(filePath) {
  const p = filePath.replace(/\\/g, '/');
  return PASTAS_PROTEGIDAS.some((pasta) => p.includes(pasta));
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

    if (!isPastaProtegida(filePath)) process.exit(0);

    const slug = extrairSlugDoCaminho(filePath);
    if (!slug) process.exit(0);

    // Verificar se este e o repo do Mapa. Se nao for, sair silencioso.
    const cwd = process.cwd();
    if (!fs.existsSync(path.join(cwd, 'CLAUDE.md'))) process.exit(0);
    try {
      const claudeMd = fs.readFileSync(path.join(cwd, 'CLAUDE.md'), 'utf8');
      if (!claudeMd.includes('Mapa do Criador')) process.exit(0);
    } catch (_) {
      process.exit(0);
    }

    // Verificar se dna-criativo.md existe para o slug detectado
    const dnaPath = path.join(cwd, 'meus-produtos', slug, 'dna-criativo.md');
    if (fs.existsSync(dnaPath)) process.exit(0);

    // DNA nao existe. Bloquear com mensagem.
    const formato = filePath.includes('/newsletter/') ? 'newsletter'
                  : filePath.includes('/carrosseis/') ? 'carrossel'
                  : filePath.includes('/stories/')    ? 'sequencia de stories'
                  : 'post avulso';
    process.stderr.write(
      `\n[mapa-do-criador] DNA Criativo nao configurado.\n\n` +
      `Voce esta tentando criar uma ${formato} em:\n` +
      `  ${filePath}\n\n` +
      `Mas o DNA Criativo do criador "${slug}" ainda nao foi configurado.\n` +
      `Sem DNA, a peca vai sair generica (parece IA, nao parece voce).\n\n` +
      `Rode /dna-criativo primeiro. Depois retome a criacao desta peca.\n` +
      `Se voce ja tem o DNA em outro lugar, mova para meus-produtos/${slug}/dna-criativo.md.\n`
    );
    process.exit(2);
  } catch (e) {
    process.exit(0);
  }
});
