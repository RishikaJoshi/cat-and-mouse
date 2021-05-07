var bg;

var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;



function preload() {
    bg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");

    catImg2 = loadAnimation ("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation ("images/cat4.png");
    

    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");  


}

function setup(){
    createCanvas(1000,600);

    cat = createSprite(870,500,50,50);
    cat.addAnimation("cat_sitting",catImg2);
    cat.scale = 0.1;
    
    mouse = createSprite(200,500,50,50);
    mouse.addAnimation("mouse_standing",mouseImg2);
    mouse.scale = 0.1;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        
        cat.addAnimation("cat_collide",catImg3);
        cat.changeAnimation("cat_collide");
        cat.x = 300;

        mouse.addAnimation("mouse_collide",mouseImg3);
        moose.changeAnimation("mouse_collide");
        mouse.x = 300;
        

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -2;
    cat.addAnimation("cat_running",catImg2);
    cat.changeAnimation("cat_running");

    mouse.addAnimation("mouse_teasing",mouseImg2);
    mouse.changeAnimation("mouse_teasing");
    mouse.frameDelay = 25;
}
}
