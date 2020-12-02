const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World
var box1,box2;
var engine,world,ground;

function setup() {
  createCanvas(1600,400);

engine = Engine.create();
world=engine.world;
box1= new Box (200,200,50,50);
 ground = new Ground ( 200,380,1600,10);
 box2 = new Box(250,100,50,150 );


}

function draw() {
background(0);  

Engine.update(engine);

console.log(box2.body.position.x);
console.log(box2.body.position.y);
console.log(box2.body.angle);
//console.log(box1.body.position);
 box1.display();
ground.display();
box2.display();
// drawSprites();
}


