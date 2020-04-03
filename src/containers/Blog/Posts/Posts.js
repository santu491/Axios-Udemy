import React, { Component } from 'react';

import Post from '../../../components/Post/Post';


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
        this.setState({ selectedId: id })
    }

    render() {
        console.log("post",this.props)
        let post = <p style={{textAlign:"center"}}>Something went wrong...!</p>
        if (!this.state.error) {
            post = this.state.post.map((data) => {
                return <Post key={data.id} title={data.title} author={data.author} clicked={() => this.postClicked(data.id)} />
            })
        }

        return (

                <section className="Posts">
                    {post}
                </section>
        );
    }
}

export default Posts;