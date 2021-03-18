const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 570, 1200, 20);
    plat1 = new Ground(800, 400, 500, 20);
    polygon1 = new Bird(100, 300)
    box1 = new Box(975, 280, 50 , 50);
    box2 = new Box(600, 340, 50 , 50);
    box3 = new Box(650, 340, 50 , 50);
    box4 = new Box(700, 340, 50 , 50);
    box5 = new Box(750, 340, 50 , 50);
    box6 = new Box(800, 340, 50 , 50);
    box7 = new Box(850, 340, 50 , 50);
    box8 = new Box(900, 340, 50 , 50);
    box9 = new Box(950, 340, 50 , 50);
    box10 = new Box(1000, 340, 50 , 50);
    box11 = new Box(625, 285, 50 , 50);
    box12 = new Box(675, 285, 50 , 50);
    box13 = new Box(725, 285, 50 , 50);
    box14 = new Box(775, 285, 50 , 50);
    box15 = new Box(825, 285, 50 , 50);
    box16 = new Box(875, 285, 50 , 50);
    box17 = new Box(925, 285, 50 , 50);
    box18 = new Box(650, 230, 50 , 50);
    box19 = new Box(700, 230, 50 , 50);
    box20 = new Box(750, 230, 50 , 50);
    box21 = new Box(800, 230, 50 , 50);
    box22 = new Box(850, 230, 50 , 50);
    box23 = new Box(900, 230, 50 , 50);
    box24 = new Box(950, 230, 50 , 50);
    box25 = new Box(675, 175, 50 , 50);
    box26 = new Box(725, 175, 50 , 50);
    box27 = new Box(775, 175, 50 , 50);
    box28 = new Box(825, 175, 50 , 50);
    box29 = new Box(875, 175, 50 , 50);
    box30 = new Box(925, 175, 50 , 50);
    box31 = new Box(700, 120, 50 , 50);
    box32 = new Box(750, 120, 50 , 50);
    box33 = new Box(800, 120, 50 , 50);
    box34 = new Box(850, 120, 50 , 50);
    box35 = new Box(900, 120, 50 , 50);
    box36 = new Box(725, 65, 50 , 50);
    box37 = new Box(775, 65, 50 , 50);
    box38 = new Box(825, 65, 50 , 50);
    box39 = new Box(875, 65, 50 , 50);
    box40 = new Box(750, 10, 50 , 50);
    box41 = new Box(800, 10, 50 , 50);
    cons = new SlingShot(polygon1.body, {x: 200, y:300})

}


function draw() {
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    ground.display();
    plat1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    polygon1.display();
}

function mouseDragged() {
    Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   cons.fly();
}

function keyPressed(){
    if(keyCode === 32){
        cons.attach(polygon1.body);
    }
}