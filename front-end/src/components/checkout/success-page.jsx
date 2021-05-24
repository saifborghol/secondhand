import React, { Component } from "react";

class orderSuccess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { payment, items, orderTotal } = this.props.location.state;
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var current = new Date();
    var next5days = new Date(Date.now() + 5 * 86400000);
    let CheckDate = current.toLocaleDateString("fr-FR", options).toString();
    let deliveryDate = next5days
      .toLocaleDateString("fr-FR", options)
      .toString();

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
                      {localStorage.getItem('shipping') === 'true' ?
                      <li>
                        livraison <span>7 DT</span>
                      </li> :
                       <></>
                      }
                      <li>
                        taxes <span>0 DT</span>
                      </li>
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
                      <li>{localStorage.getItem('orderAdress')}</li>
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
}

export default orderSuccess;
