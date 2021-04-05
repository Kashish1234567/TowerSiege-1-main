const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var g1,g2;
var chain;
var ball;



function preload() {
    image=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   //bottom
    block1=new Block(330,235,30,40);
    block2=new Block(360,235,30,40);
    block3=new Block(390,235,30,40);
    block4=new Block(420,235,30,40);
    block5=new Block(450,235,30,40);
    //middle
    block6=new Block(360,195,30,40);
    block7=new Block(390,195,30,40);
    block8=new Block(420,195,30,40);
    //top
    block9=new Block(390,155,30,40);

    //bottom
    block10=new Block(550,290,30,40);
    block11=new Block(580,290,30,40);
    block12=new Block(610,290,30,40);
    block13=new Block(640,290,30,40);
    block14=new Block(670,290,30,40);
    block15=new Block(700,290,30,40);
    //middle
    block16=new Block(690,250,30,40);
    block17=new Block(720,250,30,40);
    block18=new Block(750,250,30,40);
    //top
    block19=new Block(720,290,30,40);

    ball= bodies.circle(50,200,50);
    World.add(world,ball);

    chain= new chain(this.ball,{x:100,y:200});


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.dsiplay();
 block16.display();
 block17.display();
 block18.display();
 block19.dislay();
 chain.display();


 

}   


function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}