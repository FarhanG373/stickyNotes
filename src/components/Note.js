import React from "react";
import { FaTrash } from "react-icons/fa6";
const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note" key={id}>
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <FaTrash onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  );
};

export default Note;
