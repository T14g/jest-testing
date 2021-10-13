const axios = require('axios');
const getPeople = require('./script-async');

describe('getPeople with Axios', () => {

    // Tip: When testing assync always check assertions
    expect.assertions(2);

    // Jest will wait until this code with a promise returns
    it('calls axios to get people', () => {
        return getPeople(axios).then(data => {
            expect(data.count).toEqual(82);
            expect(data.results.length).toBeGreaterThan(5);
        })
    })
})
