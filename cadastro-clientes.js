const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener('submit', (event) => {
  event.preventDefault();

  const cpf = event.target.querySelector('[data-cpf]').value;
  const nome = event.target.querySelector('[data-nome]').value;

  if (validaCPF(cpf)) {
    cadastrarClientes(nome, cpf);
  } else {
    alert('CPF Inválido');
  }
});
