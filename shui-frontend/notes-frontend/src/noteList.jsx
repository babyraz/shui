export default function NoteList({ notes, onStartEdit, onSaveEdit, onCancelEdit, editingId, editingText, setEditingText }) {
  if (!notes || notes.length === 0) return <p>There are no notes yet. Go ahead and add one!</p>;

  return (
    <div>
      <h2>All notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          {editingId === note.id ? (
            <>
              <textarea
                className="note-edit-textarea"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <div className="note-meta">
                <button className="btn btn-red" onClick={() => onSaveEdit(note.id)}>Save</button>
                <button className="btn btn-red" onClick={onCancelEdit}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <div className="note-content">
                <strong>{note.username}</strong>: {note.text}
              </div>
              <div className="note-meta">
                <small>{new Date(note.createdAt).toLocaleString()}</small>
                <button className="btn btn-red" onClick={() => onStartEdit(note)}>Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
