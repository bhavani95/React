import React from 'react';
import ReactDOM from 'react-dom';



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

            position => this.setState({lat: position.coords.latitude}) ,

            err => this.setState({errorMessage: err.message})
            );
}


    componentDidUpdate() {

        console.log('My component was just Updated and rerendered!');
    }


    //React Says we have to define render

    render() {

        if (this.state.errorMessage && !this.state.render) {
            return <div> Error :{this.state.errorMessage}</div>

        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div> Latitude : {this.state.lat}</div>
        }

        return <div>Loading!! </div>

    }
}

ReactDOM.render(<App />, document.querySelector("#root"));