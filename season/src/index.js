import React from 'react';
import ReactDOM from 'react-dom';
import Season from './season';
import Spinner from './Spinner';



/*const APP = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>Latitude</div>
}*/


class App extends React.Component {

    state = { lat: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(

            

            position => this.setState({ lat: position.coords.latitude }),

            err => this.setState({ errorMessage: err.message })

        );
    }


    componentDidUpdate() {

        console.log('My component was just Updated and rerendered!');
    }

    renderContent() {

        if (this.state.errorMessage && !this.state.render) {
            return (
                <div className={`error`}> <h1>Error :{this.state.errorMessage}</h1></div>
            );

        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <Season lat={this.state.lat} />
            );
        }


        return <div>
            <Spinner message="Please accept the location request" />
        </div>


    }


    //React Says we have to define render


    

    render() {


        return <div class="redBorder"> {this.renderContent()}</div>

       

    }
}



ReactDOM.render(<App />, document.querySelector("#root"));