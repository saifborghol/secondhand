import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

import UserController from '../../services/controllers/userControllers';

class ForgetPassword extends Component {

    constructor (props) {
        super (props)
        this.state={
            password: "",
            password2: "",
            error: {},
        }
        this.UserController = new UserController();
    }

    validate = () => {
		let isError = false;
		const errors = {
			passwordErr: '',
		};

		const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}$/
		;
		if (this.state.password === '' || !regex2.test(this.state.password)) {
			isError = true;
			errors.passwordErr = 'Veuillez vérifier votre mot de passe';
		}
		if (this.state.password2 === '' || !regex2.test(this.state.password2)) {
			isError = true;
			errors.passwordErr = 'Veuillez vérifier votre mot de passe';
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
				newPass: this.state.password,
				resetLink: this.props.match.params.id
			};
			if (!err) {
                if (this.state.password === this.state.password2)
                {
                    this.UserController.resetPassword(Data).then((res) => {
                        console.log('ressssss', res);
                        if (res.data.status === 'Success') {
                            this.props.history.push('/login');
                            console.log('resLogin', res);
                        } else if (res.data.message === "invalid token") {
                            window.alert("Ce lien n'est pas valide ou a été expiré")
                            this.props.history.push('/forget-password');

                        }
                    });
                }
                else {
                    this.setState({
                    error: {
                        ...this.state.error,
                        passwordErr: 'Les mots de passe doivent être identiques',
                    },
                });
                }
            }
		} catch (error) {
			console.log('il y a un problème', error);
			return error;
		}
	};

    render (){


        return (
            <div>
                <Breadcrumb title={'Réinitialisation'}/>
                
                
                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Réinitialiser le mot de passe</h2>
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12">
                                        <input
												type="password"
												className="form-control"
												id="review"
												placeholder="Nouveau mot de passe"
												required=""
												onChange={(e) => {
													this.setState({ password: e.target.value });
												}}
											/>

                                            <input
												type="password"
												className="form-control"
												id="review"
												placeholder="Confrimer le nouveau mot de passe"
												required=""
												onChange={(e) => {
													this.setState({ password2: e.target.value });
												}}
											/>
                                            
                                                   <label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
												}}
											>
												{this.state.error.passwordErr}
											</label>
                                        </div>
                                        <a className="btn btn-solid" onClick={() => this.handleSubmit()}>Envoyer</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default ForgetPassword