// Capturando elementos do DOM
//sem eventos
// const parar = document.getElementById("parar")
// parar.style.background = "red"
// const atencao = document.getElementById("atencao")
// atencao.style.background = "yellow"

//a partir de um evento
function parar() {
  document.getElementById("parar").style.background = "red";
  document.getElementById("atencao").style.background = "gray";
  document.getElementById("prosseguir").style.background = "gray";
}

function atencao() {
  document.getElementById("atencao").style.background = "yellow";
  document.getElementById("parar").style.background = "gray";
  document.getElementById("prosseguir").style.background = "gray";
}

function prosseguir() {
  document.querySelector("#prosseguir").style.background = "green";
  document.querySelector("#atencao").style.background = "gray";
  document.querySelector("#parar").style.background = "gray";
}
