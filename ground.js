class Ground{
 constructor(){
     var options={
         isStatic:true
     }
     this.ground=Bodies.rectangle(600,380,1200,40,options);
        this.width=1200
        this.height=40
        World.add(myWorld,this.ground)

 }
 alok(){
    push();
    fill("brown")
    rectMode(CENTER)
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
    pop();

 }

}