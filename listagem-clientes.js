const corpoTabela = document.querySelector('[data-conteudo-tabela]');
const removerCliente = (id) => {
  if (confirm('Deseja mesmo deletar esse cliente?')) {
    deletarCliente(id);
    document.location.reload();
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
    <a href="edita-clientes.html?id=${id}"><button type="button" class="btn btn-info">Editar</button></a>
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
