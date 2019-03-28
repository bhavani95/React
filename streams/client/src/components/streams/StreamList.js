import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component {

    componentDidMount() {

        this.props.fetchStreams();
    }

    renderCreate() {

        if (this.props.isSignedIn) {

            return (
              
                <div>
                    <Link to="/streams/create" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
                
                
                );

        }


    }

    renderAdmin(stream) {

        if (stream.userId === this.props.currentUserId) {

            return <div className="ui right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary" >
                    Edit
                    </Link>
                
                <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                    Delete
                    </Link>

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
                        <Link to={`streams/show/${stream.id}`} className="Header">
                            {stream.title}
                            </Link>
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
                <div className="ui right floated content">{this.renderCreate()}</div>

            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);