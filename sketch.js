const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myEngine,myWorld;
var box1,box2,box3,box4,box5;
var ground1;
var pig1,pig2;
var bird;
var logs1,logs2,logs3,logs4;
function preload(){
  backgroundImage=loadImage("sprites/bg.png");

}
function setup() {
  createCanvas(1200,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground1=new Ground();
  


  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);

  pig1 = new Pig(810,320);
  pig2 = new Pig(810,240);

  bird = new Bird(100,100);
  
  logs1 = new Logs(810,260,300,PI/2);
  logs2 = new Logs(810,238,300,PI/2);
  logs3 = new Logs(760,120,150,PI/7);
  logs4 = new Logs(870,120,150,-PI/7);
  

}
function draw() {
  background(backgroundImage);
 Engine.update(myEngine);  



 ground1.alok();

 logs1.display();
 logs2.display();
 logs3.display();
 logs4.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 
 pig1.display();
 pig2.display();

 bird.display();

 

}