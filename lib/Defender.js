const GamePiece = require('./GamePiece');


module.exports = class Defender {

  constructor(x = 800, y = 706, ytarget, height, width, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ytarget = ytarget
    this.color = color;
    this.adjacent = y - this.ytarget;
    this.opposite = this.y - this.ytarget;
    this.radians = (Math.atan2(this.opposite, this.adjacent));
    this.speed = 6;
    this.id = Date.now();
    this.explode = false;
    this.head = [new GamePiece(this.x, this.y, this.width, this.height, this.color)];

  }
  draw(ctx) {
    console.log("this y:" + this.color);
    this.head.forEach( gamePiece => gamePiece.draw(ctx) )
}

  moveDefender(){

    const newXY = this.defenderNextXY(this.head[0].x, this.head[0].y, this.radians, this.speed)
    let defender = new GamePiece(newXY.x, newXY.y, this.width, this.height, this.color)
    this.head.splice(0, 1, defender);
  }

  defenderNextXY(x, y, radians, speed) {
    console.log('radians: ' + this.radians);
    return {
      x: x + Math.cos(this.radians) * this.speed,
      y: y - Math.sin(this.radians) * this.speed,
    }
  }



}
