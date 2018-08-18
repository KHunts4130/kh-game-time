const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {
   // draw the ground 

    
    ctx.fillStyle = "red";
    // main bottom ground rectange
    ctx.fillRect(0, 750, 1400, 50);
    // left bottom ground rectange
    ctx.fillRect(0, 715, 80, 35);
    // right bottom ground rectange
    ctx.fillRect(1320, 715, 80, 35);
    
    


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
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}
