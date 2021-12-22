export const register = (user) => {
  const post = fetch("http://localhost:3001/auth/registro", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((final) => {
      return final;
    });
  return post;
};

export const login = (user) => {
  const post = fetch("http://localhost:3001/auth/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((final) => {
      return final;
    });
  return post;
};
