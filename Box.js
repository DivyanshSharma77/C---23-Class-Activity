class Box {
    constructor(x,y,width,height){
        //Define all the properties here
        var options = {
            restitution : 0.6
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    //Define functions here
    display(){
      
        push();  //saves the previous setting
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("white");
        rectMode(CENTER);
        rect(0, 0, this.width,this.height);
        pop(); //goes back to the old setting
    }
}