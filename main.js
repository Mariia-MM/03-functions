//function1
// function getMaxDigit(number) {
//   numS = String(number);
//   console.log(numS);

//   let n = Math.max(...numS);
//   return n;
// }
// console.log(getMaxDigit(6512975632189));

//end

//function#2

// function getNumberDegree(number, degree) {
//   for (let i = 0; i <= degree; i++) {
//     number = number * number;
//     i++;
//   }
//   return number;
// }
// console.log(getNumberDegree(2, 3));
//end

//function#3

// function getFormatName(name) {
//   name = name.toLowerCase(name);
//   let name1 = name.slice(0, 1).toUpperCase();
//   name = name.slice(1, name.length);

//   return name1 + name;
// }
// console.log(getFormatName(`pEteR`));

//end

//function4
// function getClearSalary(salary) {
//   clearS = salary - (salary / 100) * 19.5;
//   return clearS;
// }
// console.log(getClearSalary(3500));
// //arrow function4
// const clearSalary = (salary) => {
//   clearS = salary - (salary / 100) * 19.5;
//   return clearS;
// };
// console.log(clearSalary(1000));
//end

//function5

// function getRandomNumber(fromN, toM) {
//   randomN = Math.trunc(Math.random() * toM + fromN);
//   return randomN;
// }
// console.log(getRandomNumber(1, 10));

// //arrow function5
// const getRandomNumberAr = (from, to) => {
//   randomNAr = Math.trunc(Math.random() * to + from);
//   return randomNAr;
// };
// console.log(getRandomNumberAr(1, 10));

//end

//function#6

// function countThisLetter(letter, word) {
//   let count = 0;
//   word = word.split(``);
//   for (i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count = count + 1;
//     } else {
//       count;
//     }
//   }
//   return count;
// }
// console.log(countThisLetter(`e`, `pineapple`));
// //end

//function#7
// function convertMoney(cashForConvert) {
//   cashForConvert = String(cashForConvert);
//   if (cashForConvert.endsWith(`$`)) {
//     nCash = parseInt(cashForConvert) * 25;
//     return nCash + `UAH`;
//   } else if (cashForConvert.toUpperCase().endsWith(`UAH`)) {
//     nCash = parseInt(cashForConvert) / 25;
//     return nCash + `$`;
//   } else {
//     console.log(`Currency is entered wrong`);
//   }
// }
// console.log(convertMoney(`3500uaH`));
// //end

//function#8
// function getPassWord(length, lengthD = 8) {
//   pWord = Math.trunc(Math.random() * Math.pow(10, length));
//   return pWord;
// }
// console.log(getPassWord((lengthD = 8)));
// //end


//function#9
function 
