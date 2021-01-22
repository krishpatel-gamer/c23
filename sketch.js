 var box1,box2;
 var ground1;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,160,30,30);
    box2 = new Box(150,140,40,50);
    ground1 = new Ground(200,390,400,40);
}

function draw(){
    background(0);
    Engine.update(engine);
  box1.display() ; 
  box2.display();
  ground1.display();
}