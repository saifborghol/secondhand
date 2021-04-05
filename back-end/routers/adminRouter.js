const adminController = require('../controllers/adminController');
const route = require('express').Router();
const middleware = require('../middleware/authentification');

route.post('/addAdmin', adminController.createAdmin);
route.post('/login', adminController.authentificateAdmin);
route.post('/logout', middleware.validateUser, adminController.logoutAdmin);
route.post('/refresh', adminController.refreshToken);


module.exports = route;
