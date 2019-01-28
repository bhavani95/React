import Axios from 'axios';


export default Axios.create({


    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID aa84635338386eef07a3cbfcd0c971fddccad48ff1d5372066a7d14131b7e83c'

    }
    



});