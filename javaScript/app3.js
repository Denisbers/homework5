let firstDigit = prompt('Enter digit #1');
let secondDigit = prompt('Enter digit #2');


console.log(firstDigit % secondDigit === 0 ? secondDigit + ' is the divisor of ' + firstDigit : secondDigit + ' is not divisor of ' + firstDigit)
console.log(secondDigit % firstDigit === 0 ? firstDigit + ' is the divisor of ' + secondDigit : firstDigit + ' is not divisor of ' + secondDigit)
