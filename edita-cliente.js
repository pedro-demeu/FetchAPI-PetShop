const getURL = new URL(window.location);
const id = getURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

const alerta = (classe, mensagem) => {
  const linha = document.createElement('tr');

  const conteudoLinha = `
  <div class="${classe}">${mensagem}</div>
  
`;

  linha.innerHTML = conteudoLinha;
  return linha;
};

detalharCliente(id).then(([dados]) => {
  inputCPF.value = dados.cpf;
  inputNome.value = dados.nome;
});

const formEdicao = document.querySelector('[data-form]');
formEdicao.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validaCPF(inputCPF.value)) {
    alert('ESSE CPF NÃO EXISTE');
    return;
  }
  if (inputCPF.value.length !== 11) {
    alert('ESSE CPF NÃO EXISTE');
    return;
  }

  editaCliente(id, inputCPF.value, inputNome.value).then((resposta) => {
    if (resposta.status === 200) {
      formEdicao.appendChild(
        alerta('alert alert-success', 'CLIENTE EDITADO COM SUCESSO !'),
      );
    } else {
      formEdicao.appendChild(
        alerta('alert alert-warning', 'O CLIENTE NÃO PODE SER EDITADO !'),
      );
    }
  });
});
