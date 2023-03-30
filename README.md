<img src = "https://github.com/Conveccao/conveccao-backend/blob/develop/docs/conveccao-backend.png">

> Aplicação desenvolvida por alunos do 4º semestre do tecnólogo em Desenvolvimento de Software Multiplataforma, na FATEC Profº Jessen Vidal - São José dos Campos, SP :rocket:

### :hammer_and_wrench: Tecnologias

As seguintes tecnologias e ferramentas foram utilizadas neste projeto: `Typescript, NodeJS / Express.js, PostgreSQL, Postman, Insomnia, GitFlow, GitHub Actions`

### :gear: Como utilizar

<!-- Para consumir esta API, é preciso seguir o passo a passo abaixo ou utilizar a URL do serviço em nuvem (através deste link: [https://help-duck-tickets.herokuapp.com/tickets/](https://help-duck-tickets.herokuapp.com/tickets/)). -->

- Tutorial para rodar o projeto

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/Conveccao/conveccao-backend.git

# Acesse a pasta do projeto
$ cd conveccao-backend

# Instale as dependências
$ npm install

# Iniciar o projeto
$ npm run dev


```
O servidor iniciará localmente na porta 8080. Use o Insomnia ou o Postman para simular requisições e respostas das rotas (pelo link [https://localhost:3000]((https://localhost:3000)) ou utilize o projeto fron-end do "Convecão" para executar as funcionalidades da aplicação (acesse o repositório por [este link](https://github.com/Conveccao/conveccao-frontend)).

## :railway_track: Rotas disponíveis
 


<div>
  
|                                                                    Tipo | Rota                                 | Ação                            |
| ----------------------------------------------------------------------: | :----------------------------------- | :------------------------------ |
|   <hr>                                                                  | <hr>                                 | **Controle de Parceiros, Membros e Usuários**|
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/partners` | Busca por todos os Parceiros|
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/partners` | Cadastra um Parceiro|
| [![](https://img.shields.io/badge/PUT-9370DB?style=for-the-badge)]() | `/partners/:id`| Atualiza os Parceiros |
| [![](https://img.shields.io/badge/DELETE-CD853F?style=for-the-badge)]() | `/partners/:id` | Deleta um Parceiro já cadastrado|
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/members`| Busca por todos os Membros |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/members` | Cadastro de Membro |
| [![](https://img.shields.io/badge/PUT-9370DB?style=for-the-badge)]() | `/members/:id`| Atualiza um Membro |
| [![](https://img.shields.io/badge/DELETE-CD853F?style=for-the-badge)]() | `/members/:id`| Deleta um Membro já cadastrado | 
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/users`| Busca por todos os Usuários cadastrados |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/register`| Registra um novo Usuário |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/login`| Faz Login em um Usuário já existente | 
| [![](https://img.shields.io/badge/DELETE-CD853F?style=for-the-badge)]() | `/users/:id`| Exclusão de um Usuário |

  
 
Para acessar uma documentação mais avançada, acesse a porta 3001
  
</div>

### Explicação da estrutura das principais pastas do PROJETO

| Pasta                                                       | Definição                                                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| :open_file_folder: Swagger                                     | Arquivos com o código de documentação de rotas do projeto                                          |
| :open_file_folder: api/core/src                               | Arquivos com código fonte do projeto |
| :open_file_folder: api/core/src/controllers                          | Arquivos com os métodos de requisição das rota|
| :open_file_folder: api/core/src/entities                             | Arquivos com as entidades do banco de dados do projeto|
| :open_file_folder: api/core/src/services                             | Lógica de função do CRUD das Services|
| :open_file_folder: api/core/src/migrations | Arquivos com os códigos de criação do banco de dados |
| :open_file_folder: api/core/src/repositories | Arquivos com os códigos de criação dos repositórios |




## [Documentação oficial do projeto](https://github.com/Conveccao/conveccao-documentacao)

<br>
