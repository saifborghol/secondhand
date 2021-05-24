const orderModel = require('../models/orderModel');
const route = require('express').Router();
const hbs = require('nodemailer-handlebars');

var nodemailer = require('nodemailer');
var fs = require('fs');

require.extensions['.hbs'] = function (module, filename) {
	module.exports = fs.readFileSync(filename, 'utf8');
};

var transporter = nodemailer.createTransport({
	service: 'outlook',
	auth: {
		user: 'azizmdk@outlook.com',
		pass: 'Alahouakbar94',
	},
});

const handlebarOptions = {
	viewEngine: {
		extName: 'hbs',
		defaultLayout: false,
		layoutsDir: './views/',
		//   defaultLayout: 'email.body.hbs',
	},
	viewPath: './views/',
	extName: '.hbs',
};

transporter.use('compile', hbs(handlebarOptions));

module.exports = {
	createOrder: function (req, res) {
		orderModel.create(req.body, function (err, Order) {
			console.log('cest bon');
			if (err) {
				console.log(err);
				res.json({
					msg: 'err' + err,
					statuts: 500,
					data: null,
				}); //500 erreur serveur
			} else {
				res.json({
					msg: 'Order added!',
					statuts: 200,
					data: Order,
				});
				transporter.sendMail(
					{
						from: 'azizmdk@outlook.com',
						to: Order.email,
						subject: 'Commande traité avec succés',
						html: `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <link rel="icon" href="images/favicon/1.png" type="image/x-icon">
                                <link rel="shortcut icon" href="images/favicon/1.png" type="image/x-icon">
                                <title></title>
                                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
                        
                                <style type="text/css">
                                    body{
                                        text-align: center;
                                        margin: 0 auto;
                                        width: 650px;
                                        font-family: 'Open Sans', sans-serif;
                                        background-color: #e2e2e2;		      	
                                        display: block;
                                    }
                                    ul{
                                        margin:0;
                                        padding: 0;
                                    }
                                    li{
                                        display: inline-block;
                                        text-decoration: unset;
                                    }
                                    a{
                                        text-decoration: none;
                                    }
                                    p{
                                        margin: 15px 0;
                                    }
                        
                                    h5{
                                        color:#444;
                                        text-align:left;
                                        font-weight:400;
                                    }
                                    .text-center{
                                        text-align: center
                                    }
                                    .main-bg-light{
                                        background-color: #fafafa;
                                    }
                                    .title{
                                        color: #444444;
                                        font-size: 22px;
                                        font-weight: bold;
                                        margin-top: 10px;
                                        margin-bottom: 10px;
                                        padding-bottom: 0;
                                        text-transform: uppercase;
                                        display: inline-block;
                                        line-height: 1;
                                    }
                                    table{
                                        margin-top:30px
                                    }
                                    table.top-0{
                                        margin-top:0;
                                    }
                                    table.order-detail , .order-detail th , .order-detail td {
                                        border: 1px solid #ddd;
                                        border-collapse: collapse;
                                    }
                                    .order-detail th{
                                        font-size:16px;
                                        padding:15px;
                                        text-align:center;
                                    }
                                    .footer-social-icon tr td img{
                                        margin-left:5px;
                                        margin-right:5px;
                                    }
                                </style>
                            </head>
                            <body style="margin: 20px;">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 0 30px;background-color: #fff; -webkit-box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);width: 100%;">
                                    <tbody>
                                    
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" >
                                                    
                                                    <tr>
                                                        <td>
                                                            <h2 class="title">Merci pour votre achat</h2>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        
                                                        <td>
                                                            <div style="border-top:1px solid #777;height:1px;margin-top: 30px;">
                                                        </td>
                                                    </tr>
                                                    
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" >
                                                    <tr>
                                                        <td>
                                                            <h3>Détails de votre commande </h3>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table align="center" style="margin-top: 20px;" class="order-detail" border="0" cellpadding="0" cellspacing="0">
                                                    <tr align="left">
                                                        <th>PRODUIT</th>
                                                        <th style="padding-left: 15px;">DESCRIPTION</th>
                                                        <th>PRIX</th>
                                                    </tr>
                                                    <script>
                                                Order.annonces.map(
                                                        ann => {
                                                            return (
                                                    <tr>                                
                                                        <td valign="top" style="padding-left: 20px;">
                                                            <h5 style="margin-top: 10px;">{ann.title}</h5>
                                                        </td>
                                                        
                                                        <td valign="top" style="padding-left: 15px; padding-right: 10px">
                                                            <h5 style="font-size: 14px; color:#444;margin-top:10px; margin-bottom:10px"><b>{ann.price} TND</b></h5>                  
                                                        </td>
                                                    </tr>
                                                            )})
                                                    
                                                    </script>
                                                    
                                                    <tr>
                                                        <td colspan="2" style="font-size: 13px;color: #000000; padding-left: 20px;text-align:left;border-right: unset;margin-top:10px;margin-bottom:10px;">PRIX TOTAL :</td>
                                                            <td colspan="3" class="price" style="text-align: center;font-size: 13px;color: #000000;border-left: unset;margin-top:10px;margin-bottom:10px;"><b>${Order.price} TND</b></td>
                                                    </tr>
                                                </table>
                                                                              
                                                <p></p>
                                               
                                            </td>
                                        </tr>
                                    </tbody>            
                                </table>
                                <table class="main-bg-light text-center top-0"  align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td style="padding: 30px;">
                                                            <div>
                                                                <h4 class="title" style="margin:0;text-align: center;">Suivez-nous</h4>
                                                            </div>
                                                            
                                                            <div style="border-top: 1px solid #ddd; margin: 20px auto 0;"></div>
                                                            <table  border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 20px auto 0;" >
                                                                <tr>
                                                                    <td>
                                                                        <a href="#" style="font-size:13px">Vous souhaitez modifier la façon dont vous recevez ces e-mails?</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <p style="font-size:13px; margin:0;">2021 - 22 Copy Right by secondhand</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#" style="font-size:13px; margin:0;text-decoration: underline;">Se désabonner</a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                        
                            </body>
                        </html>`,
					},
					function (error, info) {
						if (error) {
							console.log(error);
						} else {
							console.log('Email Sent: ' + info.response);
						}
					}
				);
			}
		});
	},

	deleteOrder: function (req, res) {
		orderModel.findByIdAndRemove({ _id: req.params.id }, (err, Order) => {
			if (err) {
				res.status(500),
					json({
						msg: 'erreur',
						status: 500,
						data: null,
					});
			} else {
				res.status(200).json({
					msg: 'Order deleted!',
					status: 200,
					data: Order,
				});
			}
		});
	},

	deleteAll: function (req, res) {
		orderModel.remove(function (err, Order) {
			if (err) {
				res.status(500),
					json({
						msg: 'erreur',
						status: 500,
						data: null,
					});
			} else {
				res.status(200).json({
					msg: 'All Orders deleted!',
					status: 200,
					data: Order,
				});
			}
		});
	},

	updateOrder: function (req, res) {
		orderModel
			.findByIdAndUpdate({ _id: req.params.id }, req.body)
			.exec(function (err, Orders) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Order updated!',
						status: 200,
						data: Orders,
					});
				}
			});
	},

	getOrder: function (req, res) {
		orderModel
			.findById({ _id: req.params.id })
			.populate('annonces')
			.exec(function (err, Orders) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Get Order',
						status: 200,
						data: Orders,
					});
				}
			});
	},

	getAllOrders: function (req, res) {
		orderModel
			.find({})
			.populate('annonces')
			.exec(function (err, Orders) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Get all Orders',
						status: 200,
						data: Orders,
					});
				}
			});
	},
};
