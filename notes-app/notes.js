const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return "Your Notes......"
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const dupNotes = notes.filter((note) => note.title === title)

  debugger

  if (dupNotes == 0) {
    console.log(chalk.green.inverse("Note Added"));
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
  } else {
    console.log(chalk.red.inverse("Note Title Exists!"));
  }
}

// Remove selected notes based on title
const removeNotes = (title) => {
  const notes = loadNotes()
  const keepNotes = notes.filter((note) => note.title !== title)

  if (notes.length > keepNotes.length) {
    console.log(chalk.inverse.green.bold('Note Removed!'));
  } else {
    console.log(chalk.red.bold.inverse('Note Not Found!'));
  }
  saveNotes(keepNotes)
  
}

// List out all notes
const listNotes = () => {
  const notes = loadNotes()
  const noteTitle = notes.filter((note) => note.title)
  console.log(chalk.blue.bold.inverse('Notes.....'));
  notes.forEach(note => {
    console.log(note.title);
  });
}

// Read selected note based on title provided
const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log("Title: " + note.title + "\nBody: " + note.body);
  } else {
    console.log(chalk.red.inverse("Note Title Does Not Exists!"));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
  
}

const saveNotes = (note) => {
  const dataJSON = JSON.stringify(note)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
 }
