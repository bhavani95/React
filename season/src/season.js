import React from 'react';
import './seasonDisplay.css';

/*const seasonConfig = {

    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'

    },

    winter: {
        text: 'Burr its cold',
        iconName: 'snowflake'

    }
}; */


const getSeason = (lat, month) =>{

    if (month > 2 && month < 9) {

        return lat > 0 ? 'Winter' : 'Summer';

    }else {
        return lat > 0 ? 'Summer' : 'Winter';
    }
} 

const Seasons = (props) => {


    //console.log(props.lat);

    const season = getSeason(props.lat, new Date().getMonth());

    const text = season === "Winter" ? "Burr it's cold" : "Lets hit the beach";
    const iconName = season === "Winter" ? "snowflake" : "sun";


    console.log(season);
    return (<div className={`Seasons ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1> {text} </h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>);

   

}




export default Seasons;