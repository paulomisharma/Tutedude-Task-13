let number1 = 5;
let number2 = 10;
const divisor = 2;
const remainder1 = number1 % divisor;
const remainder2 = number2 % divisor;

let result1;
let result2;
 
//**Check weather the number is even or odd */

if (remainder1 === 0) {
    result1 = "Even";
}
else {
    result1 = "Odd"
}

if (remainder2 === 0) {
    result2 = "Even";
}
else {
    result2 = "Odd"
}

console.log(`The number ${number1} is ${result1}.`);
console.log(`The number ${number2} is ${result2}.`);