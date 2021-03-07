const OrderController = require('../controllers/orderController')
const route = require('express').Router()

route.post('/addOrder',OrderController.createOrder)
route.delete('/deleteOrder/:id',OrderController.deleteOrder)
route.delete('/deleteAll',OrderController.deleteAll)
route.put('/updateOrder/:id',OrderController.updateOrder)
route.get('/getOrder/:id',OrderController.getOrder)
route.get('/getAll',OrderController.getAllOrders)

module.exports = route