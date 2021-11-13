////////////////////////////
/*  GLOBAL VARIABLE LAND  */
////////////////////////////
let canvasSize = 500
let pointB, pointC;

let bX=0, bY = 0, cX = 0, cY = 0


//This function will be called upon script load in
//This script will create, or attempt to create a bezzier curve, where one point is at x=0, and the other point is at mousePos.
function setup(){
    createCanvas(canvasSize, canvasSize)
}


//This function will be called once per frame. We can change how often this function is called by calling frameRate(fps).
function draw(){
    background(128)
    let mousePos = createVector(mouseX, mouseY)
    let pointA = createVector(0, height/2)
    strokeWeight(5)
    stroke(255)
    //line(pointA.x, pointA.y, mousePos.x, mousePos.y)
    noFill()
    bezier(pointA.x, pointA.y, bX, bY, cX, cY, mousePos.x, mousePos.y)
    strokeWeight(20)
    stroke(0)
    point(pointA)
    point(mousePos)

    strokeWeight(10)
    point(bX, bY)
    point(cX, cY)
    
    //W: 87
    //A: 65 
    //S: 83
    //D: 68

    //T: 84
    //F: 70
    //G: 71
    //H: 72


    if(keyIsDown(87))
        bY -= 3;
    if(keyIsDown(65))
        bX -= 3;
    if(keyIsDown(83))
        bY += 3;
    if(keyIsDown(68))
        bX += 3

    if(keyIsDown(84))
        cY -= 3;
    if(keyIsDown(70))
        cX -= 3;
    if(keyIsDown(71))
        cY += 3;
    if(keyIsDown(72))
        cX += 3;


}