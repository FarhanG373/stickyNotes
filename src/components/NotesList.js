import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => {
        return (
          <Note
            id={note.id}
            key={index}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
