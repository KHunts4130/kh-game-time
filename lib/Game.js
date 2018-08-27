const Defender = require('./Defender');
const City = require('./city');
const GamePiece = require('./GamePiece');
const Missile = require('./missile');
const cityx = 83;
let i=0;
let j=0;
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
    this.testBlock = [];
    this.missiles = [];
    this.defenders = [];
    this.cities = [];
      // new GamePiece(cityx + i + j, 738, 12, 75, 'green'),
      // new GamePiece(cityx + i + j, 726, 12, 8, 'green'),
      // new GamePiece(cityx + i + j, 713, 25, 8, 'green'),
      // new GamePiece(cityx + i + j, 722, 16, 8, 'green'),
      // new GamePiece(cityx + i + j, 730,  8, 8, 'green'),
      // new GamePiece(cityx + i + j, 718, 20, 8, 'green'),
      // new GamePiece(cityx + i + j, 715, 23, 8, 'green'),
    // ];


  //   this.cities = [
  //     // new gamePiece(x,y, height, width, color)
  //     new GamePiece(cityx + 0, 738, 12, 75, 'green'),
  //     new GamePiece(cityx + 8, 726, 12, 8, 'green'),
  //     new GamePiece(cityx + 16, 713, 25, 8, 'green'),
  //     new GamePiece(cityx + 24, 722, 16, 8, 'green'),
  //     new GamePiece(cityx + 32, 730,  8, 8, 'green'),
  //     new GamePiece(cityx + 40, 718, 20, 8, 'green'),
  //     new GamePiece(cityx + 48, 715, 23, 8, 'green'),
  //     // city 2
  //     new GamePiece(cityx + 150, 738, 12, 75, 'green'),
  //     new GamePiece(cityx + 158, 726, 12, 8, 'green'),
  //     new GamePiece(cityx + 166, 713, 25, 8, 'green'),
  //     new GamePiece(cityx + 174, 722, 16, 8, 'green'),
  //     new GamePiece(cityx + 182, 730,  8, 8, 'green'),
  //     new GamePiece(cityx + 190, 718, 20, 8, 'green'),
  //     new GamePiece(cityx + 198, 715, 23, 8, 'green'),
  //     // // city 3
  //     new GamePiece(cityx + 300, 738, 12, 75, 'green'),
  //     new GamePiece(cityx + 308, 726, 12, 8, 'green'),
  //     new GamePiece(cityx + 316, 713, 25, 8, 'green'),
  //     new GamePiece(cityx + 324, 722, 16, 8, 'green'),
  //     new GamePiece(cityx + 332, 730,  8, 8, 'green'),
  //     new GamePiece(cityx + 340, 718, 20, 8, 'green'),
  //     new GamePiece(cityx + 348, 715, 23, 8, 'green'),
  //     // // city4
  //     new GamePiece(cityx + 850, 738, 12, 75, 'green'),
  //     new GamePiece(cityx + 858, 726, 12, 8, 'green'),
  //     new GamePiece(cityx + 866, 713, 25, 8, 'green'),
  //     new GamePiece(cityx + 874, 722, 16, 8, 'green'),
  //     new GamePiece(cityx + 882, 730,  8, 8, 'green'),
  //     new GamePiece(cityx + 890, 718, 20, 8, 'green'),
  //     new GamePiece(cityx + 898, 715, 23, 8, 'green'),
  //     // city 5
  //     new GamePiece(cityx + 1000, 738, 12, 75, 'green'),
  //     new GamePiece(cityx + 1008, 726, 12, 8, 'green'),
  //     new GamePiece(cityx + 1016, 713, 25, 8, 'green'),
  //     new GamePiece(cityx + 1024, 722, 16, 8, 'green'),
  //     new GamePiece(cityx + 1032, 730,  8, 8, 'green'),
  //     new GamePiece(cityx + 1040, 718, 20, 8, 'green'),
  //     new GamePiece(cityx + 1048, 715, 23, 8, 'green'),
  //     // city 6
  //     new GamePiece(cityx + 1157, 738, 12, 75, 'green'),
  //     new GamePiece(cityx + 1165, 726, 12, 8, 'green'),
  //     new GamePiece(cityx + 1173, 713, 25, 8, 'green'),
  //     new GamePiece(cityx + 1181, 722, 16, 8, 'green'),
  //     new GamePiece(cityx + 1189, 730,  8, 8, 'green'),
  //     new GamePiece(cityx + 1197, 718, 20, 8, 'green'),
  //     new GamePiece(cityx + 1205, 715, 23, 8, 'green'),
  //   ]
  } 

  // draw one frame of our game
  animate() {

    

    const { canvas } = this.ctx;
    this.ground.forEach(gamePiece => {
      gamePiece.draw(this.ctx)
    })

    this.testBlock.forEach(gamePiece => {
      gamePiece.draw(this.ctx)
    })


    this.base.forEach(gamePiece => {
      gamePiece.draw(this.ctx)
    })

    this.defenders.forEach( defender => {
      defender.draw(this.ctx)

      defender.moveDefender();
    })

    this.missiles.forEach( missile => { 
      missile.draw(this.ctx)
     
      missile.moveMissile();
      missile.isCollidingWithGround();

      // if missile should explode set explode property
    })

    // use filter to only return the missiles which are not exploded


    this.cities.forEach( city => {
      city.draw(this.ctx)
    });
  
  
    // this.missiles.forEach( missile => {

    //   if (missile.isCollidingWithGround()) {
    //     this.endGame();  

    //   } else {
    //    return
    //   }
      
    // //   block.draw(this.ctx);
    // // })
    // }
  
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

  // targetXY() {
  //   let xtarget = event.pageX;
  //   let ytarget = event.pageY;
  //   console.log('x: ' + xtarget, 'y:' + ytarget);
  // }

  


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