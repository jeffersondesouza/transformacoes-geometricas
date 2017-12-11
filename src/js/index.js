


let translacaoX = 250;
let translacaoY = 150;
let escalaX = 150;
let escalaY = 150;
let rotacaoX = 0;

let lastTranslacaoX;
let lastTranslacaoY;
let lastRotacaoX;
let lastEscalaX;
let lastEscalaY;

atualizarLastTransformations();

const canvas = document.getElementById("canvas-game-area");
const ctx = canvas.getContext("2d");


function atualizarLastTransformations() {
  lastTranslacaoX = translacaoX;
  lastTranslacaoY = translacaoY;
  lastRotacaoX = rotacaoX;
  lastRotacaoY = rotacaoY;
  lastEscalaX = escalaX;
  lastEscalaY = escalaY;
}

function desenhar() {

  ctx.clearRect(lastTranslacaoX, lastTranslacaoY, lastEscalaX, lastEscalaY);
  ctx.beginPath();

  console.log(rotacaoX, lastRotacaoX)
  if (rotacaoX > lastRotacaoX) {
    ctx.rotate(Math.abs(rotacaoX) * Math.PI / 180)

  } else {
    ctx.rotate(-1 * lastRotacaoX * Math.PI / 180)
    ctx.rotate(0)
    ctx.rotate(rotacaoX * Math.PI / 180)
  }

  ctx.fillRect(translacaoX, translacaoY, escalaX, escalaY);
  ctx.closePath();
  atualizarLastTransformations();
}

function atualizar() {

  translacaoX = document.getElementById('translacaoX').value || translacaoX;
  translacaoY = document.getElementById('translacaoY').value || translacaoY;
  rotacaoX = document.getElementById('rotacaoX').value || rotacaoX;
  escalaX = document.getElementById('escalaX').value || escalaX;
  escalaY = document.getElementById('escalaY').value || escalaY;

  desenhar();
}

function onTransformacoes() {

  document.querySelector('#botao-aplicar-transformacao')
    .addEventListener('click', (event) => {
      atualizar();
    });
}

function onReset() {
  document.querySelector('#botao-reset')
    .addEventListener('click', (event) => {
      console.log('reset')
      desenharFormGeometricaInicial();
    });
}

function inciar() {

  document.querySelector('.quadrado')
    .addEventListener('click', (event) => {
      atualizar();
    });

  onTransformacoes();
  onReset();

}

inciar();

