// Its like importing another file to this actual file, the result is that node execute both of the files
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Creating add. remove, read, list command:

// Creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    // Build is an object and on that object, we can define all of the options we want this given command to support
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
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

yargs.parse()
