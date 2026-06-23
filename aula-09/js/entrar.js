async function entrar() {
  var form = document.getElementById("form-entrar");
  var form_dados = new FormData(form);

  var retorno = await fetch("../php/entrar.php", {
    method: "POST",
    body: form_dados,
  });

  var dados = await retorno.json();

  if (dados.resposta == 1) {
    //alert(dados.mensagem);
    window.location.href = "../cadastrar/cadastrar.html";
  } else {
    alert(dados.mensagem);
  }
}
