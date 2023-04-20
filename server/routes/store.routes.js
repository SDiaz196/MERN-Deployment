const express = require('express');

const { handleNewStore, handleGetAllStores, handleGetOneStore,handleDeleteStore,handleUpdateStore } = require('../controllers/store.controller')

const router = express.Router();

router.post('/', handleNewStore);
router.get('/', handleGetAllStores);
router.get('/:id', handleGetOneStore);
router.delete('/:id', handleDeleteStore);
router.put('/:id',handleUpdateStore);



module.exports = { storeRouter: router };