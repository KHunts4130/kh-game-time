const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    
  } 

  // let base = [[562, 700, 100, 25, 'black'],
  //            [512, 725, 200, 25, 'black'], 
  //            [462, 750, 300, 25,'black']];

  draw(ctx) {
    const {x, y, height, width} = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = Color;
    ctx.fillRect();
  }
}