function preload(){
  bg = loadImage("snow3.jpg");
  snow1 = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow1=createSprite(250,450,150,150);
  snow1.addAnimation("snow4.webp");
  snow1.scale=0.5;

  textSize(20); 
}

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    writePosition(-2,0);
    snow1.addAnimation("snow4.webp", snow1);
    
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(2, 0);
    snow1.addAnimation("snow4.webp",snow1);
    
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0, -2);
    snow1.addAnimation("snow4,webp",snow1);
   
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0, 2);
    snow1.addAnimation("snow4.webp",snow1);

    snow1.display();
  }}
  drawSprites();