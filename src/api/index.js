export const subscription = (email) => {
  const post = fetch("http://localhost:3001/subscripciones", {
    method: "POST",
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((final) => {
      if (final.code === 200) {
        return "Gracias por susbscribirte, ID de subscripcion: " + final.id;
      } else {
        return final.message;
      }
    });
  return post;
};
