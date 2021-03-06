function VerificarCPFInvalidos(cpf) {
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
  let soma = somarNumerosDoCPF(cpf, totalDeDigitos, peso);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11)
    resto = 0; /*adicionei esta linha para completar a lógica.*/
  return resto === digitoDeVerificacao;
}

function VerificaPrimeiroDigito(cpf) {
  const peso = 11;
  const totalDeDigitosPrimeiraParte = 9;
  const digitoDeVerificacao = parseInt(cpf.substring(9, 10));

  return VerificarDigito(
    cpf,
    totalDeDigitosPrimeiraParte,
    peso,
    digitoDeVerificacao,
  );
}

function VerificaSegundoDigito(cpf) {
  const peso = 12;
  const totalDeDigitosSegundaParte = 10;
  const digitoDeVerificacao = parseInt(cpf.substring(10, 11));
  return VerificarDigito(
    cpf,
    totalDeDigitosSegundaParte,
    peso,
    digitoDeVerificacao,
  );
}

function validaCPF(cpf) {
  return (
    VerificaPrimeiroDigito(cpf) &&
    VerificaSegundoDigito(cpf) &&
    VerificarCPFInvalidos(cpf)
  );
}
