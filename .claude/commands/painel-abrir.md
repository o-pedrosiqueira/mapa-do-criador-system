---
name: mapa-do-criador:painel-abrir
description: Abrir o painel-entregas.html do DNA do Criador ativo no navegador padrao. Atalho rapido para checar Caixa de Entrada, Ritual da Semana, Calendario Editorial e demais secoes sem precisar navegar pelas pastas.
---

# Painel Abrir. Atalho para o Painel de Entregas

Abre o `painel-entregas.html` do DNA do Criador ativo no navegador padrão do sistema operacional.

## Usage

```
/painel-abrir
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md. Operação rápida (1 a 3 segundos), normalmente não exige anúncio.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`. Se não existir, oriente:
   ```
   Nenhum DNA do Criador ativo. Use /produto-novo para criar um primeiro.
   ```

### Passo 1. Verificar existência do painel

Construir caminho:
```
meus-produtos/{ativo}/painel-entregas.html
```

Se o arquivo não existir, regerar o shell antes de abrir:

```bash
python3 scripts/painel-incremental.py --secao quadro --rebuild-shell --open
```

A flag `--open` do script já cuida da abertura no navegador. Caso o script falhe, oriente:
```
Painel ainda nao foi gerado. Rode primeiro /produto-concepcao ou /dna-criativo para preencher as primeiras secoes.
```

### Passo 2. Abrir o painel

Se o arquivo existe, abrir no navegador padrão usando o comando do sistema operacional:

**Mac (darwin):**
```bash
open meus-produtos/{ativo}/painel-entregas.html
```

**Linux:**
```bash
xdg-open meus-produtos/{ativo}/painel-entregas.html
```

**Windows:**
```bash
start meus-produtos/{ativo}/painel-entregas.html
```

Detecte o sistema operacional automaticamente (use `python3 -c "import platform; print(platform.system())"` se necessário).

### Passo 3. Confirmar

Mensagem curta após abrir:

```
✅ Painel aberto no navegador. Caminho: meus-produtos/{ativo}/painel-entregas.html

Dica: o painel atualiza automaticamente quando voce roda /capture, /cure, /criar-newsletter, /criar-carrossel, /criar-stories ou /criar-post-avulso. Basta recarregar a aba (Cmd+R no Mac, Ctrl+R no Windows/Linux).
```

## Princípios operacionais

- **Atalho, não confirmação.** Não pedir aprovação. O painel é arquivo local, abrir é seguro e reversível.
- **Tolerante a falhas.** Se o navegador padrão der problema, sugerir abrir manualmente colando o caminho na barra de endereço.
- **Sem reload forçado.** Não precisa abrir aba nova nem fechar abas existentes. O `open`/`start`/`xdg-open` respeita a configuração do usuário.
