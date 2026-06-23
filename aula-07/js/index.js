async function cadastrar(form) {
  var dados = new FormData(form);

  var promisse = await fetch("php/cadastro.php", {
    method: "POST",
    body: dados,
  });

  console.log(promisse);

  var resultado = await promisse.json();

  console.log(resultado);

  const divMoeda = document.getElementById("moeda");
  const textoMoeda = document.createElement("p");
  textoMoeda.innerHTML = `A moeda do páis de origem é: ${resultado.moeda}`;
  divMoeda.appendChild(textoMoeda);

  document.forms["formCadastro"].reset();
}

async function validarCadastro() {
  const form = document.getElementById("formCadastro");
  const nome = form.querySelector("#nome").value;
  const sobrenome = form.querySelector("#sobrenome").value;
  const pais = form.querySelector("#pais-origem");
  pais.value = pais.value.toUpperCase();

  if (nome.trim() === "" || sobrenome.trim() === "") {
    alert("O campo nome, sobrenome e o país de origem é obrigatório!");
  } else if (pais.value != "Brasil" || pais.value != "Estados Unidos") {
    let resposta = prompt("Esse país é da União Europeia? (S/N)");

    if (resposta == "S") {
      pais.value = "Europa";
    }

    enviarCadastro(form);
  } else {
    enviarCadastro(form);
  }
}

function enviarCadastro(form) {
  console.log("O formulário foi enviado!");
  cadastrar(form);
}
