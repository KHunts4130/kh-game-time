const Game = require('./Game');
const Missile = require('./missile.js');
const vollyCount = 7;
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  // game.multiMissile();
  if (!game.missiles.length) {
    console.log('empty missile array!');
    multiMissile();
  }

  if (game.isOver()) {
    console.log('Game Over');

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
canvas.addEventListener('mousedown', targetXY, false);
document.addEventListener('keydown', handleKeyPress);

function targetXY(event) {
  game.targetXY(event)
}

function multiMissile() {
  for (let i = 1; i < vollyCount; i++){
    game.missiles.push(new Missile(Missile.xstart, 0, 5, 5, 'white'));
    }
  } 


function handleKeyPress(event) {
  game.handleKeyPress(event);
}
