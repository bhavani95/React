import React from 'react';
import User from './userCreate';
import LanguageContext from '../context/LanguageContext';
import colorContext from '../context/colorContext';




class App extends React.Component {

    state = { lang: 'English', color:'red' };

    onLangchange = (lang,color) => {

        this.setState({ lang,color });

    };

    render() {
        return (
            <div className="ui container">
                <div>
                Select Language:
            <i className="flag us" onClick={()=>this.onLangchange('English','red')}/>
                <i className="flag in" onClick={()=>this.onLangchange('Hindi','primary')}/>
                   
                </div>
                
                <colorContext.Provider value={this.state.color}>
                    <LanguageContext.Provider value={this.state.lang}>
                        <User />
                    </LanguageContext.Provider>
                    
                    </colorContext.Provider>
             
                
                </div>
        );
    }
}


export default App;