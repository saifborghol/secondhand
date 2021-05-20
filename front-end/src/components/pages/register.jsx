import React, { Component } from "react";

import Breadcrumb from "../common/breadcrumb";

import UserController from "../../services/controllers/userControllers";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surName: "",
      email: "",
      password: "",
      tel: "",
      error: {},
    };
    this.UserController = new UserController();
  }
  validate = () => {
    let isError = false;
    const errors = {
      surNameErr: "",
      NameErr: "",
      emailErr: "",
      passwordErr: "",
    };

    if (this.state.name === "" || !isNaN(this.state.name)) {
      isError = true;
      errors.NameErr = "Veuillez vérifier votre prénom";
    }

    if (this.state.surName === "" || !isNaN(this.state.surName)) {
      isError = true;
      errors.surNameErr = "Veuillez vérifier votre nom";
    }

    if (this.state.tel === "" || this.state.tel.length !== 8) {
      isError = true;
      errors.telErr = "Veuillez vérifier votre numéro de téléphone";
    }

    const regex3 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === "" || !regex3.test(this.state.email)) {
      isError = true;
      errors.emailErr = "Veuillez vérifier votre email";
    }

    const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}$/;
    if (this.state.password === "" || !regex2.test(this.state.password)) {
      isError = true;
      errors.passwordErr = "Veuillez vérifier votre mot de passe";
    }
    this.setState({
      error: errors,
    });
    return isError;
  };

  handleSubmit = () => {
    try {
      const err = this.validate();

      const Data = {
        name: this.state.name,
        surName: this.state.surName,
        email: this.state.email,
        password: this.state.password,
        tel: this.state.tel,
      };

      if (!err) {
        this.UserController.createUser(Data).then((res) => {
          console.log(res);

          if (res.data.statut === 200) {
            this.props.history.push("/login");
          } 
          else if (res.data.message.errors.tel) {
            console.log("Phone exists!");
            this.setState({
              error: {
                ...this.state.error,
                telErr: "Ce numéro déja existe",
              },
            });
          }
          else{
            console.log("Email exists!");
            this.setState({
              error: {
                ...this.state.error,
                emailErr: "Cette email déja existe",
              },
            });
          }
        });
      }
    } catch (error) {
      console.log("il y a un problème", error);
      return error;
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <Breadcrumb title={"Créer un compte"} />

        {/*Regsiter section*/}
        <section className="register-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Créer un compte</h3>
                <div className="theme-card">
                  <form className="theme-form">
                    <div className="form-row">
                      <div className="col-md-4">
                        <label>Nom</label>
                        <input
                          onKeyPress={this.handleKeyPress}
                          name="name"
                          type="text"
                          className="form-control"
                          id="fname"
                          placeholder="Votre nom"
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                        />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.NameErr}
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="review">Prénom</label>
                        <input
                          onKeyPress={this.handleKeyPress}
                          name="surName"
                          type="text"
                          className="form-control"
                          id="lname"
                          placeholder="Votre prénom"
                          onChange={(e) => {
                            this.setState({ surName: e.target.value });
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
                          {this.state.error.surNameErr}
                        </label>
                      </div>
                      
                    </div>
                    <div className="form-row">
                      <div className="col-md-4">
                        <label htmlFor="email">Email</label>
                        <input
                          onKeyPress={this.handleKeyPress}
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Votre email"
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.emailErr}
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="review">Numéro de téléphone</label>

                        <input
                          onKeyPress={this.handleKeyPress}
                          name="tel"
                          type="number"
                          className="form-control"
                          id="tel"
                          placeholder="Votre numéro de téléphone"
                          onChange={(e) => {
                            this.setState({ tel: e.target.value });
                          }}
                        />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.telErr}
                        </label>
                      </div>
                      
                      
                      
                    </div>
                    <div className="form-row">
                    
                    <div className="col-md-4">
                        <label htmlFor="review">Mot de passe</label>

                        <input
                          onKeyPress={this.handleKeyPress}
                          name="password"
                          type="password"
                          className="form-control"
                          id="review"
                          placeholder="Votre mot de passe"
                          onChange={(e) => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                        <label
                          style={{
                            paddingBottom: "20px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {this.state.error.passwordErr}
                        </label>
                      </div>
                      </div>

                    <a
                        className="btn btn-solid"
                        onClick={() => this.handleSubmit()}
                      >
                        S'inscrire
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

export default Register;
