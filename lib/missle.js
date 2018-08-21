const GamePiece = require('./GamePiece');
module.exports = class Missile {

  constructor(x, y, height, width, color, dx, dy, dxv, dyv){
    this.xstart = null;
    this.ystart = 0;
    this.xtarget = null;
    this.ytarget = 800;
    // this.angle = do calculation
    // this.speed
    this.tail = [new GamePiece(x, y, 5, 5, 'black')];
  }

  draw(ctx) {
    this.tail.forEach( gamePiece => gamePiece.draw(ctx) )
  }
  moveMissile (){
    const newXY = this.findNextXY(this.tail[0].x, this.tail[0].y)
    let warHead = new GamePiece(newXY.x, newXY.y, 5, 5,'black')
    this.tail.unshift(warHead);
  }

  findNextXY(x, y) {
    return {
      x: x, 
      y: y + 5
    }
  }



}







