export const get = () => {
  const get = fetch("http://localhost:3001/profesores/obtener", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((final) => {
      return final;
    });
  return get;
};

export const create = (newTeacher) => {
  const post = fetch("http://localhost:3001/profesores/crear", {
    method: "POST",
    body: JSON.stringify(newTeacher),
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((final) => {
      return final;
    });
  return post;
};
