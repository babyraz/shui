export default function NoteList({ notes, onUpdate }) {
  if (!notes || notes.length === 0) return <p>Inga anteckningar än.</p>;

  

  return (
    <div>
      <h2>Alla anteckningar</h2>
      {notes.map((note) => (
        <div key={note.id + note.createdAt}>
          <strong>{note.username}</strong>: {note.text}
          <br />
          <small>{new Date(note.createdAt).toLocaleString()}</small>
          <br />
          <button onClick={() => onUpdate(note.id)}>Edit</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

