const translacaoInitX = 0;
const translacaoInitY = 0;
const rotacaoInitX = 0;
const rotacaoInitY = 0;
const escalaInitX = 150;
const escalaInitY = 150;



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
// Iniciar(); 


function onTransformacoes() {
  document.querySelector('#botao-aplicar-transformacao')
    .addEventListener('click', (event) => {
      console.log('transformação')

    });
}

function onReset() {
  document.querySelector('#botao-reset')
    .addEventListener('click', (event) => {
      console.log('reset')

    });
}

function inciar() {
  onTransformacoes();
  onReset();

}

(function () {
  inciar();
})();