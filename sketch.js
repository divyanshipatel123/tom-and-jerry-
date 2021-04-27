var mouse;
var mouse1,mouse2,mouse3;
var cat;
var cat1,cat2,cat3;
var backgroundImg;


function preload() {

    //load the images here
   backgroundImg=loadImage("images/garden.png")

    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")
    

    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse3.png","images/mouse2.png")
    mouse3=loadAnimation("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat= createSprite(800,650,500,300);
   cat.addAnimation('kitten',cat1);
   cat.scale=0.18;

   mouse=createSprite(150,650,50,200);
   mouse.addAnimation('rat',mouse1)
   mouse.scale=0.15;
}

function draw() {

    background(backgroundImg);

    

    //Write condition here to evalute if tom and jerry collide
   if(cat.x - mouse.x <= cat.width/0.5 - mouse.width/0.5){
    keyPressed();
   }

    drawSprites();
}


function keyPressed(){
  
 //to stop the cat and inspectind mouse art anmation (after teasing of the rat the cat will come and to stop it this code is written)
  cat.velocityX=0;
  cat.addAnimation('kitten',cat3);
  mouse.addAnimation('rat',mouse3);

  // teasing animation and giving velocity to the cat 
 if(keyDown(LEFT_ARROW)){
    mouse.addAnimation('rat',mouse2);
    cat.addAnimation('kitten',cat2);
    cat.velocityX=-8;
   }

  
 }


