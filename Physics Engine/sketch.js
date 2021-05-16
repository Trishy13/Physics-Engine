const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myWorld, myEngine;

function setup(){
createCanvas(600,600);

myEngine=Engine.create();
myWorld=myEngine.world;

box1=Bodies.rectangle(200,360,50,50);
World.add(myWorld,box1);

var gr={
  isStatic :true
}

ground=Bodies.rectangle(300,590,600,20,gr); 
World.add(myWorld,ground);
}

function draw(){
Engine.update(myEngine);

background(201,100,306,420);

rectMode(CENTER);
rect(box1.position.x,box1.position.y,50,50);
rect(ground.position.x,ground.position.y,600,20);
}