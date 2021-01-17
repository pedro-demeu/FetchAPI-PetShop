const corpoTabela = document.querySelector('[data-conteudo-tabela]');
const removerCliente = (id) => {
  if (confirm('Deseja mesmo deletar esse cliente?')) {
    deletarCliente(id);
  } else {
  }
};
const renderizarCliente = (cpf, nome, id) => {
  const linha = document.createElement('tr');
  const conteudo = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" 
    onClick="removerCliente(${id})">Excluir</button>
`;
  linha.innerHTML = conteudo;

  return linha;
};

listarClientes().then((exibe) => {
  exibe.forEach((indice) => {
    corpoTabela.appendChild(
      renderizarCliente(indice.cpf, indice.nome, indice.id),
    );
  });
});
