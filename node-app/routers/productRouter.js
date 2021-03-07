const ProductController = require('../controllers/productController')
const route = require('express').Router()

route.post('/addProduct',ProductController.createProduct)
route.delete('/deleteProduct/:id',ProductController.deleteProduct)
route.delete('/deleteAll',ProductController.deleteAll)
route.put('/updateProduct/:id',ProductController.updateProduct)
route.get('/getProduct/:id',ProductController.getProduct)
route.get('/getAll',ProductController.getAllProducts)

module.exports = route