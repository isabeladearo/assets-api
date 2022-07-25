# Ativos API
<img width="1170" alt="swagger-image" src="https://user-images.githubusercontent.com/92924409/180663723-11e980e9-1890-415c-a151-5659e17e143b.png">

Essa aplicação foi desenvolvida durante o desafio prático do processo seletivo da empresa XPInc. 

Tendo em vista que o mercado de ações é muito dinâmico. A ideia foi gerar uma api para que quando houvesse alguma compra ou venda de ativo ou qualquer outra ocasião necessária, a api seria chamada, obtendo assim dados atualizados da cotação das ações.

Nesse primeiro momento, a api está estática por questões de perfomance, podendo ser aprimorada posteriormente.

Os dados utilizados nessa api, são referente ao site [dados de mercado](https://www.dadosdemercado.com.br/) e a captura de dados foi realizada através de um script utilizando o conceito de web-scraping. Com esse script, é gerado um arquivo contendo todos os dados dos ativos, incluindo dados como:
- ticker
- nome da ação
- cotação
- quantidade
##
## 🟦 Rotas desenvolvidas
  - `GET - assets/`: Retorna todos as cotações dos ativos.
<br><br>
  - `GET - assets/{id}`: Retorna a cotação de uma ação específica.
<br><br>
  - `GET - inventory/`: Retorna a quantidade de ações na corretora. Esse valor foi gerado de forma aleatória para desenvolvimento de código.
##
## 🟦 API
- Veja a api neste [link](http://assets-api-backend.herokuapp.com/docs/).<br><br>
**OBS:** No primeiro acesso ela pode demorar um pouco para carregar, pois o servidor esta no modo 'sleeping'.
##
## 🟦 Tecnologias e bibliotecas utilizadas
  - Javascript
  - Nodejs
  - Docker
  - Dotenv
  - Eslint
  - Express
  - Heroku
  - Http Status Codes
  - Nodemon
  - Swagger
