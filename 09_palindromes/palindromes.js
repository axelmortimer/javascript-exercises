const palindromes = function (str) {

   let letters = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   
   let forwards = letters;
   let backwards = letters.split('').reverse().join('');

   console.log(letters);

   return forwards === backwards;

   // let letters = Array.from(str);
   // letters.forEach((item, index) => {
   //    if (!(/[a-zA-Z]/).test(item)) {
   //       letters.splice(index, 1);
   //    } else {
   //       letters[index] = letters[index].toLowerCase();
   //    }
   // });
   // console.log(letters);
   // let forwards = letters.join('');
   // let backwards = letters.reverse().join('');
   // if (forwards === backwards) {
   //    return true;
   // } else {
   //    return false;
   // }

};

// Do not edit below this line
module.exports = palindromes;
