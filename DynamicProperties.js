/*
Adding a new property dynamically at run time
    Object.propertyName = propertyValue

Deleting an existing property dynamically at run time
    delete Object.propertyName

*/
console.clear()

let circle = {
    radius : 1,
    color : 'red',
    log() {
        // radius = 10
        console.log("log: ", this.radius)
    }
}

console.log(circle) //prints the orginal circle object

//Add new property
circle.price = 100
console.log(circle) // prints the orginal circle object with additional price property 

// Add new function as a property to the object
circle.draw = function() {
    console.log("This is a draw function")
}
console.log(circle) //prints the orginal circle object with additional price and draw properties

//Deleting property

delete circle.price
console.log(circle) // prints circle without price property

delete circle.draw
console.log(circle) // prints circle without price and draw properties

delete circle.color
console.log(circle) // prints circle without price,draw & color properties

console.log(circle.color) // prints undefined as there is no color property in circle

console.log(circle.log())