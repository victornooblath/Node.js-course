// Its like importing another file to this actual file, the result is that node execute both of the files
const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Creating add. remove, read, list command:

// Creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note...')
    }
})

// Creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note...')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note...')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function () {
        console.log('Listing the notes')
    }
})

console.log(yargs.argv)
