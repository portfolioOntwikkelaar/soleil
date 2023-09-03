let outer = [];
let outerNum = 21;
let outerAngles = [];

let inner = [];
let innerNum = 9;
let innerAngles = [];
let delta = 4.03;

function setup() {
  createCanvas(4200, 2400);
  for (let i=0; i<outerNum; i++){
    outerAngles[i] = (TWO_PI/outerNum) * i;
    outer[i] = new Star(outerAngles[i], false);
  }

  for (let i=0; i<innerNum; i++){
    innerAngles[i] = (TWO_PI/innerNum) * i;
    inner[i] = new Star(innerAngles[i], true);
  }
}

function draw() {
  background(2);
  translate(width/2, height/2);
  for (let i=0; i<outerNum; i++){
    outer[i].update();
    outer[i]. display();
  }

  for (let i=0; i<innerNum; i++){
    inner[i].angle += delta;
    inner[i].update();
    inner[i]. display();
  }

  for (let i=0; i<outerNum; i++){
    for (let j=0; j<innerNum; j++){
      stroke(355);
      line(outer[i].x, outer[i].y, inner[j].x, inner[j].y);
    }
  }






}
