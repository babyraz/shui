import { useState } from "react";
import { createNote } from "./api.js"
 
export default function NoteForm({ onSubmit, defaultText = "" }) {
  const [username, setUsername] = useState("");
  const [text, setText] = useState(defaultText);


  const handleSubmit = async (e) => {
    e.preventDefault();


    const trimmedUsername = username.trim()
    const trimmedText = username.trim()

    await onSubmit(trimmedUsername, trimmedText); // pass raw inputs to parent
    setUsername("");
    setText("");
  };
  

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Namn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        maxLength={30}
      />
      <textarea
        placeholder="Write your note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        maxLength={500}
      />
      <button type="submit">Skicka</button>
    </form>
  );
}