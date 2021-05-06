import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../common/index.scss";

import AliceCarousel from "react-alice-carousel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
import { useParams } from "react-router";

import { selectProducts } from "../../Features/cart/cartSlice";
import { addproducttocart } from "../../Features/cart/cartSlice";

const annonceController = new AnnonceController();
const userController = new UserController();
const subCategoryController = new SubCategoryController();

export default function NoSideBar() {
  const [Annonce, setAnnonce] = useState([]);
  const products = useSelector(selectProducts);

  const route = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    annonceController.getAnnonce(route.id).then((res) => {
      setAnnonce(res.data.data);
      console.log("ANNONCE_DATA", Annonce);
    });
  }, []);

  const deleteAnnonce = (id) => {
    annonceController.deleteAnnonce(id).then((res) => {
      console.log("resDeleteUser", res);
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

  const userClick = (id) => {
    // const { history } = this.props;
    history.push(`/user/${id}`);
  };

  const addToCart = () => {
    let exist = false;

    products.map((annonce) => {
      if (annonce._id == Annonce._id) {
        exist = true;
        toast.warn("Cet article est déja au panier");
      }
    });

    if (exist === false) {
      dispatch(addproducttocart(Annonce));
      toast.success("Article ajouté au panier");
    }
  };

  return (
    <>
      {!Annonce.image ? (
        <span />
      ) : (
        <div>
          <Breadcrumb title={" Produit / " + Annonce.title} />
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
                        {Annonce.image.map((img) => {
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
                      <h4 className="product-title">{Annonce.title}</h4>
                      {Annonce.user_id._id ===
                      localStorage.getItem("userId") ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <BiEdit
                            onClick={() =>
                              history.push(`/productedit/${Annonce._id}`)
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
                                deleteAnnonce(Annonce._id);
                                pullAnnonceUser(
                                  Annonce.user_id._id,
                                  Annonce._id
                                );
                                pullAnnonceSubCat(
                                  Annonce.subCat_id._id,
                                  Annonce._id
                                );
                                history.push("/");
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

                    <p className="product-description">{Annonce.description}</p>

                    <div className="user">
                      {Annonce.user_id.image ? (
                        <img
                          onClick={() => userClick(Annonce.user_id._id)}
                          src={`http://localhost:4000/user/userimage/${
                            Annonce.user_id.image
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
                          onClick={() => userClick(Annonce.user_id._id)}
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

                      <span onClick={() => userClick(Annonce.user_id._id)}>
                        {Annonce.user_id.name} {Annonce.user_id.surName}
                      </span>
                    </div>

                    <h4 className="price">
                      Prix: <span>{Annonce.price} DT</span>
                    </h4>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <HiLocationMarker />
                      <p style={{ marginLeft: "5px" }}>{Annonce.location}</p>
                    </div>

                    <div className="date">
                      <AiFillTag />
                      <p
                        style={{ marginLeft: "5px", cursor: "pointer" }}
                        onClick={() =>
                          history.push(`/category/${Annonce.subCat_id.title}`)
                        }
                      >
                        {Annonce.subCat_id.title}
                      </p>
                    </div>

                    <div className="date">
                      <IoMdTime />
                      <p style={{ color: "grey", marginLeft: "5px" }}>
                        Publié le: {Annonce.date}
                      </p>
                    </div>

                    {Annonce.user_id._id === localStorage.getItem("userId") ? (
                      <></>
                    ) : (
                      <div className="action">
                        <button
                          className="add-to-cart btn btn-default"
                          type="button"
                          onClick={() => addToCart()}
                        >
                          Ajouter au panier
                        </button>
                        <button className="like btn btn-default" type="button">
                          <span className="fa fa-heart" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
}
`;
