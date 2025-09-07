# 🚀 Risson Blog

Um blog moderno e responsivo desenvolvido com Node.js, Express e EJS, com sistema completo de CRUD para posts e persistência de dados em JSON.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Persistência de Dados](#-persistência-de-dados)
- [Design e UX](#-design-e-ux)
- [Responsividade](#-responsividade)
- [Funcionalidades Avançadas](#-funcionalidades-avançadas)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Visão Geral

O Risson Blog é uma aplicação web full-stack que permite criar, visualizar, editar e deletar posts de blog. Desenvolvido com foco em performance, experiência do usuário e design moderno, utilizando as melhores práticas de desenvolvimento web.

### ✨ Destaques
- **Interface Moderna**: Design glassmorphism com gradientes e animações suaves
- **Responsivo**: Adaptável a dispositivos móveis, tablets e desktop
- **CRUD Completo**: Create, Read, Update, Delete para posts
- **Persistência JSON**: Sistema de armazenamento simples e eficiente
- **UX Avançada**: Animações, transições e feedback visual

## 🚀 Funcionalidades

### 📝 Gestão de Posts
- ✅ **Criar Posts**: Formulário completo com validação
- ✅ **Visualizar Posts**: Layout responsivo com cards modernos
- ✅ **Editar Posts**: Interface intuitiva para modificações
- ✅ **Deletar Posts**: Confirmação de segurança antes da exclusão
- ✅ **Visualização Individual**: Página dedicada para cada post

### 🎨 Interface e Design
- ✅ **Navbar Fixa**: Navegação sticky com efeitos visuais
- ✅ **Cards Animados**: Hover effects e transições suaves
- ✅ **Botões Modernos**: SVG icons com estados visuais
- ✅ **Gradientes**: Paleta de cores consistente
- ✅ **Tipografia**: Google Fonts (Roboto) otimizada

### 📱 Responsividade
- ✅ **Mobile First**: Design otimizado para dispositivos móveis
- ✅ **Breakpoints**: 480px, 768px, 1200px
- ✅ **Layout Adaptativo**: Grid e flexbox responsivos
- ✅ **Touch Friendly**: Botões e elementos otimizados para toque

## 🛠 Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript
- **Express.js**: Framework web minimalista
- **EJS**: Template engine para renderização server-side
- **Multer**: Middleware para handling de formulários multipart
- **Method-Override**: Suporte a métodos HTTP PUT/DELETE

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox/Grid
- **JavaScript**: Interatividade e validações
- **SVG Icons**: Ícones vetoriais escaláveis
- **Google Fonts**: Tipografia Roboto

### Persistência
- **File System (fs)**: Operações de arquivo
- **JSON**: Formato de armazenamento de dados
- **Path**: Manipulação de caminhos de arquivo

### Desenvolvimento
- **Nodemon**: Auto-reload durante desenvolvimento
- **ES6 Modules**: Import/export syntax
- **Git**: Controle de versão

## 🏗 Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn
- Git

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/RLisson/Blogging.git
cd Blogging
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
nodemon index.js
```

4. **Acesse a aplicação**
```
http://localhost:3000
```

### Variáveis de Ambiente
```env
PORT=3000
DATA_FILE=data/posts.json
```

## 📁 Estrutura do Projeto

```
Blogging/
├── 📁 data/
│   └── posts.json              # Armazenamento de posts
├── 📁 public/
│   └── 📁 styles/
│       ├── header.css          # Estilos da navbar
│       ├── style.css           # Estilos gerais e cards
│       ├── about.css           # Estilos da página sobre
│       ├── post.css            # Estilos da página individual
│       └── createpost.css      # Estilos dos formulários
├── 📁 views/
│   ├── header.ejs              # Componente navbar
│   ├── index.ejs               # Página principal
│   ├── post.ejs                # Página individual do post
│   ├── createpost.ejs          # Formulário de criação
│   ├── editpost.ejs            # Formulário de edição
│   └── about.ejs               # Página sobre
├── 📄 index.js                 # Servidor principal
├── 📄 package.json             # Dependências e scripts
├── 📄 nodemon.json             # Configuração do nodemon
└── 📄 README.md                # Este arquivo
```

## 🔗 API Endpoints

### Posts
| Método | Endpoint | Descrição | Corpo da Requisição |
|--------|----------|-----------|-------------------|
| `GET` | `/` | Lista todos os posts | - |
| `GET` | `/posts/:id` | Visualiza post específico | - |
| `GET` | `/posts/:id/edit` | Formulário de edição | - |
| `POST` | `/posts` | Cria novo post | `title, image, description, content` |
| `POST` | `/posts/:id/update` | Atualiza post existente | `title, image, description, content` |
| `POST` | `/posts/:id/delete` | Remove post | - |
| `PUT` | `/posts/:id/edit` | Atualiza post (método HTTP) | `title, image, description, content` |
| `DELETE` | `/posts/:id` | Remove post (método HTTP) | - |

### Páginas
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/create` | Formulário de criação de post |
| `GET` | `/about` | Página sobre o blog |

### Exemplo de Estrutura de Post
```json
{
  "id": 1757189055277,
  "title": "Meu Post",
  "image": "https://exemplo.com/imagem.jpg",
  "description": "Descrição breve do post",
  "content": "Conteúdo completo do post...",
  "createdAt": "2025-09-07T10:30:00.000Z"
}
```

## 💾 Persistência de Dados

### Sistema de Arquivos JSON
- **Localização**: `data/posts.json`
- **Formato**: Array de objetos JSON
- **Operações**: CRUD completo com validação
- **Backup**: Criação automática de diretórios

### Funções de Persistência
```javascript
loadPosts()           // Carrega posts do arquivo
savePosts(posts)      // Salva posts no arquivo
addPost(...)          // Adiciona novo post
getPostById(id)       // Busca post por ID
deletePost(id)        // Remove post por ID
ensureDataDir()       // Garante que o diretório existe
```

## 🎨 Design e UX

### Paleta de Cores
```css
/* Gradientes Principais */
Primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Success: linear-gradient(135deg, #4caf50 0%, #45a049 100%)
Danger:  linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)

/* Cores de Texto */
Heading: #2c3e50
Body:    #555555
Light:   #999999
```

### Componentes Visuais

#### Navbar
- **Posição**: Sticky top
- **Efeitos**: Glassmorphism com backdrop-filter
- **Animações**: Hover com elevação e brilho
- **Responsividade**: Layout vertical em mobile

#### Cards de Post
- **Layout**: CSS Grid responsivo
- **Efeitos**: Hover com elevação e sombra
- **Imagens**: object-fit: cover com bordas arredondadas
- **Botões**: Gradientes com estados visuais

#### Formulários
- **Campos**: Bordas animadas e validação visual
- **Botões**: Estados hover/active com feedback
- **Layout**: Flexbox com gaps consistentes
- **Validação**: HTML5 + feedback visual

### Animações CSS
```css
/* Transições Globais */
transition: all 0.3s ease;

/* Animações de Entrada */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Efeitos Hover */
transform: translateY(-5px);
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
```

## 📱 Responsividade

### Breakpoints
```css
/* Mobile First Approach */
Base:     0px - 479px   (Mobile)
Small:    480px - 767px (Large Mobile)
Medium:   768px - 1199px (Tablet)
Large:    1200px+       (Desktop)
```

### Adaptações por Dispositivo

#### Mobile (< 480px)
- Grid de 1 coluna
- Navbar vertical
- Botões menores (36px)
- Padding reduzido
- Font-size ajustado

#### Tablet (480px - 768px)
- Grid de 2 colunas
- Navbar horizontal compacta
- Botões médios (40px)
- Espaçamentos intermediários

#### Desktop (> 768px)
- Grid responsivo (auto-fit)
- Navbar completa
- Botões normais (44px)
- Hover effects completos
- Máxima largura de containers

## ⚡ Funcionalidades Avançadas

### Method Override
```javascript
// Suporte a PUT/DELETE via formulários HTML
app.use(methodOverride('_method'));
```

### Middleware de Formulários
```javascript
// Processamento inteligente de content-types
const handleFormData = (req, res, next) => {
  const contentType = req.get('Content-Type');
  if (contentType?.includes('multipart/form-data')) {
    upload.none()(req, res, next);
  } else {
    next();
  }
};
```

### Validação de Dados
```javascript
// Validação server-side
if (!title || !image || !description || !content) {
  return res.status(400).send('Todos os campos são obrigatórios');
}
```

### Confirmação de Exclusão
```javascript
// JavaScript client-side para confirmação
onsubmit="return confirm('Tem certeza que deseja deletar este post?')"
```

## 📧 Contato

**Lucas Risson** - [@RLisson](https://github.com/RLisson)

Link do Projeto: [https://github.com/RLisson/Blogging](https://github.com/RLisson/Blogging)

---

⭐ Se você gostou deste projeto, deixe uma estrela no repositório!
