import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {



   //state = { isSignedIn: null };

    componentDidMount() {
        
        window.gapi.load('client:auth2',() => {

            window.gapi.client.init({

                clientId: '1029391352990-f1cigc03vnjs7nogddnh7buinc7vb15a.apps.googleusercontent.com',
                scope: 'email'
            
            }).then(() => {



                this.auth = window.gapi.auth2.getAuthInstance();
               
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);


            });
        });
    }
    
    onAuthChange = (isSignedIn) => {
      

        if (isSignedIn) {
            this.props.signIn();
            console.log('if');
       }
        else {
            this.props.signOut();
            console.log('else');
       }
    }
    onSignOutClick = () => {
        this.auth.signOut();
        
        
    }
    onSignInClick = () => {
        this.auth.signIn();
      
    }

  renderAuthButton = () => {

        if (this.props.isSignedIn === null) {
            return null;
        }
        else if (this.props.isSignedIn) {
            
            return <button className="ui google red button" onClick={this.onSignOutClick}>
                <i className="google icon"  />
                SignOut</button>
        }
        else {
            return <button className="ui google green button" onClick={this.onSignInClick}>
                <i className="google icon" />
                SignIn
                </button>
            
        }

    }





    render() {

        return <div><this.renderAuthButton/></div>;
    }
}



const mapStateToProps = (state) => {
   

   return { isSignedIn: state.auth.isSignedIn };
}




export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);