/*
If - Else

Switch case

*/
console.clear()
a = 600
b = 300
c = 200

if (a > b && a > c) {
    console.log("A is greater")    
} else if (b > c) {
    console.log("B is greater")
} else {
    console.log("C is greater")
}

let role = "Manager"

switch(role) {
    case "trainee":
        console.log("User with trainee privs")
        break 
    case "supervisor":
        console.log("User with supervisor privs")
        break
    case "Manager":
        console.log("User with manager privs")
        // break // Ensure to issue a break statement, if no break statement provided, 
        //it will execute the next switch, in this case, it will print the manager privs and also user not found
    default:
        console.log("User not found") //Default section gets executed when nothing gets matched
}
 