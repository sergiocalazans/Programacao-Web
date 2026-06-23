window.onload = async () => {
  var resposta = await fetch("../php/principal.php", {
    method: "GET",
  });
  console.log(resposta);

  var dados = await resposta.json();
  console.log(dados);

  const tabela = document.getElementById("tabela-corpo");

  for (let i = 0; i < dados.length; i++) {
    var html = `<tr>
    <th>${dados[i].id_usuario}</th>
    <td>${dados[i].email}</td>
    </tr>`;

    tabela.innerHTML += html;
  }
};

console.log("View executada");

function atualizar() {
  location.reload();
}
