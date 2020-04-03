import React, { Component } from 'react';

import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import './Blog.css';
// import axios from 'axios'
import axios from '../../axios'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import NewPost from './NewPost/NewPost';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // post: [],
            // selectedId: null,
            // error: false
            auth: false
        }
    }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => {
    //             let post = response.data.slice(0, 4)
    //             let updatedPost = post.map((data) => {
    //                 return {
    //                     ...data,
    //                     author: "Santosh"
    //                 }
    //             })
    //             this.setState({ post: updatedPost })
    //         }).catch((e) => {
    //             this.setState({ error: true })
    //         })
    // }
    // postClicked = (id) => {
    //     this.setState({ selectedId: id })
    // }

    render() {
        // let post = <p style={{textAlign:"center"}}>Something went wrong...!</p>
        // if (!this.state.error) {
        //     post = this.state.post.map((data) => {
        //         return <Post key={data.id} title={data.title} author={data.author} clicked={() => this.postClicked(data.id)} />
        //     })
        // }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts"

                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline"

                                }}
                            >
                                posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/New-Post",
                                hash: '#submit',
                                search: "?quick-submit=true"

                            }}
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts/> */}
                {/* <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section> */}


                {/* <Route path='/' exact render={()=><h1>hii</h1>}/> */}
                <Switch>
                    {/* { this.state.auth?<Route path='/posts' exact component={Posts} />:null} */}
                    <Route path='/posts' exact component={Posts} />
                    <Route exact path="/New-Post" component={NewPost} />
                    {/* {this.state.auth ? <Route exact path="/New-Post" component={NewPost} /> : null} */}
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route  render={()=><h1>not found</h1>}/> */}
                </Switch>

            </div>
        );
    }
}

export default Blog;