//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
var log1;
var pig1;
function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //creating a variable engine that can be manipulated/controlled
  world = engine.world;
  ground= new Ground(200,390,400,20);
  
  //New object from the Box class
  box1 = new Box(200, 300, 50, 50); //new --> new object
  box2 = new Box(240, 100, 50, 100);
  log1= new  Log(100,300,100, PI/2);
  pig1= new Pig(200, 200);

 
}

function draw() {
  background(0);  

  Engine.update(engine);
  
  box1.display();
  
  box2.display();

  ground.display();

  log1.display();

  pig1.display();

}

/*
ANGLE
  - degrees
  - radians - more accurate

  degrees - 0 - 360
  pi = 22/7

  radians = 0 - 2pi rad

  360 deg = 2pi rad
  180 deg = pi rad
  90 deg = pi/2 rad
  60 deg = pi/3 rad
  45 deg = pi/4 rad
  30 deg = pi/6 rad
*/