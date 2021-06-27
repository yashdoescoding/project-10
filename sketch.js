var ground, groundImage;
var ship, ship_run;
function preload(){
groundImage = loadImage("sea.png");
  
ship_run=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  
}

function setup(){
  createCanvas(400,400);
  ground = createSprite(500,0,400,400);
  ground.addImage(groundImage);
  ground.scale = 0.5;
  ground.velocityX = -4;
   ship=createSprite(200,200)
  ship.addAnimation("ship",ship_run)
ship.scale=0.25

}

function draw() {
  background("black");
 if (ground.x<0){
   ground.x = ground.width/2
 }
 
  drawSprites();
}