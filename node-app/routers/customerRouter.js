const CustomerController = require('../controllers/customerController')
const route = require('express').Router()

route.post('/addCustomer',CustomerController.createCustomer)
route.delete('/deleteCustomer/:id',CustomerController.deleteCustomer)
route.delete('/deleteAll',CustomerController.deleteAll)
route.put('/updateCustomer/:id',CustomerController.updateCustomer)
route.get('/getCustomer/:id',CustomerController.getCustomer)
route.get('/getAll',CustomerController.getAllCustomers)

module.exports = route