const annonceController = require('../controllers/annonceController');
const route = require('express').Router();

route.post('/addAnnonce', annonceController.createAnnonce);
route.delete('/deleteAnnonce/:id', annonceController.deleteAnnonce);
route.put('/updateAnnonce/:id', annonceController.updateAnnonce);
route.get('/getAnnonce/:id', annonceController.getAnnonce);
route.get('/getAll', annonceController.getAllAnnonce);

module.exports = route;
