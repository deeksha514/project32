const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var ground,sling;
var hexagon,hexagonimage;
var score=0;
var backgroundImg;

var bg = "morningIm.png";

function preload(){
hexagonimage=loadImage("hexagon1.png");
getBackgroundImg();
}

function setup() {


	engine = Engine.create();
	world = engine.world;

  createCanvas(1200,800);
  box1=new Box(500,465,40,40);
  box2=new Box(540,465,40,40);
  box3=new Box(580,465,40,40);
  box4=new Box(620,465,40,40);
  box5=new Box(660,465,40,40);
  box6=new Box(520,425,40,40);
  box7=new Box(560,425,40,40);
  box8=new Box(600,425,40,40);
  box9=new Box(640,425,40,40);
  box10=new Box(540,385,40,40);
  box11=new Box(580,385,40,40);
  box12=new Box(620,385,40,40);
  box13=new Box(560,345,40,40);
  box14=new Box(600,345,40,40);
  box15=new Box(580,305,40,40);
  
  hexagon=Bodies.rectangle(100,100,50,50);
  //hexagon.addImage(hexagonimage);
  World.add(world,hexagon);

  ground=new Ground(580,490,220,10);

  sling= new SlingShot(this.hexagon,{x:100,y:400});

 // Engine.run(engine);

}

function draw() {
  if(backgroundImg)
     background(backgroundImg);

  Engine.update(engine);
  textSize(30);
  text("Score:"+score,540,120);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();

  sling.display();

  ground.display();

  image(hexagonimage,hexagon.position.x,hexagon.position.y,50,50);
  //drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(this.hexagon, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode===32){
    sling.attach(this.hexagon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);

  if(hour>=06 && hour<=19){
    bg = "morningIm.png";
  }
  else{
    bg = "nightImage.png";
  }

  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
}