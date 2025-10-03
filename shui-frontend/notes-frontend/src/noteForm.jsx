import { useState } from "react";
import { createNote } from "./api.js"
 
export default function NoteForm({ onSubmit, defaultText = "" }) {
  const [username, setUsername] = useState("");
  const [text, setText] = useState(defaultText);


  const handleSubmit = async (e) => {
    e.preventDefault();


    const trimmedUsername = username.trim()
    const trimmedText = text.trim()

    await onSubmit(trimmedUsername, trimmedText);
    setUsername("");
    setText("");
  };
  

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Name"
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
      <button type="submit">Submit</button>
    </form>
  );
}