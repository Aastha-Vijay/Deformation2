var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(20, 200, 50, 50);
  car.shapeColor="white";
  wall=createSprite(750,200,40,120);
  
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;

}

function draw() {
  background("black");  

  if(car.isTouching(wall)){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;
    if(deformation<100){
      car.shapeColor="green";
    }

    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }

    if(deformation>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}