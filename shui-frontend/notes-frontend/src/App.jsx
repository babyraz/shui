import { useEffect, useState } from "react";
import { getNotes, createNote, updateNote } from "./api";
import NoteForm from "./noteForm";
import NoteList from "./NoteList";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = async () => {
    const data = await getNotes();
    const sorted = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setNotes(sorted);
  };
  

  useEffect(() => {
    fetchNotes();
  }, []);

  // const handleCreate = (newNote) => {
  //   setNotes((prevNotes) => [...prevNotes, newNote])
  // };

  const handleCreate = async (username, text) => {
    await createNote(username, text); 
    fetchNotes(); // reload with correct data
  };
  

  const handleUpdate = async (id) => {
    const newText = prompt("Enter new text:");
    if (!newText) return;
    await updateNote(id, newText);
    fetchNotes();
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm onSubmit={handleCreate} />
      <NoteList notes={notes} onUpdate={handleUpdate} />
    </div>
  );
}
