import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    state = {
        posts: []
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                res => {
                    this.setState({
                        posts: res.data.slice(0, 10)
                    });
                }
            )
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div key={post.id} className="card">
                        <div className="card-content">
                            <span className="card-title">
                                {post.title}
                            </span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )

            })
        ) : (
            <div className="center">
                No Data to show
            </div>
        )

        return (
            <div>
                <div className="container">
                    <h4 className="center">Home</h4>
                    {postList}
                </div>
            </div>
        );
    }

};

export default Home;