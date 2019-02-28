import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component {

    componentDidMount() {

        this.props.fetchStreams();
    }

    renderAdmin(stream) {

        if (stream.userId === this.props.currentUserId) {

            return <div className="ui right floated content">
                <button className="ui button primary">Edit</button>
                <button className="ui button negative">Delete</button>

            </div>
        }



}
    renderList() {

        console.log(this.props.streams);

        return this.props.streams.map(stream => {

            return (

                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                    </div>
                    <div className="description">
                        {stream.description}
                    </div>

                   

                </div>


            );
        })
    }
    render() {

        return (

            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>

            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);