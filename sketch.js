const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var g1;
var plink;
var plink0=[];
var particle=[];
var divisions=[];
var divisionHeight=300; 

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    g1=new Ground(240,790,480,20);
    // d=new div(232,5,46,346);
    for(var i=10;i<=1000;i+=100){
        divisions.push( new div(i,730,10,100));
     }
     for(var j=40;j<=width;j+=50){
         plink0.push(new Plinko(j,300,10));
     }
     for(var j=40;j<=width;j+=50){
        plink0.push(new Plinko(j,400 ,10));
    }
    for(var j=40;j<=width;j+=50){
        plink0.push(new Plinko(j,500 ,10));
    }
    for(var j=40;j<=width;j+=50){
        plink0.push(new Plinko(j,600 ,10));
    }
  
   
} 

function draw(){
    background(10, 20, 20);
    Engine.update(engine);
    g1.display();
for(var i=0;i<divisions.length;i++){
    divisions[i].display();
}
for(var i=0;i<plink0.length;i++){
    plink0[i].display();
}
if(frameCount%60===0){
    particle.push(new Particle (random(50,200),10,10));
}
for(var i=0;i<particle.length;i++){
    particle[i].display();
}



 }
 