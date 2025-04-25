var id = 0;

var img = document.querySelector("#img");
var nivel = document.querySelector("#nivel");
var nome = document.querySelector("#nome");

//Request inicial da api

fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((data) => {
    img.src = data[id].img;
    nivel.textContent = data[id].level;
    nome.textContent = data[id].name;
  });

//Prev e Next Digimon

const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

btnNext.addEventListener("click", function () {
  id++;
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((data) => {
      img.src = data[id].img;
      nivel.textContent = data[id].level;
      nome.textContent = data[id].name;
    });

  if (id > 0) {
    btnPrev.style.background = "#dce4d8";
    btnPrev.style.cursor = "pointer";
  }
});

btnPrev.addEventListener("click", function () {
  id--;
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((data) => {
      img.src = data[id].img;
      nivel.textContent = data[id].level;
      nome.textContent = data[id].name;
    });

  if (id == 0) {
    btnPrev.style.background = "#dce4d870";
    btnPrev.style.cursor = "default";
  }
});

//Pesquisa de  Digimon

const barraPesquisa = document.querySelector("#input");
const btnPesquisa = document.querySelector("#pesquisar");

//Função que realiza a pesquisa
function pesquisarDigimon() {
  const nomePesquisa = barraPesquisa.value;

  fetch(`https://digimon-api.vercel.app/api/digimon/name/${nomePesquisa}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img.src = data[0].img;
      nivel.textContent = data[0].level;
      nome.textContent = data[0].name;
    });

  barraPesquisa.value = "";
}

//Pesquisa através do clique do botão
btnPesquisa.addEventListener("click", pesquisarDigimon);

//Pesquisa através da tecla Enter
barraPesquisa.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pesquisarDigimon();
  }
});
