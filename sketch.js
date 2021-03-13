var paper, ground, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2, 650, width, 10 );

	paper = new Paper(180, 350, 30);

	dustBin1 = new Dustbin(570, 644, 90, 20);
	dustBin2 = new Dustbin(615, 617, 20, 75);
	dustBin3 = new Dustbin(525, 617, 20, 75); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  //console.log(paper.x);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
       Matter.Body.applyForce(paper.body, paper.body.position, {x:110,y:-125});
	}

}



