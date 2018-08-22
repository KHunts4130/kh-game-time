const GamePiece = require('./GamePiece');
const Missile = require('./missile.js');
module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx; 
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.ground = [
      new GamePiece(0, 750, 50, 1400, 'red'),
      new GamePiece(0, 715, 35, 80, 'red'),
      new GamePiece(1320, 715, 35, 80, 'red'),
    ];
    this.base = [
      new GamePiece(649,700, 25, 100, 'red'),
      new GamePiece(600, 725, 25, 200, 'red'),
      new GamePiece(549, 750, 25, 300, 'red'),
    ]

    this.missiles = [
      new Missile(Missile.xstart, 0, 5, 5, 'black'),
      new Missile(Missile.xstart, 0, 5, 5, 'black'),
      new Missile(Missile.xstart, 0, 5, 5, 'black'),
      new Missile(Missile.xstart, 0, 5, 5, 'black'),
      new Missile(Missile.xstart, 0, 5, 5, 'black'),]
      
  }




  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;
    this.ground.forEach(gamePiece => {
      gamePiece.draw(this.ctx)
    })

    this.base.forEach(gamePiece => {
      gamePiece.draw(this.ctx)
    })

    
      this.missiles.forEach( missile => { 
      missile.draw(this.ctx)
     
      missile.moveMissile()
    });
  
  // };
    // this.blocks.forEach( block => {

    //   if (block.isCollidingWithWall(canvas.width, canvas.height)) {
    //     this.endGame();  

    //   } else {
    //     block.move();
    //   }
      
    //   block.draw(this.ctx);
    // })
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  targetXY() {
    let xtarget = event.pageX;
    let ytarget = event.pageY;
  }


  handleKeyPress(e) {
    // add keypress actions for shoot missle (space bar)

    // const direction = {
    //   dx: 0,
    //   dy: 0
    // };

    // if (e.key === 'ArrowRight') {
    //   direction.dx = 1;

    // } else if (e.key === 'ArrowLeft') {
    //   direction.dx = -1;

    // } else if (e.key === 'ArrowDown') {
    //   direction.dy = 1;

    // } else if (e.key === 'ArrowUp') {
    //   direction.dy = -1;
    // } 

    // this.blocks.forEach( block => block.changeDirection(direction) );
  }

}