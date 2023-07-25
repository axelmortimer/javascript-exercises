const reverseString = function(string) {
   let newString = '';
   for (let i = 1; i <= string.length; i++) {
      let letter = string.charAt(string.length - i);
      newString += letter;
   }
   return newString;
};

// Do not edit below this line
module.exports = reverseString;
