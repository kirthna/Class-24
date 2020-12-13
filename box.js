class Box{
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {restitution: 0.8, density: 1};
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;
    }

    //FUNCTIONS
    display(){
        //Add a new layer
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        stroke("green");
        strokeWeight(4);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        //Remove the previous layer
        pop();
    }
}



/*
this --> keyword that refers to the object which is using that property

box1, box2
box1.body
box2.body
box1.display();

trex
trex.y

*/