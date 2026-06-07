/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/


const findFactorial = function(num ,sum = 1) {

    sum = num * sum ;

    if(num === 1){
      return sum
    }
    return findFactorial( num -1 ,sum);
}
console.log(findFactorial(5));


//Exercise 2 -  bibi -> ibib
const reverseString = function( str ) {

  if(str === "" ){return ""}

  return    str.slice(-1) + reverseString( str.slice(0,-1))  ;
  
}
console.log(reverseString("bibi"));




//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {

  if (arr1.length === 0) {
    return
  }

  let item = arr1.splice(0, 1)[0]
  arr2.push(item)
  swap(arr1, arr2)
}

swap(arr1, arr2)

console.log(arr1) // []
console.log(arr2) // [1, 2, 3]



/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }