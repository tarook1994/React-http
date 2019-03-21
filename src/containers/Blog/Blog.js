import React, { Component } from 'react';
import Axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import { maxHeaderSize } from 'http';

class Blog extends Component {
    state = {
        posts : [],
        showPost : null
    }

    componentWillMount(){
        Axios.get("https://jsonplaceholder.typicode.com/posts").
        then(response => {
            console.log(response.status)
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'max'
                }
            })
            this.setState({
                posts:updatedPosts

            })
        })
    }

    postClickedHandler = (id) => {
        this.setState({
            showPost : id
        })
    }


    render () {

        const posts = this.state.posts.map(post=> {
            return <Post 
            key = {post.id}
            title = {post.title}
            author = {post.author}
            clicked = {()=> this.postClickedHandler(post.id)}
            />
        });
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.showPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;