var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52;
var ghost1img, ghost2img;
var player1img, player2img;
var backgroundimg;
var powerpimg, speedpimg;
var player1;
var ghostgrp, powergrp, speedgrp;

var ghostSprite;
var speedCoin;
var playerHealth = 5;
var powercoin;
var speedcoincollision = 0;

function preload(){
  ghost1img = loadImage("./Images/ghost1.png");
  ghost2img = loadImage("./Images/ghost2.png");
  player1img = loadImage("./Images/player1.png");
  player2img = loadImage("./Images/player2.png");
  backgroundimg = loadImage("./Images/bg.jpg");
  speedpimg = loadImage("./Images/SpeedPoint.png");
  powerpimg = loadImage("./Images/PowerPoint.png");
}

function setup() {
  createCanvas(800,875);

  player1 = createSprite(100,70);
  player1.addImage("player",player1img);
  player1.scale = 0.125
  ghostgrp = createGroup();
  powergrp = createGroup();
  speedgrp = createGroup();

  player1.debug = false;
  player1.setCollider("circle",0,50,100);

  wall1 = createSprite(550,60,800,20);
  wall2 = createSprite(10,60,100,20);
  wall3 = createSprite(400,740,800,20);
  wall4 = createSprite(10,400,20,700);
  wall5 = createSprite(790,250,20,600);
  wall6 = createSprite(790,680,20,100);
  wall7 = createSprite(310,100,20,100);
  wall8 = createSprite(550,150,20,170);
  wall9 = createSprite(760,225,90,20);
  wall10 = createSprite(160,100,20,100);
  wall11 = createSprite(120,140,100,20);
  wall12 = createSprite(50,530,100,20);
  wall13 = createSprite(190,210,380,20);
  wall14 = createSprite(240,160,20,100);
  wall15 = createSprite(370,250,20,100);
  wall16 = createSprite(505,290,260,20);
  wall17 = createSprite(460,210,20,155);
  wall18 = createSprite(630,265,20,240);
  wall19 = createSprite(672,135,105,20);
  wall20 = createSprite(675,375,75,20);
  wall21 = createSprite(703,320,20,90);
  wall22 = createSprite(710,680,175,20);
  wall23 = createSprite(633,590,20,200);
  wall24 = createSprite(685,620,85,20);
  wall25 = createSprite(600,535,50,20);
  wall26 = createSprite(740,540,80,20);
  wall27 = createSprite(710,480,20,100);
  wall28 = createSprite(90,665,20,160);
  wall29 = createSprite(355,680,415,20);
  wall30 = createSprite(553,650,20,65);
  wall31 = createSprite(525,627,50,20);
  wall32 = createSprite(510,560,20,135);
  wall33 = createSprite(645,440,150,20);
  wall34 = createSprite(267,590,375,20);
  wall35 = createSprite(445,560,20,50);
  wall36 = createSprite(150,535,20,125);
  wall37 = createSprite(127,475,130,20);
  wall38 = createSprite(72,450,20,40);
  wall39 = createSprite(560,452.5,20,45);
  wall40 = createSprite(420,485,300,20);
  wall41 = createSprite(260,462,20,150);
  wall42 = createSprite(230,527,50,20);
  wall43 = createSprite(220,397,175,20);
  wall44 = createSprite(125,382,20,50);
  wall45 = createSprite(105,360,60,20);
  wall46 = createSprite(75,333,20,75);
  wall47 = createSprite(150,286,170,20);
  wall48 = createSprite(225,310,20,60);
  wall49 = createSprite(317.5,382,20,50);
  wall50 = createSprite(422,350,230,20);
  wall51 = createSprite(390,390,20,70);
  wall52 = createSprite(465,390,20,70);


  speedCoin = createSprite(274,263,50,50)
  speedCoin.addImage(speedpimg);
  speedCoin.scale = 0.05;

  powercoin = createSprite()

  ghostpos = [
    {x:334, y:109, image:ghost1img},
    {x:50, y:690, image:ghost2img},
    {x:398, y:262, image:ghost1img},
    {x:670, y:346, image:ghost2img},
    {x:113, y:326, image:ghost1img},
    {x:300, y:446, image:ghost2img},
    {x:700, y:715, image:ghost1img},
    {x:750, y:514, image:ghost2img},
    {x:660, y:600, image:ghost1img},
    {x:500, y:387, image:ghost2img},
  
  ]
} 


function draw() {
  background(0);  
  fill ("red");
  text (mouseX+','+mouseY,mouseX,mouseY);

  if(keyIsDown(UP_ARROW)){
    player1.y -=5
  }
  if(keyIsDown(DOWN_ARROW)){
    player1.y +=5
  }
  if(keyIsDown(LEFT_ARROW)){
    player1.x -=5
  }
  if(keyIsDown(RIGHT_ARROW)){
    player1.x +=5
  }

  player1.collide(wall1);
  player1.collide(wall2);
  player1.collide(wall3);
  player1.collide(wall4);
  player1.collide(wall5);
  player1.collide(wall6);
  player1.collide(wall7);
  player1.collide(wall8);
  player1.collide(wall9);
  player1.collide(wall10);
  player1.collide(wall11);
  player1.collide(wall12);
  player1.collide(wall13);
  player1.collide(wall14);
  player1.collide(wall15);
  player1.collide(wall16);
  player1.collide(wall17);
  player1.collide(wall18);
  player1.collide(wall19);
  player1.collide(wall20);
  player1.collide(wall21);
  player1.collide(wall22);
  player1.collide(wall23);
  player1.collide(wall24);
  player1.collide(wall25);
  player1.collide(wall26);
  player1.collide(wall27);
  player1.collide(wall28);
  player1.collide(wall29);
  player1.collide(wall30);
  player1.collide(wall31);
  player1.collide(wall32);  
  player1.collide(wall33);
  player1.collide(wall34);
  player1.collide(wall35);
  player1.collide(wall36);
  player1.collide(wall37);
  player1.collide(wall38);
  player1.collide(wall39);
  player1.collide(wall40);
  player1.collide(wall41);
  player1.collide(wall42);
  player1.collide(wall43);
  player1.collide(wall44);
  player1.collide(wall45);
  player1.collide(wall46);
  player1.collide(wall47);
  player1.collide(wall48);
  player1.collide(wall49);
  player1.collide(wall50);


    if(frameCount%10 ===0){
    addSprites(ghostgrp,10,ghost1img,0.1,ghostpos);
    }
 // SpawnGhosts();

    if(player1.collide(speedCoin)){
      speedCoin.destroy();
      var speedcoincollision = +1;
    }

    if(speedcoincollision === 1){
      
      if(keyIsDown(UP_ARROW)){
        player1.y -=7.5
      }
      if(keyIsDown(DOWN_ARROW)){
        player1.y +=7.5
      }
      if(keyIsDown(LEFT_ARROW)){
        player1.x -=7.5
      }
      if(keyIsDown(RIGHT_ARROW)){
        player1.x +=7.5
      }

    }

    if(player1.collide(ghostgrp)){
      playerHealth -=1
      console.log(playerHealth)
    }
  drawSprites();
}



/*function SpawnGhosts(){
    if(frameCount % 100 === 0){
      ghostSprite = createSprite(random(0,600),random(0,600),25,25);
      var rand = Math.round(random(1,2));
      switch(rand){
        case 1 : ghostSprite.addImage(ghost2img);
        break ; 
        case 2 : ghostSprite.addImage(ghost1img);
        break ;
      }
      ghostSprite.scale = 0.1;
    }
}*/


function addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
  for (var i = 0; i < numberOfSprites; i++) {
    var x, y;


    if (positions.length > 0) {
      x = positions[i].x;
      y = positions[i].y;
      spriteImage = positions[i].image;
    } else {
      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 4.5, height - 400);
    }
    var sprite = createSprite(x, y);
    sprite.addImage("sprite", spriteImage);
    
    sprite.scale = scale;
    spriteGroup.add(sprite);
  }
}