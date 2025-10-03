export default function NoteList({ notes, onStartEdit, onSaveEdit, onCancelEdit, editingId, editingText, setEditingText }) {
  if (!notes || notes.length === 0) return <p>Inga anteckningar än.</p>;


  


    return (
      <div>
        <h2>Alla anteckningar</h2>
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            {editingId === note.id ? (
              <>
                <textarea
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button className="btn btn-red" onClick={() => onSaveEdit(note.id)}>Save</button>
                <button className="btn btn-red" onClick={onCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{note.username}</strong>: {note.text}
                <br />
                <small>{new Date(note.createdAt).toLocaleString()}</small>
                <br />
                <button className="btn btn-red" onClick={() => onStartEdit(note)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
  