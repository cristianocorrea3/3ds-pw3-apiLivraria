const express = require('express');

/*CONFIGURAÇÃO DAS ROTAS DE CATEGORIA*/
const router = express.Router();

/* IMPORT DA MODEL DE CATEGORIA */
const modelCategoria = require('../model/CategoriaModel');

/* PARAMETROS DE ROTAS (QUALQUER VERBO):
1 - NOME DA ROTA - REPRESENTADO POR UMA STRING
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/
/*ROTAS DE CRUD DE CATEGORIAS:*/
router.get('/listarCategoria', (req, res)=>{

    // console.log('TESTE DE ROTA GET DE CATEGORIAS');
    // console.log('----A REQUISIÇÃO GET PASSOU PELA CATEGORIA CONTROLLER----');
    // res.send('----TESTE DE ROTA GET DE CATEGORIAS----');

    //LISTANDO OS DADOS SEM CRITÉRIOS
    modelCategoria.findAll()
        .then(
            (categorias)=>{
                return res.status(200).json(categorias);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );

});

//LISTANDO OS DADOS COM CRITÉRIOS
router.get('/listarCategoria/:id',(req, res)=>{

    let {id} = req.params;

    modelCategoria.findByPk(id)
        .then(
            (categoria)=>{
                res.status(200).json(categoria);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirCategoria', (req, res)=>{
    // console.log('A REQUISIÇÃO POST PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA POST DE CATEGORIAS');

    //RECEBER OS DADOS
    // console.log(req.body.nome_categoria);
    // let nome_categoria = req.body.nome_categoria;
    let {nome_categoria} = req.body;
    // console.log(nome_categoria);
    
    //GRAVAR OS DADOS
    modelCategoria.create(
        {nome_categoria}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Categoria inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarCategoria', (req, res)=>{

    // console.log('A REQUISIÇÃO PUT PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA PUT DE CATEGORIAS');

    //RECEBENDO OS DADOS:
    let {id, nome_categoria} = req.body;

    //ALTERANDO OS DADOS:
    modelCategoria.update(
        {nome_categoria},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirCategoria/:id', (req, res)=>{

    // console.log('A REQUISIÇÃO DELETE PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA DELETE DE CATEGORIAS');

    let {id} = req.params;

    modelCategoria.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria excluida com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

module.exports = router;