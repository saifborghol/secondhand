const SubCategoryController = require('../controllers/subCategoryController')
const route = require('express').Router()

route.post('/addSubCategory',SubCategoryController.createSubCategory)
route.delete('/deleteSubCategory/:id',SubCategoryController.deleteSubCategory)
route.delete('/deleteAll',SubCategoryController.deleteAll)
route.put('/updateSubCategory/:id',SubCategoryController.updateSubCategory)
route.get('/getSubCategory/:id',SubCategoryController.getSubCategory)
route.get('/getAll',SubCategoryController.getAllSubCategorys)
route.put('/pushCat/:id',SubCategoryController.pushCat)

module.exports = route