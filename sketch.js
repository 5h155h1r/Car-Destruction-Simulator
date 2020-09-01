var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var d1, d2, d3, d4;


function setup() {
  createCanvas(1600,400);
  car1 = createSprite(50, 50, 50, 25);
  car2 = createSprite(50, 150, 50, 25);
  car3 = createSprite(
    50, 250, 50, 25);
  car4 = createSprite(50, 350, 50, 25);
  wall1 = createSprite(1500, 50, 25, 50);
  wall2 = createSprite(1500, 150, 25, 50);
  wall3 = createSprite(1500, 250, 25, 50);
  wall4 = createSprite(1500, 350, 25, 50);
}

function draw() {
  background(255,255,255); 
  
  if(keyDown("space")){
car1.velocityX = 2
car2.velocityX = 2
car3.velocityX = 2
car4.velocityX = 2
  }

 if ( wall1.x - car1.x  < (car1.width + wall1.width)/2){
     car1.velocityX = 0
     d1 = 0.5 * 1780 * 40 * 40 / 22509
     if (d1 < 100){
         car1.shapeColor = "#76EE00" 
     }  else if (d1 > 100 && d1 < 180){
         car1.shapeColor = "#ffff00"
     } else if (d1 > 180){
         car1.shapeColor = (255,0,0)  
     }
    }

     if ( wall2.x - car2.x  < (car2.width + wall2.width)/2){
      car2.velocityX = 0
      d2 = 0.5 * 2380 * 60 * 60 / 22509
      if (d2 < 100){
          car2.shapeColor = "#76EE00"
      }  else if (d2 > 100 && d2 < 180){
          car2.shapeColor = "#ffff00"
      } else if (d2 > 180){
          car2.shapeColor = "#FF0000"  
      }
    }

      if ( wall3.x - car3.x  < (car3.width + wall3.width)/2){
        car3.velocityX = 0
        d3 = 0.5 * 3310 * 50 * 50 / 22509
        if (d3 < 100){
            car3.shapeColor = "#76EE00"
        }  else if (d3 > 100 && d3 < 180){
            car3.shapeColor = "#ffff00"
        } else if (d3 > 180){
            car3.shapeColor = "#FF0000" 
        }
      }

        if (wall4.x -  car4.x  < (car4.width + wall4.width)/2){
          car4.velocityX = 0
          d4 = 0.5 * 3888 * 45 * 45 / 22509
          if (d4 < 100){
              car4.shapeColor = "#76EE00"
          }  else if (d4 > 100 && d4 < 180){
              car4.shapeColor = "#ffff00"
          } else if (d3 > 180){
              car4.shapeColor = "#FF0000"  
          }
        }

  drawSprites();
}