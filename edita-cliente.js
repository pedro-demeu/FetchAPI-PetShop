const getURL = new URL(window.location);
const id = getURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalharCliente(id).then(([dados]) => {
  inputCPF.value = dados.cpf;
  inputNome.value = dados.nome;
});
