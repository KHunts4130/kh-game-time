const GamePiece = require('./GamePiece');


module.exports = class Defender {

  constructor(x = 800, y = 706, ytarget, xtarget, height, width, color) {
    this.x = x;
    this.y = y;
    this.ytarget = ytarget;
    this.xtargert = xtarget;
    this.width = width;
    this.height = height;
    this.color = color;
    this.adjacent = this.x - xtarget;
    this.opposite = this.y - this.ytarget;
    this.radians = (Math.atan2(this.opposite, this.adjacent));
    this.speed = 7;
    this.id = Date.now();
    this.explode = false;
    this.head = [new GamePiece(this.x, this.y, this.width, this.height, this.color)];

  }
  draw(ctx) {
    // console.log("this y:" + this.color);
    this.head.forEach( gamePiece => gamePiece.draw(ctx) )
}

  moveDefender(){

    const newXY = this.defenderNextXY(this.head[0].x, this.head[0].y, this.radians, this.speed)
    if (newXY.x === this.xtarget && newXY.y === thisytarget) {
      this.head = [];
    }
    let defender = new GamePiece(newXY.x, newXY.y, this.width, this.height, this.color)

    this.head.splice(0, 1, defender);
    
  }

  defenderNextXY(x, y, radians, speed) {
    // console.log('radians: ' + this.radians);
    // console.log('X: ' + this.x);
    // console.log('Y: ' + this.y);

    return {
      x: x - Math.cos(this.radians) * this.speed,
      y: y - Math.sin(this.radians) * this.speed,
    }
  }



}
