const annonceController = require('../controllers/annonceController');
const route = require('express').Router();
const multer = require('../middleware/multer');

route.post('/addAnnonce', multer.array('image', 5),annonceController.createAnnonce);
route.delete('/deleteAnnonce/:id', annonceController.deleteAnnonce);
route.put('/updateAnnonce/:id', annonceController.updateAnnonce);
route.get('/getAnnonce/:id', annonceController.getAnnonce);
route.get('/getAll', annonceController.getAllAnnonce);

route.get('/annonceImage/:image', annonceController.getImageAnnonce);


module.exports = route;
