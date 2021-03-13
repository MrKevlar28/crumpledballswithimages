class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.jfif");

    }
    display(){
        var pos3 = this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image,pos3.x,pos3.y,this.width,this.height);

    }
}