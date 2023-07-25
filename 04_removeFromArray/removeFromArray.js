const removeFromArray = function(userArray) {
   let newArray = userArray;
   for (let i = 0; i < arguments.length; i++) {
      newArray = newArray.filter(word => word !== arguments[i]);
   }
   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
