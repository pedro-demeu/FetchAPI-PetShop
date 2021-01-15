const informacoesClientes = [
    {
        cpf: "66809433023",
        nome: "Jairo"
    }
]

const conteudo =
 `<tr>
    <td>${informacoesClientes[0].cpf}</td>
    <td>${informacoesClientes[0].nome}</td>
  </tr>`;

console.log(conteudo)

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

corpoTabela.innerHTML = conteudo;