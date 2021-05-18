var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight = 300;
var score = 0;
var clickCount = 0;

var gameState;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  /* if (frameCount % 60 === 0) {
    particles.push(
      new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10)
    );
    score++;
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }*/

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //particle.display();

  noStroke();
  textSize(30);
  fill("white");
  text("Score: " + score, 10, 30);
  text("500", 20, 550);
  text("500", 100, 550);
  text("500", 180, 550);
  text("500", 260, 550);

  text("100", 330, 550);
  text("100", 410, 550);
  text("100", 490, 550);

  text("200", 570, 550);
  text("200", 650, 550);
  text("200", 730, 550);

  text("Chances: " + clickCount, 600,30);

  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 300) {
        score = score + 500;
        particle = null;
      }
    }
  }

  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      if (particle.body.position.x > 300 && particle.body.position.x < 600) {
        score = score + 100;
        particle = null;
      }
    }
  }

  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      if (particle.body.position.x > 600) {
        score = score + 200;
        particle = null;
      }
    }
  }
  
 if (score == 2000 && clickCount < 5) {
    gameState = "win";

    if (gameState = "win") {
      textSize(100);
      text("YOU WIN" , 100, 250)
    }
  }

  if (clickCount >= 5) {
    gameState = "end";
    
    if (gameState = "end") {
      textSize(100);
      text("GAME OVER" , 100, 250)
    }
  }

}

function mousePressed() {
  if (gameState != "end") {
    particle = new Particle(mouseX, 10, 10, 10);
    clickCount++;
    //console.log(particle.body.position);
  }
}
