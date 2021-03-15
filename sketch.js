var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new paper(100,230,15)
	ground = new Ground(400,250,800,10)
	bottom = new DustBin(675,185,50,50)
	side1 = new Side(620,185,10,100)
	side2 = new Side(725,185,10,100)
	                                                            

}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  ground.display();
  bottom.display();
  side1.display();
  side2.display();
  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.Body,ball.Body.position,{x:34,y:-34});
	}
}



