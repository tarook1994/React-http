import React, { Component } from 'react';
import Axios from 'axios'

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost : null
    }

    componentWillMount() {
        console.log(this.props.match.params.id)
        if (this.props.match.params.id) {
            if(!this.state.loadedPost || (this.state.loadedPost.id !== this.props.match.params.id))
            Axios.get('/posts/' + this.props.match.params.id).then(response => {
                console.log(response)
                this.setState({
                    loadedPost: response.data
                })
            })
        }

    }
    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id&& this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;