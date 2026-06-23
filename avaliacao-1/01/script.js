console.log("Olá");

var lista = [
    {
        disciplina: "Programação Web", professor: "Eduardo Lino"
    },
    {
        disciplina: "Experiência Criativa", professor: "Luiz Pavão"
    },
    {
        disciplina: "Arq. de Banco de Dados", professor: "Mateus Nunes"
    }
]

const divCards = document.getElementById("cards");

for (let i = 0; i < lista.length; i++) {

    var conteudo = `
    <div class="card">
        <div class="card-topo">
            <div class="card-pucpr">
                <img src="#" alt="Imagem da PUCPR" />
                <p>ESCOLA <strong>POLITÉCNICA PUCPR</strong></p>
            </div>
            <div class="card-professor">
                <p><strong>${lista[i].professor}</strong></p>
            </div>
        </div>
        <div class="card-corpo">
            <div class="card-titulo">
                <p><strong>${lista[i].disciplina}</strong></p>
            </div>
            <div class="card-desc">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat in maxime nemo facere, quis quaerat distinctio, 
                velit ipsum magnam magni quod ut repellat placeat? 
                Consectetur ea facilis neque similique consequuntur?
                </p>
            </div>
        </div>
        <div class="card-rodape">
            <div class="card-trajetoria">
                <i class="fa-solid fa-bullseye"></i>
                <p>Trajetória</p>
            </div>
            <div class="card-simulados">
                <i class="fa-solid fa-book-open"></i>
                <p>Simulados</p>
            </div>
            <div class="card-ranking">
                <i class="fa-solid fa-star"></i>
                <p>Ranking</p>
            </div>
            <div class="card-meus-dados">
                <i class="fa-solid fa-user"></i>
                <p>Meus Dados</p>
            </div>
        </div>
    </div>
    
    `;

    divCards.innerHTML += conteudo;
}