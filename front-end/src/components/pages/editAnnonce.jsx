import React, { Component } from "react";

import { toast } from "react-toastify";

import Select from "@material-ui/core/Select";

import Breadcrumb from "../common/breadcrumb";

import ImageUploader from "react-images-upload";

import UserController from "../../services/controllers/userControllers";
import CategoryController from "../../services/controllers/CategoryController";
import SubCategoryController from "../../services/controllers/SubCategoryController";
import AnnonceController from "../../services/controllers/AnnonceController";

class editAnnonce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ann_id: "",
      title: "",
      description: "",
      price: "",
      location: "",
      tel: "",
      subCat_id: "",
      user_id: "",
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

    this.AnnonceController.getAnnonce(this.props.match.params.id).then(
      (res) => {
        this.setState({ ann_id: res.data.data._id });
        this.setState({ title: res.data.data.title });
        this.setState({ description: res.data.data.description });
        this.setState({ price: res.data.data.price });
        this.setState({ subCat_id: res.data.data.subCat_id.title });
        this.setState({ location: res.data.data.location });
      }
    );
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
    if (
      isNaN(this.state.tel) ||
      this.state.tel.length < 8 ||
      this.state.tel.length > 8
    ) {
      isError = true;
      errors.telErr = "Veuillez vérifier votre numéro";
    }
    if (this.state.subCat_id === "") {
      isError = true;
      errors.catErr = "Veuillez séléctionner la catgéorie";
    }

    this.setState({
      error: errors,
    });
    return isError;
  };

  handleSubmit(event) {
    let err = this.validate();

    const id = this.state.ann_id;

    const Data = {
      title: this.state.title,
      description: this.state.description,
      tel: this.state.tel,
      price: this.state.price,
      location: this.state.location,
    };

    if (!err) {
      this.AnnonceController.updateAnnonce(id, Data).then((res) => {
        console.log("response", res);
        // this.pushAnnonceUser(this.state.user_id, res.data.data._id);
        // this.pushAnnonceSubCat(this.state.subCat_id, res.data.data._id);
        this.props.history.push("/");
        toast.success("Annonce modifiée");
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
                <h3>Modifier votre annonce</h3>
                <div className="theme-card">
                  <form className="theme-form">
                    <div className="form-row">
                      <div className="col-md-6">
                        <label>Titre</label>
                        <input
                          defaultValue={this.state.title}
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
                          defaultValue={this.state.price}
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
                          defaultValue={this.state.description}
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
                        <label htmlFor="review">Numéro de téléphone</label>
                        <input
                          defaultValue={this.state.tel}
                          name="tel"
                          maxLength={8}
                          type="tel"
                          className="form-control"
                          id="lname"
                          placeholder="Votre numéro"
                          onChange={(e) => {
                            this.setState({ tel: e.target.value });
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
                          {this.state.error.telErr}
                        </label>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="review">Emplacement</label>
                        <br />
                        <Select
                          defaultValue="current"
                          native
                          onChange={(e) =>
                            this.setState({
                              location: e.target.value,
                            })
                          }
                        >
                          <option value="current" disabled>
                            {this.state.location}
                          </option>
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
                        <Select disabled native>
                          <option aria-label="None" value="subCategory">
                            {this.state.subCat_id.title}
                          </option>
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
                    <a
                      className="btn btn-solid"
                      onClick={() => this.handleSubmit()}
                    >
                      Enregistrer
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

export default editAnnonce;