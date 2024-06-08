const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

const women = [
  {
    name: 'Mariana Munari',
    image: 'https://github.com/marimunari.png',
    minibio: 'Desenvolvedora Front-End'
  },
  {
    name: 'Simara Conceição',
    image: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e Instrutora'
  },
  {
    name: 'Iana Chan',
    image: 'https://bit.ly/3JCXBqP',
    minibio: 'Fundadora da PrograMaria'
  },
  {
    name: 'Ninda da Hora',
    image: 'https://bit.ly/3FKpFaz',
    minibio: 'Hacker antirracista'
  },
];

function showWomen(request, response) {
  response.json(women);
}

function showPort() {
  console.log('Server running on port', port);
}

app.use(router.get('/women', showWomen));
app.listen(port, showPort);