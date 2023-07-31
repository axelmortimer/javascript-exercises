const findTheOldest = function(people) {

   const CURRENT_YEAR = (new Date()).getFullYear();

   return people.reduce((oldest, person) => {
      let oldestAge = !oldest.yearOfDeath ? CURRENT_YEAR - oldest.yearOfBirth : oldest.yearOfDeath - oldest.yearOfBirth;
      let thisAge = !person.yearOfDeath ? CURRENT_YEAR - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
      if (thisAge > oldestAge) {
         return person;
      } else {
         return oldest;
      }
   }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
