import React, { Component } from 'react';
import Axios from 'axios'
import Post from '../../components/Post/Post'
import {Link} from 'react-router-dom';
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        showPost: null
    }


    postClickedHandler = (id) => {
        this.setState({
            showPost: id
        })
    }


    componentWillMount() {
        Axios.get("/posts").
            then(response => {
                console.log(response.status)
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'max'
                    }
                })
                this.setState({
                    posts: updatedPosts

                })
            })
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Link to={'/'+post.id}
                key= {post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postClickedHandler(post.id)}
                    />
                </Link>

            )
        });
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }

}


export default Posts;