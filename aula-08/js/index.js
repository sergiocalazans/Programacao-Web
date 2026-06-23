async function cadastrar(form) {
  var dados = new FormData(form);

  var promisse = await fetch("php/cadastro.php", {
    method: "POST",
    body: dados,
  });

  console.log(promisse);

  var resultado = await promisse.json();

  console.log(resultado);

  retorno(resultado);
}

function retorno(objeto) {
  const divRetorno = document.getElementById("retorno");

  if (objeto.status == "s") {
    document.forms["form-cadastro"].reset();
  }
  divRetorno.innerHTML = `<p class="mensagem ${objeto.status}"> ${objeto.mensagem}</p>`;
}

function validarCadastro() {
  const form = document.getElementById("form-cadastro");
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email.trim() === "" || senha.trim() === "") {
    alert("O campo E-mail e Senha é obrigatório!");
  } else if (email.includes("@") == false) {
    alert("E-mail inválido");
  } else {
    cadastrar(form);
  }
}
