const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx; 
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.blocks = [
      new Block(50, 50, 10, 10, 'red', 'black')
    ];
  }



  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;
    this.ctx.fillStyle = "red";
    // main bottom ground rectange
    this.ctx.fillRect(0, 750, 1400, 50);
    // left bottom ground rectange
    this.ctx.fillRect(0, 715, 80, 35);
    // right bottom ground rectange
    this.ctx.fillRect(1320, 715, 80, 35)

    // the ace of Base
    this.ctx.fillRect(649, 700, 100, 25)
    this.ctx.fillRect(600, 725, 200, 25)
    this.ctx.fillRect(549, 750, 300, 25)

    
    // for (let i = 0; i < 4; i++){
    //   this.ctx.strokeStyle = "black";
    //   this.ctx.fillRect(block.base[i]);
    // } 


    // this.blocks.forEach( block => {

    //   if (block.isCollidingWithWall(canvas.width, canvas.height)) {
    //     this.endGame();  

    //   } else {
    //     block.move();
    //   }
      
    //   block.draw(this.ctx);
    // })
  }

  missileTrajectory() {
    // const is going to be a hard intiger. 
    const da = floor.y - ceiling.y:
    let adjacent = ceiling.x
    let db = adjacent.x - ground.x;
    let dc = math.sqr((da * da) + (db * db))

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

    console.log('X: ' + xtarget);
    console.log('Y: ' + ytarget);

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