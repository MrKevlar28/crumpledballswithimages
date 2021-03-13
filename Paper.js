class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.6,
            friction : 0.5,
            density : 1.2

        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.r = radius;
        this.image = loadImage("crumpled ball.jfif");
    }
    display(){
        var pos2 = this.body.position;
        imageMode(RADIUS);
        fill("yellow");
        image(this.image,pos2.x,pos2.y,this.r,this.r);

    }
}