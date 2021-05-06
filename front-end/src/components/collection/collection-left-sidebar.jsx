import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import compose from "recompose/compose";
import { Helmet } from "react-helmet";
import Select from "@material-ui/core/Select";
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import StickyBox from "react-sticky-box";
import avatar from "../../assets/images/default-avatar.png";

import { HiLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

import SpecialProducts from "../layouts/common/products";

import Card from "react-bootstrap/Card";

import SubCategoryController from "../../services/controllers/SubCategoryController";

class CollectionLeftSidebar extends Component {
  constructor() {
    super();
    this.state = {
      SubCat: {},
      filteredData: [],
      layoutColumns: 3,
    };
    this.SubCategoryController = new SubCategoryController();
    this.filterGov = this.filterGov.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    console.log("title", this.props.match.params.title);
    this.SubCategoryController.getSubCategory(
      this.props.match.params.title
    ).then((res) => {
      this.setState({
        SubCat: res.data.data,
        filteredData: res.data.data.annonce,
      });

      // console.log('inital tab:', res.data.data.annonce);
      console.log("filtered:", this.state.filteredData);
    });
  }

  componentDidUpdate() {
    this.SubCategoryController.getSubCategory(
      this.props.match.params.title
    ).then((res) => {
      this.setState({ SubCat: res.data.data });
    });
  }

  LayoutViewClicked(colums) {
    this.setState({
      layoutColumns: colums,
    });
  }

  openFilter = () => {
    document.querySelector(".collection-filter").style = "left: -15px";
  };

  userClick = (id) => {
    const { history } = this.props;
    history.push(`/user/${id}`);
  };

  annonceClick = (id) => {
    const { history } = this.props;
    history.push(`/product/${id}`);
  };

  filterGov(gov) {
    if (gov === "all") {
      this.setState({ filteredData: this.state.SubCat.annonce });
    } else {
      let arr = [...this.state.SubCat.annonce];
      let arraa = arr.filter((annonce) => annonce.location === gov);
      this.setState({
        filteredData: arraa,
      });
    }
  }

  sort(type) {
    if (type === "AscOrder") {
      this.sortAsc(this.state.filteredData, this.state.SubCat.annonce.title);
    } else if (type === "DescOrder") {
      this.sortDesc(this.state.filteredData, this.state.SubCat.annonce.title);
    }
    console.log("sorted", this.state.filteredData);
  }

  sortAsc(arr, field) {
    return arr.sort(function(a, b) {
      if (a[field] > b[field]) {
        return 1;
      }
      if (b[field] > a[field]) {
        return -1;
      }
      return 0;
    });
  }

  sortDesc(arr, field) {
    return arr.sort(function(a, b) {
      if (a[field] > b[field]) {
        return -1;
      }
      if (b[field] > a[field]) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    if (!this.state.filteredData) {
      return <span />;
    }
    return (
      <div>
        {/*SEO Support*/}
        <Helmet>
          <title>secondhand | Achat et vente en ligne</title>
        </Helmet>
        {/*SEO Support End */}

        <Breadcrumb title={this.state.SubCat.title} />

        <section className="section-b-space">
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                {/* <div className="col-sm-3 collection-filter">
									<StickyBox offsetTop={20} offsetBottom={20}>
										<div>
											<Filter />
											{/* <NewProduct/> }
										</div>
									</StickyBox>
									{/*side-bar banner end here}
								</div>
								 */}
                <div className="collection-content col">
                  <div className="page-main-content ">
                    <div className="">
                      <div className="row">
                        <div className="col-sm-12">
                          {/* <div className="top-banner-wrapper"> */}
                          {/* <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`} className="img-fluid" alt=""/></a> */}
                          {/* <div className="top-banner-content small-section">
														<h4>{this.state.SubCat.title}</h4>
														<h5>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry.
														</h5>
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been the
															industry's standard dummy text ever since the
															1500s, when an unknown printer took a galley of
															type and scrambled it to make a type specimen
															book. It has survived not only five centuries, but
															also the leap into electronic typesetting,
															remaining essentially unchanged. It was
															popularised in the 1960s with the release of
															Letraset sheets containing Lorem Ipsum passages,
															and more recently with desktop publishing software
															like Aldus PageMaker including versions of Lorem
															Ipsum.{' '}
														</p>
													</div> */}
                          {/* </div> */}

                          <div style={{ marginBottom: "50px" }}>
                            <Select
                              style={{ marginRight: "40px" }}
                              defaultValue="Newest"
                              native
                              onChange={(e) => {
                                this.sort(e.target.value);
                              }}
                            >
                              <option value="Newest">
                                Articles les plus récents
                              </option>
                              <option value="HighToLow">
                                Prix: décroissant
                              </option>
                              <option value="LowToHigh">Prix: croissant</option>

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

                          <div
                            id="card-container"
                            style={{ marginTop: "40px" }}
                          >
                            {this.state.filteredData.map((annonce) => {
                              return (
                                <Card id="card-style">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginBottom: "10px",
                                    }}
                                    onClick={() =>
                                      this.userClick(annonce.user_id._id)
                                    }
                                  >
                                    {annonce.user_id.image ? (
                                      <img
                                        src={`http://localhost:4000/user/userimage/${
                                          annonce.user_id.image
                                        }`}
                                        // onClick={() => this.profil()}
                                        alt="avatar"
                                        width="26px"
                                        height="26px"
                                        style={{
                                          cursor: "pointer",
                                          borderRadius: "50%",
                                          objectFit: "cover",
                                          marginRight: "5px",
                                        }}
                                      />
                                    ) : (
                                      <img
                                        src={avatar}
                                        // onClick={() => this.profil()}
                                        alt="avatar"
                                        width="24px"
                                        height="24px"
                                        style={{
                                          cursor: "pointer",
                                          borderRadius: "50%",
                                          objectFit: "cover",
                                          marginRight: "5px",
                                        }}
                                      />
                                    )}

                                    <Card.Text
                                      style={{
                                        color: "#222222",
                                        fontSize: "14px",
                                      }}
                                    >
                                      {annonce.user_id.name}{" "}
                                      {annonce.user_id.surName}
                                    </Card.Text>
                                  </div>
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

                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "-7px",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <HiLocationMarker size="16px" />
                                      <Card.Text
                                        style={{
                                          fontSize: "14px",
                                          color: "#222222",
                                          marginLeft: "2px",
                                        }}
                                      >
                                        {annonce.location}
                                      </Card.Text>
                                    </div>

                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "-7px",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <IoMdTime />
                                      <Card.Text
                                        style={{
                                          fontSize: "14px",
                                          marginLeft: "2px",
                                        }}
                                      >
                                        {annonce.date}
                                      </Card.Text>
                                    </div>
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
        </section>
      </div>
    );
  }
}

export default compose(withRouter)(CollectionLeftSidebar);
