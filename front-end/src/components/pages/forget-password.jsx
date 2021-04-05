import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

import UserController from '../../services/controllers/userControllers';

class ForgetPassword extends Component {

    constructor (props) {
        super (props)
        this.state={
            email: "",
            error: {},
        }
        this.UserController = new UserController();
    }

    validate = () => {
		let isError = false;
		const errors = {
			emailErr: '',
		};

		const regex3 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		if (this.state.email === '' || !regex3.test(this.state.email)) {
			isError = true;
			errors.emailErr = 'Veuillez vérifier votre email';
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
				email: this.state.email,
			};
			if (!err) {
				this.UserController.forgotPassword(Data).then((res) => {
					console.log('ressssss', res);
					if (res.data.status === 'Success') {
						this.props.history.push('/login');
						console.log('resLogin', res);
					} else if (res.data.status === "Email error") {
						this.setState({
							error: {
								...this.state.error,
								emailErr: 'adresse mail incorrecte',
							},
						});
					}
				});
			}
		} catch (error) {
			console.log('il y a un problème', error);
			return error;
		}
	};

    render (){


        return (
            <div>
                <Breadcrumb title={'Mot de passe oublié'}/>
                
                
                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Mot de passe oublié</h2>
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" id="email"
                                                   placeholder="Enter Your Email" required="" onChange={(e) => {
													this.setState({ email: e.target.value });
												}}/>
                                                   <label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
												}}
											>
												{this.state.error.emailErr}
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