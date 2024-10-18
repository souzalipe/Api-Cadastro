<img  width=100% src="https://capsule-render.vercel.app/api?type=waving&color=1E90FF&height=120&section=header"/>

## Projeto Elo-Vivo 🧩 

Este projeto full-stack crud que tem como objetivo melhorar a comunidade autista trazendo implementações para a mesma.

### Estrutura de Arquivos 📄


```
API-CADASTRO
│
├── node_modules
├── src
│   ├── config
│   │   ├── corsConfig.js
│   ├── controller
│   │   ├── user.controller.js
│   ├── database
│   │   ├── config.js
│   │   ├── database-sqlite.db
│   ├── docs
│   │   ├── swaggerConfig.js
│   │   ├── swaggerDocs.js
│   │   └── user.yaml
│   ├── models
│   │   └── user.models.js
│   ├── router
│   │   └── user.router.js
├── test
│   ├── jest.config.js
│   └── user.spec.js
├── .babelrc
├── .env
├── .gitignore
├── app.js
├── jest.config.js
├── package-lock.json
├── package.json
|
└── README.md

```


## Tecnologias 🔧

- 📦 Node.js
- 🐬 Sequelize
- 🌐 Cors
- 🧪 Jest
- ♻️ Babel
- 📧 Nodemailer
- 🚀 Express

## Instalação 🛠

1. Clone o repositório:

   ```
   git clone https://github.com/souzalipe/Api-Cadastro
   ```

2. Navegue até o diretório do projeto:

   ```
   cd Api-Cadastro
   ```

3. Instale as dependências:

   ```
   npm install
   ```


## Executando a Aplicação &#x27A1;

- npm start run 

## Endpoints  

## Usuários ( Users )

## *Mostras usuários*

- Rota: GET /
- Descrição: Mostra os usários ja cadastrados.
- Corpo da Requisição: json

   ```
   {
     "name": "valor",
     "age": valor,
   }
   ```

- Resposta: 

   ```
   [
     {
       "id_user": 1,
       "name": "João Silva",
       "age": "25",
     },
     {
       "id_user": 2,
       "name": "Maria Souza",
       "age": "63",
     }
   ]
   
   ```

## *Adicionar usuário*

- Rota: POST /user
- Descrição: Adiciona um novo usuário
- Corpo da Requisição:
   ```
   {
     "name": "Nome do Usuário",
     "age": "Idade do Usuário",
   }
   
   ```
- Resposta:

   ```
   {
  "affectedRows": 1,
  "insertId": valor,
  "message": "Usuário adicionado com sucesso!"
   }
   ```

## *Buscar usuário por id*

- Rota: GET /read/:id
- Descrição: Retorna as um usuário com o id.
- Resposta:
   ```
   {
     "id_user": 1,
     "name": "João Silva",
     "age": "25",
   }
   
   ```

## *Atualizar usuário*

- Rota: PUT /update/:id
- Descrição: Atualiza usuário com base no id.
- Corpo da requisição:
   ```
   {
     "name": "Nome Atualizado",
     "age": "Idade Atualizada",
   }
   
   ```
- Resposta:
   ```
   {
     "affectedRows": 1,
     "message": "Usuário atualizado com sucesso!"
   }

   
   ```


## *Excluir usuário*

- Rota: DELETE /delete/:id
- Descrição: Exclui um usuário pelo ID.
- Resposta:
   ```
   {
     "id_user": 1,
     "nome": "João Silva",
     "age": "25",
   }
   
   ```

## Contribuindo

Se desejar contribuir com o projeto, siga os passos abaixo:

1. Fork o projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

© *Felipe Nascimento*. 
<img  width=100% src="https://capsule-render.vercel.app/api?type=waving&color=1E90FF&height=120&section=footer"/>
