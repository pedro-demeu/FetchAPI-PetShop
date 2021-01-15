const corpoTabela = document.querySelector('[data-conteudo-tabela]');

const renderizarCliente = (cpf, nome) => {
  const linha = document.createElement('tr');
  const conteudo = `
    <td>${cpf}</td>
    <td>${nome}</td>
`;
  linha.innerHTML = conteudo;

  return linha;
};

listarClientes().then((exibe) => {
  exibe.forEach((indice) => {
    corpoTabela.appendChild(renderizarCliente(indice.cpf, indice.nome));
  });
});