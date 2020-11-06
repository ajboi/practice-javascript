// Promises, then/catch and async await

const promise = new Promise((resolve, reject) => {
// The Promise constructor takes a function as an argument. This argument function is called Executor function.
// The executer function in turn takes two arguments, resolved and rejected(names can be changed).
  if (10 === '10') {
    resolve('Hi I am AJ') // We set the return value of resolve.
  } else {
    reject('Hi I am amuthan')// We set the return value in case of rejected.
  }
})

// We are going to now handle the outcome of this promise now using then/catch.
promise.then((resolve) => {
  console.log(resolve)
}).catch((reject) => {
  console.log(reject)
})

// We are now going to handle the outcome with async await
async function executePromise () {
  try {
    const a = await promise
    console.log(a) // response from resolved, we get this if promise if true.
    // if you had sent an api call and want the data to be console logged, you can include them
    // here so that the function will wait till data comes from the promise.
  } catch (e) {
    console.log(e)
  }
}

executePromise()

// await async and then/catch are both the same. awai async is a sugar coated syntax implementation.
