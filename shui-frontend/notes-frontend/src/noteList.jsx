export default function NoteList({ notes, onUpdate }) {
    return (
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <b>{note.username}</b>: {note.text}
            <button onClick={() => onUpdate(note.id)}>Edit</button>
          </li>
        ))}
      </ul>
    );
  }
  