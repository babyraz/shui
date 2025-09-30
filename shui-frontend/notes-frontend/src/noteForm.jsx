import { useState } from "react";

export default function NoteForm({ onSubmit, defaultText = "" }) {
  const [username, setUsername] = useState("");
  const [text, setText] = useState(defaultText);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, text);
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
