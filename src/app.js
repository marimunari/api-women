/* Required external modules */
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const connectDatabase = require('./database');

/* Routes */
const routes = require('./routes/routes');

/* Swagger */
const specs = require('./swaggerConfig');

/* Create an instance of the Express application */
const app = express();

/* Defines the port on which the server will listen for HTTP connections */
const port = 3333;

/* Connection to the MongoDB database */
connectDatabase();

/* Middleware to process JSON and enable CORS */
app.use(express.json());
app.use(cors());

/* Routes */
app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/* Generic error middleware to handle unhandled exceptions */
app.use((error, request, response, next) => {
  response.status(500).json({
    code: 500,
    status: 'error',
    message: 'Erro interno no servidor',
  });
});

/* Start the Express server */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});