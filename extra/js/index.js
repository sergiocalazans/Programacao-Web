async function entrar() {
  const form = document.getElementById("formulario");
  const dados = new FormData(form);
  const mensagemErro = document.getElementById("mensagem-erro");

  // Limpa a mensagem de erro anterior
  mensagemErro.textContent = "";

  try {
    const promise = await fetch("php/login.php", {
      method: "POST",
      body: dados,
    });

    if (!promise.ok) {
      throw new Error(`Erro na requisição: ${promise.status}`);
    }

    const data = await promise.json();

    // Se a resposta do PHP indicar sucesso, redireciona para a página de cadastro
    if (data.sucesso) {
      window.location.href = "html/cadastro.html";
    } else {
      console.log("Erro de login!");
      // Caso contrário, exibe a mensagem de erro
      mensagemErro.textContent = data.mensagem;
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    mensagemErro.textContent =
      "Erro ao tentar fazer login. Tente novamente mais tarde.";
  }
}
