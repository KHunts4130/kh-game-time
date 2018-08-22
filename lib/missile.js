const GamePiece = require('./GamePiece');
module.exports = class Missile {

  constructor(x, y, height, width, color, opposite, adjacent, speed){
    this.xstart = Math.random() * 1400;
    this.ystart = 0;
    this.xend = Math.random() * (1400 -80) + 80;
    this.adjacent = 800;
    this.opposite = Math.abs(this.xstart - this.xend);
    this.radians = Math.atan2(this.opposite, this.adjacent);
    this.angle = this.radians * 180 / Math.PI;
    this.speed = 3;
    this.tail = [new GamePiece(this.xstart, this.ystart, 5, 5, 'white')];
  }

  draw(ctx) {
    
    this.tail.forEach( gamePiece => gamePiece.draw(ctx) )
  }

  moveMissile (){
    const newXY = this.findNextXY(this.tail[0].x, this.tail[0].y, this.radians, this.speed)
    let warHead = new GamePiece(newXY.x, newXY.y, 5, 5,'white')
    this.tail.unshift(warHead);
    // if (newXY.y > 774) {
    //   console.log('hit the ground');
    // }
  }

  findNextXY(x, y, radians, speed) {
    console.log('Angle: ' + this.angle);
    console.log('xstart: ' + this.xstart);
    console.log('xend: ' + this.xend);
    console.log('opposite: ' + this.opposite);
    return {
      x: x + Math.cos(this.radians) * this.speed,
      y: y + Math.sin(this.radians) * this.speed,
    }
  }
}




