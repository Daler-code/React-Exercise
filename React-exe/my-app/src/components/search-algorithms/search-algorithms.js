const googleDatabase = [
  'cats.com',
  'souprecepies.com',
  'flowers.com',
  'animals.com',
  'catpicctures.com',
  'myfavouritecats.com'
];


const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('cats', googleDatabase));

module.exports = googleSearch;