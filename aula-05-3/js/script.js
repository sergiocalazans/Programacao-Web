function calcular(operacao) {
  // Pega os IDs dos elementos com base no prefixo da operação (soma, sub, etc.)
  const input1 = document.getElementById(operacao + "-v1");
  const input2 = document.getElementById(operacao + "-v2");
  const resultadoInput = document.getElementById(operacao + "-resultado");

  // Converte os valores para número de ponto flutuante (aceita decimais)
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, preencha ambos os valores.");
    return;
  }

  let resultado;

  // Usa uma estrutura switch para decidir qual cálculo fazer
  switch (operacao) {
    case "soma":
      resultado = num1 + num2;
      break;
    case "sub":
      resultado = num1 - num2;
      break;
    case "mult":
      resultado = num1 * num2;
      break;
    case "div":
      if (num2 === 0) {
        alert("Divisão por zero não é permitida.");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      return; // Sai da função se a operação for desconhecida
  }

  // Exibe o resultado no campo de input correspondente
  resultadoInput.value = resultado;
}

function limpar(operacao) {
  // Encontra e limpa os três campos da linha correspondente
  document.getElementById(operacao + "-v1").value = "";
  document.getElementById(operacao + "-v2").value = "";
  document.getElementById(operacao + "-resultado").value = "";
}
