var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var man, manImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"



function preload(){
    towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  manImg = loadImage("man-standing.png");
  spookySound = loadSound("spooky.wav");

}

function setup() {
    createCanvas(600,600);
    spookySound.loop();
    tower = createSprite(300,300);
    tower.addImage("tower",towerImg);
    tower.velocityY = 1;
    
    doorsGroup = new Group();
    climbersGroup = new Group();
    invisibleBlockGroup = new Group();
    
    man = createSprite(200,200,50,50);
    man.scale = 0.3;
    man.addImage("man", manImg);
}

function draw() {
    background(255);
    if(tower.y >400 ){
         tower.y = 300
       } 
     
     if (gameState === "play") {
       
       if(keyDown("left_arrow")){
           man.x = man.x - 3;
          
         // write a code to move left when left arrow is pressed
       }
       if(keyDown("right_arrow")){
     
             man.x = man.x + 3;
   
         // write a code to move left when right arrow is pressed
         
       }
       if(keyDown("space")){
     
            man.velocityY = -10;
   
         // write a code to move up when space arrow is pressed
         
       }
     
     man.velocityY = man.velocityY + 0.8;
     
      
         //write a condition for infinte scrolling tower
         if(climbersGroup.isTouching(man)){
           man.velocityY=0;
         }
         if(invisibleBlockGroup.isTouching(man)||man.y>600){
           man.destroy();
           manState="end";
         }
         spawnDoors();
   
     
   //write a code to make invisibleBlockGroup collide with man destroy the ghost and make gamestate to end.
        
     
       
     
     drawSprites();
   }
     if (gameState === "end"){
       stroke("yellow");
       fill("yellow");
       textSize(30);
       text("Game Over", 230,250)
     }
}
function spawnDoors()
 {
    //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the man and door
    
     
man.depth = door.depth;
    man.depth += 1;
    
    //assign lifetime for the  door, climber and invisible block
    
   door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
      //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}
