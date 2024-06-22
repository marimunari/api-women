/* Required external modules */
const swaggerJsDoc = require('swagger-jsdoc');

/* Constant to store swagger options */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Women API',
      version: '1.0.0',
      description: 'API de mulheres na tecnologia',
    },
    servers: [
      {
        url: 'https://women-api.onrender.com/',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

/* Export created module */
module.exports = swaggerJsDoc(options);