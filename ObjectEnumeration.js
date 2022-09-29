/* Enumerating properties of an object:
Enumeration is to get all the properties of an object
*/
console.clear()

let circle  = {
    radius: 1,
    draw: function() {
        console.log("Draws the function")
    }
}

// 1) Enumerate using for in loop

for (key1 in circle) {
    console.log(key1 , " --- ", circle[key1])
}
console.log("------")

/* 2) Enumerate using for of loop with Object.keys
Object.keys returns the properties of the circle passed
*/
for ( key2 of Object.keys(circle) ) {
    console.log(key2 , " --- ", circle[key2])
}
console.log("------")

/* 3) Enumerate using for of loop with Object.entries
Object.entries Returns an array of key/values of the enumerable properties of an object
*/
for (key3 of Object.entries(circle)) {
    console.log(key3)
}