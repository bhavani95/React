import React from 'react';
import Comp from './approvalCard';
import faker from 'faker';


const ApprovalCard = (Props) => {

    return (
       

        <div className="ui cards">
            <div className="content">{Props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
            


            </div>
        
    );


};

export default ApprovalCard;