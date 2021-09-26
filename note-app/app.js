const chalk = require('chalk');
const yargs = require('yargs');
const Yargs = require('yargs');
const notes = require('./notes.js');

//
yargs.version('1.1.0')
//


//ADDING A NOTE
Yargs.command ({
    command : 'add',
    describe : 'add two values',
    builder:{
        title:{
            describe : 'title of the notes',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe : 'body of the note',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})


// REMOVING A NOTE
Yargs.command ({ 
    command : 'remove',
    describe : 'removes  values',
    builder:{
        title:{
            describe : 'title of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})


//READING A NOTE
Yargs.command ({
    command : 'read',
    describe : 'read the body of the note',
    builder:{
        title:{
            describe : 'title of the note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})



//LISTING THE NOTES 
Yargs.command ({
    command : 'list',
    describe : 'list the notes',
   
    handler(argv){
        notes.listNotes();
    }
})
yargs.parse()
