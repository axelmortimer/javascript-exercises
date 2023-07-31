const getTheTitles = function(books) {
   let bookTitles = [];
   books.forEach((item) => bookTitles.push(item.title));
   return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
