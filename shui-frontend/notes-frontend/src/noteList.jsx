import { useEffect, useState } from "react";
import { getNotes } from "./api.js";

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <h2>Alla anteckningar</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <strong>{note.username}</strong>: {note.text}
          <br />
          <small>{new Date(note.createdAt).toLocaleString()}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
