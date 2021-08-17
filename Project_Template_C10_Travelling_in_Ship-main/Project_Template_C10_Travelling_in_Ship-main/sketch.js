var ship, shipFloating
var water
function preload(){
  ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  water = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  watermoving = createSprite(200, 200)
  watermoving.addImage("moving", water)
  watermoving.scale = 0.2
  shipfloating = createSprite(200,200);
  shipfloating.addAnimation("floating", ship);
  shipfloating.scale = 0.2
}

function draw() {
  background("blue");
  drawSprites();
}