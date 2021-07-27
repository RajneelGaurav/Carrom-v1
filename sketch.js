const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onSling"; 
var bgImg;
var queen;


function preload()
{
 bgImg = loadImage("bg.png");
 queenImg = loadImage("red.png")


}
function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  //create a red bead (queen)
  queen=createSprite(400, 350, 50, 50);
  queen.scale=0.06;
  queen.addImage(queenImg);

  
  striker=new Striker(400,490);
  
  slingshot = new SlingShot(striker.body,{x:400, y:560});
  //south
  white1 = new WhiteBead(400,378);
  //north west
  white2 = new WhiteBead(375,335);
  //north east
  white3 = new WhiteBead(422,335);
  //south east
  white4 = new WhiteBead(446,375);
  //north east east
  white5 = new WhiteBead(445,325);
  //south south
  white6 = new WhiteBead(400,403);
  //west west
  white7 = new WhiteBead(351,326);
  //north
  white8 = new WhiteBead(398,298);
  // south west
  white9 = new WhiteBead(353,377);
  
  //north
  black1 = new BlackBead(400,323);
  //south west
  black2 = new BlackBead(375,360);
  //south east
  black3 = new BlackBead(425,362);
  black4 = new BlackBead(425,390);
  black5 = new BlackBead(450,350);
  black6 = new BlackBead(421,308);
  //north west
  black7 = new BlackBead(375,310);
  //south west up
  black8 = new BlackBead(350,353);
  //south west down
  black9 = new BlackBead(377,387);
 

}

function draw() {

  Engine.update(engine);
  background(bgImg);
 
striker.display();
slingshot.display();
white1.display();
white2.display();
white3.display();
white4.display();
white5.display();
white6.display();
white7.display();
white8.display();
white9.display();

black1.display();
black2.display();
black3.display();
black4.display();
black5.display();
black6.display();
black7.display();
black8.display();
black9.display();

queen.display();


}
// function keyPressed()
// {
//  if(keyCode===39)
//  {
  
//    Matter.Body.translate(striker.body,{x:0,y:5})
//    Matter.Body.setStatic(striker.body,false)
//  } 
 
//  if(keyCode===37)
//  {
 
//   Matter.Body.translate(striker.body,{x:0,y:-5})
//   Matter.Body.setStatic(striker.body,false)
//  } 
//  if(keyCode===32)
//  {
  
//   //Matter.Body.applyForce(striker.body,striker.body.position,{x:5,y:5})
//   Matter.Body.setStatic(striker.body,false)
// }   
// }

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}