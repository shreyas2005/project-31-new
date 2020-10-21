class Plinko{
constructor(x,y,radius){
    var op={
        isStatic:true

    }
    this.body=Bodies.circle(x,y,radius,op);
    World.add(world,this.body);
    this.radius=radius;
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
    pop();
}

}