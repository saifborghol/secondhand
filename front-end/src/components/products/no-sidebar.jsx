import React, { Component } from "react";
import "../common/index.scss";

import AliceCarousel from "react-alice-carousel";
import { toast } from "react-toastify";

import avatar from "../../assets/images/default-avatar.png";
import Breadcrumb from "../common/breadcrumb";
import { HiLocationMarker } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { AiFillTag } from "react-icons/ai";

import AnnonceController from "../../services/controllers/annonceController";
import UserController from "../../services/controllers/userControllers";
import SubCategoryController from "../../services/controllers/SubCategoryController";

export default class NoSideBar extends Component {
  constructor() {
    super();
    this.state = {
      Annonce: {},
      nav1: null,
      nav2: null,
    };

    this.AnnonceController = new AnnonceController();
    this.UserController = new UserController();
    this.SubCategoryController = new SubCategoryController();
  }

  componentDidMount() {
    this.AnnonceController.getAnnonce(this.props.match.params.id).then(
      (res) => {
        this.setState({ Annonce: res.data.data });
        console.log("ANNONCE_DATA", this.state.Annonce);
      }
    );
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  deleteAnnonce(id) {
    this.AnnonceController.deleteAnnonce(id).then((res) => {
      console.log("resDeleteUser", res);
    });
  }

  pullAnnonceUser(id, data) {
    let data1 = { annonce: data };
    this.UserController.pullAnnonce(id, data1).then((res) => {
      console.log("Pull annonce User", res);
    });
  }

  pullAnnonceSubCat(id, data) {
    let data1 = { annonce: data };
    this.SubCategoryController.pullAnnonce(id, data1).then((res) => {
      console.log("pull annonce Subcat", res);
    });
  }

  userClick = (id) => {
    // const { history } = this.props;
    this.props.history.push(`/user/${id}`);
  };

  render() {
    if (!this.state.Annonce.image) {
      return <span />;
    }

    return (
      <div>
        <Breadcrumb title={" Produit / " + this.state.Annonce.title} />
        <div className="teeesst ">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <AliceCarousel
                      animationType="fadeout"
                      keyboardNavigation
                      autoPlay={true}
                      infinite
                      autoPlayInterval={3000}
                      fadeOutAnimation={true}
                      autoPlayStrategy="default"
                    >
                      {this.state.Annonce.image.map((img) => {
                        return (
                          <img
                            src={`http://localhost:4000/annonce/annonceImage/${
                              img.name
                            }`}
                          />
                        );
                      })}
                    </AliceCarousel>
                  </div>
                </div>

                <div className="details col-md-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4 className="product-title">
                      {this.state.Annonce.title}
                    </h4>
                    {this.state.Annonce.user_id._id ===
                    localStorage.getItem("userId") ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <BiEdit
                          onClick={() =>
                            this.props.history.push(
                              `/productedit/${this.state.Annonce._id}`
                            )
                          }
                          size="24px"
                          title="Modifier l'annonce"
                          style={{ cursor: "pointer" }}
                        />

                        <RiDeleteBin2Line
                          onClick={() => {
                            if (
                              window.confirm(
                                "Êtes vous sûr de supprimer cet annonce?"
                              )
                            ) {
                              this.deleteAnnonce(this.state.Annonce._id);
                              this.pullAnnonceUser(
                                this.state.Annonce.user_id._id,
                                this.state.Annonce._id
                              );
                              this.pullAnnonceSubCat(
                                this.state.Annonce.subCat_id._id,
                                this.state.Annonce._id
                              );
                              this.props.history.push("/");
                              toast.error("Annonce supprimée");
                            }
                          }}
                          title="Suppriemr l'annonce"
                          size="24px"
                          color="#E70000"
                          style={{ marginLeft: "20px", cursor: "pointer" }}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  <p className="product-description">
                    {this.state.Annonce.description}
                  </p>

                  <div className="user">
                    {this.state.Annonce.user_id.image ? (
                      <img
                      onClick={() => 
                        this.userClick(this.state.Annonce.user_id._id)                    
                      }
                        src={`http://localhost:4000/user/userimage/${
                          this.state.Annonce.user_id.image
                        }`}
                        alt="avatar"
                        width="64px"
                        height="64px"
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginRight: "5px",
                        }}
                      />
                    ) : (
                      <img
                      onClick={() => 
                        this.userClick(this.state.Annonce.user_id._id)                    
                      }
                        src={avatar}
                        alt="avatar"
                        width="64px"
                        height="64px"
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginRight: "5px",
                        }}
                      />
                    )}

                    <span onClick={() => 
                          this.userClick(this.state.Annonce.user_id._id)                    
                        }>
                      
                      {this.state.Annonce.user_id.name}{" "}
                      {this.state.Annonce.user_id.surName}
                    </span>
                  </div>

                  <h4 className="price">
                    Prix: <span>{this.state.Annonce.price} DT</span>
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <HiLocationMarker />
                    <p style={{ marginLeft: "5px" }}>
                      {this.state.Annonce.location}
                    </p>
                  </div>

                  <div className="date">
                    <AiFillTag />
                    <p style={{ marginLeft: "5px" }}>
                      {this.state.Annonce.subCat_id.title}
                    </p>
                  </div>

                  <div className="date">
                    <IoMdTime />
                    <p style={{ color: "grey", marginLeft: "5px" }}>
                      Publié le: {this.state.Annonce.date}
                    </p>
                  </div>

                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                    >
                      Ajouter au panier
                    </button>
                    <button className="like btn btn-default" type="button">
                      <span className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
}
`;
