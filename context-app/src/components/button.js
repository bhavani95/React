import React from 'react';
import LanguageContext from '../context/LanguageContext';
import colorContext from '../context/colorContext';


class Button extends React.Component {

    //static contextType = LanguageContext;


    render() { return (< div >

            
        <colorContext.Consumer>
            {(color) =>
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {(value) => value === 'English' ? 'Submit' : 'Jama Karen'}
                    </LanguageContext.Consumer>

                </button>

            }
            
        </colorContext.Consumer>
        
        </div >);
    };

}

export default Button;