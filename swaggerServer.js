const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Exempel-API',
      version: '1.0.0',
      description: 'Ett enkelt API-exempel'
    },
  },
  apis: ['./routes/*.js'], // sökväg till filer med JSDoc-kommentarer
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => console.log('Servern körs på http://localhost:3000/docs'));
