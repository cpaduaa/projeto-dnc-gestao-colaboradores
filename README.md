# 📘 API - Gestão de Colaboradores

Este documento descreve as principais rotas de **autenticação** e **gestão de colaboradores** da API.
As rotas estão configuradas em:
`http://localhost:3333` *(ajuste conforme o seu servidor).*

---

## 🔐 ROTAS DE AUTENTICAÇÃO

### 🧾 1. Cadastro de Usuário

**POST** `/cadastrar`

Cria um novo usuário no sistema.

#### 📥 Corpo da Requisição (JSON)

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456",
  "role": "admin"
}
```

#### 📤 Resposta de Sucesso (201)

```json
{
  "message": "Usuário cadastrado com sucesso!",
  "usuario": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "admin"
  }
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem                 |
| ------ | ------------------------ |
| 400    | Email já cadastrado      |
| 500    | Erro interno do servidor |

---

### 🔑 2. Login de Usuário

**POST** `/login`

Realiza o login e retorna um token JWT de autenticação.

#### 📥 Corpo da Requisição (JSON)

```json
{
  "email": "joao@email.com",
  "password": "123456"
}
```

#### 📤 Resposta de Sucesso (200)

```json
{
  "message": "Login realizado com sucesso!",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem                 |
| ------ | ------------------------ |
| 400    | Email ou senha inválidos |
| 404    | Usuário não encontrado   |
| 500    | Erro interno do servidor |

---

## 🔒 AUTENTICAÇÃO VIA TOKEN

Para acessar rotas protegidas, inclua o token JWT no **header** da requisição:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 👥 ROTAS DE COLABORADORES

### 📋 1. Listar Colaboradores

**GET** `/colaboradores/listar`

Retorna a lista de colaboradores.

* Usuário **admin** vê todos.
* Usuário comum vê apenas seus próprios dados.

#### 📤 Resposta de Sucesso (200)

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "cargo": "Administrador",
    "dataContratacao": "2025-10-11T12:00:00.000Z"
  }
]
```

---

### ➕ 2. Cadastrar Colaborador

**POST** `/colaboradores`

#### 📥 Corpo da Requisição (JSON)

```json
{
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "cargo": "Analista"
}
```

#### 📤 Resposta de Sucesso (201)

```json
{
  "message": "Colaborador cadastrado com sucesso!",
  "colaborador": {
    "id": 2,
    "nome": "Maria Oliveira",
    "email": "maria@email.com",
    "cargo": "Analista",
    "dataContratacao": "2025-10-12T10:00:00.000Z"
  }
}
```

---

### ✏️ 3. Editar Colaborador

**PUT** `/colaboradores/:id`

Atualiza as informações de um colaborador existente.

#### 📥 Corpo da Requisição (JSON)

```json
{
  "nome": "Maria Souza",
  "cargo": "Gestora de Projetos"
}
```

#### 📤 Resposta de Sucesso (200)

```json
{
  "message": "Colaborador atualizado com sucesso!"
}
```

---

### ❌ 4. Deletar Colaborador

**DELETE** `/colaboradores/:id`

Remove um colaborador do sistema.

#### 📤 Resposta de Sucesso (200)

```json
{
  "message": "Colaborador removido com sucesso!"
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem                   |
| ------ | -------------------------- |
| 404    | Colaborador não encontrado |
| 500    | Erro interno do servidor   |

🌐 DEPLOY

A API está hospedada e acessível online pelo link:
👉

🔧 Variáveis de Ambiente

Durante o deploy na Vercel, foram configuradas as seguintes variáveis:

Variável	Descrição
MONGO_URI=mongodb+srv://pam3lars:iVsQYe2KgsGg@cluster0.udwcv5w.mongodb.net/colaboradores?retryWrites=true&w=majority
JWT_SECRET	
PORT 3000

⚙️ COMO EXECUTAR LOCALMENTE
1️⃣ Clonar o repositório
git clone https://github.com/cpaduaa/projeto-dnc-gestao-colaboradores.git
cd dnc-api-gestao-colaboradores

2️⃣ Instalar dependências
npm install

3️⃣ Criar o arquivo .env

Na raiz do projeto, crie um arquivo .env com:

PORT=3000
MONGO_URI=mongodb+srv://pam3lars:iVsQYe2KgsGg@cluster0.udwcv5w.mongodb.net/colaboradores?retryWrites=true&w=majority

4️⃣ Executar o servidor
npm start


ou

npm run dev


O servidor rodará em:

http://localhost:3000

🧪 TESTES COM INSOMNIA / POSTMAN

Registrar usuário: POST /cadastrar

Fazer login: POST /login → copiar o token JWT

Adicionar token nas rotas protegidas:

Authorization: Bearer SEU_TOKEN_AQUI


Testar rotas de colaboradores: criar, listar, editar e deletar.

🏁 CONCLUSÃO

Com a API de Gestão de Colaboradores, a empresa poderá:

Centralizar as informações de colaboradores

Automatizar cadastros e atualizações

Reduzir inconsistências e retrabalhos

Garantir segurança via autenticação JWT

Escalar facilmente com MongoDB Atlas e Vercel