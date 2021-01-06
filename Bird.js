class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png")
    this.path = []
  }

  display() {
    if(this.body.position.x > 220 && this.body.velocity.x > 10){

    var position = [this.body.position.x, this.body.position.y]
    this.path.push(position)
    }
    for(var i = 0; i < this.path.length; i++){
      image(this.smokeImg,this.path[i][0] ,this.path[i][1])
      
    }
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}

//path =[[10,20],[58,68],[98,68]]-->3 i++ == i = i+1
