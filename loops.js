/*
1) For
2) While
3) do-While
4) for-in
5) for-of
6) infinite loop ... lol

BREAK statement is used to break from the loop
CONTINUE statement is used to continue the loop
*/
console.clear()

for(i=0;i<10;i++) {
    console.log("Hello " + (i+1))
}
let j = 0
while(j<=10) {
    console.log("Printing: " + j)
    j++
}

let k = 1 //Do while executes the loop atleast once.
do {
    console.log("Printing Do While: " + k)
    k++
} while (k <= 10)

// for-in loop is used to iterate over objects

biodata = {
    name: "Kartik",
    age: 25,
    gender: "Male",
    weight: 72
}

for( let key in biodata) {
    console.log("Key: " + key + ", Value: " + biodata[key])
    /*Remember to fetch the values using bracket notation instead of dot notation, as dot notation 
    does not work in for-in loop !!
    */
}

//for in loop is also used to iterate over an array
colors = ["red", "blue", "green"]
for(let color in colors) {
    console.log("Index is: " + color + ", value at the index: " + colors[color])
    //variable color represents the index of the array
}

// for of loop , it is used only in Arrays
for(let col of colors) {
    console.log("value is: " + col)
}

