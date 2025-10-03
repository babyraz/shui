import { useState, useEffect } from "react";
import { getNotes, createNote, updateNote } from "./api";
import NoteForm from "./noteForm";
import NoteList from "./NoteList";
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [showForm, setShowForm] = useState(false); 

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreate = async (username, text) => {
    await createNote(username, text);
    fetchNotes();
    setShowForm(false); // close modal after submit
  };

  // const handleUpdate = async (id) => {
  //   const newText = prompt("Enter new text:");
  //   if (!newText) return;
  //   await updateNote(id, newText);
  //   fetchNotes();
  // };

  const startEditing = (note) => {
    setEditingId(note.id);
    setEditingText(note.text);
  };
  
  const saveUpdate = async (id) => {
    await updateNote(id, editingText);
    setEditingId(null);
    setEditingText("");
    fetchNotes();
  };
  
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };
  

  return (
    <div>
      <h1>Family notes</h1>
      <button className="btn btn-red" onClick={() => setShowForm(true)}>Add Note</button>

 
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowForm(false)}>×</button>
            <NoteForm onSubmit={handleCreate} />
          </div>
        </div>
      )}

        <NoteList
          notes={notes}
          onStartEdit={startEditing}
          onSaveEdit={saveUpdate}
          onCancelEdit={cancelEdit}
          editingId={editingId}
          editingText={editingText}
          setEditingText={setEditingText}
        />
    </div>
  );
}
