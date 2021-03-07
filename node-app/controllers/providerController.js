const providerModel = require('../models/providerModel')
const route = require('express').Router()

module.exports = {
    createProvider: function (req, res) {
        providerModel.create(req.body, function (err, Provider) {
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
                    msg: 'Provider added!',
                    statuts: 200,
                    data: Provider
                })
            }
        })
    },

    deleteProvider: function (req,res){
        providerModel.findByIdAndRemove ( {_id: req.params.id}, (err, Provider) => { 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Provider deleted!",
                    status: 200,
                    data: Provider
                })
            }
        })
    },

    deleteAll: function (req,res){
        providerModel.remove ( function (err, Provider){ 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "All Providers deleted!",
                    status: 200,
                    data: Provider
                })
            }
        })
    },
         
    updateProvider: function (req, res) {
        providerModel.findByIdAndUpdate( {_id: req.params.id} , req.body ).exec(function (err, Providers) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Provider updated!",
                    status: 200,
                    data: Providers
                })
            }
        })
    },

    getProvider: function (req, res) {
        providerModel.findById( {_id: req.params.id} ).exec(function (err, Providers) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get Provider",
                    status: 200,
                    data: Providers
                })
            }
        })
    },

    getAllProviders: function (req, res) {
        providerModel.find({}).exec(function (err, Providers) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get all Providers",
                    status: 200,
                    data: Providers
                })
            }
        })
    }
}