const sumAll = function(a, b) {
   let sum = 0;
   if ((typeof a == 'number' && a >= 0) && (typeof b == 'number' && b >= 0)) {
      let first = a < b ? a : b;
      let last = a < b ? b : a;
      for (let i = first; i <= last; i++) {
         sum += i;
      }
   } else {
      return 'ERROR'
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
