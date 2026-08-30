
# Atividade Prática com TypeScript e GitHub Actions

Este repositório contém a resolução dos exercícios práticos desenvolvidos em TypeScript, incluindo implementações de funções, testes unitários locais e automação de testes (CI) configurada via GitHub Actions.

## 📋 Pré-requisitos

Para rodar o projeto localmente, certifique-se de ter instalado:
* **Node.js** (versão 18.0.0 ou superior)
* **npm** (gerenciador de pacotes do Node.js)

---

## 🚀 Configuração do Ambiente

### 1. Entrar na pasta do projeto
No seu terminal, navegue até o diretório raiz do repositório:

```bash
cd ~/raissa-placido-Atividade-I.II-Pr-tica-com-Typescript-no-Github

```

### 2. Instalar dependências

Execute o comando abaixo para instalar as bibliotecas de desenvolvimento do projeto:

```bash
npm install

```

---

## 🧪 Execução dos Testes

Você pode rodar todos os testes automatizados da aplicação ou executar cada arquivo de teste individualmente.

### Opção A: Executar toda a suíte de testes (Recomendado)

Para rodar a suíte completa de testes configurada no projeto (ex: Vitest):

```bash
npm test

```

### Opção B: Executar arquivos de testes específicos

Para rodar isoladamente o teste de um exercício usando o test runner nativo do Node.js (`node:test` + `tsx`):

* **Exercício 01 (Elevar ao Quadrado):**
```bash
npx tsx --test src/ex01/testes/ex01_teste.ts

```


* **Exercício 02 (Concatenação de Strings):**
```bash
npx tsx --test src/ex02/testes/ex02_teste.ts

```



---

## 📂 Estrutura de Arquivos

```text
.
├── .github/
│   └── workflows/          # Automação de CI (GitHub Actions)
├── src/
│   ├── ex01/               # Exercício 1 (laços for e forEach)
│   │   ├── ex01.ts
│   │   └── testes/
│   │       └── ex01_teste.ts
│   └── ex02/               # Exercício 2 (join e arrow functions)
│       ├── ex02.ts
│       └── testes/
│           └── ex02_teste.ts
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🛠️ Solução de Problemas Técnicos

* **Erro `ERR_MODULE_NOT_FOUND`:**
Ao usar ES Modules no Node.js, certifique-se de manter o sufixo `.js` no caminho de importação dos módulos locais nos arquivos de teste (ex: `import { ... } from '../ex01.js'`).
* **Erro `Cannot find name 'node:test'` / `'node:assert'`:**
Se o TypeScript reclamar dos módulos nativos do Node, atualize as definições de tipo executando:
```bash
npm install -D @types/node

```



```

