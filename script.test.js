// Make it fail first then make it work

const googleSearch = require('./script');

// This dont need to be real data
const dbMock = [
    'dog.com',
    'cheese.com',
    'disney.com',
    'mickeydisney.com'
]

// A group of tests that are similar
describe('googleSearch', () => {
    it('is searching google', () => {
        expect(googleSearch(dbMock, 'testetest')).toEqual([])
        expect(googleSearch(dbMock, 'disney')).toEqual(['disney.com', 'mickeydisney.com'])
    })

    it('to work with undefined and null input', () => {
        expect(googleSearch(dbMock, undefined)).toEqual([])
        expect(googleSearch(dbMock, null)).toEqual([])
    })

    it('it should not return more than 3 matches', () => {
        expect(googleSearch(dbMock, '.com').length).toEqual(3)
    })
})
 