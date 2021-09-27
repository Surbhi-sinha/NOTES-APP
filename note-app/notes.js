const chalk = require('chalk');
const fs = require('fs');


//adding a note function
const addNotes = function(title , body){
    const Notes = loadNotes();
    //----------------------------
    // const duplicateNotes = Notes.filter((note) => {
    //     return note.title === title
    // })---------------------
    //this function has a problem that if we found a duplicate note at index 89 out of 1000 notes
    // at that time the program even after finding the duplicate note will still check for the remaing 911 files. 
    //which is quite wrong so for this we use a find method which will stop if we found a duplicate note.
    //----------------------------
    
   
    const duplicateNote = Notes.find((note) => {
        return note.title === title
    })

    if (!duplicateNote) {
        Notes.push({
            title: title,
            body: body
        })
        saveNotes(Notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.redBright('Note title taken!'))
    }
}

const saveNotes = function(Notes){
    const dataJSON = JSON.stringify(Notes);
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch(e){
        return [];
    }

}

//removing a note function
// steps :-
//1ST CHALLENGE
//1. setup the remove commanad to take a required  "--title" option
//2. Create and export a removNotes function from notes.js
//3. Call removeNote in remove command handler
//4. Hve removeNotes log the title of the notes to be removed
//5. Test your work using : node app.js remove --title="some text"


//2ND CHALLENGE
//1.  Load existing notes
//2. Usr array filter method to remove the matching note(if any)
//3. Save the newly created array
//4. Test your work with a title that exists and a title that doesn't exist

//3RD CHALLENGE
//if a note is removed print "Nte removed in Green background"
//if no note is removed print "no note found" with red backgroud

const removeNotes = function(title){
  
 const notes = loadNotes();
 const NotesTOKeeps= notes.filter(function (note) {
    return note.title != title
})
if(notes.length > NotesTOKeeps.length){
    console.log(chalk.bgGreen("Note removed"))
}else{
    console.log(chalk.bgRed("No note found"))
}
saveNotes(NotesTOKeeps);


}

//goal: wire up the list command

//1. create and eexport listNotes from notes.js
//- "Your Notes" using chalk
//- Print note title for each note
//2 . Call listNotesfrom command handler
//3. Test your work!
const listNotes =() =>{
    const notes = loadNotes();
    console.log(chalk.inverse("Your Notes..."));

    notes.forEach((Notes) => {
        console.log(Notes.title);
    });
}

// setup -- title option for read command
// 2. create readnote in notes.js
// - Search for note by title
// - Find note and print title(styled) and bosy (plain)
// - No note found? print error in red
//3. Have the command handler call the function
//4. Test your work by running a couple commands

const readNote= (title) =>{
    const Notes = loadNotes();
    const note = Notes.find((note) => {
        return note.title === title
    });
    if(!note){
        
        console.log(chalk.red("No note found"));
    }else{
        console.log(chalk.italic.green("title is : " + note.title));
        console.log("body is  : "  + note.body);

    }
}

module.exports = {
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNote : readNote,
}
