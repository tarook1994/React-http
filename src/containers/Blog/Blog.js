import React, { Component } from 'react';

import Posts from '../Posts/Posts';
import NewPost from './NewPost/NewPost'
import FullPost from '../../containers/Blog/FullPost/FullPost'
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom'

class Blog extends Component {


    render() {


        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to='/'
                                exact
                                activeClassName='active'
                                activeStyle={{
                                    color: 'orange',
                                    textDecoration: 'underlined'
                                }}>Home</NavLink></li>
                            <li><NavLink to='/newpost' exact>New Post</NavLink></li>

                        </ul>
                    </nav>

                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/newpost" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />

                </Switch>



            </div>
        );
    }
}

export default Blog;