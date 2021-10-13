const axios = require('axios');

// D.I via props
const getPeople = axios => {

    return axios.get('https://swapi.dev/api/people')
        .then(response => {
            return {
                count: response.data.count,
                results: response.data.results
            }
        }).catch((error) => {
            console.log(error);
        })

}
 
module.exports = getPeople;