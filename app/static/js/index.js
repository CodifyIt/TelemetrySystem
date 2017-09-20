    var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

var game = new Phaser.Game(width/3, height/3, Phaser.WEBGL,'game',true,true);

var PhaserGame = function() {
  this.bmd = null;
  // points arrays - one for x and one for y
  this.points = {
       'x': [0,(width/3)*.76, .32*(width/3), .273*(width/3),0],
    'y': [.7*(height/3), .619*(height/3), .0147*(height/3), .23*(height/3), .71*(height/3)]
  };
};

PhaserGame.prototype = {

  preload: function() {
     b=0;
     c=.01;
    game.load.crossOrigin = "Anonymous";
    game.load.image('bird', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/173252/angry-bird.png');
  },

  create: function() {


      var width1 = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
var height1 = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
    
  if(width1!=width||height!=height1||b==0)
  {

          game.world.removeAll();
    
        game.scale.setGameSize(width1/3, height1/3);
        width=width1;
        height=height1;

    this.points = {
    'x': [0,(width/3)*.76, .32*(width/3), .273*(width/3),0],
    'y': [.7*(height/3), .619*(height/3), .0147*(height/3), .23*(height/3), .71*(height/3)]
  };
  
b+=1;
c*=100;
    this.stage.backgroundColor = '#eee';
    this.increment = 1 / game.width;  
    this.i = 0;

    this.timer1Stopped = true;
    this.timer1 = null;

    // Somewhere to draw to
    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();
    // Draw the path
    for (var j = 0; j < 1; j += this.increment) {
      var posx = this.math.catmullRomInterpolation(this.points.x, j);
      var posy = this.math.catmullRomInterpolation(this.points.y, j); 
      this.bmd.rect(posx, posy, 3, 3, 'rgba(255, 255, 255, 1)');
    }
 
    this.birdSprite = game.add.sprite(100, 200, "bird");
    this.birdSprite.anchor.setTo(0.5, 0.5);


}
  
  },

  update: function() {
    // this just takes care of resetting
  // the timer so the movement repeats
        this.time.events.add(5000, this.create, this);  
    if (this.timer1Stopped) {
      this.timer1Stopped = false;
      this.timer1 = this.game.time.create(true);
      this.timer1.loop(c, this.plot, this);
      this.timer1.start();
   
    }
  },

  plot: function() {
    
    var posx = this.math.catmullRomInterpolation(this.points.x, this.i);
    var posy = this.math.catmullRomInterpolation(this.points.y, this.i);
    this.birdSprite.x = posx;
    this.birdSprite.y = posy;
    this.i += this.increment;
    if (posy >.71*(height/3) ) {
      this.timer1.stop();
      this.timer1.destroy();
      this.i = 0;
      this.timer1Stopped = true;
    }
  }

};

window.onload = function() {
  game.state.add('Game', PhaserGame, true);
}