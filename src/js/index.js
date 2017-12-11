

/* 
const ctx = getCanvasContext('canvas-game-area');
drawRect(ctx, translacaoInitX, translacaoInitX, escalaInitX, escalaInitX);


let rotacaoX = document.getElementById('rotacaoX').value;
let rotacaoY = document.getElementById('rotacaoY').value;
let escalaX = document.getElementById('escalaX').value;
let escalaY = document.getElementById('escalaY').value;


ctx.fillRect(0, 0, escalaInitX, escalaInitX);

document.querySelector('#botao-aplicar-transformacao')
  .addEventListener('click', (event) => {

    let translacaoX = document.getElementById('translacaoX').value;
    let translacaoY = document.getElementById('translacaoY').value;

    ctx.clearRect(0, 0, escalaInitX, escalaInitX);
    ctx.fillRect(0, 0, escalaInitX, escalaInitX);
    ctx.clearRect(0, 0, escalaInitX, escalaInitX);

    ctx.fillRect(translacaoX, translacaoY, escalaInitX, escalaInitX);

    ctx.translate(translacaoX, translacaoY)

  })

const botaoAplicar;
const botaoReset;

 */



/* 
var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 5;//a tava de variação (velocidade) horizontal do objeto
var dy = 5;//a tava de variação (velocidade) vertical do objeto
var x = 250;//posição horizontal do objeto (com valor inicial)
var y = 100;//posição vertical do objeto (com valor inicial)
var WIDTH = 500;//largura da área retangular
var HEIGHT = 200;//altura da área retangular


function Desenhar() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, true);
  ctx.fill();
}

function LimparTela() {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.rect(0, 0, WIDTH, HEIGHT);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function KeyDown(evt) {
  console.log('sd')
  switch (evt.keyCode) {
    case 38:
      if (y - dy > 0) {
        y -= dy;
      }
      break;
    case 40:
      if (y + dy < HEIGHT) {
        y += dy;
      }
      break;
    case 37:
      if (x - dx > 0) {
        x -= dx;
      }
      break;
    case 39:
      if (x + dx < WIDTH) {
        x += dx;
      }
      break;
  }
}

function Atualizar() {
  LimparTela();
  Desenhar();
}

function Iniciar() {
  canvas = document.getElementById("canvas-game-area");
  ctx = canvas.getContext("2d");
  console.log(ctx)
  return setInterval(Atualizar, 10);
}
 */
/* window.addEventListener('keydown', KeyDown, true);
*/


let translacaoX = 250;
let translacaoY = 150;
let escalaX = 150;
let escalaY = 150;
let rotacaoX = 0;
let rotacaoY = 0;

let lastTranslacaoX;
let lastTranslacaoY;
let lastRotacaoX;
let lastRotacaoY;
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
  ctx.rotate(0)
  
  ctx.beginPath();
  ctx.rotate(rotacaoX*Math.PI/180)
  ctx.fillRect(translacaoX, translacaoY, escalaX, escalaY);
  ctx.closePath();
  atualizarLastTransformations();
}

function atualizar() {

  translacaoX = document.getElementById('translacaoX').value || translacaoX;
  translacaoY = document.getElementById('translacaoY').value || translacaoY;
  rotacaoX = document.getElementById('rotacaoX').value || rotacaoX;
  rotacaoY = document.getElementById('rotacaoY').value || rotacaoY;
  escalaX = document.getElementById('escalaX').value || escalaX;
  escalaY = document.getElementById('escalaY').value || escalaY;


  //limparTela();
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













/* var canvas = document.getElementById("canvas-game-area");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;



function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}

setInterval(draw, 10); */