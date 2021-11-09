var PLAY = 1;
var END = 2;
var START = 0;
var gameState = START;
var score;



function preload(){
 bgImg = loadImage ("bg3.jpg")
 bgImg2 = loadImage ("bg2.jpg")
}

function setup() {
  createCanvas(2500,1582);
  //bg = createSprite(1250,796)
  //bg.addImage(bgImg);

  bg2 = createSprite(1250,750);
  bg2.addImage(bgImg2);
 bg2.scale = 1.13
 
}


function draw() {
  
  background(180);
  //displaying score
  text("Score: "+ score, 500,50);
  bg2.velocityX = -6;
  if (bg2.x < 0){
bg2.x = bg2.width/4

  }
drawSprites();
    }
    
    
   