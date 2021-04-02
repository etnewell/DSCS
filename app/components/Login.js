import React, { Component } from 'react';
import Nav from './children/Nav';

export default class Login extends Component {
    render (){
        return (
            <div>
                <Nav
                 authenticated={this.props.authenticated}
                 authenticate={this.props.authenticate}
                 deAuthenticate={this.props.deAuthenticate}
                 logout={this.props.logout}
                            />  
                <div>This is the login page</div>
                
            </div>
        )
    }
}