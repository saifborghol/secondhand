const customerModel = require('../models/customerModel')

module.exports = {
    createCustomer: function (req, res) {
        customerModel.create(req.body, function (err, Customer) {
            console.log('cest bon')
            if (err) {
                console.log(err)
                res.json({
                    msg: 'err' + err,
                    statuts: 500,
                    data: null
                }) //500 erreur serveur
            } else {
                res.json({
                    msg: 'Customer added!',
                    statuts: 200,
                    data: Customer
                })
            }
        })
    },

    deleteCustomer: function (req,res){
        customerModel.findByIdAndRemove ( {_id: req.params.id}, (err, Customer) => { 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Customer deleted!",
                    status: 200,
                    data: Customer
                })
            }
        })
    },

    deleteAll: function (req,res){
        customerModel.remove ( function (err, Customer){ 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "All Customers deleted!",
                    status: 200,
                    data: Customer
                })
            }
        })
    },
         
    updateCustomer: function (req, res) {
        customerModel.findByIdAndUpdate( {_id: req.params.id} , req.body ).exec(function (err, Customers) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Customer updated!",
                    status: 200,
                    data: Customers
                })
            }
        })
    },

    getCustomer: function (req, res) {
        customerModel.findById( {_id: req.params.id} ).populate('order_id').exec(function (err, Customers) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get Customer",
                    status: 200,
                    data: Customers
                })
            }
        })
    },

    getAllCustomers: function (req, res) {
        customerModel.find({}).populate('order_id').exec(function (err, Customers) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get all Customers",
                    status: 200,
                    data: Customers
                })
            }
        })
    }
}


