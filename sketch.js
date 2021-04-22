const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var ground
var box1,box2

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  //createSprite(400, 200, 50, 50);
  box1=new Box(240,300,50,50)
  box2=new Box(200,100,50,100)
  ground=new Ground(400,390,width,20)

}

function draw() {
  background(0,200,0);
  Engine.update(engine)  
  // drawSprites();
 ground.display()
 box1.display()
 box2.display()
}