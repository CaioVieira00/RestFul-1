const express = require('express');
const app = express();
app.use(express.json());

// Inicializa o servidor HTTP na porta 3000
const apiRouter = require('./apiRouter')
app.use ('/api', apiRouter)

const port = 3000;

app.listen(port, function() {

  console.log(`Servidor Online`);

});
