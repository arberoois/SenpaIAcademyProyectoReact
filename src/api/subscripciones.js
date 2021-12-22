export const subscription = (email) => {
  const post = fetch("http://localhost:3001/subscripciones", {
    method: "POST",
    body: JSON.stringify({ email: email }),
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
