console.clear()
let a = 100; //let key word is used to define a variable. previous `var` keyword was used
b = 22; //dynamically typed variable definition

/*Types of variables
Following are primitive data types
1) String
2) Number
3) Boolean
4) Null
5) undefined
*/

const c = 200; // const keyword is used to define constant variables. They cannot be modified once defined
//c = 300; //will be invalid and will be caught during run time only

let str = "Hello JavaScript"; //String assingment
typ = typeof(str) // `typeof keyword returns the data type of the variable
console.log(typ)

str = str + "\nI am new to application\n" //string concatenation
console.log(str)

let num1 = 100 // number assignment
console.log(typeof(num1))
console.log(num1+2) // number increment

let num2 = 13.44 // There is no float or int in java script, everything is number data type
console.log(typeof(num2))
console.log(num2+2) // number increment



let userIsActive = true //boolean assignment, valid values are `true` and `false`
console.log(typeof(userIsActive))
console.log(userIsActive+2) // boolean manipulation, true = 1 , false = 0; Output = 3


let var_null = null // `null` data type assignment
console.log(typeof(var_null))
console.log(var_null) 
console.log(var_null + 5) // prints `5` as a number
console.log(var_null + '5') // prints `null5` as a string

let undef = undefined // `undefined` data type assinment
console.log(undef)
console.log(undef + 5) //prints `NaN`
console.log(undef + `5`) // prints `undefined5` as a string



/*Types of variables
Following are reference data types
1) Objects
2) Arrays
3) Functions
*/

let obj = {} // define an undefined object
obj = { //assignment of object
    "First_Name": "Kartik sagar", //properties of object
    "Last_Name": "Gouti",
    "Age": 37,
    employer: "Cognizant"
}
console.log(obj) // print entire object
/* Accessing property values is done in two ways
1) dot notation // widely used
2) bracket notation //not popular, something similar to python dict
*/
fname = obj.First_Name // fetch property using dot notation
obj['Last_name'] = "Goti" // update property using bracket notation
obj.Age = 45 // update property using dot notation
console.log(fname + ' ' + obj.Last_name + " " + obj.Age)


/*
Arrays are also objects
Arrays are list of objects
Arrays can store any type of variables
index start from 1
*/
let language = []; //defining an empty array
language = ['java','python'] // assigning values
console.log(language)
console.log(language.length) // prints length of array
console.log(language[1]) //print the second element
language[2] = "Java script" // add third element
console.log(language)
console.log(language[4]) // returns undefined

/*
functions
*/

function add(num1, num2) {
    console.log(num1 + " + " + num2 + " = ")
    return num1 + num2
}

sum = add(10, 45)
console.log(sum) // returns 45
console.log(add()) //returns NaN as it treats undefined + undefined
console.log(add(a,45)) // returns 145 i.e picks the numeric value of a and adds 45
console.log(add(45)) // returns NaN only, as the second paramter is undefined