import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Header extends Component {

  authButton() {
    // console.log(this.props.authenticated)

    if (this.props.authenticated) {
      // show a link to sign out
      return (
        [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>,
        ]
      );
    }
    return (
    [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/login">Log In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Register</Link>
      </li>,
    ]
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Home</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/snippets/add">Add Snippet</Link>
          </li>

          {this.authButton()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, actions)(Header);
