import React, { Component } from 'react';
import withRouter from "../other/withRouter";

class Post extends Component {
    state = {
        id: null
    }

    componentDidMount() {
        
        // console.log(this.props.params.post_id);
        var id = this.props.params.post_id;

        this.setState({
            id:id
        });
    }
    
    render() {
        return (
            <div className='container'>
                <h4>{this.state.id}</h4>
            </div>
        );
    }
}

export default withRouter(Post);