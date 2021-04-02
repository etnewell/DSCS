import React, { Component } from 'react';
import Nav from './children/Nav';


export default class Posts extends Component {
    render () {
      return (
        <div>
                <Nav
                authenticated={this.props.authenticated}
                authenticate={this.props.authenticate}
                deAuthenticate={this.props.deAuthenticate}
                logout={this.props.logout}
                />
                <div>

                <div class="card" >
                     <div class="card-body">
                     <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="card-link">Card link</a>
                     <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
        </div>
        );
    }
};