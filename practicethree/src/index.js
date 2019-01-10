import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
<div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src="img.jpg" height='30' width='30' />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Bhavani
                    </a>
                    <div className="metadata">
                        <span className="date"> Todat at 11:43PM</span>
                    </div>
                    <div>

                        <div className="text">Excellent!</div>
                    </div>
                </div>

                </div>
            </div>

   

    <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src="https://www.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1069697.htm" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Prabha
                    </a>
                <div className="metadata">
                    <span className="date"> Todat at 11:55PM</span>
                </div>
                <div>

                    <div className="text">Amazing!</div>
                </div>
            </div>

        </div>
    </div>

       

<div className="ui container comments">
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src="https://www.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1069697.htm" />
        </a>
        <div className="content">
            <a href="/" className="author">
                Ram
                    </a>
            <div className="metadata">
                <span className="date"> Todat at 12:32PM</span>
            </div>
            <div>

                <div className="text">Nice Blog Post!</div>
            </div>
        </div>

    </div>
        </div>

        </div>

        );
};

ReactDOM.render(<App />, document.querySelector('#root'))