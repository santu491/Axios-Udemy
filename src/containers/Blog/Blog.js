import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios'
import axios from '../../axios'
class Blog extends Component {
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
        let post = <p style={{textAlign:"center"}}>Something went wrong...!</p>
        if (!this.state.error) {
            post = this.state.post.map((data) => {
                return <Post key={data.id} title={data.title} author={data.author} clicked={() => this.postClicked(data.id)} />
            })
        }

        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;