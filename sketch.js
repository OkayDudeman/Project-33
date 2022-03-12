const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var Snow1, Snow2, Snow3

function preload(){
  bg=loadImage("snow2.jpg")
  snowboy=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create()
  world = engine.world;

  snow = new Snow1(0,0,400,400)


}

function draw() {
  background(255,255,255);  
image(bg,0,0,790,390)


  drawSprites();
}