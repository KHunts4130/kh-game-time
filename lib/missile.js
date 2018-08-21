const GamePiece = require('./GamePiece');
module.exports = class Missile {

  constructor(x, y, height, width, color, opposite, adjacent, speed){
    this.xstart = null;
    this.ystart = 0;
    this.xend = null;
    this.yend = 800;
    // this.angle = Math.atan(opposite/adjacent) * 180 / Math.PI;
    // this.radians = Math.atan(opposite/adjacent);
    // this.speed = speed;
    this.tail = [new GamePiece(x, y, 5, 5, 'black')];
  }

  draw(ctx) {
    this.tail.forEach( gamePiece => gamePiece.draw(ctx) )
  }
  moveMissile (){
    const newXY = this.findNextXY(this.tail[0].x, this.tail[0].y, this.radians, this.speed)
    let warHead = new GamePiece(newXY.x, newXY.y, 5, 5,'black')
    this.tail.unshift(warHead);
  }

  findNextXY(x, y, radians, speed) {
    return {
      x: Math.cos(radians) * speed;
      y: Math.sin(radians) * speed;
      // x: x + 3, 
      // y: y + 3
    }
  }
}
//     const da = 750;
//     let adjacent = ceiling.x
//     let db = adjacent.x - ground.x;
//     let dc = Math.sqrt((da * da) + (db * db))

//     // get the angle of vector in radians
//     let theta = Math.cos(db/dc);





