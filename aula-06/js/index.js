// var lista =
// [
//     {icone: "<i class='fa-brands fa-twitter'></i>", titulo: "TWITTER", desc: "desc 1"},
//     {icone: "<i class='fa-brands fa-instagram'></i>", titulo: "INSTAGRAM", desc: "desc 2"},
//     {icone: "<i class='fa-brands fa-youtube'></i>", titulo: "YOUTUBE", desc: "desc 3"}
// ];

// for(var i = 0; i < lista.length; i++){

//     var card =
//         `<div class="card">
//             <div class="card-icone">
//                 ${lista[i].icone}
//             </div>
//             <div class="card-titulo">
//                 ${lista[i].titulo}
//             </div>
//             <div class="card-desc">
//                 ${lista[i].desc}
//             </div>
//             <div class="card-acao">
//                 <button>
//                     READ MORE
//                 </button>
//             </div>
//         </div>`;

//     document.getElementById("lista-cards").innerHTML += card;
// }

const listaCards = document.getElementById("lista-cards");

// const redesSociais = [
//   [
//     "YOUTUBE", "INSTAGRAM", "TIKTOK",
//     "YouTube é uma plataforma de compartilhamento de vídeos que pertence a Google.",
//     "Instagram é uma rede social online de compartilhamento de fotos e vídeos entre os seus usuários.",
//     "TikTok é um aplicativo de mídia para criar e compartilhar vídeos curtos."
//   ],
// ];

let redesSociais = [
  {
    titulo: "youtube",
    desc: "YouTube é uma plataforma de compartilhamento de vídeos que pertence a Google.",
  },
  {
    titulo: "instagram",
    desc: "Instagram é uma rede social online de compartilhamento de fotos e vídeos entre os seus usuários.",
  },
  {
    titulo: "tiktok",
    desc: "TikTok é um aplicativo de mídia para criar e compartilhar vídeos curtos.",
  },
];

function criarCards(elemento, objeto) {
  for (let i = 0; i < objeto.length; i++) {
    const elementoCard = document.createElement("button");
    elementoCard.classList.add("card");
    let textoTitulo = `${objeto[i].titulo}`;
    elementoCard.setAttribute("id", `${textoTitulo}`);

    const elementoDivIcon = document.createElement("div");
    const elementoIcon = document.createElement("i");
    elementoDivIcon.classList.add("card-icon");
    elementoIcon.classList.add("fa-brands");
    elementoIcon.classList.toggle(`fa-${textoTitulo}`);
    elementoDivIcon.appendChild(elementoIcon);
    elementoCard.appendChild(elementoDivIcon);

    const elementoTitulo = document.createElement("h2");
    elementoTitulo.textContent = textoTitulo.toUpperCase();
    elementoCard.appendChild(elementoTitulo);

    const elementoParagrafo = document.createElement("p");
    elementoParagrafo.textContent = `${objeto[i].desc}`;
    elementoCard.appendChild(elementoParagrafo);

    const elementoBotao = document.createElement("button");
    elementoBotao.textContent = "READ MORE";
    elementoBotao.classList.add("card-botao");
    elementoCard.appendChild(elementoBotao);

    elemento.appendChild(elementoCard);
    console.log(elementoCard);
  }
}

criarCards(listaCards, redesSociais);

const botoes = document.querySelectorAll("button.card-botao");

botoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    let texto = btn.parentElement.querySelector("h2").textContent;
    window.open(`https://www.${texto}.com`, "_blank");
  });
});
