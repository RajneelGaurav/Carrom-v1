class WhiteBead {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5,
        'isStatic':true
      };
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 25;
      this.height = 25;
  
      this.image=loadImage("white.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };