var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 100);
  fixedRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect=createSprite(600, 100, 100, 50);
  movingRect.debug=true;
  movingRect.shapeColor="green";
  movingRect.velocityX=-2;
  movingRect.velocityY=0;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor="green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor="green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
//movingRect.x=mouseX;
//ovingRect.y=mouseY;
  
if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor="red";
  gameObject2.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameObject2.shapeColor="green";
}
 Bounceoff(movingRect,gameObject4); 
  drawSprites();
}

