const categoryModel = require('../models/annonceModel')
const route = require('express').Router()

module.exports = {

    addAnnonce: function(req,res){
        annonceModel.create(req.body, function (err, annonce) {
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
                    msg: 'Annonce added!',
                    statuts: 200,
                    data: annonce
                })
            }
        })
    },

    deleteAnnonce: function (req,res){
        categoryModel.findByIdAndRemove ( {_id: req.params.id}, (err, Annonce) => { 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Annonce deleted!",
                    status: 200,
                    data: Annonce
                })
            }
        })
    },

    updateAnnonce: function (req, res) {
        annonceModel.findByIdAndUpdate( {_id: req.params.id} , req.body ).exec(function (err, Annonce) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Category updated!",
                    status: 200,
                    data: Annonce
                })
            }
        })
    },

    getAnnonce: function (req, res) {
        annonceModel.findById( {_id: req.params.id} ).exec(function (err, Annonce) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get Annonce",
                    status: 200,
                    data: Annonce
                })
            }
        })
    },

    getAllAnnonce: function (req, res) {
        annonceModel.find({}).exec(function (err, Annonce) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get all Annonces",
                    status: 200,
                    data: Annonce
                })
            }
        })
    }
}