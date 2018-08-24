const GamePiece = require('./GamePiece');
const quadrantAngle = 1.5708;
module.exports = class Missile {

  constructor(x, y, height, width, color){
    this.color = color;
    this.xstart = Math.random() * 1400;
    this.ystart = 0;
    this.xend = Math.random() * (1400 - 80) + 80;
    this.adjacent = 800;
    this.opposite = this.xstart - this.xend;
    this.radians = (Math.atan2(this.opposite, this.adjacent) + quadrantAngle );
    this.speed = 3;
    this.id = Date.now();
    this.explode = false;
    this.tail = [new GamePiece(this.xstart, this.ystart, 5, 5, this.color)];
  }

  draw(ctx) {
    
    this.tail.forEach( gamePiece => gamePiece.draw(ctx) )
  }

  moveMissile (){
    const newXY = this.findNextXY(this.tail[0].x, this.tail[0].y, this.radians, this.speed)
    let warHead = new GamePiece(newXY.x, newXY.y, 5, 5, this.color)
    this.tail.unshift(warHead);
    // if (newXY.y > 774) {
    //   let removedMissle = this.missile;
    //   removeMissle(removedMissle);
    // }
  }

  findNextXY(x, y, radians, speed) {
    
    return {
      x: x + Math.cos(this.radians) * this.speed,
      y: y + Math.sin(this.radians) * this.speed,
    }
  }
}




