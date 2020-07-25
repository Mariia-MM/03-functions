//function1;
const getMaxDigit = (number) => {
  numS = String(number);
  console.log(numS);

  let n = Math.max(...numS);
  return n;
};
//console.log(getMaxDigit(6512975632189));

//function#2

const getNumberDegree = (number1, degree) => {
  let number = 1;
  for (let i = 0; i < degree; i++) {
    if (degree !== 0) {
      number = number1 * number;
    } else {
      number = number;
    }
  }
  return number;
};
//console.log(getNumberDegree(2, 6));

//function#3

const getFormatName = (name) => {
  name = name.toLowerCase(name);
  let name1 = name.slice(0, 1).toUpperCase();
  name = name.slice(1, name.length);

  return name1 + name;
};
// console.log(getFormatName(`pEteR`));

//function4
// function getClearSalary(salary) {
//   clearS = salary - (salary / 100) * 19.5;
//   return clearS;
// }
// console.log(getClearSalary(3500));
//arrow function4
const clearSalary = (salary) => {
  clearS = salary - (salary / 100) * 19.5;
  return clearS;
};
// console.log(clearSalary(1000));

//function5

// function getRandomNumber(fromN, toM) {
//  randomN = Math.floor(Math.random() * (toM - fromN) + fromN);
//   return randomN;
// }
// console.log(getRandomNumber(5, 13));

//arrow function5
const getRandomNumberAr = (from, to) => {
  randomNAr = Math.floor(Math.random() * (to - from) + from);
  return randomNAr;
};
//console.log(getRandomNumberAr(8, 34));

//function#6

const countThisLetter = (letter, word) => {
  let count = 0;
  word = word.split(``);
  for (i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count = count + 1;
    } else {
      count;
    }
  }
  return count;
};
// console.log(countThisLetter(`e`, `pineapple`));

//function#7
const convertMoney = (cashForConvert) => {
  cashForConvert = String(cashForConvert);
  if (cashForConvert.endsWith(`$`)) {
    nCash = parseInt(cashForConvert) * 25;
    return nCash + `UAH`;
  } else if (cashForConvert.toUpperCase().endsWith(`UAH`)) {
    nCash = parseInt(cashForConvert) / 25;
    return nCash + `$`;
  } else {
    console.log(`Currency is entered wrong`);
  }
};
// console.log(convertMoney(`3500uaH`));

//function#8
const getPassWord = (length, lengthD) => {
  lengthD = 8;
  if (length) {
    pWord = BigInt(Math.floor(Math.random() * (Math.pow(10, length) - 1) + 1));
  } else {
    pWord = Math.trunc(Math.random() * Math.pow(10, lengthD));
  }

  return pWord.toString();
};
//console.log(getPassWord(50));

//function#9

const delLetters = (letter, word) => {
  let repl = new RegExp(letter, `gi`);

  let wordN = word.replace(repl, ``);

  return wordN;
};
// console.log(delLetters(`a`, `blablalalaoaujayavla`));

//function#10

const isPalyndrom = (sent) => {
  sentN = sent.toLowerCase().replace(/ /g, ``).split(``).reverse().join(``);
  sent = sent.toLowerCase().replace(/ /g, ``);
  console.log(sentN);
  console.log(sent);
  console.log(sentN === sent);
  return sentN === sent;
};
// console.log(isPalyndrom("А роза упала на лапу Азора"));
//end
//document.writeln(`Функція №1: ${myFunc("аргументи, якщо є")}`);

document.writeln(`Функція №1.Отримує будь-яке число та виводить найбільшу цифру в цьому числі: ${getMaxDigit(
  6512975632189
)}<br>
Функція №2.Визначає ступінь числа: ${getNumberDegree(4, 2)}<br>
Функція №3.Форматує ім'я, роблячи першу букву великою: ${getFormatName(
  `pEteR`
)}<br>
Функція №4.Вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%):
 ${clearSalary(1000)}<br>
Функція №5.Повертає випадкове ціле число в діапазоні від N до M:
 ${getRandomNumberAr(1, 10)}<br>
Функція №6:Рахує скільки разів певна буква повторюється в слові ${countThisLetter(
  `e`,
  `pineapple`
)}<br>
Функція №7.Конвертує долари в гривні та навпаки : ${convertMoney(`3500uaH`)}<br>
Функція №8.Генерації випадкового паролю (тільки числа), довжина встановлюється користувачем
або по замовчуванню = 8 символам.: ${getPassWord(60)}<br>
Функція №9.Видаляє всі вказані букви з речення:
 ${delLetters(`a`, `blablalalaoaujayavla`)}<br>
Функція №10.Перевіряє, чи є слово паліндромом. : ${isPalyndrom(
  "А роза упала на лапу Азора"
)}<br>
`);
