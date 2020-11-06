/* Buffers: https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data
   TypedArrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays#:~:text=JavaScript%20typed%20arrays%20are%20array,binary%20data%20in%20memory%20buffers.&text=However%2C%20typed%20arrays%20are%20not,a%20typed%20array%20returns%20false%20
*/

var buffer = Buffer.alloc(8) // creates a buffer array of size 8 bytes
// This will print out 8 bytes of zero:
// <Buffer 00 00 00 00 00 00 00 00>
// This buffer is initialised and contained 8 bytes of zero.
console.log(buffer)

var buffer1 = Buffer.from([12, 6, 7, 5, 3, 0, 9])
// This will print out 8 bytes of certain values:
console.log(buffer1)
// <Buffer 0c 06 07 05 03 00 09>
// 08, 07 etc. are integer representations of the bytes stored in their respective indices.

var buffer2 = Buffer.from("I'm a string!", 'utf-8')
// This will print out a chain of values in utf-8:
// <Buffer 49 27 6d 20 61 20 73 74 72 69 6e 67 21>
console.log(buffer2)

/* writing to buffers */
var buffer3 = Buffer.alloc(16)
console.log(buffer3.write('Hello', 'utf-8')) // writes hello into buffer and returns the length of the bytes that were written
buffer3.write(' world!', 5, 'utf-8') // takes 3 arguments - the string, offset i.e. the position from which the string should be written,
// and the encoding.
console.log(buffer3)
console.log(buffer3.toString('utf-8')) // Converts buffer into string.
console.log(buffer3.toString('utf-8', 0, 10))// three arguments - encoding type, starting index, ending index

/* Note: Browsers don't use buffers. They use TypedArrays instead. Though
node supports typedArray from v4.x, it is recommended to use Buffers */

/* Note: Node Buffers are allotted outside the v8 heap */

/* Use JSON.stringify() to convert a buffer into JSON. Use toString() and StringDecoder class to convert Buffer into string. */
