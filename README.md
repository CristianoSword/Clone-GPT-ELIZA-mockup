# Clone GPT Mockup

Aplicação web estilo ChatGPT construída com Express, TypeScript, EJS, HTMX e Tailwind CSS.

## O que inclui

- Servidor Node.js com Express + TypeScript
- Interface SPA-like com visual inspirado no ChatGPT
- Chat local simples com respostas mock/echo
- Atualizações parciais via HTMX sem page reload
- Views componentizadas com EJS partials
- Testes com Vitest
- ESLint e estrutura organizada
- Dockerfile e docker-compose

## Requisitos

- Node.js 20+ recomendado
- npm
- Docker opcional para rodar em container

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Isso sobe o servidor Express via `ts-node`.

Abra `http://localhost:3000`.

## Build

```bash
npm run build
```

Gera `dist/` com o servidor compilado.

## Produção

```bash
npm start
```

## Testes

```bash
npm test
```

## Lint

```bash
npm run lint
```

## Docker

```bash
docker compose up --build
```

## Estrutura

```text
src/
  app.ts
  server.ts
  chat/
  styles/
  views/
tests/
public/
dist/
```

## Como o chat funciona

- O formulário envia a mensagem para `/chat`
- O servidor adiciona a mensagem do usuário ao histórico em memória
- O servidor gera uma resposta mock de eco
- A rota retorna apenas o HTML parcial de mensagens
- O HTMX substitui o conteúdo do painel sem recarregar a página

## Próximos passos sugeridos

- Persistir mensagens em banco
- Trocar o mock por integração com uma LLM real
- Adicionar autenticação e múltiplas conversas
