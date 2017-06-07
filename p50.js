debugger;
var bubbles = [];
function setup()
{
  createCanvas(window.innerWidth,window.innerHeight);
}


function mouseDragged(){
  bubbles.push(new Bubble(mouseX,mouseY));
}

function draw()
{
  background(0);
  for (var i = 0 ; i< bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
  for (var z = bubbles.length - 1; z >= 0; z--){
    if (bubbles[z].x > window.innerWidth/2){
      bubbles[z].ch();}

  }
}
function Bubble(x,y)
{
  this.x = x;
  this.y = y;
  var v = [250,0,0];

  this.display = function(){
    stroke(255);
    fill(v[0],v[1],v[2]);
    ellipse(this.x,this.y,24,24);
  }
  this.move = function(){
  this.x += random(8);
  this.y += random(8);
  }
  this.ch = function() {v=[250,250,0];}
}
