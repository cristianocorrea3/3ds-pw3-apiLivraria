const express = require('express');

/*CONFIGURAÇÃO DAS ROTAS DE CATEGORIA*/
const router = express.Router();

/* PARAMETROS DE ROTAS (QUALQUER VERBO):
1 - NOME DA ROTA
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/
/*ROTAS DE CRUD DE CATEGORIAS:*/
router.get('/testeget', (req, res)=>{
    // console.log('TESTE DE ROTA GET DE CATEGORIAS');
    console.log('A REQUISIÇÃO GET PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA GET DE CATEGORIAS');
});

router.post('/testepost', (req, res)=>{
    console.log('A REQUISIÇÃO POST PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA POST DE CATEGORIAS');
});

router.put('/testeput', (req, res)=>{
    console.log('A REQUISIÇÃO PUT PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA PUT DE CATEGORIAS');
});

router.delete('/testedelete', (req, res)=>{
    console.log('A REQUISIÇÃO DELETE PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA DELETE DE CATEGORIAS');
});

module.exports = router;