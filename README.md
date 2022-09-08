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

# Gerar o banco de dados
$ npm run migration:generation

# Iniciar o banco de dados
$ npm run migration:run

# Iniciar o projeto
$ npm run dev


```
O servidor iniciará localmente na porta 3000. Use o Insomnia ou o Postman para simular requisições e respostas das rotas (pelo link [https://localhost:3000]((https://localhost:3000)) ou utilize o projeto fron-end do "Convecão" para executar as funcionalidades da aplicação (acesse o repositório por [este link](https://github.com/Conveccao/conveccao-frontend)).

## :railway_track: Rotas disponíveis
<div>
  
|                                                                    Tipo | Rota                                 | Ação                            |
| ----------------------------------------------------------------------: | :----------------------------------- | :------------------------------ |
|   <hr>                                                                  | <hr>                                 | **Controle de Estações e Sensores**        |
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/stations/` | Listagem de estações|
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/stations/:id`| Dados de uma estação específica|
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/sensorTypes`| Listagem de todos os tipos de sensores|
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/sensors`| Listagem de todos os sensores|
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | `/sensors/:id`| Dados de um sensor específico |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/stations/`| Cadastro de estações |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/sensorTypes/`| Cadastro de tipo de sensor|
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/sensors/`| Cadastro de sensor | 
| [![](https://img.shields.io/badge/PUT-9370DB?style=for-the-badge)]() | `/stations/:id`| Alteração de dados da estação |
| [![](https://img.shields.io/badge/PUT-9370DB?style=for-the-badge)]() | `/sensors/:id`| Alteração de dados do sensor |
| [![](https://img.shields.io/badge/DELETE-CD853F?style=for-the-badge)]() | `/stations/:id`| Exclusão de uma estação específica
| [![](https://img.shields.io/badge/DELETE-CD853F?style=for-the-badge)]() | `/sensors/:id`| Exclusão de uma sensor específica

</div>

### Explicação da estrutura das pastas

| Pasta                                                       | Definição                                                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| :open_file_folder: Swagger                                     | Arquivos com o código de documentação de rotas do projeto                                          |
| :open_file_folder: src                               | Arquivos com código fonte do projeto |
| :open_file_folder: src/controllers                          | Arquivos com os métodos de requisição das rota|
| :open_file_folder: src/entities                             | Arquivos com as entidades do banco de dados do projeto|
| :open_file_folder: src/app/migrations | Arquivos com os códigos de criação do banco de dados |
| :open_file_folder: src/app/repositories | Arquivos com os códigos de criação dos repositórios |




## [Documentação oficial do projeto](https://github.com/Conveccao/conveccao-documentacao)

<br>
