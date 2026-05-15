---
name: mapa-do-criador:criar-carrossel
description: Criar carrossel autoral de 10 slides para Instagram com tese central, estrutura editorial e voz autoral preservada. Aplica DNA Criativo do criador ativo como filtro. Acionada por /criar-carrossel ou dentro de /crie. Diferente de /carrossel-nunca (formato viral específico) e /carrossel-visual (geração de imagens).
---

# Criar Carrossel. Autoral, 10 Slides

Cria um carrossel autoral de 10 slides aplicando o DNA Criativo do criador ativo. Não é listicle. Não é tutorial. É argumento editorial em formato slide.

## Usage

```
/criar-carrossel
```

Ou com slug do briefing já curado:

```
/criar-carrossel renovacao-de-voz
```

## O Que Fazer

> **Regra obrigatória de comunicação:** siga o padrão "Pensar em Voz Alta" do CLAUDE.md.

### Passo 0. Contexto

1. Ler `meus-produtos/.ativo`.
2. Ler `meus-produtos/{ativo}/dna-criativo.md`. Se não existir, oriente a rodar `/dna-criativo` primeiro.
3. Ler `meus-produtos/{ativo}/perfil.md` e `meus-produtos/{ativo}/idconsumidor.md`.
4. Procurar briefing em `meus-produtos/{ativo}/briefings/{AAAA-Www}-briefings.md`. Se o command veio com slug, localizar específico. Se não, listar briefings de carrossel disponíveis. Se não há briefing, oferecer:
   ```
   Não achei briefing curado. Quer:
   1. Rodar /cure primeiro (recomendado)
   2. Criar do zero respondendo perguntas
   ```

### Passo 1. Validação do briefing

Mostrar briefing e confirmar antes de gerar.

### Passo 2. Geração

Anuncie: `🔍 Próximo passo: gerar carrossel "{tema}" aplicando o DNA Criativo. Tempo estimado: cerca de 90 segundos.`

Carregue a skill `criar-carrossel` e gere os 10 slides + briefing visual seguindo a estrutura:

- Slide 1: capa (gancho + tese)
- Slides 2 a 4: contexto
- Slides 5 a 7: análise / argumento (coração)
- Slides 8 a 9: provocação ou exemplo
- Slide 10: assinatura + CTA

**Aplicação obrigatória do DNA Criativo (antes de exibir):**

1. Cada slide carrega o tom do criador (mesmo registro em todos os 10)
2. Mantras / jargões próprios aparecem em 1 a 3 slides centrais
3. Vocabulário base aparece pelo menos em 2 slides
4. Nenhuma palavra da lista "evitar" do DNA
5. Nenhuma das 10 proibições do CLAUDE.md
6. Texto por slide entre 30 e 80 palavras (capa pode ser menor)
7. CTA respeita o tipo do briefing
8. Slide 10 NÃO termina em "siga, curte, salva, compartilha" sem fechamento autoral

Se algum item falhar: reescreva.

### Passo 3. Briefing visual

Após os 10 slides, gerar o briefing visual com:

- Paleta de cor (puxar do DNA / perfil)
- Tipografia (default: serif editorial + sans para subtítulo)
- Densidade de texto por slide
- Sugestão de imagem por slide (se aplicável)
- Animação ou estática

### Passo 4. Aprovação

Mostrar o carrossel completo + briefing visual. Pedir:
```
1. Aprovar e salvar
2. Quero ajustar (especifique slide ou trecho)
```

Edição cirúrgica em ajustes. Não reescrever slides vizinhos.

### Passo 5. Salvar

Salvar em `meus-produtos/{ativo}/entregas/carrosseis/{AAAA-MM-DD-tema-em-slug}.md`.

### Passo 6. Geração visual (opcional)

Perguntar:
```
Quer gerar as imagens dos slides agora?
1. Sim, usar /carrossel-visual com este briefing
2. Vou montar no Canva / Figma manualmente
3. Só o texto está bom
```

Se opção 1: orientar a rodar `/carrossel-visual` referenciando este briefing.

### Passo 7. Painel

Acione `python3 scripts/painel-incremental.py --secao carrosseis` (se a seção existir).

### Passo 8. Entrega

```
✅ Concluído: carrossel "{tema}" salvo. Caminho: meus-produtos/{ativo}/entregas/carrosseis/{slug}.md.

Sugestão de próximo passo:
- /criar-stories {slug das stories da semana} para amarrar bastidor com este carrossel
- /carrossel-visual para gerar as imagens
```

## Princípios operacionais

- **Tese tem dono.** Se o briefing não tem tese formada, perguntar antes de gerar.
- **Cada slide é uma ideia inteira**, não uma frase solta arrastada.
- **Capa que para o scroll.** A capa precisa ser afiada o suficiente para fazer o leitor parar.
- **Slide 10 fecha de verdade.** Não pode terminar em pedido seco de engajamento. Precisa ressoar.
- **Edição cirúrgica em ajustes.**
- **Voz autoral é critério #1.** Filtro de DNA antes de o criador ver.
