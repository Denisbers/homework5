let number = prompt('enter a two-digit number');
let secondDigit = number % 10;
let firstDigit = (number - secondDigit) / 10;

if (secondDigit > firstDigit) {
    console.log('second digit more then first digit')
} else if (secondDigit < firstDigit) {
    console.log('first digit more then second digit')
} else {
    console.log('numbers are equal')
}