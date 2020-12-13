class Pig{
    //PROPERTIES
    constructor(x, y){
        var options = {restitution: 0.8, density: 1};
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
        this.width = 50;
        this.height = 50;
    }

    //FUNCTIONS
    display(){
        //Add a new layer
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("green");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        //Remove the previous layer
        pop();
    }
}