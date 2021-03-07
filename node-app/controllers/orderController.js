const orderModel = require('../models/orderModel')
const route = require('express').Router()

module.exports = {
    createOrder: function (req, res) {
        orderModel.create(req.body, function (err, Order) {
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
                    msg: 'Order added!',
                    statuts: 200,
                    data: Order
                })
            }
        })
    },

    deleteOrder: function (req,res){
        orderModel.findByIdAndRemove ( {_id: req.params.id}, (err, Order) => { 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Order deleted!",
                    status: 200,
                    data: Order
                })
            }
        })
    },

    deleteAll: function (req,res){
        orderModel.remove ( function (err, Order){ 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "All Orders deleted!",
                    status: 200,
                    data: Order
                })
            }
        })
    },
         
    updateOrder: function (req, res) {
        orderModel.findByIdAndUpdate( {_id: req.params.id} , req.body ).exec(function (err, Orders) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Order updated!",
                    status: 200,
                    data: Orders
                })
            }
        })
    },

    getOrder: function (req, res) {
        orderModel.findById( {_id: req.params.id} ).populate('prod_id').exec(function (err, Orders) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get Order",
                    status: 200,
                    data: Orders
                })
            }
        })
    },

    getAllOrders: function (req, res) {
        orderModel.find({}).populate('prod_id').exec(function (err, Orders) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get all Orders",
                    status: 200,
                    data: Orders
                })
            }
        })
    }
}