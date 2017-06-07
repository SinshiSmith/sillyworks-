var balls= [];
function setup(){
  createCanvas(640,480);
}
function mousePressed() {
  balls.push(new Ball(mouseX,mouseY));
}
function draw()
{
  background(0);
  for (var i = 0; i < balls.length;i++){
    balls[i].mov();
    balls[i].show();
  }
}
function Ball(x,y)
{
  this.speed = 20;
  this.x =x;
  this.y =y;
  var stop = this.y - 50 ;
  this.show = function(){
    stroke(250);
    fill(250,250,75);
    ellipse(this.x,this.y,24,24)
  }
  this.mov = function(){
    this.y += this.speed;
    if (this.y >= 480)
      {
        this.speed *= -1;
        stop +=25
        if (stop > 480)
        {this.speed = 0;
        this.y =480-12}
        this.speed += 1;
      }
    if (this.y < stop)
        this.speed *= -1;
  }
}
