const fs = require('fs');

const chalk = require('chalk');
const yargs = require('yargs');

const {getNotes, whaa, removeNotes} = require('./notes.js');
const notes = require('./notes.js');

// cust yargs
yargs.version('1.1.0')

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: "Note title.",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title);
    }
})

//List notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
       notes.listNotes();
    }
})

//read notes
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})
// console.log(process.argv);
yargs.parse()
