import React, { Component } from 'react';
import Nav from '../Nav';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
// import { post } from '../../../../server/server';

require('./newPost.css');

export default class NewPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            textContent: "",
            definitionsUsed: "",
            tags: ""
        }
    }

    sendPost = postData => {
        axios.post("/apis/posts/new", {
            title: postData.title,
            textContent: postData.textContent,
            definitionsUsed: postData.definitionsUsed,
            tags: postData.tags
        }).then(function (data){
            console.log("here's your data ya filthy animal", data.data);
            if (data.data.success){
                console.log("yeet my dude")
            }
        }.bind(this)).catch(function (err){
            console.log(err)
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const title = this.state.title;
        const textContent = this.state.textContent;
        const definitionsUsed = this.state.definitionsUsed;
        const tags = this.state.tags;

        let postData = {
            title: title,
            textContent: textContent,
            definitionsUsed: definitionsUsed,
            tags: tags
        };

        if (!postData.title || !postData.textContent){
            return alert("It seems you have left either the title or content blank")
        }
        this.sendPost(postData);
        this.setState({
            title: "",
            textContent: "",
            definitionsUsed: "",
            tags: ""
        })

    }
    handleFormChange = event => {
        const title = this.refs.title.value;
        const textContent = this.refs.postText.value;
        const definitionsUsed = this.refs.definition.value;
        const tags = this.refs.tags.value;

        this.setState({
            'title': title,
            'textContent': textContent,
            'definitionsUsed': definitionsUsed,
            'tags': tags
        })
    }

    render(){
        return(
            <div>
			<Nav
				authenticated={this.props.authenticated}
				authenticate={this.props.authenticate}
				deAuthenticate={this.props.deAuthenticate}
				logout={this.props.logout}
			/>
            			<div id="registration-container" className="container-fluid">
				<section className="container">
					<div className="container-page">
						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className="col-md-6">
								<h3 className="dark-grey">New Post</h3>

								<div id="title-form" ref="titleForm" className="form-group col-lg-12">
									<label>Title</label>
									<input type="" name="" ref="title" className="form-control" id="title-input" value={this.state.title} onChange={this.handleFormChange} />
									<small id="title-feedback" ref="titleFeedback" className=""></small>
								</div>

								<div id="postText-form" className="form-group col-lg-12" ref="postTextForm">
									<label>Post Text</label>
									<input type="" name="" ref="postText" className="form-control" id="postText-input" value={this.state.textContent} onChange={this.handleFormChange} />
									<small id="postText-feedback" ref="postTextFeedback" className=""></small>
								</div>

								<div id="definition-form" className="form-group col-lg-12" ref="definitionForm">
									<label>Specific Definitions Used</label>
									<input type="" name="" ref="definition" className="form-control" id="definition-input" value={this.state.definitionsUsed} onChange={this.handleFormChange} />
									<small id="definition-feedback" className="" ref="definitionFeedback"></small>
								</div>

								<div id="tags-form" className="form-group col-lg-12" ref="tagsForm">
									<label>Tags</label>
									<input type="" name="" ref="tags" className="form-control" id="tags-input" value={this.state.tags} onChange={this.handleFormChange} />

									<p id="email-feedback" className="" ref="emailFeedback"></p>
									<small id="tags-feedback" ref="tagsFeedback" className="form-text text-muted"></small>
								</div>

                                <div className="col-md-6">
								    <button type="submit" className="btn btn-primary signup">Post</button>
							    </div>


							</div>
                    </form>
                    </div>
                    </section>
                    </div>
                    </div>
        )
    }
}