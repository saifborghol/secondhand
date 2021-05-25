import React, { Component, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UserController from "../../services/controllers/userControllers";
import SubCategoryController from "../../services/controllers/SubCategoryController";
import AnnonceController from "../../services/controllers/annonceController";
import OrderController from "../../services/controllers/orderController";

import { selectProducts } from "../../Features/cart/cartSlice";
import { reset } from "../../Features/cart/cartSlice";

const userController = new UserController();
const subCategoryController = new SubCategoryController();
const annonceController = new AnnonceController();
const orderController = new OrderController();

export default function orderSuccess() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    var details = JSON.parse(localStorage.getItem("ORDER_products"));
    const Data = {
      price: localStorage.getItem("ORDER_total"),
      email: localStorage.getItem("ORDER_email"),
      adresse: localStorage.getItem("ORDER_address"),
      annonces: details,
    };
    orderController.addOrder(Data).then((res) => {
      console.log("addOrder", res);
      pushOrder(localStorage.getItem("userId"), res.data.data._id);
    });
    dispatch(reset());
    deleteData();
    return () => {
      localStorage.setItem("payment", false);
    };
  }, []);

  const deleteData = () => {
    items.map((annonce) => {
      deleteAnnonce(annonce._id);
      pullAnnonceUser(annonce.user_id._id, annonce._id);
      pullAnnonceSubCat(annonce.subCat_id._id, annonce._id);
    });
  };

  const deleteAnnonce = (id) => {
    annonceController.deleteAnnonce(id).then((res) => {
      console.log("resDeleteAnnonce", res);
    });
  };

  const pullAnnonceUser = (id, data) => {
    let data1 = { annonce: data };
    userController.pullAnnonce(id, data1).then((res) => {
      console.log("Pull annonce User", res);
    });
  };

  const pullAnnonceSubCat = (id, data) => {
    let data1 = { annonce: data };
    subCategoryController.pullAnnonce(id, data1).then((res) => {
      console.log("pull annonce Subcat", res);
    });
  };

  const pushOrder = (id, data) => {
    let data1 = { order: data };
    userController.pushOrder(id, data1).then((res) => {
      console.log("Push order", res);
    });
  };

  const { payment, items, orderTotal } = location.state;
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var current = new Date();
  var next5days = new Date(Date.now() + 5 * 86400000);
  let CheckDate = current.toLocaleDateString("fr-FR", options).toString();
  let deliveryDate = next5days.toLocaleDateString("fr-FR", options).toString();

  return payment ? (
    <div>
      <section className="section-b-space light-layout">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="success-text">
                <i className="fa fa-check-circle" aria-hidden="true" />
                <h2>Merci</h2>
                <p>
                  Le paiement a été traité avec succès et votre commande est
                  passée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-order">
                <h3>Détails de votre commande</h3>
                {items.map((item, index) => {
                  return (
                    <div className="row product-order-detail" key={index}>
                      <div className="col-3">
                        <img
                          src={`http://localhost:4000/annonce/annonceImage/${
                            item.image[0].name
                          }`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-3 order_detail">
                        <div>
                          <h4>Nom du produit</h4>
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                      {/* <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>quantity</h4>
                                                        <h5>{item.qty}</h5>
                                                    </div>
                                                </div> */}
                      <div className="col-3 order_detail">
                        <div>
                          <h4>Prix</h4>
                          <h5>{item.price} DT</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="total-sec">
                  <ul>
                    {/* <li>subtotal <span>{orderTotal}</span></li> */}

                    <li>
                      livraison
                      {localStorage.getItem("shipping") === "true" ? (
                        <span>7 DT</span>
                      ) : (
                        <span>0 DT</span>
                      )}
                    </li>
                    <></>
                  </ul>
                </div>
                <div className="final-total">
                  <h3>
                    Total <span>{orderTotal} DT</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row order-success-sec">
                {/* <div className="col-sm-6">
                                        <h4>summery</h4>
                                        <ul className="order-detail">
                                            {(payment.paymentID)?
                                                <div>
                                            <li>payer ID: {payment.payerID}</li>
                                            <li>payment ID: {payment.paymentID}</li>
                                            <li>payment Token: {payment.paymentToken}</li></div>
                                                :
                                            <li>Order ID: {payment.id}</li> }

                                            <li>Order Date: {CheckDate}</li>
                                            <li>Order Total: {orderTotal}</li>
                                        </ul>
                                    </div> */}
                <div className="col-sm-6">
                  <h4>Adresse de livraison</h4>
                  <ul className="order-detail">
                    <li>{localStorage.getItem("orderAdress")}</li>
                  </ul>
                </div>

                {/* <div className="col-sm-12 payment-mode">
                                        <h4>payment method</h4>
                                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net
                                            banking acceptance subject to device availability.</p>
                                    </div> */}
                <div className="col-md-12">
                  <div className="delivery-sec">
                    <h3>Date prévue de livraison</h3>
                    <h2>{deliveryDate}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <section className="p-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="error-section">
              <h1>404</h1>
              <h2>page not found</h2>
              <a href="index.html" className="btn btn-solid">
                back to home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
