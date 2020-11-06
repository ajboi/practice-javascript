// Node supports I/O through process.stdin , process.stdout , process.stderr functions.

process.stdin.setEncoding('utf8') // Lets the compiler know that it should treat the input and output as utf-8 encoded strings. The
// program will work just as fine even if we don't specify this. However, if the encoding is not specified, the i/o will be treated
// as buffers(i.e. binary streams).

process.stdin.on('readable', function () {
  // setting a listener for a readable event.

  var input = process.stdin.read() // stdin.read() function called, which is a readable event.

  if (input !== null) {
    if (input.trim() === 'exit') {
      console.log('exiting')
      process.exit(0) // exit the program gracefully if 'exit' is passed
    }
    if (input.trim() === 'error') {
      console.error('error coz error') // throw error if 'error' is passed. console.log() makes use of process.err internally.
      process.exit(-1) // if error, exit with error code 1.
    }

    process.stdout.write(input) // write the received input
  }
}
)

/* Note: In this case, the program exits after printing, even if the input string is not 'exit'. This might */

/* Some other process object properties that can be used on the CLI.
1. process.env
2. process.release
3. process.versions
4. check nodeJS documentation for more... */
