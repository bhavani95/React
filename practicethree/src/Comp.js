//import 

import React from 'react';
import ReactDOM from 'react-dom';



//create 
const Comp = (Props) => {

    return (
        
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={Props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {Props.auth}
                    </a>
                <div className="metadata">
                    <span className="date"> {Props.time}</span>
                </div>
                <div>

                    <div className="text">{Props.comment}</div>
                </div>
            </div>

            </div>
       
          
        );
}




//export

export default Comp;