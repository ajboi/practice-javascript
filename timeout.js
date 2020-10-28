setTimeout(() => { console.log('first') }, 1000)
setTimeout(() => { console.log('second') }, 1000)
setTimeout(() => { console.log('third') }, 1000)
setInterval(() => { console.log('Interval says Hi') }, 6000)

function sleep (delay) {
  var start = new Date().getTime()
  while (new Date().getTime() < start + delay);
}
sleep(4000)
