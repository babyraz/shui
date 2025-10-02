import { useState } from "react";
import { createNote } from "./api.js"
 
export default function NoteForm({ onSubmit, defaultText = "" }) {
  const [username, setUsername] = useState("");
  const [text, setText] = useState(defaultText);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newNote = await createNote(username, text);
  //   onSubmit(newNote);
  //   setUsername("");
  //   setText("");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(username, text); // pass raw inputs to parent
    setUsername("");
    setText("");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <textarea
        placeholder="Note text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Save Note</button>
    </form>
  );
}
