import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUser } from '../actions';
import Author from './author';

class PostList extends React.Component {
    componentDidMount() {

        this.props.fetchPostsAndUser();


    }

    renderList() {

        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="massive middle aligned circle user icon" />

                    <div className="content" >
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div ><b>By<i><Author id={post.userId} /></i></b></div>
                    </div>
                    

                </div>
            );
        });
    }

    render() {

        return (<div className="ui relaxed divided list">{this.renderList()}</div>);
    }


}

const mapStateToProps = (state) => {

    return { posts: state.post };
};

export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);