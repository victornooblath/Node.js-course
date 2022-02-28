//To use a node module i need to "dump" it inside a const and using require('') function
const fs = require('fs')

//Creates a file called notes and add a text content to it
//fs.writeFileSync('notes.txt', 'this is a test file')


fs.appendFileSync('notes.txt','I just appended this')