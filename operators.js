/*
1) arithmatic
2) logical
3) comparision
4) ternary
5) bit wise
6) truthy & falsy
7) assignment
*/

console.clear()

//assignment
let a = 10;

//arithmatic
let b = 3;
let c = a + b;
let d = a**5; // a to the power of 5 i.e d = 32
let e = a * b //simple multiplication
let f = e / a //division, returns quotient i.e 30 / 10 = 3
let g = e % a // returns reminder i.e 30 % 10 = 0

//comparision
let num1 = 100, num2 = 200
// console.log(num1 > 100) // returns false
// console.log(num1 >= 100 ) // returns true
console.log( 100 >= num1 && 100 < num2) // comparision two different statements
console.log(num1 == 100) // compares only the value on both the sides
console.log(num1 == '100') // compares only the value, even though right hand side is string, output is true

console.log(num1 === 100) // True , compares value and type of variable
console.log(num1 === '100') // False, compares value and type of variable, since right side is string, o/p is false



// ternary operators
// condition ? "Print this for true" : "Else use this for false"
let num3 = 100;
let color = num3 > 200 ? "Gold" : "Silver"
console.log(color) // prints Silver

//Logical operators
// and --> &&
// or --> ||

let highIncome = true
let creditScore = false
console.log(highIncome && creditScore) //false
creditScore = true
console.log(highIncome && creditScore) //True
highIncome = false
console.log(highIncome && creditScore) //false

/*falsy values
Any of the following values represent falsy values
undefined
false
0
null
''
NaN - Not a number
*/
console.log(false || 'Kartik1')  // prints Kartik as `false` represents a falsy value
console.log('' || '\nKartik2')  // prints Kartik as `''` represents a falsy value
console.log(undefined || '\nKartik3')  // prints Kartik as `undefined` represents a falsy value
console.log(0 || '\nKartik4')  // prints Kartik as `0` represents a falsy value
console.log(true || '\nKartik4')  // prints true as `true` represents a truthy value

//Anything other than falsy values are called truthy values

/*Bit wise operators
1 - 00000001
2 - 00000010
| or OR results in 1 if any of the digits place is 1. if both are 0, it returns 0
& or AND results in 1 if both the digits place is 1. If both are 0, it returns 0
*/
console.log(1 | 2) // returns 3
console.log(1 & 2) // returns 0