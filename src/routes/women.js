/* Required external modules */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/women');

/* Routes */
router.get('/women', controller.getWomen);
router.get('/women/:id', controller.getWomanById);
router.post('/women', controller.createWoman);
router.patch('/women/:id', controller.editWoman);
router.delete('/women/:id', controller.deleteWoman);

/* Export created module */
module.exports = router;