import React from 'react';
import LanguageContext from '../context/LanguageContext';


class Field extends React.Component {

    //static contextType = LanguageContext;


    render() {
        //const text = this.context ==='English' ? 'Name' : 'Naam';
        return(
            < div >

                <div>
                    <LanguageContext.Consumer>
                        {(value) => value === 'English' ? 'Name:' : 'Naam:'}
                    </LanguageContext.Consumer>

                </div>
            <input type="text"></input>
        </div >);
    };

}

export default Field;