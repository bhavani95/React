import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class Author extends React.Component {

    componentDidMount() {

        this.props.fetchUser(this.props.id);
       
    }
    render() {

        const AuthorName = this.props.auth.find(user => user.id === this.props.id);
        return <div>{AuthorName&&AuthorName.name}</div>;
    }
}

const mapStateToProps = (state) => {

    //console.log('state', state);
    return { auth : state.auth };

}

export default connect(mapStateToProps, { fetchUser })(Author);