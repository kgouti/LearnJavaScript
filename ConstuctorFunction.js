/*
Constructor function used to create factory object
Pascal notation is used to create the function: CreateCircleWithInches
Use new keyword to create a constructor function
Differences between factory and constructor function
    a) To instantiate the factory function, no `new` keyword is used. 
        `new` keyword is used for instantiating constructor function
    b) there is a difference in the way function is defined inside factory & constructor function
        `keyword()` is used to define function in constructor function,
        `keyword()` might not be necessary in factory function
    c) constructor function is defined over factory function

*/

console.clear()

function circle(radius) {
    this.radius = radius;
    this.draw = function() { //Notice the difference in the way function is defined in constructor
        //function and factory function
        console.log("Input radius : " + radius)
        console.log("Input radius in dot notation: " + this.radius)
    }
}

let c1 = new circle(3) //creating the circle object using the new keyword
console.log(c1) // displays the circle object
console.log(c1.radius)
console.log(c1.draw())

let c2 = new circle(5) //creating another circle object using the new keyword
console.log(c2) // displays the circle object
console.log(c2.radius)
console.log(c2.draw())