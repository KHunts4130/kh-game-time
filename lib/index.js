const Defender = require('./Defender');
const Game = require('./Game');
const GamePiece = require('./GamePiece');
const Missile = require('./missile.js');
const City = require('./city.js');
const vollyCount = 2;
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const cityx = 83;

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  // if (!game.cities.length) {
  //   drawCities();
  // }

  // game.multiMissile();
  if (!game.missiles.length) {
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
canvas.addEventListener('mousedown', shootDefender, false);
document.addEventListener('keydown', handleKeyPress);


function targetXY(event) {
  game.targetXY(event)

}

function shootDefender() {
    let xtarget = event.pageX;
    let ytarget = event.pageY;
    console.log('x: ' + xtarget, 'y:' + ytarget);
    new Defender(800, 706, ytarget, 5, 5, 'red');
  }

function multiMissile() {
  for (let i = 0; i < vollyCount; i++){
    game.missiles.push(new Missile(Missile.xstart, 0, 5, 5, 'white'));
    }
  } 

// function drawCity() {
//   for (let j = 0; j < 551; j+=550) {
//     for (let i = 0; i <= 56; i+=8) {
//       city.cities.push(new GamePiece(cityx + i + j, 738, 12, 75,'color');
//       city.cities.push(new GamePiece(cityx + i + j, 726, 12, 8, 'color');
//       city.cities.push(new GamePiece(cityx + i + j, 713, 25, 8, 'color');
//       city.cities.push(new GamePiece(cityx + i + j, 722, 16, 8, 'color');
//       city.cities.push(new GamePiece(cityx + i + j, 730,  8, 8, 'color');
//       city.cities.push(new GamePiece(cityx + i + j, 718, 20, 8, 'color');
//       city.cities.push(new GamePiece(cityx + i + j, 715, 23, 8, 'color');
//     }
//   }
// }

function removeMissle(removedMissle) {
  // remove this.missile from the missiles array
}


function handleKeyPress(event) {
  game.handleKeyPress(event);
}
