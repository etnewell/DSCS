import React, { Component } from 'react';
import Nav from './children/Nav';
import axios from 'axios';

require('./posts.css')
export default class Posts extends Component {

    constructor(props){
        super(props);

    };
    state = {
        posts:[]
    };
    
    componentDidMount(){
        axios.get("/apis/posts/").then((data) => {
            // const posts = response.data.map(obj => obj.data);
            console.log(data.data)
            this.setState({ posts: data.data })
            console.log(this.state.posts)})
 
    };


    render () {
        if(this.state.posts.length > 0){
            return (
                <div>
                        <Nav
                        authenticated={this.props.authenticated}
                        authenticate={this.props.authenticate}
                        deAuthenticate={this.props.deAuthenticate}
                        logout={this.props.logout}
                        />
                        <div id="cardBox">
                        {this.state.posts.map((post) => (
                        <div class="card" key={post._id}>
                             <div class="card-body">
                             <h5 class="card-title">{post.title}</h5>
                            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                             <p class="card-text">{post.textContent}</p>
         
                        </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                );
        }
        else {
            return(
                <div>
                     <Nav
                        authenticated={this.props.authenticated}
                        authenticate={this.props.authenticate}
                        deAuthenticate={this.props.deAuthenticate}
                        logout={this.props.logout}
                        />
                </div>
            )

        }


    }

};