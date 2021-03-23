import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listUser';
import Datatable from '../common/datatable'
import UserController from '../../services/controllers/UserController'



export class List_user extends Component {
    constructor() {
		super();
		this.state = {
			Users: [],
		};
		this.UserController = new UserController();
	}

    componentDidMount() {
		this.getAllUsers();
	}

	nextPath(path) {
		this.props.history.push(path);
	}

	updateUser(id) {
		console.log('id: ', id);
		localStorage.setItem('idUser', id);
		window.location.href = '/user/updateUser';
	}

	deleteUser(id) {
		console.log('id: ', id);
		this.UserController.deleteUser(id).then(res => {
			console.log('resDeleteUser', res);
			this.getAllUsers();
		});
	}

    getAllUsers() {
		this.UserController.getAllUser().then(res => {
			this.setState({ Users: res.data.data });
		});
	}

    render() {
        return (
            <Fragment>
                <Breadcrumb title="User List" parent="Users" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>User Details</h5>
                        </div>
                        <div className="card-body">
                            <div className="btn-popup pull-right">
                                <Link to="/users/create-user" className="btn btn-secondary">Create User</Link>
                            </div>
                            <div className="clearfix"></div>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                             
                                <Datatable
                                    multiSelectOption={true}
                                    myData={data}
                                    pageSize={10}
                                    pagination={true}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default List_user
