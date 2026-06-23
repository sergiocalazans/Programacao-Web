function encontrarMaior() {
  // 1. Pega os elementos do HTML pelos seus IDs
  const inputValor1 = document.getElementById("valor1");
  const inputValor2 = document.getElementById("valor2");

  // 2. Pega os valores digitados e converte de texto (string) para número inteiro
  const num1 = parseInt(inputValor1.value);
  const num2 = parseInt(inputValor2.value);

  // 3. Verifica se os valores são números válidos
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, digite dois números válidos.");
    return; // Para a execução da função se os valores não forem números
  }

  // 4. Compara os números e mostra o resultado em um alerta
  if (num1 > num2) {
    alert("O maior valor é: " + num1);
  } else if (num2 > num1) {
    alert("O maior valor é: " + num2);
  } else {
    alert("Os valores são iguais.");
  }
}
