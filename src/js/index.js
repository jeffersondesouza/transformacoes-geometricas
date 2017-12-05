const translacaoInitX = 0;
const translacaoInitY = 0;
const rotacaoInitX = 0;
const rotacaoInitY = 0;
const escalaInitX = 150;
const escalaInitY = 150;


function getCanvasContext(canvasId) {
  const canvasGameArea = document.getElementById(canvasId);
  const ctx = canvasGameArea.getContext('2d');
  return ctx;
}

function drawRect(ctx, coordX, coordY, scaleX, scaleY) {
  return ctx.fillRect(coordX, coordY, scaleX, scaleY)
}

function drawCircle() {

}


// 'canvas-game-area'

(function () {
  const ctx = getCanvasContext('canvas-game-area');
  drawRect(ctx, translacaoInitX, translacaoInitX, escalaInitX, escalaInitX);



  document.querySelector('#botao-aplicar-transformacao')
    .addEventListener('click', (event) => {
      ctx.clearRect(translacaoInitX, translacaoInitX, escalaInitX, escalaInitX)

      ctx.fillRect(translacaoInitX+100, translacaoInitX, escalaInitX, escalaInitX)

      console.log(document);
    })


  const translacaoX = document.getElementById('translacaoX');
  const translacaoY = document.getElementById('translacaoY').value;
  const rotacaoX = document.getElementById('rotacaoX').value;
  const rotacaoY = document.getElementById('rotacaoY').value;
  const escalaX = document.getElementById('escalaX').value;
  const escalaY = document.getElementById('escalaY').value;
  /* 
  const botaoAplicar;
  const botaoReset;
  */






})();
