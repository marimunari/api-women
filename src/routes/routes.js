/* Required external modules */
const express = require('express');
const router = express.Router();

/* Controllers */
const controller = require('../controllers/women');

/* Routes */
/* Get all women */
/**
 * @swagger
 * /women:
 *   get:
 *     summary: Pega a lista de todas as mulheres
 *     tags: [Women]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               code: 200
 *               status: success
 *               data: [{
                  "_id": "666e2f08d4d836dded73bd2c",
                  "name": "Ada Lovelace",
                  "image": "https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg",
                  "quote": "If you can’t give me poetry, can’t you give me poetical science?",
                  "minibio": "Ada Lovelace foi uma matemática e escritora, conhecida por seu trabalho no computador mecânico de uso geral proposto por Charles Babbage, a Máquina Analítica. Lovelace foi a primeira a reconhecer que a máquina tinha aplicações além do puro cálculo e publicou o primeiro algoritmo destinado a ser executado por tal máquina.Como resultado, Lovelace é considerado um dos primeiros programadores de computador.",
                  "__v": 0
                  },{
                  "_id": "666e2fc2d4d836dded73bd2e",
                  "name": "Grace Hopper",
                  "image": "https://wearetechwomen.com/wp-content/uploads/2020/03/Grace-Hopper.jpg",
                  "quote": "A ship in port is safe, but that’s not what ships are built for.",
                  "minibio": "Grace HopperGrace Brewster Murray Hopper (1906-1992) foi uma pioneira da computação e oficial naval mais conhecida por suas contribuições pioneiras à programação de computadores, desenvolvimento de software e design e implementação de linguagens de programação.",
                  "__v": 0
                }]
 *       500:
 *         description: Internal server error
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              code: 500
 *              status: error
 *              message: "Erro ao buscar mulheres."
 */
router.get('/women', controller.getWomen);

/* Get a woman by id */
/**
 * @swagger
 * /women/{id}:
 *   get:
 *     summary: Pega uma mulher através do id
 *     tags: [Women]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da mulher
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               code: 200
 *               status: success
 *               data: [{
                  "_id": "666efcd548a26a5dbb20372a",
                  "name": "Grace Hopper",
                  "image": "https://wearetechwomen.com/wp-content/uploads/2020/03/Grace-Hopper.jpg",
                  "quote": "Apollo 8 comes a close second, it not equal, to Apollo 11 for the most exciting, memorable moments on the Apollo project.",
                  "minibio": "Margaret Heafield Hamilton (Paoli, Indiana, 17 de agosto de 1936) é uma cientista da computação, engenheira de software e empresária estadunidense. Foi diretora da Divisão de Software no Laboratório de Instrumentação do MIT, que desenvolveu o programa de voo usado no projeto Apollo 11, a primeira missão tripulada à Lua. O software de Hamilton impediu que o pouso na Lua fosse abortado.",
                  "__v": 0
                }]
 *       404:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               code: 404
 *               status: error
 *               message: 'Mulher não encontrada.'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               code: 500
 *               status: error
 *               message: 'Erro ao buscar mulher.'
 */
router.get('/women/:id', controller.getWomanById);

/* Create a woman */
/**
 * @swagger
 * /women:
 *   post:
 *     summary: Cria uma nova mulher
 *     tags: [Women]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Objeto da mulher a ser adicionada
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - image
 *             - quote
 *             - minibio
 *           properties:
 *             name:
 *               type: string
 *             image:
 *               type: string
 *             quote:
 *               type: string
 *             minibio:
 *               type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *               quote:
 *                 type: string
 *               minibio:
 *                 type: string
 *             example:
 *                name: "Ada Lovelace"
 *                image: "https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg"
 *                quote: "If you can’t give me poetry, can’t you give me poetical science?"
 *                minibio: "Ada Lovelace foi uma matemática e escritora, conhecida por seu trabalho no computador mecânico de uso geral proposto por Charles Babbage, a Máquina Analítica. Lovelace foi a primeira a reconhecer que a máquina tinha aplicações além do puro cálculo e publicou o primeiro algoritmo destinado a ser executado por tal máquina.Como resultado, Lovelace é considerado um dos primeiros programadores de computador."
 *     responses:
 *       201:
 *         description: Successful request
 *         content:
 *           application/json:
 *             example:
 *               code: 201
 *               status: success
 *               data: [{
                  "_id": "666efcd548a26a5dbb20372a",
                  "name": "Ada Lovelace",
                  "image": "https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg",
                  "quote": "If you can’t give me poetry, can’t you give me poetical science?",
                  "minibio": "Ada Lovelace foi uma matemática e escritora, conhecida por seu trabalho no computador mecânico de uso geral proposto por Charles Babbage, a Máquina Analítica. Lovelace foi a primeira a reconhecer que a máquina tinha aplicações além do puro cálculo e publicou o primeiro algoritmo destinado a ser executado por tal máquina.Como resultado, Lovelace é considerado um dos primeiros programadores de computador.",
                  "__v": 0
                }]
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               code: 500
 *               status: error
 *               message: 'Erro ao criar a mulher.'
 */
router.post('/women', controller.createWoman);

/* Update a woman */
/**
 * @swagger
 * /women/{id}:
 *   patch:
 *     summary: Atualiza uma mulher através do id
 *     tags: [Women]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Objeto da mulher a ser adicionada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             image:
 *               type: string
 *             quote:
 *               type: string
 *             minibio:
 *               type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *               quote:
 *                 type: string
 *               minibio:
 *                 type: string
 *             example:
 *                name: "Margaret Hamilton"
 *                image: "https://cdn.brasildefato.com.br/media/a96c862925df181d380184bb6ca151c3.jpg"
 *                quote: "Apollo 8 comes a close second, it not equal, to Apollo 11 for the most exciting, memorable moments on the Apollo project."
 *                minibio: "Margaret Heafield Hamilton (Paoli, Indiana, 17 de agosto de 1936) é uma cientista da computação, engenheira de software e empresária estadunidense. Foi diretora da Divisão de Software no Laboratório de Instrumentação do MIT, que desenvolveu o programa de voo usado no projeto Apollo 11, a primeira missão tripulada à Lua. O software de Hamilton impediu que o pouso na Lua fosse abortado."
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               code: 200
 *               status: success
 *               message: 'Mulher atualizada com sucesso.'
 *               data: [{
                  "_id": "666efcd548a26a5dbb20372a",
                  "name": "Margaret Hamilton",
                  "image": "https://cdn.brasildefato.com.br/media/a96c862925df181d380184bb6ca151c3.jpg",
                  "quote": "Apollo 8 comes a close second, it not equal, to Apollo 11 for the most exciting, memorable moments on the Apollo project.",
                  "minibio": "Margaret Heafield Hamilton (Paoli, Indiana, 17 de agosto de 1936) é uma cientista da computação, engenheira de software e empresária estadunidense. Foi diretora da Divisão de Software no Laboratório de Instrumentação do MIT, que desenvolveu o programa de voo usado no projeto Apollo 11, a primeira missão tripulada à Lua. O software de Hamilton impediu que o pouso na Lua fosse abortado.",
                  "__v": 0
                }]
 *       404:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               code: 404
 *               status: error
 *               message: 'Mulher não encontrada.'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *            example:
 *               code: 500
 *               status: error
 *               message: 'Erro ao atualizar a mulher.'
 */
router.patch('/women/:id', controller.editWoman);

/* Delete a woman */
/**
 * @swagger
 * /women/{id}:
 *   delete:
 *     summary: Deleta uma mulher através do id
 *     tags: [Women]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: O id da mulher
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Successful response
 *         content:
 *          application/json:
 *           example:
 *              code: 204,
 *              status: success,
 *              message: 'Mulher deletada com sucesso.'
 *       404:
 *         description: Internal server error
 *         content:
 *          application/json:
 *           example:
 *              code: 404,
 *              status: error,
 *              message: 'Mulher não encontrada.'
 *       500:
 *         description: Internal server error
 *         content:
 *          application/json:
 *           example:
 *              code: 500,
 *              status: error,
 *              message: 'Erro ao deletar a mulher.'
 */
router.delete('/women/:id', controller.deleteWoman);

/* Export created module */
module.exports = router;