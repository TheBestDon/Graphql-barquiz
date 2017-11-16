import React, { Component } from "react";
import { Link } from "react-router";


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link to="/seasons/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
