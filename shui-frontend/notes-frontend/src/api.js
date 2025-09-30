const BASE_URL = "https://your-api-id.execute-api.eu-north-1.amazonaws.com";

export const getNotes = async () => {
  const res = await fetch(`${BASE_URL}/get`);
  return res.json();
};

export const createNote = async (username, text) => {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, text })
  });
  return res.json();
};

export const updateNote = async (id, text) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  return res.json();
};
