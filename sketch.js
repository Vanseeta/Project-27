const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400, 400, 300, 30)

	bob1 = new Bob(416, 600, 4);
	bob2 = new Bob(408, 600, 4);
	bob3 = new Bob(400, 600, 4);
	bob4 = new Bob(392, 600, 4);
	bob5 = new Bob(384, 600, 4);

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0);
	rope3 = new Rope(bob3.body, roof.body, -bobDiameter*2, 0);
	rope4 = new Rope(bob4.body, roof.body, -bobDiameter*2, 0);
	rope5 = new Rope(bob5.body, roof.body, -bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-85, y:-65})
  }
}