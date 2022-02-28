// Its like importing another file to this actual file, the result is that node execute both of the files
const chalk = require('chalk')
const getNotes = require('./notes.js')


const command = process.argv[2]

if (command === 'add') {
    console.log(chalk.blue.inverse('Adding note..'))
} else if (command === 'remove') {
    console.log(chalk.red.inverse('removing note..'))
}