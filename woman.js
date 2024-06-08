const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

function showWoman(request, response) {
  response.json({
    name: 'Mariana Munari',
    image: 'https://github.com/marimunari.png',
    minibio: 'Desenvolvedora Front-End'
  });
}

function showPort() {
  console.log('Server running on port', port);
}

app.use(router.get('/woman', showWoman));
app.listen(port, showPort);