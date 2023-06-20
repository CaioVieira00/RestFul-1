const express = require('express')
const knewConfig = require("./knexfile.js");
const knex =  require ("knex") (knewConfig.development);

let apiRouter = express.Router()

const endpoint = '/'

// Obter a lista de produtos
apiRouter.get(endpoint + 'produtos', (req, res) => {
    knex.select('*').from('produtos')
        .then(produtos => res.status(200).json(produtos))
        .catch(err => {
            res.status(500).json({
                message: 'Erro ao recuperar produtos - ' + err.message
            })
        })
});

// Obter um produto específico
apiRouter.get(endpoint + 'produtos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    knex.select('*').from('produtos').where('id', productId)
        .then(produto => {
            if (produto.length > 0) {
                res.json(produto[0]);
            } else {
                res.status(404).json({ error: "Produto não encontrado" });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Erro ao recuperar produto - ' + err.message
            })
        });
});

// Incluir um produto
apiRouter.post(endpoint + 'produtos', (req, res) => {
    const produto = req.body;
    knex('produtos').insert(produto)
        .then(() => {
            res.status(201).json(produto);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Erro ao incluir produto - ' + err.message
            })
        });
});

// Alterar um produto
apiRouter.put(endpoint + 'produtos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const novoProduto = req.body;
    knex('produtos').where('id', productId).update(novoProduto)
        .then(() => {
            res.json(novoProduto);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Erro ao alterar produto - ' + err.message
            })
        });
});

// Excluir um produto
apiRouter.delete(endpoint + 'produtos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    knex('produtos').where('id', productId).del()
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).json({
                message: 'Erro ao excluir produto - ' + err.message
            })
        });
});

module.exports = apiRouter;