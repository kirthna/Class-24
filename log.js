class Log{
    //PROPERTIES
    constructor(x, y, h, a){
        var options = {restitution: 0.8, density: 1};
        this.body = Bodies.rectangle(x, y, 20, h, options);
        World.add(world, this.body);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body, a);
    }

    //FUNCTIONS
    display(){
        //Add a new layer
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        stroke("Blue");
        strokeWeight(4);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        //Remove the previous layer
        pop();
    }
}