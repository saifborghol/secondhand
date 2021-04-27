const SubCategoryController = require('../controllers/subCategoryController')
const route = require('express').Router()

route.post('/addSubCategory',SubCategoryController.createSubCategory)
route.delete('/deleteSubCategory/:id',SubCategoryController.deleteSubCategory)
route.delete('/deleteAll',SubCategoryController.deleteAll)
route.put('/updateSubCategory/:id',SubCategoryController.updateSubCategory)
route.get('/getSubCategory/:title',SubCategoryController.getSubCategory)
route.get('/getAll',SubCategoryController.getAllSubCategorys)

route.put('/pullAnnonce/:id', SubCategoryController.pullAnnonce);
route.put('/pushAnnonce/:id', SubCategoryController.pushAnnonce);

module.exports = route