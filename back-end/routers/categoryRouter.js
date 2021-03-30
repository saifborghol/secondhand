const CategoryController = require('../controllers/categoryController');
const route = require('express').Router();

route.post('/addCategory', CategoryController.createCategory);
route.delete('/deleteCategory/:id', CategoryController.deleteCategory);
route.delete('/deleteAll', CategoryController.deleteAll);
route.put('/updateCategory/:id', CategoryController.updateCategory);
route.get('/getCategory/:id', CategoryController.getCategory);
route.get('/getAll', CategoryController.getAllCategorys);
route.put('/pullSubCat/:id', CategoryController.pullSubCat);
route.put('/pushSubCat/:id', CategoryController.pushSubCat);

module.exports = route;
