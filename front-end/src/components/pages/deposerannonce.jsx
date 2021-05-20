import React, { Component } from "react";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import Select from "@material-ui/core/Select";

import Breadcrumb from "../common/breadcrumb";

import ImageUploader from "react-images-upload";

import UserController from "../../services/controllers/userControllers";
import CategoryController from "../../services/controllers/CategoryController";
import SubCategoryController from "../../services/controllers/SubCategoryController";
import AnnonceController from "../../services/controllers/annonceController";

// import SubCategoryController from '../../services/controllers/SubCategoryController';

class Deposer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: "",
      location: "",
      tel: "",
      subCat_id: "",
      user_id: "",
      Categories: [],
      pictures: [],
      error: {},
    };
    this.UserController = new UserController();
    this.CategoryController = new CategoryController();
    this.SubCategoryController = new SubCategoryController();
    this.AnnonceController = new AnnonceController();

    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("userId")) {
      this.setState({ user_id: localStorage.getItem("userId") });
      console.log("user id:", localStorage.getItem("userId"));
      this.getUser(localStorage.getItem("userId"));
    }
    this.getAllCategories();
  }

  pushAnnonceUser(id, data) {
    let data1 = { annonce: data };
    this.UserController.pushAnnonce(id, data1).then((res) => {
      console.log("pushAnnonce", res);
    });
  }

  pushAnnonceSubCat(id, data) {
    let data1 = { annonce: data };
    this.SubCategoryController.pushAnnonce(id, data1).then((res) => {
      console.log("pushAnnonce", res);
    });
  }

  getUser(id) {
    this.UserController.getUser(id).then((res) => {
      this.setState({ tel: res.data.data.tel });
    });
  }

  getAllCategories() {
    this.CategoryController.getAllCategory().then((res) => {
      this.setState({ Categories: res.data.data });
    });
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: pictureFiles,
    });
  }

  validate = () => {
    let isError = false;
    const errors = {
      titleErr: "",
      priceErr: "",
      telErr: "",
      locErr: "",
      catErr: "",
      picErr: "",
    };

    if (this.state.title === "") {
      isError = true;
      errors.titleErr = "Veuillez vérifier le titre";
    }
    if (this.state.location === "") {
      isError = true;
      errors.locErr = "Veuillez vérifier l'emplacement";
    }
    if (this.state.price === "") {
      isError = true;
      errors.priceErr = "Veuillez entrer le prix";
    }

   

    if (this.state.subCat_id === "") {
      isError = true;
      errors.catErr = "Veuillez séléctionner la catgéorie";
    }
    if (this.state.pictures.length === 0) {
      isError = true;
      errors.picErr = "Veuillez ajouter au moins une image";
    }
    if (this.state.pictures.length > 5) {
      isError = true;
      errors.picErr = "Veuillez ajouter 5 images au maximum";
    }

    this.setState({
      error: errors,
    });
    return isError;
  };

  

  handleSubmit(event) {
    let err = this.validate();
    const formData = new FormData();

    formData.append("title", this.state.title);
    for (var i = 0; i < this.state.pictures.length; i++) {
      formData.append("image", this.state.pictures[i]);
    }
    formData.append("user_id", this.state.user_id);
    formData.append("description", this.state.description);
    formData.append("price", this.state.price);
    formData.append("tel", this.state.tel);
    formData.append("location", this.state.location);
    formData.append("subCat_id", this.state.subCat_id);

    if (!err) {
      this.AnnonceController.addAnnonce(formData).then((res) => {
        console.log("response", res);
        this.pushAnnonceUser(this.state.user_id, res.data.data._id);
        this.pushAnnonceSubCat(this.state.subCat_id, res.data.data._id);
        this.props.history.push("/");
        toast.success("Annonce créée");
      });
    }

    // // window.location.href = '/';
  }

  render() {
    return (
      <div>
        <Breadcrumb title={"Annonce"} />

        {/*Regsiter section*/}
        <section className="register-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Déposer votre annonce</h3>
                <div className="theme-card">
                  <form className="theme-form">
                    <div className="form-row">
                      <div className="col-md-6">
                        <label>Titre</label>
                        <input
                          name="name"
                          type="text"
                          maxLength="20"
                          className="form-control"
                          id="fname"
                          onChange={(e) => {
                            this.setState({ title: e.target.value });
                          }}
                        />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.titleErr}
                        </label>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="review">Prix</label>
                        <input
                          name="price"
                          type="number"
                          className="form-control"
                          id="lname"
                          onChange={(e) => {
                            this.setState({ price: e.target.value });
                          }}
                        />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                            marginTop: -20,
                          }}
                        >
                          {this.state.error.priceErr}
                        </label>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="email">Description (optionnelle)</label>
                        <br />
                        <textarea
                          className="form-control"
                          style={{ resize: "none" }}
                          name="Description"
                          rows="5"
                          cols="93"
                          onChange={(e) => {
                            this.setState({ description: e.target.value });
                          }}
                        />

                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="review">Emplacement</label>
                        <br />
                        <Select
                          native
                          onChange={(e) =>
                            this.setState({
                              location: e.target.value,
                            })
                          }
                        >
                          <option
                            aria-label="None"
                            value="Choisir l'emplacement"
                          />
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
                        <br />
                        <br />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.locErr}
                        </label>
                        <br />
                        <label htmlFor="review">Catégorie</label>
                        <br />
                        <Select
                          native
                          onChange={(e) =>
                            this.setState({
                              subCat_id: e.target.value,
                            })
                          }
                        >
                          <option
                            aria-label="None"
                            value="Choisir une catégorie"
                          />
                          {this.state.Categories.map((cat, index) => {
                            return (
                              <>
                                <optgroup label={cat.title}>
                                  {this.state.Categories[index].subcat.map(
                                    (subcat) => (
                                      <option value={subcat._id}>
                                        {subcat.title}
                                      </option>
                                    )
                                  )}
                                </optgroup>
                              </>
                            );
                          })}
                        </Select>
                        <br />
                        <br />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.catErr}
                        </label>
                        <br /> <br /> <br />
                        <br />
                      </div>
                    

                    </div>

                    <div className="form-row">
                      <div className="col-md-6" style={{ textAlign: "center" }}>
                        <ImageUploader
                          withIcon={true}
                          withPreview
                          buttonText="Choisir vos images (5 maximum)"
                          onChange={this.onDrop}
                          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                          maxFileSize={5242880}
                          withLabel={false}
                          fileSizeError="La taille des fichiers est trop large"
                          fileTypeError="Le type de fichiers n'est pas supporté"
                        />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.picErr}
                        </label>
                      </div>

                      
                    </div>
                    <a
                      className="btn btn-solid"
                      onClick={() => this.handleSubmit()}
                    >
                      Déposer
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Deposer;
