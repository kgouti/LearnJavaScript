/*
As the name suggests, factory is a place where it generates objects.
Factory functions create blue prints for objects.
Factory functions over comes the disadvantage of hard coded objects
Camel case is used for factory function creation: createCircleWithInches
*/
console.clear()


// this is the first representation of factory function
function createCircle1(radius) {
    let circle = {
        radius : radius,
        draw : function() {
            console.log("Draws the circle with radius :" + radius)
            }
    }
    return circle
}

c1 = createCircle1(2)
console.log(c1) // returns the circle object
console.log(c1.radius)
console.log(c1.draw())

//second representation of circle
function createCircle2(radius) {
    let circle = {
        radius : radius,
        draw() { // we can represent a function in factory function like this
            console.log("Draws the circle with radius :" + radius)
            }
    }
    return circle
}

c2 = createCircle2(4)
console.log(c2) // returns the circle object with radius 4
console.log(c2.radius)
console.log(c2.draw())

//third representation of factory object
function createCircle3(radius) {
    return circle = {  // return statement is moved from the end to the start
        radius, // the extra represenation of radius variable is removed
        draw() { // we can represent a function in factory function like this
            console.log("Draws the circle with radius :" + radius)
            }
    }
}

c3 = createCircle2(6)
console.log(c3) // returns the circle object with radius 4
console.log(c3.radius)
console.log(c3.draw())