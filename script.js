const siteDatabase = [
    'cats.com',
    'catsfood.com',
    'pets.com',
    'catspics.com',
    'dogs.com'
];

// Write code that can inject data, in this case the database, it becomes more reusable
const googleSearch = (siteDatabase, searchInput) => {
    const matches = siteDatabase.filter(website => {
        return website.includes(searchInput);
    })

    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// Common js exports syntax
module.exports = googleSearch;