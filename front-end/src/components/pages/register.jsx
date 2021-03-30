import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

import UserController from '../../services/controllers/userControllers'

class Register extends Component {

    constructor () {
        super ()
        this.state={
            name:"",
            surName:"",
            email:"",
            password:"",
            error:{},
        };
        this.UserController = new UserController();
    }
    validate = () => {
        let isError = false;
        const errors = {
          surNameErr:"",
          NameErr: "",
          emailErr: "",
          passwordErr: "",
        };
        const regex1 = /^[a-zA-Z._-]+$/;
        if (this.state.name === "" || !regex1.test(this.state.name)) {
          isError = true;
          errors.NameErr = "Veuillez verifier votre prénom";
        }


        const regex4 = /^[a-zA-Z._-]+$/;
        if (this.state.surName === "" || !regex4.test(this.state.surName)) {
          isError = true;
          errors.surNameErr = "Veuillez verifier votre nom";
        }


        const regex3 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email === "" || !regex3.test(this.state.email)) {
          isError = true;
          errors.emailErr = "Veuillez verifier votre email";
        }
    
        
    
        const regex2 = /^[A-Za-z]\w{7,14}$/;
        if (this.state.password === "" || !regex2.test(this.state.password)) {
          isError = true;
          errors.passwordErr = "Veuillez verifier votre mot de passe";
    
        }
        this.setState({
          error: errors,
        });
        return isError;
      };

      handleSubmit = async (e) => {
        try {
          const err = this.validate();
         
          const Data={
              name:this.state.name,
              surName:this.state.surName,
              email:this.state.email,
              password:this.state.password,
          }
          
          if (!err) {
            await this.UserController.createUser(Data).then((res) => {
              console.log(res);
              
              if (res.data.statut === 200){
              this.props.history.push("/");
              }
              else if (res.data.statut === 500){
              console.log("Email exists!")
              this.setState({
                error: {
                      ...this.state.error,
                      emailErr: 'Cette email existe déja'
                }
            })
              console.log(this.state);
              }
            });
            
           
          }
        } catch (error) {
          console.log("il y a un problème", error);
          return error;
        }
      };


    render (){

        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label >First Name</label>
                                                <input name="name" type="text" className="form-control" id="fname"
                                                       placeholder="First Name"  
                                                       onChange={(e)=>{
                                                           this.setState({name : e.target.value});
                                                       }}
                                                       />
                                                       <label style={{paddingBottom: "20px",fontSize:12,color:"red"}}>{this.state.error.NameErr}</label>
                                                       
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Last Name</label>
                                                <input name="surName" type="text" className="form-control" id="lname"
                                                       placeholder="Last Name"  onChange={(e)=>{
                                                        this.setState({surName : e.target.value});
                                                    }}/>
                                                    <label style={{paddingBottom: "20px",fontSize:12,color:"red", marginTop:-20}}>{this.state.error.surNameErr}</label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input name="email" type="text" className="form-control" id="email"
                                                       placeholder="Email"  onChange={(e)=>{
                                                        this.setState({email : e.target.value});
                                                    }}/>
                                                    <label style={{paddingBottom: "20px",fontSize:12,color:"red"}}>{this.state.error.emailErr}</label>

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Password</label>

                                                <input name="password" type="password" className="form-control" id="review"
                                                       placeholder="Enter your password"  
                                                       onChange={(e)=>{
                                                        this.setState({password : e.target.value});
                                                    }}/>
                                                <label style={{paddingBottom: "20px",fontSize:12,color:"red"}}>{this.state.error.passwordErr}</label>


                                            </div>
                                            <a className="btn btn-solid" onClick={e=>{this.handleSubmit();}}>
                                                    create Account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register