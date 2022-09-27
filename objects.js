 /*
variables and functions can be defined in the object
key : value pairs  
*/

console.clear()

let circle = {
    radius : 1, // 
    isVisible : true,
    location : {
        x : 1,
        y : 2
    },
    draw : function() {
        console.log("I am drawing the circle")
    }
}

// console.log(circle) // returns the objects contents
// console.log(circle.isVisible) // returns value of isVisible
console.log(circle.draw()) // executes the statements within the function

/* problem with above example is hard coded. We will need to create a new circle object if 
the dimensions change.
Hence we use factory functions