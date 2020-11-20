
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FG, OG
var score=0
var ground;
var gameState="Play";


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
M();
  
  
  BG=createGroup();
 OG=createGroup();
  
  ground=createSprite(0,350,800,10);  

}

  
 


function draw() {
background("lightgreen");
  
if(gameState==="Play"){
  if(keyDown("space")){
    monkey.velocityY=-5;
  }
 
  monkey.velocityY=monkey.velocityY+0.3;
  
  ground.x=ground.x/2;
  
  ground.velocityX=-5;
  
monkey.collide(ground);
  
  if(monkey.isTouching(BG)){
   BG.destroyEach();
    score=score+2;
  }
  
 
  
  B();
  O();
  
 
  
}  
  
 if(monkey.isTouching(OG)){
   gameState="end";
   OG.destroyEach();
   BG.destroyEach();
   monkey.destroy();
   ground.destroy();
   fill("yellow");
   text("gameOver",150,200);
   textSize=30;
 }
  

  
  
 
  
drawSprites();  
  
  text("score :"+score,300,50)
  textSize=50;
}

function M (){
  monkey=createSprite(40,300);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15;

}

function B(){
  if(frameCount%200===0){
    banana=createSprite(400,100);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-2
  banana.y=Math.round(random(100,250)); 
  banana.lifetime=390;
  BG.add(banana);  
  }
 
}

function O(){
  if(frameCount%300===0){
    obstacle=createSprite(400,325);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-1;
    obstacle.lifetime=390;
    OG.add(obstacle);
  }
}
