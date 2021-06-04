const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10,box11,box12, box13, box14;
var player;
var ground1, ground2, ground3;

var box15, box16, box17, box18, box19, box20, box21;
var box22;
var sling;
var player;

var ball;
var img;

function preload(){
  img = loadImage("hexagon .png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  box1 = new Box(600,260,30,40);
  box2 = new Block(570,260,30,40);
  box3 = new Block(540,260,30,40);
  box4 = new Block(630,260,30,40);
  box5 = new Block(660,260,30,40);



  box6 = new Block(585,220,30,40);
  box7 = new Block(555,220,30,40);
  box8 = new Block(615,220,30,40);
  box9 = new Block(645,220,30,40);



  box10 = new Block(600,170,30,40);
  box11 = new Block(570,180,30,40);
  box12 = new Block(630,180,30,40);


  box13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  box14 = new Box(900,170,30,40);
  box15 = new Box(930,170,30,40);
  box16 = new Box(870,170,30,40);
  box17 = new Box(840,170,30,40);
  box18 = new Box(960,170,30,40);

  box19 = new Box(900,140,30,40);
  box20 = new Box(930,140,30,40);
  box21 = new Box(870,140,30,40);

  box22 = new Box(900,110,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Slingshot(this.ball,{x:150, y:160});

}

function draw() {
  background("grey");
  Engine.update(engine);

  fill(rgb(135, 205, 236));

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  fill("lightBlue");
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill("lightPink");
  box10.display();
  box11.display();
  box12.display();
  fill(rgb(47, 48, 48));

  box13.display();

  fill(rgb(135, 205, 236));
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill("lightGreen");

  box19.display();
  box20.display();
  box21.display();
  fill("lime");

  box22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(player.body,{x:235, y:420})
		chain.attach(player.body);
	}
}
