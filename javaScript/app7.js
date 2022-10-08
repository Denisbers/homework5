let number = prompt('enter a three-digit number');
let thirdDigit = number % 10;
let secondDigit = (number - thirdDigit) / 10 % 10;
let secondTwoDigit = number % 100;
let firstDigit = (number - secondTwoDigit) / 100;

console.log((firstDigit === secondDigit && secondDigit === thirdDigit && firstDigit === thirdDigit) ? 'digits are equal' : 'digits are  not equal')

if (firstDigit === secondDigit) {
    console.log('first and second digits are equal')
} else if (firstDigit === thirdDigit) {
    console.log('first and third digits are equal')
} else if (secondDigit === thirdDigit) {
    console.log('second and third digits are equal')
}
