const axios = require('axios');
const fetch = require('node-fetch');

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

const getPeoplePromise = async (fetch) => {
    return getRequest = await fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}

module.exports = { getPeople, getPeoplePromise };