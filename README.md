# 📘 API - Gestão de Colaboradores

Este documento descreve as principais rotas de **autenticação** e **gestão de colaboradores** da API.
As rotas estão configuradas em: `http://localhost:3000`

---

## 🔐 ROTAS DE AUTENTICAÇÃO

### 🧾 1. Cadastro de Usuário

**POST** `/cadastrar`

Cria um novo usuário no sistema.

#### 📥 Corpo da Requisição (JSON)

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456",
  "tipo": "admin"
}
```

#### 📤 Resposta de Sucesso (201)

```json
{
  "message": "Usuário registrado com sucesso!",
  "usuario": {
    "id": "60d5ecb54e2a2c001f5e4d1a",
    "nome": "João Silva",
    "email": "joao@email.com",
    "tipo": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

#### ✉️ E-mail de Boas-Vindas

Ao realizar o cadastro, o sistema envia automaticamente um e-mail de boas-vindas ao novo usuário.

**Exemplo de e-mail enviado:**
- **Assunto:** 🎉 Bem-vindo à Gestão de Colaboradores!
- **Conteúdo:** Mensagem personalizada com nome do usuário e instruções iniciais

#### ⚠️ Possíveis Erros

| Código | Mensagem |
|--------|----------|
| 400 | Este e-mail já está sendo usado. Tente outro ou faça login. |
| 500 | Erro interno no servidor |

---

### 🔑 2. Login de Usuário

**POST** `/login`

Realiza o login e retorna um token JWT de autenticação.

#### 📥 Corpo da Requisição (JSON)

```json
{
  "email": "joao@email.com",
  "senha": "123456"
}
```

#### 📤 Resposta de Sucesso (200)

```json
{
  "message": "Login bem-sucedido!",
  "usuario": {
    "id": "60d5ecb54e2a2c001f5e4d1a",
    "nome": "João Silva",
    "email": "joao@email.com",
    "tipo": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem |
|--------|----------|
| 400 | A senha informada está incorreta. Tente novamente. |
| 404 | Não encontramos uma conta com este e-mail. Verifique e tente novamente. |
| 500 | Erro interno no servidor |

---

## 🔒 AUTENTICAÇÃO VIA TOKEN

Para acessar rotas protegidas, inclua o token JWT no header da requisição:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

### ⚠️ Possíveis Erros

| Código | Mensagem |
|--------|----------|
| 401 | Acesso negado. É necessário estar logado para acessar este recurso. |
| 400 | Sua sessão expirou ou o token é inválido. Faça login novamente. |
| 403 | Ação restrita. Apenas administradores podem realizar esta operação. |

---

## 👥 ROTAS DE COLABORADORES

### 📋 1. Listar Colaboradores

**GET** `/colaboradores`

Retorna a lista de colaboradores.
- Usuário **admin** vê todos os colaboradores
- Usuário **comum** vê apenas seus próprios dados

#### 📤 Resposta de Sucesso (200)

```json
[
  {
    "_id": "60d5ecb54e2a2c001f5e4d1a",
    "nome": "João Silva",
    "email": "joao@email.com",
    "cargo": "Administrador",
    "dataContratacao": "2025-10-11T12:00:00.000Z"
  }
]
```

---

### 🔍 2. Buscar Colaborador por ID

**GET** `/colaboradores/:id`

Busca um colaborador específico pelo ID.

#### 📤 Resposta de Sucesso (200)

```json
{
  "_id": "60d5ecb54e2a2c001f5e4d1a",
  "nome": "João Silva",
  "email": "joao@email.com",
  "cargo": "Administrador",
  "dataContratacao": "2025-10-11T12:00:00.000Z"
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem |
|--------|----------|
| 404 | Colaborador não encontrado |

---

### ➕ 3. Cadastrar Colaborador

**POST** `/colaboradores`

Cria um novo colaborador no sistema.

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
  "_id": "60d5ecb54e2a2c001f5e4d1b",
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "cargo": "Analista",
  "dataContratacao": "2025-10-12T10:00:00.000Z"
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem |
|--------|----------|
| 400 | Dados inválidos ou email já existe |
| 500 | Erro interno no servidor |

---

### ✏️ 4. Editar Colaborador

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
  "message": "Colaborador atualizado com sucesso!",
  "colaborador": {
    "_id": "60d5ecb54e2a2c001f5e4d1b",
    "nome": "Maria Souza",
    "email": "maria@email.com",
    "cargo": "Gestora de Projetos",
    "dataContratacao": "2025-10-12T10:00:00.000Z"
  }
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem |
|--------|----------|
| 404 | Colaborador não encontrado |
| 500 | Erro interno no servidor |

---

### ❌ 5. Deletar Colaborador

**DELETE** `/colaboradores/:id`

Remove um colaborador do sistema.

#### 📤 Resposta de Sucesso (200)

```json
{
  "message": "Colaborador removido com sucesso!"
}
```

#### ⚠️ Possíveis Erros

| Código | Mensagem |
|--------|----------|
| 404 | Colaborador não encontrado |
| 500 | Erro interno no servidor |

---

## ⚙️ COMO EXECUTAR LOCALMENTE

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/cpaduaa/projeto-dnc-gestao-colaboradores.git
cd projeto-dnc-gestao-colaboradores
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Criar o arquivo .env

Na raiz do projeto, crie um arquivo `.env` com:

```env
PORT=3000
MONGO_URI=sua_string_conexao_mongodb
JWT_SECRET=sua_chave_secreta_jwt
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_app_gmail
```

### 4️⃣ Executar o servidor

```bash
# Desenvolvimento
npm run dev

# Produção  
npm start
```

O servidor rodará em: `http://localhost:3000`

---

## 🧪 TESTES COM INSOMNIA / POSTMAN

### 📦 Collection Pronta

Importe a collection do Postman localizada em: `docs/Postman_Collection.json`

A collection já contém:
- ✅ Todos os endpoints configurados
- ✅ Variáveis de ambiente
- ✅ Headers de autenticação
- ✅ Exemplos de JSON para cada rota

### 📝 Passo a passo manual:

1. **Verificar status**: `GET /` (para confirmar que a API está online)
2. **Registrar usuário**: `POST /cadastrar`
3. **Fazer login**: `POST /login` → copiar o token JWT
4. **Adicionar token nas rotas protegidas**:
   ```
   Authorization: Bearer SEU_TOKEN_AQUI
   ```
5. **Testar rotas de colaboradores**: criar, listar, buscar, editar e deletar

---

## 🌐 DEPLOY

A API pode ser facilmente deployada na **Vercel** ou outras plataformas.

### Variáveis de Ambiente para Deploy:

| Variável | Descrição |
|----------|-----------|
| `MONGO_URI` | String de conexão do MongoDB Atlas |
| `JWT_SECRET` | Chave secreta para JWT (mín. 32 caracteres) |
| `PORT` | Porta do servidor (padrão: 3000) |
| `EMAIL_USER` | Email para notificações |
| `EMAIL_PASS` | App Password do Gmail |

---

## 🏁 CONCLUSÃO

Com a API de Gestão de Colaboradores, a empresa poderá:

- ✅ **Centralizar** as informações de colaboradores
- ✅ **Automatizar** cadastros e atualizações  
- ✅ **Reduzir** inconsistências e retrabalhos
- ✅ **Garantir** segurança via autenticação JWT
- ✅ **Escalar** facilmente com MongoDB Atlas e Cloud Deploy

---

> 💡 **Dica**: Use o Postman ou Insomnia para testar todos os endpoints da API!