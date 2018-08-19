const GamePiece = require('./GamePiece');

// let Base = [[562, 700, 100, 25, 'black'],
//            [512, 725, 200, 25, 'black'], 
//            [462, 750, 300, 25,'black']];

// extend GamePiece class
module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    
  } 


  draw(ctx) {
    const {x, y, height, width} = this;

    // call parent class draw function
    super.draw(ctx);
    console.log('draw');
    // draw base
    // this.base
    // ctx.strokeStyle = 'black';
    // ctx.fillRect(base[i]);
    } 
  }
