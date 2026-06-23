
// Exercício 1
async function cadastrar() {
    const form = document.getElementById("form-cadastro");
    var dados = new FormData(form);

    await fetch("index.php", {
        method: "POST",
        body: dados
    });

    alert("Dados Cadastrados");

    location.reload();

}


// Exercício 2
window.onload = async () => {

    var retorno = await fetch("index.php", {
        method: "GET",
    });

    var objeto = await retorno.json();

    console.log(objeto);
    mostrar(objeto);

}


function mostrar(objeto) {
    const tabela = document.getElementById("tabela-corpo");
    for(let i = 0; i < objeto.length; i++){
        console.log(objeto[i]);
        tabela.innerHTML += `
        
        <tr>
            <td>${objeto[i].id_produto}</td>
            <td>${objeto[i].nome}</td>
            <td>${objeto[i].descricao}</td>
            <td>${objeto[i].preco}</td>
        </tr>
        
        `;
    }
}