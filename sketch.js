var man, man_running;
var obstacle1, obstacle2, obstacle3, obstacles2, obstacles1, obstacles3;
var invisibleGround;
var background1,background2,background3;
var skeleton;
var score = 0;
var gameState = 1;
var gameOver,restart;
var ske,o1,o2,o3,o4,o5,o6,res,game,sun;

function preload(){

  man_running = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
ske = loadImage("skeleton.png");
o1 = loadImage("obstacle1.png");
o2 = loadImage("obstacle2.png");
o3 = loadImage("obstacle3.png");
o4 = loadImage("obstacle4.png");
res = loadImage("restart.png");
game = loadImage("gameOver.png");
sun = loadImage("sun.png");
img = loadImage("bg running game.png");

}

function setup() {
createCanvas(displayWidth,displayHeight);

background1 = createSprite(400,400,displayWidth*4,displayHeight);
background1.addImage("image",img);
background1.scale = 1.9
background1.velocityX = -5;

man = createSprite(100,580,20,50);
man.addAnimation("running", man_running);
man.scale = 1.3;

invisibleGround = createSprite(300,680,600,10);
invisibleGround.visible = false;

skeleton = createSprite(100,600,20,20);
skeleton.addImage(ske);
skeleton.scale = 1.2;
skeleton.visible = false;

obstacles1 = createSprite(3000,635,10,40);
obstacles1.addImage(o1);
obstacles1.scale = 0.4

obstacles2 = createSprite(2000,635,10,40);  
obstacles2.addImage(o2);
obstacles2.scale = 0.5

obstacles3 = createSprite(1000,625,10,40);
obstacles3.addImage(o3);
obstacles3.scale = 0.3
  

}

function draw() {
  background(0);

  if(gameState===1){

    score = score + Math.round(getFrameRate()/60);

    skeleton.visible = false;
    man.visible = true;

  

    skeleton.x = man.x;
    skeleton.y = man.y;

    obstacles3.velocityX = -9;
    obstacles2.velocityX = -5;
    obstacles1.velocityX = -7;
    
    if(keyDown("space")&&man.y>180) {
    man.velocityY = -10;
  } 
 
if(obstacles3.x<0){
  obstacles3.x = 1000;
}

  man.velocityY = man.velocityY + 1
   man.collide(invisibleGround)
   
   if(background1.x<370){
   background1.x = 600;
 }

  }

  if(man.isTouching(obstacles3)||man.isTouching(obstacles2)||man.isTouching(obstacles1)){
    gameState = 0;
    man.velocityX = 0;
    man.velocityY = 0;
    man.visible = false;
    obstacles1.velocityX = 0;
    obstacles2.velocityX = 0;
    obstacles1.visible = false;   
    obstacles2.visible = false;  
    skeleton.visible = true;
    skeleton.velocityY = -2;
    background1.velocityX = 0;
    gameOver = createSprite(500,300);
    gameOver.addImage(game)
  
  }

drawSprites();
textSize(50);
fill("blaCK");
text("Score: "+ score,100,150);

if(gameState===0){
  textSize(50);
  fill("blaCK");
  text("REFRESH THE PAGE TO RESTART",80,400);
}

}

