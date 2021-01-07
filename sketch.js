var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, packageoption;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageoption = { isStatic : true, restitution : 0.5};
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageoption);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//create red box
	box1 = new Box(width/2, height-50, 200, 20);
	box1.width = 200;
	box1.height = 20;
	box2 = new Box(width/2 - 110, height-90, 20, 100);
	box2.width = 20;
	box2.height = 100;
	box3 = new Box(width/2 + 110, height-90, 20, 100); 
	box3.width = 20;
	box3.height = 100;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  box1.display();
  box2.display();
  box3.display();

  
  keyPressed();
  drawSprites();
 
}


function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
    packageoption = { isStatic : false, restitution : 0.5};
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageoption);
	World.add(world, packageBody);
  }
}



