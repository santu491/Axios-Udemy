import React, { Component } from 'react';

import Post from '../../../components/Post/Post';
import { Link,Route } from 'react-router-dom'
import FullPost from './../FullPost/FullPost';


import './Posts.css';
// import axios from 'axios'
import axios from '../../../axios'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            selectedId: null,
            error: false
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let post = response.data.slice(0, 4)
                let updatedPost = post.map((data) => {
                    return {
                        ...data,
                        author: "Santosh"
                    }
                })
                this.setState({ post: updatedPost })
            }).catch((e) => {
                this.setState({ error: true })
            })
    }
    postClicked = (id) => {
        // this.setState({ selectedId: id })
        this.props.history.push({ pathname: '/posts/' + id })
        // this.props.history.push('/posts/'+id)
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Something went wrong...!</p>
        if (!this.state.error) {
            post = this.state.post.map((data) => {
                return (
                    // <Link to={"/post/"+data.id} key={data.id}>
                    <Post title={data.title} key={data.id} author={data.author} clicked={() => this.postClicked(data.id)} />
                    // </Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                {/* <Route path={this.props.match.url+"/:id" }exact component={FullPost} /> */}
                {/* <Route path={"/posts/:id" }exact component={FullPost} /> */}
            </div>
        );
    }
}

export default Posts;