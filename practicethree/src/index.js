import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comp from './Comp';
import Card from './approvalCard';
const App = () => {
    return (
       
            <div className="ui container comments">
                <Card>
                    <Comp auth="Bhavani" time="Today at 01:00 PM" Comment="Excellent!" avatar={faker.image.avatar()} />
                </Card>

                <Card>
                
                    <Comp auth="Supraja" time="Today at 10:00 PM" Comment="Good Examples" avatar={faker.image.avatar()} />
                </Card>
                <Card>
                <Comp auth="Vijay" time="Today at 09:00 AM" Comment="Good Blog!" avatar={faker.image.avatar()}/>

                </Card>

    
        </div>



        );
};

ReactDOM.render(<App />, document.querySelector('#root'))