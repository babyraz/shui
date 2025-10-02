export default function NoteList({ notes, onUpdate }) {
  if (!notes || notes.length === 0) return <p>Inga anteckningar än.</p>;

  


  return (
    <div className="note-list">
      <h2 style={{ color: "white" }}>All notes</h2>
      {notes.map((note) => (
        <div className="note-card" key={note.id}>
          <div className="note-content">
            <p>{note.text}</p>
          </div>
          <span className="note-user">— {note.username}</span>
          <div className="note-meta">
            <small>{new Date(note.createdAt).toLocaleString()}</small>
            <button className="edit-btn" onClick={() => onUpdate(note.id)}>
              Edit
            </button>
          </div>
          <div className="note-arrow"></div>
        </div>
      ))}
    </div>
  );
}
