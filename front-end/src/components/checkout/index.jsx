import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PaypalExpressBtn from "react-paypal-express-checkout";

import SimpleReactValidator from "simple-react-validator";
import "simple-react-validator/dist/locale/fr";

import Breadcrumb from "../common/breadcrumb";
import { removeFromWishlist } from "../../actions";
import { getCartTotal } from "../../services";

import UserController from "../../services/controllers/userControllers";
import OrderController from "../../services/controllers/orderController";

import { selectProducts } from "../../Features/cart/cartSlice";

const userController = new UserController();
const orderController = new OrderController();

const Validator = new SimpleReactValidator({
  locale: "fr",
  validators: {
    tel: {
      // name the rule
      message: "Le :attribute doit être un numéro valide.",
      rule: (val, params, validator) => {
        return (
          validator.helpers.testRegex(val, /^[0-9]{8}$/) &&
          params.indexOf(val) === -1
        );
      },
      messageReplace: (message, params) =>
        message.replace(":values", this.helpers.toSentence(params)), // optional
      required: true, // optional
    },
  },
});

export default function checkOut() {
  const forceUpdate = React.useReducer((bool) => !bool)[1];
  const products = useSelector(selectProducts);

  const [Total, setTotal] = useState(0);
  const [Payment, setPayment] = useState("stripe");
  const [First_name, setFirst_name] = useState("");
  const [Last_name, setLast_name] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [PinCode, setPinCode] = useState("");

  const history = useHistory();

  useEffect(() => {
    let sum = 0;

    for (const article of products) {
      sum += article.price;
    }

    setTotal(sum);
  }, []);

  const checkhandle = (value) => {
    setPayment(value);
  };

  const pushOrder = (id, data) => {
    let data1 = { order: data };
    userController.pushOrder(id, data1).then((res) => {
      console.log("pushOrder", res);
    });
  };

  const testSubmit = () => {
    const Data = {
      price: Total,
      annonces: products,
    };
    orderController.addOrder(Data).then((res) => {
      console.log("addOrder", res);
      pushOrder(localStorage.getItem("userId"), res.data.data._id);
    });
  };

  const StripeClick = () => {
    if (Validator.allValid()) {
      // alert("You submitted the form and stuff!");

      var handler = window.StripeCheckout.configure({
        key: "pk_test_glxk17KhP7poKIawsaSgKtsL",
        locale: "auto",
        token: (token) => {
          console.log(token);
          history.push({
            pathname: "/order-success",
            state: { payment: token, items: products, orderTotal: Total },
          });
        },
      });
      handler.open({
        name: "secondhand",
        description: "Achat et vente en ligne",
        amount: Total * 100,
        currency: "dnt",
      });
      localStorage.setItem("orderAdress", Address);
      testSubmit();
    } else {
      Validator.showMessages();
      // rerender to show messages for the first time
      forceUpdate();
    }
  };

  // Paypal Integration
  const onSuccess = (payment) => {
    console.log("Le paiement a été effectué!", payment);
    history.push({
      pathname: "/order-success",
      state: { payment: payment, items: products, orderTotal: Total },
    });
    testSubmit();
  };

  const onCancel = (data) => {
    console.log("Le paiement a été annulé!", data);
  };

  const onError = (err) => {
    console.log("Error!", err);
  };

  const client = {
    sandbox:
      "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_",
    production:
      "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_",
  };

  return (
    <div>
      {/*SEO Support*/}
      <Helmet>
        <title>secondhand | Achat et vente en ligne</title>
      </Helmet>
      {/*SEO Support End */}

      <Breadcrumb title={"Checkout"} />

      <section className="section-b-space">
        <div className="container padding-cls">
          <div className="checkout-page">
            <div className="checkout-form">
              <form>
                <div className="checkout row">
                  <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="checkout-title">
                      <h3>Détails de facturation</h3>
                    </div>
                    <div className="row check-out">
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">Prénom</div>
                        <input
                          type="text"
                          name="prénom"
                          value={First_name}
                          onChange={(e) => setFirst_name(e.target.value)}
                        />
                        {Validator.message(
                          "prénom",
                          First_name,
                          "required|alpha"
                        )}
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">Nom</div>
                        <input
                          type="text"
                          name="nom"
                          value={Last_name}
                          onChange={(e) => setLast_name(e.target.value)}
                        />
                        {Validator.message("nom", Last_name, "required|alpha")}
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">Téléphone</div>
                        <input
                          type="text"
                          name="téléphone"
                          value={Phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        {/* {Validator.message("téléphone", Phone, "required")} */}
                        {Validator.message("téléphone", Phone, "required|tel")}
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">Email</div>
                        <input
                          type="text"
                          name="email"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {Validator.message("email", Email, "required|email")}
                      </div>
                      {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Country</div>
                                                    <select name="country" value={this.state.country} onChange={setStateFromInput}>
                                                        <option>India</option>
                                                        <option>South Africa</option>
                                                        <option>United State</option>
                                                        <option>Australia</option>
                                                    </select>
                                                    {Validator.message('country', this.state.country, 'required')}
                                                </div> */}
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <div className="field-label">Adresse</div>
                        <input
                          type="text"
                          name="adresse"
                          value={Address}
                          onChange={(e) => setAddress(e.target.value)}

                          //   placeholder="Street address"
                        />
                        {Validator.message(
                          "adresse",
                          Address,
                          "required|min:20|max:120"
                        )}
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <div className="field-label">Ville</div>
                        <input
                          type="text"
                          name="ville"
                          value={City}
                          onChange={(e) => setCity(e.target.value)}
                        />
                        {Validator.message("ville", City, "required|alpha")}
                      </div>
                      {/* <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">State / County</div>
                                                    <input type="text" name="state" value={this.state.state} onChange={setStateFromInput} />
                                                    {Validator.message('state', this.state.state, 'required|alpha')}
                                                </div> */}
                      <div className="form-group col-md-12 col-sm-6 col-xs-12">
                        <div className="field-label">Code postal</div>
                        <input
                          type="text"
                          name="code postal"
                          value={PinCode}
                          onChange={(e) => setPinCode(e.target.value)}
                        />
                        {Validator.message(
                          "code postal",
                          PinCode,
                          "required|integer"
                        )}
                      </div>
                      {/* <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <input type="checkbox" name="create_account" id="account-option"  checked={this.state.create_account} onChange={setStateFromCheckbox}/>
                                                    &ensp; <label htmlFor="account-option">Create An Account?</label>
                                                    {Validator.message('checkbox', this.state.create_account, 'create_account')}
                                                </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="checkout-details">
                      <div className="order-box">
                        <div className="title-box">
                          <div>
                            Produit <span> Total</span>
                          </div>
                        </div>
                        <ul className="qty">
                          {products.map((item, index) => {
                            return (
                              <li key={index}>
                                {item.title} <span>{item.price} DT</span>
                              </li>
                            );
                          })}
                        </ul>
                        <ul className="sub-total">
                          {/* <li>
                            Subtotal <span className="count">{Total} DT</span>
                          </li> */}
                          <li>
                            Livraison{" "}
                            <div className="shipping">
                              <div className="shopping-option">
                                <input
                                  onChange={(e) =>{
                                  localStorage.setItem('shipping','true')
                                  setTotal(Total + 7)}
                                  }
                                  type="radio"
                                  name="shippingType"
                                  id="free-shipping"
                                />
                                <label htmlFor="free-shipping">
                                  Livraison (+7DT)
                                </label>
                              </div>
                              <div className="shopping-option">
                                <input
                                  onChange={(e) => {
                                  localStorage.setItem('shipping','false')

                                    setTotal(Total - 7)}
                                  }
                                  type="radio"
                                  name="shippingType"
                                  id="local-pickup"
                                  defaultChecked
                                />
                                <label htmlFor="local-pickup">
                                  Collecte locale
                                </label>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul className="total">
                          <li>
                            Total <span className="count">{Total} DT</span>
                          </li>
                        </ul>
                      </div>

                      <div className="payment-box">
                        <div className="upper-box">
                          <div className="payment-options">
                            <ul>
                              <li>
                                <div className="radio-option stripe">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-2"
                                    defaultChecked={true}
                                    onClick={() => checkhandle("stripe")}
                                  />
                                  <label htmlFor="payment-2">D17</label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option paypal">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    onClick={() => checkhandle("paypal")}
                                  />
                                  <label htmlFor="payment-1">
                                    PayPal
                                    <span className="image">
                                      <img
                                        src={`${
                                          process.env.PUBLIC_URL
                                        }/assets/images/paypal.png`}
                                        alt=""
                                      />
                                    </span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {Total !== 0 ? (
                          <div className="text-right">
                            {Payment === "stripe" ? (
                              <button
                                type="button"
                                className="btn-solid btn"
                                onClick={() => StripeClick()}
                              >
                                Passer la commande
                              </button>
                            ) : (

                              <div>
                            {Validator.allValid() ? (
                              <PaypalExpressBtn
                                env={"sandbox"}
                                client={client}
                                currency={"TND"}
                                total={Total}
                                onError={onError}
                                onSuccess={onSuccess}
                                onCancel={onCancel}
                              /> ) :
                               (
                                <></>
                              )}
                              </div>
                              
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row section-t-space">
                                        <div className="col-lg-6">
                                            <div className="stripe-section">
                                                <h5>stripe js example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4242424242424242</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>2/2020</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>2222</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 m-sm-t-2">
                                            <div className="stripe-section">
                                                <h5>paypal example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4152521541244</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>11/18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>521</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
