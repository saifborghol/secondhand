import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import compose from "recompose/compose";

import { Helmet } from "react-helmet";
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Select from "@material-ui/core/Select";

import StickyBox from "react-sticky-box";
import Card from "react-bootstrap/Card";

import { FaEdit } from "react-icons/fa";

import avatar from "../../assets/images/default-avatar.png";

import userController from "../../services/controllers/userControllers";

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layoutColumns: 3,
      User: {},
    };
    this.userController = new userController();
  }

  componentDidMount() {
    if (localStorage.getItem("userId")) {
      this.getUser(this.props.match.params.id);
    }
  }

  componentDidUpdate() {
    if (localStorage.getItem("userId")) {
      this.getUser(this.props.match.params.id);
    }
  }

  LayoutViewClicked(colums) {
    this.setState({
      layoutColumns: colums,
    });
  }

  getUser(id) {
    this.userController.getUser(id).then((res) => {
      this.setState({ User: res.data.data });
      // this.setState({ Annonce: res.data.data.annonce });
    });
  }

  editProfil = () => {
    const { history } = this.props;
    history.push(`/useredit/${this.state.User._id}`);
  };

  annonceClick = (id) => {
    const { history } = this.props;
    history.push(`/product/${id}`);
  };

  render() {
    if (!this.state.User.annonce) {
      return <span />;
    }
    return (
      <div>
        {/*SEO Support*/}
        <Helmet>
          <title>secondhand | Achat et vente en ligne</title>
        </Helmet>
        {/*SEO Support End */}

        <Breadcrumb title={"Profile"} />

        <section className="section-b-space">
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                <div className="collection-content col">
                  <div className="page-main-content ">
                    <div className="">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="top-banner-wrapper">
                            <div className="profil-page">
                              {this.state.User.image ? (
                                <img
                                  src={`http://localhost:4000/user/userimage/${
                                    this.state.User.image
                                  }`}
                                  alt="avatar"
                                  className="girl"
                                />
                              ) : (
                                <img
                                  src={avatar}
                                  alt="avatar"
                                  className="girl"
                                />
                              )}
                              <h3>
                                {this.state.User.name +
                                  " " +
                                  this.state.User.surName}

                                {this.state.User._id ===
                                localStorage.getItem("userId") ? (
                                  <FaEdit
                                    size="20"
                                    style={{
                                      cursor: "pointer",
                                      marginLeft: "10px",
                                    }}
                                    onClick={() => this.editProfil()}
                                  />
                                ) : (
                                  <></>
                                )}
                              </h3>
                            </div>
                          </div>

                          <div className="collection-product-wrapper">
                            <h2
                              style={{ fontWeight: "700", marginTop: "80px" }}
                            >
                              Annonces ({this.state.User.annonce.length})
                            </h2>
                            <div
                              style={{
                                marginBottom: "30px",
                                marginTop: "40px",
                              }}
                            >
                              <Select
                                style={{
                                  marginRight: "20px",
                                  marginBottom: "20px",
                                }}
                                defaultValue="Newest"
                                native
                                onChange={(e) => {
                                  this.setState({ sortType: e.target.value });
                                  this.sort(
                                    this.state.filteredData,
                                    e.target.value
                                  );
                                }}
                              >
                                <option value="Newest">
                                  Articles les plus récents
                                </option>
                                <option value="HighToLow">
                                  Prix: décroissant
                                </option>
                                <option value="LowToHigh">
                                  Prix: croissant
                                </option>

                                <option value="AscOrder">
                                  Trier par Nom: A à Z
                                </option>
                                <option value="DescOrder">
                                  Trier par Nom: Z à A
                                </option>
                              </Select>

                              <Select
                                defaultValue="all"
                                native
                                onChange={(e) => {
                                  this.filterGov(e.target.value);
                                }}
                              >
                                <option disabled>Filtre par gouvernorat</option>

                                <option value="all">Tout</option>
                                <option>Ariana</option>
                                <option>Ben arous</option>
                                <option>Bizerte</option>
                                <option>Béja</option>
                                <option>Gabès</option>
                                <option>Gafsa</option>
                                <option>Jendouba</option>
                                <option>Kairouan</option>
                                <option>Kasserine</option>
                                <option>Kébili</option>
                                <option>La manouba</option>
                                <option>Le kef</option>
                                <option>Mahdia</option>
                                <option>Monastir</option>
                                <option>Médenine</option>
                                <option>Nabeul</option>
                                <option>Sfax</option>
                                <option>Sidi bouzid</option>
                                <option>Siliana</option>
                                <option>Sousse</option>
                                <option>Tataouine</option>
                                <option>Tozeur</option>
                                <option>Tunis</option>
                                <option>Zaghouan</option>
                              </Select>
                            </div>

                            <div id="card-container">
                              {this.state.User.annonce.map((annonce) => {
                                return (
                                  <Card id="card-style">
                                    <Card.Img
                                      style={{
                                        width: "235px",
                                        height: "355px",
                                      }}
                                      variant="bottom"
                                      src={`http://localhost:4000/annonce/annonceImage/${
                                        annonce.image[0].name
                                      }`}
                                      onClick={() =>
                                        this.annonceClick(annonce._id)
                                      }
                                    />
                                    <Card.Body
                                      style={{ padding: "16px 0px" }}
                                      onClick={() =>
                                        this.annonceClick(annonce._id)
                                      }
                                    >
                                      <Card.Title
                                        style={{
                                          fontWeight: "700",
                                          fontSize: "16px",
                                          marginTop: "-10px",
                                        }}
                                      >
                                        {annonce.title}
                                      </Card.Title>
                                      <Card.Title
                                        style={{
                                          fontSize: "14px",
                                          marginTop: "-5px",
                                        }}
                                      >
                                        {annonce.price} DT
                                      </Card.Title>

                                      <Card.Text
                                        style={{
                                          fontSize: "14px",
                                          marginTop: "-10px",
                                        }}
                                      >
                                        {annonce.date}
                                      </Card.Text>
                                    </Card.Body>
                                  </Card>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default compose(withRouter)(Profil);
