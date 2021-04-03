import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('./main.css');

export default class Main extends Component {


    render() {
        return (
            <div id="firstdiv">
                <h1>
                    <a href="/posts">DSCS</a>
                </h1>

                <div>
                <Link to={'/login'}> <p>Login</p>
                </Link></div>
            </div>

        )
    }

}