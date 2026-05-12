# 🌵 Quixa Tour
### Sistema Integrado de Apoio ao Turismo Local — Quixadá, CE

Projeto acadêmico de Desenvolvimento de Software para WEB.

---

## 📁 Estrutura de Arquivos

```
quixa-tour/
├── index.html       → Catálogo Histórico-Turístico (fetch da API)
├── sobre.html       → Impacto Social & Extensão Universitária
├── radar.html       → Radar Gastronômico (filtros JS)
├── passeios.html    → Passeios & Trilhas guiadas
├── login.html       → Autenticação (Turista / Guia / Comerciante)
├── style.css        → Estilo único para todas as páginas
├── server.js        → Backend Node.js + Express (API REST)
├── package.json     → Dependências Node.js
└── README.md        → Este arquivo
```

---

## 🚀 Como rodar

### Frontend (abre direto no navegador)
Não precisa de servidor — basta abrir os arquivos `.html` no navegador.
A página `index.html` tenta fazer fetch em `http://localhost:3000/api/locais`.
Se a API não estiver no ar, os dados de **fallback** embutidos no JS são usados automaticamente.

### Backend (API REST)

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o servidor
node server.js
# ou, com hot-reload:
npm run dev
```

O servidor sobe em: **http://localhost:3000**

---

## 🔌 Endpoints da API

| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| GET    | `/api/locais`           | Lista todos os pontos turísticos |
| GET    | `/api/locais/:id`       | Detalhe de um ponto turístico    |
| GET    | `/api/passeios`         | Lista todos os passeios          |
| GET    | `/api/restaurantes`     | Lista todos os restaurantes      |
| POST   | `/api/auth/login`       | Autenticação de usuário          |
| POST   | `/api/auth/cadastro`    | Criação de nova conta            |

### Parâmetros de query

- `GET /api/locais?tipo=Trilha` — filtra por tipo
- `GET /api/restaurantes?categoria=cafe` — filtra por categoria
- `GET /api/passeios?dificuldade=Fácil` — filtra por dificuldade

### Exemplo de login (POST)
```json
{
  "email": "usuario@email.com",
  "senha": "minhasenha",
  "perfil": "turista"
}
```

---

## ✅ Requisitos atendidos

### HTML
- [x] 5 páginas distintas (index, sobre, radar, passeios, login)
- [x] HTML5 Semântico: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`, `<figure>`, `<figcaption>`
- [x] Menu de navegação funcional em todas as páginas
- [x] Hierarquia de títulos `<h1>` a `<h4>` bem definida
- [x] `alt` descritivos em todas as imagens
- [x] `<figure>` com `<figcaption>` em todas as páginas

### CSS (`style.css`)
- [x] Arquivo CSS único separado do HTML
- [x] Seletores por **tag** (`body`, `img`, `a`, `h1`...)
- [x] Seletores por **classe** (`.card`, `.btn-primario`, `.hero`...)
- [x] Seletores por **id** (`#catalogo`, `#lista-restaurantes`...)
- [x] Seletores por **atributo** (`input[type="checkbox"]`, `input[required]`)
- [x] Layout com **Flexbox** em todos os componentes
- [x] **Media queries** para responsividade (mobile + desktop)
- [x] Animações com `@keyframes` (`fadeSlideDown`, `fadeSlideUp`, `spin`, `pulsar`)
- [x] Transições `transition` em botões, cards e links

### JavaScript
- [x] `fetch()` à API na `index.html` com fallback de dados
- [x] Filtros interativos na `radar.html`
- [x] Validação de formulários em `login.html`
- [x] Menu hambúrguer responsivo
- [x] Tabs de modo (Login/Cadastro) e perfil (Turista/Guia/Comerciante)

### Backend
- [x] Node.js + Express
- [x] API RESTful com rotas GET e POST
- [x] CORS habilitado para o frontend
- [x] Dados em memória (substituível por banco de dados)
- [x] Respostas em JSON

---

*Projeto desenvolvido como trabalho final de Desenvolvimento de Software para WEB — Extensão Universitária, Quixadá-CE, 2025.*
