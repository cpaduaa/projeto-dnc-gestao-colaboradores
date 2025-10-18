📘 API - Gestão de Colaboradores

Este documento descreve as principais rotas de autenticação e gestão de colaboradores da API.
As rotas estão configuradas em:
http://localhost:3333 (ajuste conforme o seu servidor).

🔐 ROTAS DE AUTENTICAÇÃO
🧾 1. Cadastro de Usuário

POST /cadastrar

Cria um novo usuário no sistema.

📥 Corpo da Requisição (JSON)
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456",
  "role": "admin"
}

📤 Resposta de Sucesso (201)
{
  "message": "Usuário cadastrado com sucesso!",
  "usuario": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "admin"
  }
}

⚠️ Possíveis Erros
Código	Mensagem
400	Este e-mail já está sendo usado. Tente outro ou faça login.
500	Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.
🔑 2. Login de Usuário

POST /login

Realiza o login e retorna um token JWT de autenticação.

📥 Corpo da Requisição (JSON)
{
  "email": "joao@email.com",
  "password": "123456"
}

📤 Resposta de Sucesso (200)
{
  "message": "Login realizado com sucesso!",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}

⚠️ Possíveis Erros
Código	Mensagem
400	A senha informada está incorreta. Tente novamente.
404	Não encontramos uma conta com este e-mail. Verifique e tente novamente.
500	Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.
🔒 AUTENTICAÇÃO VIA TOKEN

Para acessar rotas protegidas, inclua o token JWT no header da requisição:

Authorization: Bearer SEU_TOKEN_AQUI

⚠️ Possíveis Erros
Código	Mensagem
401	Acesso negado. É necessário estar logado para acessar este recurso.
400	Sua sessão expirou ou o token é inválido. Faça login novamente.
403	Ação restrita. Apenas administradores podem realizar esta operação.
👥 ROTAS DE COLABORADORES
📋 1. Listar Colaboradores

GET /colaboradores/listar

Retorna a lista de colaboradores.

Usuário admin vê todos.

Usuário comum vê apenas seus próprios dados.

📤 Resposta de Sucesso (200)
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "cargo": "Administrador",
    "dataContratacao": "2025-10-11T12:00:00.000Z"
  }
]

➕ 2. Cadastrar Colaborador

POST /colaboradores

📥 Corpo da Requisição (JSON)
{
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "cargo": "Analista"
}

📤 Resposta de Sucesso (201)
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

⚠️ Possíveis Erros
Código	Mensagem
400	Não foi possível cadastrar o colaborador. Confira os dados e tente novamente.
500	Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.
✏️ 3. Editar Colaborador

PUT /colaboradores/:id

Atualiza as informações de um colaborador existente.

📥 Corpo da Requisição (JSON)
{
  "nome": "Maria Souza",
  "cargo": "Gestora de Projetos"
}

📤 Resposta de Sucesso (200)
{
  "message": "Colaborador atualizado com sucesso!"
}

⚠️ Possíveis Erros
Código	Mensagem
404	Colaborador não localizado. Verifique o ID e tente novamente.
500	Ocorreu um erro ao atualizar os dados. Tente novamente mais tarde.
❌ 4. Deletar Colaborador

DELETE /colaboradores/:id

Remove um colaborador do sistema.

📤 Resposta de Sucesso (200)
{
  "message": "Colaborador removido com sucesso!"
}

⚠️ Possíveis Erros
Código	Mensagem
404	Colaborador não localizado. Verifique o ID e tente novamente.
500	Ocorreu um erro ao remover o colaborador. Tente novamente mais tarde.

🌐 DEPLOY

A API está hospedada e acessível online pelo link:
👉

🔧 Variáveis de Ambiente

Durante o deploy na Vercel, foram configuradas as seguintes variáveis:

Variável	Descrição
MONGO_URI	mongodb+srv://pam3lars:iVsQYe2KgsGg@cluster0.udwcv5w.mongodb.net/colaboradores?retryWrites=true&w=majority
JWT_SECRET	763db5709c84643acf9fdb1f8cf9532264f13c4aed4dfd66003273a53f39de8a
PORT	3000

⚙️ COMO EXECUTAR LOCALMENTE

1️⃣ Clonar o repositório

git clone https://github.com/cpaduaa/projeto-dnc-gestao-colaboradores.git
cd dnc-api-gestao-colaboradores


2️⃣ Instalar dependências

npm install


3️⃣ Criar o arquivo .env

Na raiz do projeto, crie um arquivo .env com:

PORT=3000
MONGO_URI
JWT_SECRET


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

Deseja que eu te gere esse README já formatado em arquivo .md pronto para subir no GitHub?

Você disse:
agora acrescente somente a parte de email de boas vindas no reamed
O ChatGPT disse:

Perfeito 👌 — você quer somente adicionar a parte sobre o envio de e-mail de boas-vindas no README.md, sem alterar nada do resto.
Aqui está o seu README original + as mensagens de erro atualizadas + a nova seção do e-mail de boas-vindas, adicionada no ponto certo (logo após o cadastro de usuário).

📘 API - Gestão de Colaboradores

Este documento descreve as principais rotas de autenticação e gestão de colaboradores da API.
As rotas estão configuradas em:
http://localhost:3333 (ajuste conforme o seu servidor).

🔐 ROTAS DE AUTENTICAÇÃO
🧾 1. Cadastro de Usuário

POST /cadastrar

Cria um novo usuário no sistema.

📥 Corpo da Requisição (JSON)
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456",
  "role": "admin"
}

📤 Resposta de Sucesso (201)
{
  "message": "Usuário cadastrado com sucesso!",
  "usuario": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "admin"
  }
}

✉️ E-mail de Boas-Vindas

Ao realizar o cadastro, o sistema envia automaticamente um e-mail de boas-vindas ao novo usuário.
Esse e-mail contém uma mensagem de saudação e as instruções iniciais para o uso da plataforma.

📨 Exemplo de e-mail enviado:

Assunto: Bem-vindo à Plataforma de Gestão de Colaboradores!

Olá João Silva 👋,

Sua conta foi criada com sucesso!

Agora você pode acessar o sistema utilizando o e-mail cadastrado e começar a gerenciar seus colaboradores.

Atenciosamente,  
Equipe DNC - Gestão de Colaboradores

⚠️ Possíveis Erros
Código	Mensagem
400	Este e-mail já está sendo usado. Tente outro ou faça login.
500	Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.
🔑 2. Login de Usuário

POST /login

Realiza o login e retorna um token JWT de autenticação.

📥 Corpo da Requisição (JSON)
{
  "email": "joao@email.com",
  "password": "123456"
}

📤 Resposta de Sucesso (200)
{
  "message": "Login realizado com sucesso!",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}

⚠️ Possíveis Erros
Código	Mensagem
400	A senha informada está incorreta. Tente novamente.
404	Não encontramos uma conta com este e-mail. Verifique e tente novamente.
500	Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.
🔒 AUTENTICAÇÃO VIA TOKEN

Para acessar rotas protegidas, inclua o token JWT no header da requisição:

Authorization: Bearer SEU_TOKEN_AQUI

⚠️ Possíveis Erros
Código	Mensagem
401	Acesso negado. É necessário estar logado para acessar este recurso.
400	Sua sessão expirou ou o token é inválido. Faça login novamente.
403	Ação restrita. Apenas administradores podem realizar esta operação.
👥 ROTAS DE COLABORADORES
📋 1. Listar Colaboradores

GET /colaboradores/listar

Retorna a lista de colaboradores.

Usuário admin vê todos.

Usuário comum vê apenas seus próprios dados.

📤 Resposta de Sucesso (200)
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "cargo": "Administrador",
    "dataContratacao": "2025-10-11T12:00:00.000Z"
  }
]

➕ 2. Cadastrar Colaborador

POST /colaboradores

📥 Corpo da Requisição (JSON)
{
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "cargo": "Analista"
}

📤 Resposta de Sucesso (201)
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

⚠️ Possíveis Erros
Código	Mensagem
400	Não foi possível cadastrar o colaborador. Confira os dados e tente novamente.
500	Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.
✏️ 3. Editar Colaborador

PUT /colaboradores/:id

Atualiza as informações de um colaborador existente.

📥 Corpo da Requisição (JSON)
{
  "nome": "Maria Souza",
  "cargo": "Gestora de Projetos"
}

📤 Resposta de Sucesso (200)
{
  "message": "Colaborador atualizado com sucesso!"
}

⚠️ Possíveis Erros
Código	Mensagem
404	Colaborador não localizado. Verifique o ID e tente novamente.
500	Ocorreu um erro ao atualizar os dados. Tente novamente mais tarde.
❌ 4. Deletar Colaborador

DELETE /colaboradores/:id

Remove um colaborador do sistema.

📤 Resposta de Sucesso (200)
{
  "message": "Colaborador removido com sucesso!"
}

⚠️ Possíveis Erros
Código	Mensagem
404	Colaborador não localizado. Verifique o ID e tente novamente.
500	Ocorreu um erro ao remover o colaborador. Tente novamente mais tarde.

🌐 DEPLOY

A API está hospedada e acessível online pelo link:
👉

🔧 Variáveis de Ambiente

Durante o deploy na Vercel, foram configuradas as seguintes variáveis:

Variável	Descrição
MONGO_URI	mongodb+srv://pam3lars:iVsQYe2KgsGg@cluster0.udwcv5w.mongodb.net/colaboradores?retryWrites=true&w=majority
JWT_SECRET	763db5709c84643acf9fdb1f8cf9532264f13c4aed4dfd66003273a53f39de8a
PORT	3000

⚙️ COMO EXECUTAR LOCALMENTE

1️⃣ Clonar o repositório

git clone https://github.com/cpaduaa/projeto-dnc-gestao-colaboradores.git
cd dnc-api-gestao-colaboradores


2️⃣ Instalar dependências

npm install


3️⃣ Criar o arquivo .env

Na raiz do projeto, crie um arquivo .env com:

PORT=3000
MONGO_URI
JWT_SECRET


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