var player ,player1;
var obstacle1 , obstacle2;
var obstacle01 , obstacle02 ; 
var ball;
var background;

function preload (){
player1= loadImage("../images/player.jpeg");
obstacle01 = loadImage("../images/cube.jpeg");
obstacle02 = loadImage("../images/dash.jpeg");
}
function setup() {
  createCanvas(800,400);
  

player= createSprite(200,200,10,10);
player.addImage("player",player1);
player.scale=0.5;

spawnObstacles();




}

function draw() {
  background(255,255,255);  

  drawSprites();
}

function spawnObstacles(){
if (frameCount%40===0){
  var obstacle= createSprite(350,250,10,10); 
  obstacle.velocityX=6;
 var rand = Math.round(random(1,2));
 switch(rand){
case 1: obstacle.addImage(obstacle01);
break;
case 2: obstacle.addImage(obstacle02);
break;
default:break;
 }
 obstacle.scale=0.5;
  }

}


