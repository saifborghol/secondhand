const userController = require('../controllers/userController');
const route = require('express').Router();
const multer = require('../middleware/multer');
const middleware = require('../middleware/authentification');

route.post('/addUser',userController.createUser);
route.delete('/deleteUser/:id', userController.deleteUser);
route.delete('/deleteAll', userController.deleteAll);
route.post('/updateUser/:id',userController.updateUser);
route.post('/verifTel',userController.verifierExistanceNumTelUser);
route.post('/updateUserPass/:id',userController.updateUserPass);
route.post('/updateUserImage/:id',multer.single('image'),userController.updateUserImage);
route.get('/getUser/:id', userController.getUser);
route.get('/getAll', userController.getAllUsers);
route.post('/sendMailUser', userController.sendMailUser);
route.post('/login', userController.authentificateUser);
route.post('/logout', middleware.validateUser, userController.logoutUser);
route.post('/forgotpassword', userController.forgotPassword);
route.post('/resetpassword', userController.resetPassword);
route.get('/userimage/:image', userController.getImageUser);
route.post('/refresh', middleware.validateUser, userController.refreshToken);

module.exports = route;
