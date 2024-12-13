let a, b, d, x, y, c, distance, position, circSize, e, f;
function setup() {
  createCanvas(400, 400);
  position = [];
  circSize = 10;
  dart = new dart();
  x=100
  y=2
  a=10;
  b=10;
  g = 10;
  b=10;
  d=1;
  e=1;
  f=1;
}
function sun(){
 arc(0,0, e,f,0,d);

}

function draw() {
 background('red');
  dart.drawDart(x, y,10, 0);
  position.push(c);
  y++;
sun(a,d);
  a++;
  b++;
  d+=0.01;
  e++;
  f++;
}

