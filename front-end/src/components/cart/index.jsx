import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Breadcrumb from "../common/breadcrumb";
import { getCartTotal } from "../../services";
import { removeFromCart, incrementQty, decrementQty } from "../../actions";
import { selectProducts } from "../../Features/cart/cartSlice";

import { removeByIDfromcart } from "../../Features/cart/cartSlice";

function cartComponent() {
  const products = useSelector(selectProducts);
  const history = useHistory();
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;

    for (const article of products) {
      sum += article.price;
    }

    setTotal(sum);
  }, []);

  const cardItems = [];
  const symbol = 0;
  const total = 0;

  return (
    <div>
      {/*SEO Support*/}
      <Helmet>
        <title>secondhand | Achat et vente en ligne</title>
      </Helmet>
      {/*SEO Support End */}

      <Breadcrumb title={"Panier"} />

      {products.length > 0 ? (
        <section className="cart-section section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <table className="table cart-table table-responsive-xs">
                  <thead>
                    <tr className="table-head">
                      <th scope="col">image</th>
                      <th scope="col">nom du produit</th>
                      <th scope="col">prix</th>

                      <th scope="col">action</th>
                      {/* <th scope="col">total</th> */}
                    </tr>
                  </thead>
                  {products.map((item, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/${
                                item._id
                              }`}
                            >
                              <img
                                src={`http://localhost:4000/annonce/annonceImage/${
                                  item.image[0].name
                                }`}
                              />
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/${
                                item._id
                              }`}
                            >
                              {item.title}
                            </Link>
                            <div className="mobile-cart-content row">
                              <div className="col-xs-3">
                                <h2 className="td-color">
                                  {/* {symbol} */}
                                  {item.price}
                                </h2>
                              </div>
                             
                            </div>
                          </td>
                          <td>
                            <h3>
                              {/* {symbol} */}
                              {item.price} DT
                            </h3>
                          </td>
                          <td>
                            <a
                              onClick={() => {
                                dispatch(removeByIDfromcart(item._id));
                                toast.warn("Article supprimé du panier");
                              }}
                            >
                              <i id='removeFromCart' className="fa fa-times"/>
                            </a>
                            
                          </td>
                          
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <table className="table cart-table table-responsive-md">
                  <tfoot>
                    <tr>
                      <td>Prix total :</td>
                      <td>
                        <h3>{Total} DT</h3>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="row cart-buttons">
              <div className="col-6">
                <Link
                  to={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                  className="btn btn-solid"
                >
                  Continuer vos achats
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to={`${process.env.PUBLIC_URL}/checkout`}
                  className="btn btn-solid"
                >
                  Commande
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="cart-section section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/icon-empty-cart.png`}
                      className="img-fluid mb-4"
                      alt=""
                    />
                    <h3>
                      <strong>Votre panier est vide</strong>
                    </h3>
                    <h4
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push("/")}
                    >
                      Découvrez plus d'articles.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.cartList.cart,
  symbol: state.data.symbol,
  total: getCartTotal(state.cartList.cart),
});

export default cartComponent;
