async function relatorio() {
  var form = document.getElementById("formulario");

  try {
    const promise = await fetch("../php/relatorio.php", {
      method: "GET",
    });

    if (!promise.ok) {
      throw new Error(`HTTP error! status: ${promise.status}`);
    }

    const data = await promise.json();
    console.log(data);

    // Seleciona apenas o corpo da tabela
    const tabelaBody = document.getElementById("tabela-body");

    // Limpa apenas o tbody (mantém o cabeçalho)
    tabelaBody.innerHTML = "";

    // Percorre todos os registros vindos do PHP
    data.forEach((aluno) => {
      const newRow = tabelaBody.insertRow();

      newRow.insertCell(0).innerHTML = aluno.id;
      newRow.insertCell(1).innerHTML = aluno.Nome;
      newRow.insertCell(2).innerHTML = aluno.Sobrenome;
      newRow.insertCell(3).innerHTML = aluno.Email;
      newRow.insertCell(4).innerHTML = aluno.Matricula;
      newRow.insertCell(5).innerHTML = aluno.Curso;
      newRow.insertCell(6).innerHTML = new Date(
        aluno.DataNascimento + "T00:00:00"
      ).toLocaleDateString("pt-BR");
      newRow.insertCell(7).innerHTML = aluno.Idade;
    });

    // Limpa o formulário após o envio (se existir)
    if (form) form.reset();
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

function recarregar() {
  window.location.reload();
}
