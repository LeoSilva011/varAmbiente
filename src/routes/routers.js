const express = require('express');
const router = express.Router();
require('dotenv').config()

const texto = process.env.VARIAVEL

router.get('/teste', (req, res) => {
  console.log(texto)
    res.send(texto);
  
   
  });
  
  module.exports = router;