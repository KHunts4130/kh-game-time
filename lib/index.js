const Defender = require('./Defender');
const GamePiece = require('./GamePiece');
const Missile = require('./missile');
const City = require('./City');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const Game = require('./Game');
const game = new Game(ctx);
const cityx = 83;
const vollyCount = 20;

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.cities.length) {
    drawCities();
  }

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

function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}


function shootDefender() {
    let pos = getMousePos(canvas, event);
    let xtarget = pos.x;
    let ytarget = pos.y;
    console.log('x: ' + xtarget, 'y:' + ytarget);
    new Defender(xtarget, ytarget, 3, 3, 'yellow');
    game.defenders.push(new Defender(695, 690, ytarget, xtarget, 10, 10, 'white'));
  }

function multiMissile() {
  game.testBlock.push(new GamePiece(600, 400, 5, 5, 'red'));
  for (let i = 0; i < vollyCount; i++){
    game.missiles.push(new Missile(Missile.xstart, 0, 5, 5, 'white'));
    }
  } 

function drawCities() {
  // var i = 0;
  // var j = 0;
  // for (let k = 0; k < 7; k++) {
  //   console.log('I: ' + i);
  //      new City(i, j, 'green');
  //      if (k < 7) {
  //       i += 8;
  //      } else {
  //       j = 550;
  //       i = 0;
        
  //    }
  // }
}
    //   city.cities.push(new GamePiece(cityx + i + j, 738, 12, 75, color);
    //   city.cities.push(new GamePiece(cityx + i + j, 726, 12, 8, color);
    //   city.cities.push(new GamePiece(cityx + i + j, 713, 25, 8, color);
    //   city.cities.push(new GamePiece(cityx + i + j, 722, 16, 8, color);
    //   city.cities.push(new GamePiece(cityx + i + j, 730,  8, 8, color);
    //   city.cities.push(new GamePiece(cityx + i + j, 718, 20, 8, color);
    //   city.cities.push(new GamePiece(cityx + i + j, 715, 23, 8, color);
    // }
     // new GamePiece(cityx + 0, 738, 12, 75, 'green'),
     //  new GamePiece(cityx + 8, 726, 12, 8, 'green'),
     //  new GamePiece(cityx + 16, 713, 25, 8, 'green'),
     //  new GamePiece(cityx + 24, 722, 16, 8, 'green'),
     //  new GamePiece(cityx + 32, 730,  8, 8, 'green'),
     //  new GamePiece(cityx + 40, 718, 20, 8, 'green'),
     //  new GamePiece(cityx + 48, 715, 23, 8, 'green'),
  


function removeMissle(removedMissle) {
  // remove this.missile from the missiles array
}


function handleKeyPress(event) {
  game.handleKeyPress(event);
}
