const annonceController = require('../controllers/annonceController');
const route = require('express').Router();

route.post('/addAnnonce', annonceController.createAnnonce);
route.delete('/deleteAnnonce/:id', annonceController.deleteAnnonce);
route.put('/updateAnnonce/:id', annonceController.updateAnnonce);
route.get('/getAnnonce/:id', annonceController.getAnnonce);
route.get('/getAll', annonceController.getAllAnnonce);

route.get('/annonceImage/:image', annonceController.getImageAnnonce);


module.exports = route;
