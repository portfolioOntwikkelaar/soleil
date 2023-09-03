class Star {
  constructor(angle, inner){
    this.inner = inner;
    if (this.inner){
      this.r = 375;
    } else {
      this.r = 550;
    }

    this.angle = angle;
  }

  update(){
    this.x = this.r*cos(this.angle);
    this.y = this.r*sin(this.angle);
  }

  display(){
    // ellipse(this.x, this.y, 10, 10);

  }
}
