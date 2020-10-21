class div{
    constructor(x,y,width,height){
        var op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        // this.division=[];

    }
    display()
    {
         var  pos=this.body.position;
        push();
         translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke(255);
        fill("brown");
       
     
         rect(0,0,this.width,this.height);
        pop();
    }
}