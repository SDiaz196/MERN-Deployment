const { Store } = require('../models/store.model');

const handleNewStore = (req, res) => {
    console.log(req.body)
    Store.create(req.body)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

const handleGetAllStores = (req, res) => {
    Store.find()
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

const handleGetOneStore = (req, res) => {
    Store.findById(req.params.id)
        .then(response => {
            return res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}
const handleDeleteStore = (req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(response => {
            return res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

const handleUpdateStore = (req, res) => {
    Store.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

module.exports = {
    handleNewStore,
    handleGetAllStores,
    handleGetOneStore,
    handleDeleteStore,
    handleUpdateStore
}