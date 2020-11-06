
const c = {
  name: 'ajai',
  age: '21'
}
// 1. Usual way
function alo (c) {
  console.log('Hi ' + c.name)
}
alo(c)

// 2. Function declaration assigned to a variable
const bro = function (c) {
  console.log('alo ' + c.name)
}
bro(c)

// 3. Arrow function
const bye = (c) => { console.log('I am' + c.age) }
bye(c)

// 4. Just another declaration
var hi = function (c) {
  console.log('I am ' + c.age)
}

// 5. Automatically invoked
var hi = (function () {
  console.log('I am automatically invoked' + c.age)
}(c))

// 6. Shorthand method. Works only within objects and classes.
const student =
{
  name: 'amuthan',
  age: 21,
  marks: [],
  get (...items) {
    this.marks.push(...items)
  }
}

student.get(91, 92)
console.log(student.marks)

class Student {
  constructor (name) {
    this.name = name
  }

  getMessage (message) {
    return this.name + ' ' + message
  }
}

const Sun = new Student('ajai')
console.log(Sun.getMessage('podaa'))

// 7. Generator functions

/*
 Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

Generators in JavaScript -- especially when combined with Promises -- are a very powerful tool for asynchronous programming as they mitigate -- if not entirely eliminate -- the problems with callbacks, such as Callback Hell and Inversion of Control. However, an even simpler solution to these problems can be achieved with async functions.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where an execution was paused with the argument from next().

A return statement in a generator, when executed, will make the generator finish (i.e. the done property of the object returned by it will be set to true). If a value is returned, it will be set as the value property of the object returned by the generator.
Much like a return statement, an error is thrown inside the generator will make the generator finished -- unless caught within the generator's body.
When a generator is finished, subsequent next() calls will not execute any of that generator's code, they will just return an object of this form: {value: undefined, done: true}.

*/

function * genGen () {
  let x = 0
  while (x <= 3) {
    yield x++
    x++
  }
}
console.log(genGen().next())
const hue = genGen()
console.log(hue.next())
console.log(hue.next())
console.log(hue.next())
console.log(hue.next())
console.log(genGen().next())
/* If you invoke the function directly as in above instead of assigning it to a variable and calling it, each call will
be treated as a new instance, and so the yield value will never be incremented. To make generators actually work,
 you need to assign it to a variable and call it. This way, the state will be retained and increment is done properly. */

// 8. New function

/* A new function makes use of the Function constructor. The constructor can have numerous arguments.
If there are n arguments in the Function constructor, arguments 1 to n-1 work as the arguments of the function.
The last argument is the body of the function. */

const numberA = 'numberA'; const numberB = 'numberB' // look how arguments are defined already
const sumFunction = new Function(numberA, numberB,
  'return numberA + numberB' // Look how the return statement is entirely a string
)
console.log(sumFunction(10, 15)) // => 25

const name = 'name'; const age = 'age'

const hellal = new Function(name, age, 'return name + " is " + age + " years old"')
console.log(hellal('ajai', 19))
