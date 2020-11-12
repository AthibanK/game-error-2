var startSprite, startPageImage, edges;
var startSpriteImage;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var normalEnemy1,normalEnemy2,normalEnemy3;
var player;
var gameState;
var normalSprite;
var easySprite;
var hardSprite;
var veryhardSprite;
var intenseSprite;
var treasure;
var invisibleWall1,invisibleWall2,invisibleWall3,invisibleWall4,invisibleWall5,invisibleWall6;
var subGameState;
var normalLevelButton;
var hardLevelButton;
var hardEnemy1;

function preload(){
    startPageImage = loadImage('images/start page.jpg');
    startSpriteImage = loadImage('images/levels.jpg');
}

function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
    gameState = "start";
    subGameState = 0;
    edges = createEdgeSprites();

}

function draw(){

    //console.log(easySprite);
    if(gameState === "start"){
        imageMode(CENTER);
        
        image(startPageImage,width/2,height/2,width,height);
        //startSprite = createSprite(width/2,height/2);
        //startSprite.shapeColor = "blue";
        image(startSpriteImage,width/2,height/2,width,height/2);
        easySprite = createSprite(width/2,height/2-120,width/3,50);
        easySprite.visible = false;
        normalSprite = createSprite(width/2,height/2-64,width/3,50);
        normalSprite.visible = false;
    
        if(mousePressedOver(easySprite)){
            gameState="easy";
            //console.log("Hi");
            easyLevelSprites();
            subGameState = 1;
            //startSprite.visible = false;
            clear();
        }
      
        //console.log(gameState);
    }
    else if(gameState==="easy" && subGameState===1){
        background(0,255,128);
      
        normalEnemy1.bounceOff(invisibleWall1);
        normalEnemy1.bounceOff(invisibleWall2);
        normalEnemy2.bounceOff(invisibleWall3);
        normalEnemy2.bounceOff(invisibleWall4);
        normalEnemy3.bounceOff(invisibleWall5);
        normalEnemy3.bounceOff(invisibleWall6);
        player.collide(edges);
       /* if(keyDown("k") && player.x = normalEnemy1.x && player.y = normalEnemy1.y){
            normalEnemy1.hide();
        }
        if(keyDown("k") && player.x = normalEnemy2.x && player.y = normalEnemy2.y){
            normalEnemy2.hide();
        }*/
        if(keyDown(UP_ARROW)){
            player.velocityY = -5;
            player.velocityX = 0;
        }
        if(keyWentUp(UP_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(keyDown(DOWN_ARROW)){
            player.velocityY = 5;
            player.velocityX = 0;
        }
        if(keyWentUp(DOWN_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(keyDown(RIGHT_ARROW)){
            player.velocityY = 0;
            player.velocityX = 5;
        }
        if(keyWentUp(RIGHT_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(keyDown(LEFT_ARROW)){
            player.velocityY = 0;
            player.velocityX = -5;
        }
        if(keyWentUp(LEFT_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(player.collide(treasure)){
            text("YOU GOT THE TREASURE!",400,400);
          
            normalLevelButton = createButton("NEXT LEVEL");
            normalLevelButton.position(450,500)
            normalLevelButton.mousePressed(()=>{
                gameState = "beginner";
                subGameState = 1;
                
            })
            
        }
    }
    if(mousePressedOver(normalSprite)){
        gameState = "beginner";
        normalLevelSprites();
        subGameState = 1;
        clear();
    }
    else if(gameState==="beginner" && subGameState===1 || mousePressedOver(normalLevelButton)){
        background(255,51,51);
      normalLevelButton.visible = false;
        normalEnemy1.bounceOff(invisibleWall1);
        normalEnemy1.bounceOff(invisibleWall2);
        normalEnemy2.bounceOff(invisibleWall3);
        normalEnemy2.bounceOff(invisibleWall4);
        hardEnemy1.bounceOff(invisibleWall5);
        hardEnemy1.bounceOff(invisibleWall6);
        player.collide(edges);
       /* if(keyDown("k") && player.x = normalEnemy1.x && player.y = normalEnemy1.y){
            normalEnemy1.hide();
        }
        if(keyDown("k") && player.x = normalEnemy2.x && player.y = normalEnemy2.y){
            normalEnemy2.hide();
        }*/
        if(keyDown(UP_ARROW)){
            player.velocityY = -5;
            player.velocityX = 0;
        }
        if(keyWentUp(UP_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(keyDown(DOWN_ARROW)){
            player.velocityY = 5;
            player.velocityX = 0;
        }
        if(keyWentUp(DOWN_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(keyDown(RIGHT_ARROW)){
            player.velocityY = 0;
            player.velocityX = 5;
        }
        if(keyWentUp(RIGHT_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(keyDown(LEFT_ARROW)){
            player.velocityY = 0;
            player.velocityX = -5;
        }
        if(keyWentUp(LEFT_ARROW)){
            player.velocityX = 0;
            player.velocityY = 0;
        }
        if(player.collide(treasure)){
            text("YOU GOT THE TREASURE!",400,400);
          
            hardLevelButton = createButton("NEXT LEVEL");
            hardLevelButton.position(450,500)
            hardLevelButton.mousePressed(()=>{
                gameState = "hard";
                subGameState = 1;
                
            })
            
        }
    }
    
    drawSprites();
    fill("red");
    textSize(16);
    text(mouseX+","+mouseY,mouseX,mouseY);
}
  /*hide(){
    normalEnemy1.hide();
    normalEnemy2.hide();
  }*/
  function easyLevelSprites(){
    player = createSprite(50,100,10,10);
    player.shapeColor = "red";
    normalEnemy1 = createSprite(250,100,10,10);
    normalEnemy1.velocityX = -7;
    normalEnemy2 = createSprite(450,300,10,10);
    normalEnemy2.velocityY = 7;
    normalEnemy3 = createSprite(800,600,10,10);
    normalEnemy3.velocityX = 7;
    wall1 = createSprite(100,height-250,200,40);
    
    wall2 = createSprite(300,height-400,50,200);
    wall3 = createSprite(400,250,50,17);
    wall4 = createSprite(750,300,20,75);
    wall5 = createSprite(100,550,50,17);
    wall6 = createSprite(870,600,20,75);
    wall7 = createSprite(500,750,50,17);
    wall8 = createSprite(650,550,20,75);
    wall9 = createSprite(380,600,50,17);
    wall10 = createSprite(350,800,20,75);
    treasure = createSprite(970,15,20,10);
    treasure.shapeColor = "yellow";
    invisibleWall1 = createSprite(210,100,10,10);
    invisibleWall1.visible = false;
    invisibleWall2 = createSprite(290,100,10,10);
    invisibleWall2.visible = false;
    invisibleWall3 = createSprite(450,260,10,10);
    invisibleWall3.visible = false;
    invisibleWall4 = createSprite(450,340,10,10);
    invisibleWall4.visible = false;
    invisibleWall5 = createSprite(760,600,10,10);
    invisibleWall5.visible = false;
    invisibleWall6 = createSprite(840,600,10,10);
    invisibleWall6.visible = false;
  }
  function normalLevelSprites(){
    player = createSprite(50,100,10,10);
    player.shapeColor = "red";
    normalEnemy1 = createSprite(250,100,10,10);
    normalEnemy1.velocityX = -7;
    normalEnemy2 = createSprite(450,300,10,10);
    normalEnemy2.velocityY = 7;
    hardEnemy1 = createSprite(800,600,10,10);
    hardEnemy1.velocityX = 7;
    wall1 = createSprite(100,height-250,200,40);
    wall2 = createSprite(300,height-400,50,200);
    wall3 = createSprite(400,250,50,17);
    wall4 = createSprite(750,300,20,75);
    wall5 = createSprite(100,550,50,17);
    wall6 = createSprite(870,600,20,75);
    wall7 = createSprite(500,750,50,17);
    wall8 = createSprite(650,550,20,75);
    wall9 = createSprite(380,600,50,17);
    wall10 = createSprite(350,800,20,75);
    treasure = createSprite(970,15,20,10);
    treasure.shapeColor = "yellow";
    invisibleWall1 = createSprite(210,100,10,10);
    invisibleWall1.visible = false;
    invisibleWall2 = createSprite(290,100,10,10);
    invisibleWall2.visible = false;
    invisibleWall3 = createSprite(450,260,10,10);
    invisibleWall3.visible = false;
    invisibleWall4 = createSprite(450,340,10,10);
    invisibleWall4.visible = false;
    invisibleWall5 = createSprite(760,600,10,10);
    invisibleWall5.visible = false;
    invisibleWall6 = createSprite(840,600,10,10);
    invisibleWall6.visible = false;
  }
  function hardLevelSprites{
      
  }