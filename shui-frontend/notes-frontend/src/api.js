

export const getNotes = async () => {
    const res = await fetch("https://qw3x1650ve.execute-api.eu-north-1.amazonaws.com/get");
    const data = await res.json();
    return data.notes; 
  };

export const createNote = async (username, text) => {
  const res = await fetch(`https://qw3x1650ve.execute-api.eu-north-1.amazonaws.com/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, text })
  });
  return res.json();
};
export const updateNote = async (id, text) => {
  const res = await fetch(`https://qw3x1650ve.execute-api.eu-north-1.amazonaws.com/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  return res.json();
};
