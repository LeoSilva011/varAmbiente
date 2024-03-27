const express = require('express');
const app = express();
const routes = require('./routes/routers');


const port = process.env.PORT? Number(process.env.PORT) : 3000
app.use('/api', routes);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
  