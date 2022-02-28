// Its like importing another file to this actual file, the result is that node execute both of the files
const getNotes = require('./notes.js')

console.log(getNotes())