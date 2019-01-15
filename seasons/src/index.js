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

    constructor(props) {

        super(props);

        this.state = { lat: null, errorMessage : '' };

        window.navigator.geolocation.getCurrentPosition(

            (position) => {
                //we called setState!!!
                this.setState({
                    lat: position.coords.latitude
                })
            },
            
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }

        );


    }

    //React Says we have to define render

    render() {

        return (<div>Latitude:{this.state.lat} 
            
            <br />
                ErrorMessage: {this.state.errorMessage}</div >);

    }
}

ReactDOM.render(<App />, document.querySelector("#root"));