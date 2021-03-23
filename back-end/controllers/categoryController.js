const categoryModel = require('../models/categoryModel')
const route = require('express').Router()

module.exports = {
    createCategory: function (req, res) {
        categoryModel.create(req.body, function (err, Category) {
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
                    msg: 'Category added!',
                    statuts: 200,
                    data: Category
                })
            }
        })
    },

    deleteCategory: function (req,res){
        categoryModel.findByIdAndRemove ( {_id: req.params.id}, (err, Category) => { 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Category deleted!",
                    status: 200,
                    data: Category
                })
            }
        })
    },

    deleteAll: function (req,res){
        categoryModel.remove ( function (err, Category){ 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "All Categorys deleted!",
                    status: 200,
                    data: Category
                })
            }
        })
    },
         
    updateCategory: function (req, res) {
        categoryModel.findByIdAndUpdate( {_id: req.params.id} , req.body ).exec(function (err, Categorys) {
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
                    data: Categorys
                })
            }
        })
    },

    getCategory: function (req, res) {
        categoryModel.findById( {_id: req.params.id} ).exec(function (err, Categorys) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get Category",
                    status: 200,
                    data: Categorys
                })
            }
        })
    },

    getAllCategorys: function (req, res) {
        categoryModel.find({}).exec(function (err, Categorys) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get all Categorys",
                    status: 200,
                    data: Categorys
                })
            }
        })
    }
}
