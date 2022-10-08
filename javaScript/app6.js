let number = prompt('enter a three-digit number');
let thirdDigit = number % 10;
let secondDigit = (number - thirdDigit) / 10 % 10;
let secondTwoDigit = number % 100;
let firstDigit = (number - secondTwoDigit) / 100;

console.log(number)
console.log((firstDigit + secondDigit + thirdDigit) % 2 === 0 ? 'sum of numbers is even' : 'sum of numbers is not even');
console.log((firstDigit + secondDigit + thirdDigit) % 5 === 0 ? 'sum of the numbers is a multiple of 5' : 'sum of the numbers is notmultiple of 5');
console.log((firstDigit * secondDigit * thirdDigit) > 100 ? 'product of numbers bigger than 100' : 'product of numbers not bigger than 100');