const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener('submit', (event) => {
  event.preventDefault();

  const cpf = event.target.querySelector('[data-cpf]');
  const nome = event.target.querySelector('[data-nome]');

  cadastrarClientes(nome.value, cpf.value);
});
