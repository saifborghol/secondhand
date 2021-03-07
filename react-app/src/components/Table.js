import React, { Component } from "react";
import axios from "axios";
import "../styles/table.css";

export default class Table extends Component {
  state = {
    Users: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    axios.get("http://localhost:4000/user/getAll").then((res) => {
      this.setState({ Users: res.data.data });
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr className="table100-head">
              <th className="column1">Name</th>
              <th className="column2">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Users.map((user) => {
              return (
                <tr>
                  <td className="column1">{user.name}</td>
                  <td className="column2">{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
