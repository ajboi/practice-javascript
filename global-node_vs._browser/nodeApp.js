var addtwo = require('./addTwo').addtwo
var base = 10 // declare another global variable of the same name
console.log(addtwo(base)) // logs 12. this is because nodeJS has different global objects.
