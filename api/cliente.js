listarClientes = () => {
  return fetch('http://localhost:4000/clientes')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json;
    });
};
