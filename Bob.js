class Bob {
    constructor(x,y){
    var options = {
        isStatic: flase
    }

    this.body = Bodies.circle(x,y,radius,options);
    World.add(world, this.body);
    }
    
    display() {
      var pos =this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(4);
      fill("blue");
      rect(pos.x, pos.y,radius);
    }
  };