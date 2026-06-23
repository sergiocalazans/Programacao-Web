// Função auxiliar para pegar e converter os valores
function obterValores() {
  const num1 = parseInt(document.getElementById("valor1").value);
  const num2 = parseInt(document.getElementById("valor2").value);

  // Validação para garantir que temos dois números
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, digite dois números válidos.");
    return null; // Retorna nulo se houver erro
  }
  return { n1: num1, n2: num2 };
}

function somar() {
  const valores = obterValores();
  if (valores) {
    // Só executa se obterValores não retornou nulo
    const resultado = valores.n1 + valores.n2;
    alert("Resultado da Soma: " + resultado);
  }
}

function subtrair() {
  const valores = obterValores();
  if (valores) {
    const resultado = valores.n1 - valores.n2;
    alert("Resultado da Subtração: " + resultado);
  }
}

function multiplicar() {
  const valores = obterValores();
  if (valores) {
    const resultado = valores.n1 * valores.n2;
    alert("Resultado da Multiplicação: " + resultado);
  }
}

function dividir() {
  const valores = obterValores();
  if (valores) {
    if (valores.n2 === 0) {
      alert("Não é possível dividir por zero!");
      return;
    }
    const resultado = valores.n1 / valores.n2;
    alert("Resultado da Divisão: " + resultado);
  }
}
