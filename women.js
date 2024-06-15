const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const port = 3333;

const women = [
  {
    id: '1',
    name: 'Mariana Munari',
    image: 'https://github.com/marimunari.png',
    minibio: 'Desenvolvedora Front-End'
  },
  {
    id: '2',
    name: 'Simara Conceição',
    image: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e Instrutora'
  },
  {
    id: '3',
    name: 'Iana Chan',
    image: 'https://bit.ly/3JCXBqP',
    minibio: 'Fundadora da PrograMaria'
  },
  {
    id: '4',
    name: 'Nina da Hora',
    image: 'https://bit.ly/3FKpFaz',
    minibio: 'Hacker antirracista'
  },
];

function getWomen(request, response) {
  response.json(women);
}

function addWoman(request, response) {
  const newWoman = {
    id: uuidv4(),
    name: request.body.name,
    image: request.body.image,
    minibio: request.body.minibio
  };

  women.push(newWoman);

  response.json(women);
}

function editWoman(request, response) {
  function findWoman(woman) {
    if (woman.id === request.params.id) {
      return woman;
    }
  }

  const womanFound = women.find(findWoman);

  if (request.body.name) {
    womanFound.name = request.body.name;
  }

  if (request.body.image) {
    womanFound.image = request.body.image;
  }

  if (request.body.minibio) {
    womanFound.minibio = request.body.minibio;
  }

  response.json(women);
}

function deleteWoman(request, response) {
  function allExceptHer(woman) {
    if (woman.id !== request.params.id) {
      return woman;
    }
  }

  const updatedWomenList = women.filter(allExceptHer);

  response.json(updatedWomenList);
}

function showPort() {
  console.log('Server running on port', port);
}

app.use(router.get('/women', getWomen));
app.use(router.post('/women', addWoman));
app.use(router.patch('/women/:id', editWoman));
app.use(router.delete('/women/:id', deleteWoman));

app.listen(port, showPort);