var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cactusgroup,cloudgroup;
var cactusimage1, cactusimage2,cactusimage3,cactusimage4,cactusimage5,cactusimage6;
var cloudimage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
   cactusimage1=loadImage("obstacle1.png");
  cactusimage2=loadImage("obstacle2.png");
  cactusimage3=loadImage("obstacle3.png");
  cactusimage4=loadImage("obstacle4.png");
  cactusimage5=loadImage("obstacle5.png");
 cactusimage6=loadImage("obstacle6.png");
  cloudimage=loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cactusgroup = new Group();
  cloudgroup= new Group ();
}

function draw() {
  background(200);
  
  if(keyDown("space") &&trex.y>150 ) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
  spawnobsticle();
  spawnclouds();
}

function spawnobsticle(){
  if(World.frameCount %60 === 0){
    var cactus = createSprite(570,160,20,30);
   // cactus.addAnimation("cactusimage")
     cactus.velocityX=-5; 
    cactus.lifetime=370;
    cactusgroup.add(cactus);
   var obsticle = Math.round(random(1,6)) ;

    switch(obsticle){
      case 1: cactus.addImage(cactusimage1);
        break;
        case 2:  cactus.addImage(cactusimage2);
        break;
        case 3:  cactus.addImage(cactusimage3);
        break;
        case 4:  cactus.addImage(cactusimage4);
        break;
        case 5:  cactus.addImage(cactusimage5);
        break;
        case 6:  cactus.addImage(cactusimage6);
        break;
        default: break;
}
    cactus.scale=0.5;  
}
}
 
function spawnclouds(){
  if(World.frameCount %50 === 0){
    var cloud = createSprite(570,30,20,20);
    cloud.addImage(cloudimage);
     cloud.velocityX=-4; 
    cloud.lifetime=370;
    cloudgroup.add(cloud);
    cloud.y = random(20,100);
    cloud.depth= trex.depth;
    trex.depth = trex.depth+2;
  }
}