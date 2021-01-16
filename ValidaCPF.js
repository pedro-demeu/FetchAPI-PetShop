function VerificarCPF(cpf) {
  //Cria um array de CPFs inválidos e faz uma verificação Booleana
  const cpfsInvalidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
  ];
  return cpfsInvalidos.indexOf(cpf) === -1;
}
function somarNumerosDoCPF(cpf, totalDeDigitos, peso) {
  let soma = 0;

  for (let indice = 1; indice <= totalDeDigitos; indice++) {
    soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice);
  }

  return soma;
}

function VerificarDigito(cpf, totalDeDigitos, peso, digitoDeVerificacao) {
  const soma = somarNumerosDoCPF(cpf, totalDeDigitos, peso);
  const resto = (soma * 10) % 11;

  return resto;
}
