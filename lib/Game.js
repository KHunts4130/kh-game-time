const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(50, 50, 10, 10, 'red', 'black')
    ];
  }



  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;
    // // draw the ground with missle base
    // console.log('ground and junk');
    // ctx.strokeStyle = 'red';
    // ctx.beginPath();
    // ctx.moveTo(0, 725);
    // ctx.lineTo(75, 725);
    // ctx.lineTo(75, 775);
    // ctx.lineTo(462, 775);
    // ctx.lineTo(462, 750);
    // ctx.lineTo(512, 750);
    // ctx.lineTo(512, 725);
    // ctx.lineTo(562, 725);
    // ctx.lineTo(562, 700);
    // ctx.lineTo(662, 700);
    // ctx.lineTo(662, 725);
    // ctx.lineTo(712, 725);
    // ctx.lineTo(712, 750);
    // ctx.lineTo(762, 750);
    // ctx.lineTo(762, 775);
    // ctx.lineTo(1150, 775);
    // ctx.lineTo(1150, 725);
    // ctx.lineTo(1300, 725);
    // ctx.stroke();
    // ctx.closePath();



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