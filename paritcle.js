class Particle{
    constructor(x,y,radius){
        var op={
            isStatic:false
    
        }
        this.body=Bodies.circle(x,y,radius,op);
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255),)
        this.radius=radius;
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.radius);
        pop();
    }
    
    }