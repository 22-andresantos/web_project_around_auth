# Tripleten web_project_around_auth

Aplicação web desenvolvida em React que permite autenticação de usuários, gerenciamento de perfil e interação com cartões de imagens.

## Funcionalidades

- Cadastro de usuários
- Login e Logout
- Autenticação via JWT
- Persistência de sessão com LocalStorage
- Rotas protegidas
- Atualização de perfil
- Atualização de avatar
- Adição de novos cartões
- Curtir e remover cartões
- Popups reutilizáveis
- Feedback visual através do InfoTooltip

## Tecnologias Utilizadas

### Frontend

- React
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

### Gerenciamento de Estado

- React Hooks
- useState
- useEffect
- useContext

### Autenticação

- JWT (JSON Web Token)
- LocalStorage

### Consumo de API

- Fetch API
- REST API

### Controle de Código

- Git
- GitHub

## Rotas

| Rota    | Descrição                    |
| ------- | ---------------------------- |
| /signin | Login                        |
| /signup | Cadastro                     |
| /       | Página principal (protegida) |

## APIs Utilizadas

### Autenticação

Base URL:

https://se-register-api.en.tripleten-services.com/v1

Endpoints:

POST /signup
POST /signin
GET /users/me

## Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos de:

- Componentização em React
- Gerenciamento de estado
- Context API
- React Router
- Autenticação JWT
- Rotas protegidas
- Consumo de APIs REST
- Reutilização de componentes
- Manipulação de formulários
- Boas práticas de organização de código

## Autor

André Andrade
