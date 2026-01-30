# 01-fundamentos-nodejs

Repositório com exercícios/introdução aos fundamentos do Node.js.

## Descrição
Projetos e exemplos práticos para estudar os fundamentos do Node.js: módulos, leitura/escrita de arquivos, APIs simples, e conceitos básicos de backend.

## Requisitos
- Node.js (recomendo v16+)
- npm (ou yarn)

## Instalação
```bash
# clonar o repositório
git clone https://github.com/Paulo-b2/01-fundamentos-nodejs.git
cd 01-fundamentos-nodejs

# instalar dependências
npm install
# ou yarn

## Como rodar
# rodar em modo de desenvolvimento (ex.: nodemon/tsx/watch)
npm run dev

# rodar aplicação em produção
npm start

# executar diretamente (caso exista um entrypoint em src/)
node src/index.js

## Estrutura do Projeto

├─ src/           # código-fonte
├─ db.json        # dados de exemplo
├─ package.json
└─ .gitignore
