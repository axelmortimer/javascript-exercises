const repeatString = function(string, repeat) {
   if (repeat >= 0) {
      let newString = '';
      for (let i = 0; i < repeat; i++) {
         newString = newString + string;
      }
      return newString;
   } else {
      return 'ERROR';
   }
};

// Do not edit below this line
module.exports = repeatString;
