
let firstDigit = parseInt(prompt('Enter digit #1'));
let secondDigit = parseInt(prompt('Enter digit #2'));
if (firstDigit > secondDigit) {
    console.log(firstDigit + ' bigger ' + secondDigit)
} else if (firstDigit < secondDigit) {
    console.log(secondDigit + ' bigger ' + firstDigit)
} else {
    console.log(firstDigit + ' equals ' + secondDigit)
}