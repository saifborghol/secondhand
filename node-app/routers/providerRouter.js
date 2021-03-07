const ProviderController = require('../controllers/providerController')
const route = require('express').Router()

route.post('/addProvider',ProviderController.createProvider)
route.delete('/deleteProvider/:id',ProviderController.deleteProvider)
route.delete('/deleteAll',ProviderController.deleteAll)
route.put('/updateProvider/:id',ProviderController.updateProvider)
route.get('/getProvider/:id',ProviderController.getProvider)
route.get('/getAll',ProviderController.getAllProviders)

module.exports = route