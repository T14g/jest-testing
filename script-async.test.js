const axios = require('axios');
const { getPeople, getPeoplePromise } = require('./script-async');

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

describe('getPeoplePromise test', () => {
    it('getPeople return count and results', async () => {

        const mockFetch = jest.fn()
            .mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 97,
                    results: [1, 2, 3, 4, 5, 6, 7, 1]
                })
            }));

        return getPeoplePromise(mockFetch).then(data => {
            expect(data.count).toEqual(97);
            expect(data.results.length).toBeGreaterThan(5);
        })

    })
})

