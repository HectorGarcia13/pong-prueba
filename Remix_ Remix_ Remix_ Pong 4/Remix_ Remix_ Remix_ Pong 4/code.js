var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a2baba77-c66b-47f6-af2b-3d8d49f4e764","1ca80cf1-f7b1-467e-88ab-2b58e2f6c906","deb59e34-75cc-4c0b-bc40-166b3d1194b2"],"propsByKey":{"a2baba77-c66b-47f6-af2b-3d8d49f4e764":{"name":"pelota","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"1ca80cf1-f7b1-467e-88ab-2b58e2f6c906":{"name":"blue_robot_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8Q8NrDfBHzeffYAWdQIWl19Nw2lIkWKT/category_robots/blue_robot_1.png","frameSize":{"x":512,"y":866},"frameCount":1,"looping":true,"frameDelay":2,"version":"8Q8NrDfBHzeffYAWdQIWl19Nw2lIkWKT","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":866},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8Q8NrDfBHzeffYAWdQIWl19Nw2lIkWKT/category_robots/blue_robot_1.png"},"deb59e34-75cc-4c0b-bc40-166b3d1194b2":{"name":"kid_34_side_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJT2Opa51y3yMzlWwuPjllPe5lrtWI8N/category_people/kid_34_side.png","frameSize":{"x":202,"y":357},"frameCount":1,"looping":true,"frameDelay":2,"version":"oJT2Opa51y3yMzlWwuPjllPe5lrtWI8N","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":202,"y":357},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJT2Opa51y3yMzlWwuPjllPe5lrtWI8N/category_people/kid_34_side.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


    var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    /*
    NOTA:  SETANIMATION  sirve para agregar la animacion de la raqueta
    playerPaddle.setAnimation("kid_34_side_1");
    playerPaddle.scale= 0.2;
    */
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    /*
    NOTA: 
    computerPaddle.setAnimation("blue_robot_1_1");
    computerPaddle.scale= 0.1;
    */
    
    
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    /*
    NOTA:  
    ball.setAnimation("pelota");
    ball.scale=0.05;
   */
    
    

function draw() {
  background(220);
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=2;
     ball.velocityY=3;
  }
  
  computerPaddle.y=ball.y;

  drawnet();

    
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  
}

function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
