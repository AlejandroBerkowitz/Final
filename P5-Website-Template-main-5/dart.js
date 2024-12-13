
class dart{
    constructor(i, x, y){
      this.i = i;
      this.x = x;
      this.y = y;
  }
  
  drawDart(x, y,size, r){
    circle(x, y, size);
    for(this.i=0;this.i<1000;this.i++){
      c = height/2+10*sin(this.i)/cos(2*this.i);
      circle(this.i, c, 10);
      position.push(c);
    }
    y++;
    if(y>position[x]){
      if(y<position[x]+2){
        r=200
      }
    }
    fill(r,g,b);
  }
  }
