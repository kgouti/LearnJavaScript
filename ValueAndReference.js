/*
Value type:
number, string, boolean,undefined, null etc are primitive data types are of value type

i.e assinging above to different variables, their values are copied. Any modification will NOT modify 
that variable only.

Reference type:
Object, Function, Arrary are the non primitive data types are of reference type.

i.e assigning above to different variables, their object reference is pointed. Any modification WILL
modify all the variables.

*/
console.clear()

let x = 10
console.log("print original x: " +x)
 y = x
console.log("print original y: " + y)
 x = 20
 console.log("print modified x: " + x) //value of x changes
 console.log("value of y does not change : " + y) // value of Y does not change as these variables are modified by values only


 let obj1 = {
    attribute : 10
 }
console.log("Original obj1 attribute: " + obj1.attribute)
obj2 = obj1
console.log("Original obj2 attribute: " + obj2.attribute)
obj1.attribute = 20 // modify obj1 attribute
console.log("modified obj1 attribute: " + obj1.attribute) // attribute value updates to 20
console.log("modified obj2 attribute: " + obj2.attribute) // as its object, and its reference i.e obj1 is modified, obj2 also gets modified