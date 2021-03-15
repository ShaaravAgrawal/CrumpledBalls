class DustBin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("dustbingreen.png")
    }
    display(){
        var pos =this.body.position;
        strokeWeight(0);
        fill("white");
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 125, 125);
    }
}