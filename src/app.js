/* Required external modules */
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database');
const routes = require('./routes/women');

/* Creates an instance of the Express application */
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

/* Generic error middleware to handle unhandled exceptions */
app.use((error, request, response, next) => {
  response.status(500).json({
    status: 'error',
    message: 'Erro interno no servidor',
    error: error.message
  });
});

/* Start the Express server */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});