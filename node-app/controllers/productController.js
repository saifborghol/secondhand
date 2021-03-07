const productModel = require('../models/productModel')

module.exports = {
    createProduct: function (req, res) {
        productModel.create(req.body, function (err, Product) {
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
                    msg: 'Product added!',
                    statuts: 200,
                    data: Product
                })
            }
        })
    },

    deleteProduct: function (req,res){
        productModel.findByIdAndRemove ( {_id: req.params.id}, (err, Product) => { 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Product deleted!",
                    status: 200,
                    data: Product
                })
            }
        })
    },

    deleteAll: function (req,res){
        productModel.remove ( function (err, Product){ 
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "All Products deleted!",
                    status: 200,
                    data: Product
                })
            }
        })
    },
         
    updateProduct: function (req, res) {
        productModel.findByIdAndUpdate( {_id: req.params.id} , req.body ).exec(function (err, Products) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Product updated!",
                    status: 200,
                    data: Products
                })
            }
        })
    },

    getProduct: function (req, res) {
        productModel.findById( {_id: req.params.id} ).populate('subCat_id').exec(function (err, Products) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get Product",
                    status: 200,
                    data: Products
                })
            }
        })
    },

    getAllProducts: function (req, res) {
        productModel.find({}).populate('subCat_id').exec(function (err, Products) {
            if (err) {
                res.status(500), json({
                    msg: "erreur",
                    status: 500,
                    data: null
                })
            } else {
                res.status(200).json({
                    msg: "Get all Products",
                    status: 200,
                    data: Products
                })
            }
        })
    }
}