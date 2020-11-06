// vm module is a module that provides functions for sandboxing.

// eval() executes code from the same context as he program, while vm offers functions like
// runInNewContext() which lets us prevent the unevaluated expression from accessing the existing variables.

// https://odino.org/eval-no-more-understanding-vm-vm2-nodejs/

var vm = require('vm')

// var sandbox = {
// process: 'this baby',
// require: 'that'
// };
// vm.runInNewContext('console.log(process);console.log(require)',sandbox);

//running the above block would not print anything in console. This is because in the new context,  console object is not accesssible.

var sandbox = {
process: 'this baby',
require: 'that',
console: console,
a: 2,
b: 5
};
// vm.runInNewContext('b = a+b; console.log(a,b)',sandbox);
// console.log(sandbox.b) //These two lines were added to see if the variable's value is actualy changed. And yes, it does.
vm.runInNewContext('console.log(process);console.log(require)',sandbox);

//the above block would work just fine, since we have included the console object as a part of he sandbox object. 
// The vm.runInNewContext() method contextifies the stated contextObject, compiles the code written and runs it inside 
//the context created and then after all this returns the output. However, the running code have no access to the local scope.




// global.count1 = 100;
// var count2 = 100;
// var txt = 'if (count1 === undefined) var count1 = 0; count1++;' +
// 'if (count2 === undefined) var count2 = 0; count2++;' +
// 'console.log(count1); console.log(count2);';
// var script = new vm.Script(txt);
// script.runInThisContext();
// console.log(count1);
// console.log(count2);

//the above block makes use of runInTHisContext function. The vm.runInThisContext() method compiles the code, 
//runs it inside the context of the current global and then returns the output. Moreover, the running code has 
//no access to the local scope, but have access to the current global object.

// It can be seen that the value of the local variable count2 is unchanged after execution.



// In short,the code executed inside both the vm functions does not have access to local scope. 
// And runInSameContext have access to the current global scope.
