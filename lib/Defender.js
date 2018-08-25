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

  }
  draw(ctx) {
    
    this.defender( gamePiece => gamePiece.draw(ctx) )
}

  moveDefender (){
    const newXY = this.findNextXY(this.defender.x, this.defender.y, this.radians, this.speed)
    let defender = new GamePiece(newXY.x, newXY.y, this.width, this.height, this.color)
  }

  findNextXY(x, y, radians, speed) {
    
    return {
      x: x + Math.cos(this.radians) * this.speed,
      y: y + Math.sin(this.radians) * this.speed,
    }
  }



}