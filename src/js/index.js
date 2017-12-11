


let translacaoX = 500;
let translacaoY = 200;
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

  translacaoX += parseFloat(document.getElementById('translacaoX').value || 0);
  translacaoY += parseFloat(document.getElementById('translacaoY').value || 0);
  rotacaoX = parseFloat(document.getElementById('rotacaoX').value) || rotacaoX;

  escalaX = escalaX + (parseFloat(document.getElementById('escalaX').value)||0);
  escalaY = escalaY + (parseFloat(document.getElementById('escalaY').value) ||0);

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
      translacaoX = 500;
      translacaoY = 200;
      escalaX = 150;
      escalaY = 150;
      rotacaoX = 0;
      desenhar();

    });
}

function inciar() {

  atualizar();
  onTransformacoes();
  onReset();

}

inciar();

