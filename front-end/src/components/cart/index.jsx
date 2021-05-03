import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Breadcrumb from "../common/breadcrumb";
import { getCartTotal } from "../../services";
import { removeFromCart, incrementQty, decrementQty } from "../../actions";

class cartComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { cartItems, symbol, total } = this.props;
    const cartItems = [];
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

        {cartItems.length > 0 ? (
          <section className="cart-section section-b-space">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <table className="table cart-table table-responsive-xs">
                    <thead>
                      <tr className="table-head">
                        <th scope="col">image</th>
                        <th scope="col">product name</th>
                        <th scope="col">price</th>

                        <th scope="col">action</th>
                        <th scope="col">total</th>
                      </tr>
                    </thead>
                    {cartItems.map((item, index) => {
                      return (
                        <tbody key={index}>
                          <tr>
                            <td>
                              <Link
                                to={`${
                                  process.env.PUBLIC_URL
                                }/no-sidebar/product/${item.id}`}
                              >
                                <img
                                  src={
                                    item.variants
                                      ? item.variants[0].images
                                      : item.pictures[0]
                                  }
                                  alt=""
                                />
                              </Link>
                            </td>
                            <td>
                              <Link
                                to={`${
                                  process.env.PUBLIC_URL
                                }/no-sidebar/product/${item.id}`}
                              >
                                {item.name}
                              </Link>
                              <div className="mobile-cart-content row">
                                <div className="col-xs-3">
                                  <h2 className="td-color">
                                    {symbol}
                                    {item.price -
                                      (item.price * item.discount) / 100}
                                  </h2>
                                </div>
                                <div className="col-xs-3">
                                  <h2 className="td-color">
                                    <a
                                      href="#"
                                      className="icon"
                                      onClick={() =>
                                        this.props.removeFromCart(item)
                                      }
                                    >
                                      <i className="icon-close" />
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h2>
                                {symbol}
                                {item.price -
                                  (item.price * item.discount) / 100}
                              </h2>
                            </td>

                            <td>
                              <a
                                href="#"
                                className="icon"
                                onClick={() => this.props.removeFromCart(item)}
                              >
                                <i className="fa fa-times" />
                              </a>
                            </td>
                            <td>
                              <h2 className="td-color">
                                {symbol}
                                {item.sum}
                              </h2>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                  <table className="table cart-table table-responsive-md">
                    <tfoot>
                      <tr>
                        <td>total price :</td>
                        <td>
                          <h2>
                            {symbol} {total}{" "}
                          </h2>
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
                    continue shopping
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to={`${process.env.PUBLIC_URL}/checkout`}
                    className="btn btn-solid"
                  >
                    check out
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
                        onClick={() => this.props.history.push("/")}
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
}
const mapStateToProps = (state) => ({
  cartItems: state.cartList.cart,
  symbol: state.data.symbol,
  total: getCartTotal(state.cartList.cart),
});

export default cartComponent;
