/*


*/

console.clear()
//finding elements in a primitive array
const array1 = [1,4,3,6,'a','kartik',1]

console.log(array1.indexOf(4)) // returns 1, returns the index of the element
console.log(array1.indexOf('a')) // returns 4, returns the index of the element
console.log(array1.indexOf(1,array1.indexOf(1)+1)) // returns the second instance of the element
console.log(array1.includes('b')) // returns false as `b` is not available in the array
console.log(array1.includes(4,array1.indexOf(3))) // returns false as `4` is searched from index 2

//Arrays searches in reference types

const array2 = [
    {FirstName: 'Kartik',employer: 'CTS'},
    {FirstName: 'David', employer: 'Amex'},
    {FirstName: 'Sagar',employer: 'CTS'}
]

const emp = array2.find(function(array2) {
    return    array2.employer === 'CTS'
})

console.log(emp) //returns the entire record of the array that matches the criteria
console.log(emp.FirstName) // displays the returned record attribute
console.log(emp.employer) // displays the returned record attribute