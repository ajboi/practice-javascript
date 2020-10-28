// Map
var x = [10, 20, 30, 40, 50]

var y = x.map((a) => { return a * a }) // Map takes a function as its argument. The argument of this passed function is 'a'. map returns an element 'a'*'a' for each 'a' to a new array 'y'.
console.log(y)

// Filter
var e = [10, 20, 30, 40, 50]
var f = e.filter((a) => { return a % 20 === 0 }) // Filter takes a function as its argument. The argument of this passed function is 'a'. 'a' is  element of the array, and iterates through it's length. ensure that the passed function returns true or false. The elements for which it returns true will be added as elements to the new array.
console.log(f)

// Reduce
var bro = [1, 2, 3, 4, 5]
var sis = bro.reduce((b, c) => { return (b + c) }) // Reduce takes a function as its argument. The arguments of this passed function are the first two elements of the array at any point, It performs an operation and returns a single value each time. At the end of the iterations, only a single element wil remain, which will be returned eventually by the Reduce function.
console.log(sis)
