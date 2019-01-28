import React from 'react';
import ReactDOM from 'react-dom';

//create class component

class App extends React.Component {


    state = { text: '', pwd: '' };

    onSubmit = (event) => {

        event.preventDefault();

        alert(`Hi ${this.state.text} your password is ${this.state.pwd}`);



        //console.log(`user name is ${this.state.text} pwd is ${this.state.pwd}`);
    }



    render() {

        return (

            <div className="ui segment ">

                <form className="field">

                    <h1><center>Login Page</center></h1>
                    <br /> 

                    User Name:
                <input type="text" value={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }} /><br />

                    Password  :<input type="password" value={this.state.pwd} onChange={(e) => { this.setState({ pwd: e.target.value }) }} />  <br />

                    <input type="submit" value={this.state.text} onClick={this.onSubmit} value="Submit" />  
    
                       
                    </form>


            </div>
            
            )
    }



    

}


//render
ReactDOM.render(<App />, document.querySelector("#root"));