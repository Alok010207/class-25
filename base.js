class Base{
    constructor(x,y,w,h,a){
        var options={
            restitution:0.8,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image =loadImage("sprites/base.png");
        this.w = w;
        this.h = h;
        World.add(myWorld,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        fill("skyblue")
        rotate(this.body.angle)
        stroke("purple")
        strokeWeight(10)
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop()
    }
}