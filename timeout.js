// setTimeout(() => { console.log('first') }, 1000)
// setTimeout(() => { console.log('second') }, 1000)
// setTimeout(() => { console.log('third') }, 1000)
// setInterval(() => { console.log('Interval says Hi') }, 6000)

// function sleep (delay) {
//   var start = new Date().getTime()
//   while (new Date().getTime() < start + delay);
// }
// sleep(4000)


// A setTimeout() function with a 0 delay is similar to a function
// called setImmediate().

// To execute an event immediately in the current event loop iteration
// itself, you can make use of the process.nextTick() function.

// callback <Function> The function to call at the end of this turn of the Node.js Event Loop
setTimeout(function timer1() {
  console.log("TIMEOUT 1");
  setImmediate(function imm1() {
      console.log("SETIMMEDIATE 1");
  });
}, 0);
setTimeout(function timer2() {
  console.log("TIMEOUT 2");
  setImmediate(function imm2() {
      console.log("SETIMMEDIATE 2");
  });
}, 0);
setTimeout(function timer3() {
  console.log("TIMEOUT 3");
}, 0);