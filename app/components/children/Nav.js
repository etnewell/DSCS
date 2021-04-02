import React, { Component } from 'react'
import { Link } from 'react-router-dom';

require('./Nav.css')

export default class Nav extends Component {
    render () {
        return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DSCS</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/posts">Home</a>
        </li>
        {this.props.authenticated ? (
        <li class="nav-item">
        <a class="nav-link" href="#" onClick={this.props.logout}>Logout</a>
      </li>
        ) : (
            <li class="nav-item">
            <Link to={'/login'}><div class="nav-link">Login</div></Link>
          </li>
        )}


      </ul>

    </div>
  </div>
</nav>
        )
    }
}