// Its like importing another file to this actual file, the result is that node execute both of the files
const validator = require('validator')
const getNotes = require('./notes.js')

console.log(getNotes())

console.log(validator.isURL('google.com'))