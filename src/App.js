import React, { useState, useEffect } from "react";
import "./App.scss";
import NotesList from "./components/NotesList";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";
uuidv4();
function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("react-notes-data")) || [];
  });
  const [searchText, setSearchText] = useState("");
  const AddNote = (text) => {
    const date = new Date();
    const NewNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: uuidv4(),
    };
    const newNotes = [...notes, NewNote];
    setNotes(newNotes);
  };
  const DeleteNote = (id) => {
    const dNote = notes.filter((note) => note.id !== id);
    setNotes(dNote);
  };

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <div className="container">
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={AddNote}
          handleDeleteNote={DeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
