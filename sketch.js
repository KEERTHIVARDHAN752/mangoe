
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, groundObject, stone, boy;

function preload()
{
boy = loadImage("Plucking+mangoes/Plucking mangoes/boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(600,475,100,200);
	groundObject=new Ground(width/2,670,width,20);
	stone = new Stone(400,500,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy, 100,600,70,80);
  drawSprites();
 tree.display();
 groundObject.display();
 stone.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


