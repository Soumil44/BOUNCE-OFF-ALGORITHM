function setup() {
  createCanvas(800,800);
  fixed_rect = createSprite(400, 200, 50, 50);
  fixed_rect.shapeColor = "green";
  moving_rect = createSprite(400, 700, 50, 50);
  moving_rect.shapeColor = "red";

  fixed_rect.velocityY = 2;
  moving_rect.velocityY = -2;
}

function draw() {
  background(255,255,255);  
  if(moving_rect.x - fixed_rect.x < moving_rect.width/2 + fixed_rect.width/2 &&
     fixed_rect.x - moving_rect.x < moving_rect.width/2 + fixed_rect.width/2 ){
      moving_rect.velocityX = moving_rect.velocityX * (-1);
      fixed_rect.velocityX = fixed_rect.velocityX * (-1);


     }

     if(moving_rect.y - fixed_rect.y < moving_rect.height/2 + fixed_rect.height/2 &&
      fixed_rect.y - moving_rect.y < moving_rect.height/2 + fixed_rect.height/2 ){
       moving_rect.velocityY = moving_rect.velocityY * (-1);
       fixed_rect.velocityY = fixed_rect.velocityY * (-1);
 

      }

  drawSprites();
}