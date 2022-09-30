/* Cloning objects is done in three ways
1) Using For in loop
2a) Using Object.assign , create a new object
2b) Using Object.assign, clone entries of object into an existing object having pre-existing entries
3) Using separator ... method {...object_name}
*/
console.clear()

let circle = {
    radius: 1,
    draw: function() {
        console.log("This is a draw function")
    }
}



// Cloning object using For in Loop
forLoopObject = {}
console.log(forLoopObject)
for (key in circle) {
forLoopObject[key] = circle[key]
}
console.log("Object cloning using For In Loop: ")
console.log( forLoopObject)

//Object cloning using Object.assign to create a new Object
let objectAssign1 = Object.assign({},circle)
console.log(objectAssign1)

//Object cloning using Object.assign to an existing object
let existingObject = { color: "Red"}
console.log(existingObject)
Object.assign(existingObject, circle)
console.log(existingObject)

//If the keys in the existingObject match with the keys in the source object, then they are overridden 
let existingObject1 = {color:"red",radius:3 } // radius exist, but value is differnt
console.log(existingObject1)
Object.assign(existingObject1, circle) // value of radius from circle is overridden by Circle
console.log(existingObject1) 

//Object cloning using spread ... method
let newObject = {...circle}
console.log(newObject)
newObject.draw()

//Another notation to clone into existing object, if key exists, value is overrideen from Circle
let newObject1 = {isCircle: true,radius:3, ...circle} 
console.log(newObject1)