var boardWidth = 10
var boardSize = 300
var dartDiameter = 3;
var currentX = 0;
var currentY = 0;
var currentZ = 0;
var throwDart = false;
let MouseAdj;

let dartAnimate = -1
let AnimateStep = -1
let AnimateTotals = 20

var PreviousDarts = []

function setup(){
    //Create an WEBGL 3D canvas
    createCanvas(500, 500, WEBGL)
    angleMode(DEGREES)
}

function draw(){

    if(!throwDart){
        rotateX(currentX)
        rotateY(currentY)
        rotateZ(currentZ)
    }
    background(51)
    fill("#FFEEFF")
    box(boardSize, boardSize, boardWidth)

    fill("#EEFFEE")
    push()
    rotateX(90)
    cylinder(boardSize/2, boardWidth + 1, 100, 100)
    pop()

    if(!throwDart){
        if(keyIsDown(65)) //Check if "a" key is down
            currentZ -= 5 
        if(keyIsDown(68)) //Check if "d" key is down
            currentZ += 5 
        if(keyIsDown(87)) //Check if "w" key is down
            currentX -= 5
        if(keyIsDown(83)) //Check if "s" key is down
            currentX += 5

        if(keyIsDown(81)) //Check if "q" key is down
            currentY -= 5
        if(keyIsDown(69)) //Check if "z" key is down
            currentY += 5

        if(keyIsDown(88)){
            currentX = 0
            currentY = 0
            currentZ = 0
        }

        for(let dart = 0; dart < PreviousDarts.length; dart++){
            let cDrt = PreviousDarts[dart]
            if(dart == dartAnimate){
                push()
                translate(cDrt.x, -300, cDrt.z)
                rotateX(90)
                cylinder(dartDiameter, boardWidth + 2)
                pop()
            }
        }
    }


    if(throwDart){
        push()
        MouseAdj = createVector(map(mouseX, width/2-boardSize/2, width/2 + boardSize/2, -boardSize/2 + dartDiameter, boardSize/2- dartDiameter, true), 0, map(mouseY, height/2-boardSize/2, height/2 + boardSize/2 - dartDiameter, boardSize/2, -boardSize/2 + dartDiameter, true))
        rotateX(90)
        translate(MouseAdj)
        cylinder(dartDiameter, boardWidth+2)
        pop()
    }
    
} 


function keyPressed(){
    if(keyCode == 32){
        throwDart = !throwDart
    }
}

function mouseClicked(){
    if(throwDart){
        PreviousDarts.push(MouseAdj)
        throwDart = false
        dartAnimate = PreviousDarts.length - 1
    }
}

function help(){
    console.log("W: Spin top forward")
    console.log("S: Spin top backwards")
    console.log("A: Rotate CCW")
    console.log("D: Rotate CW")
    console.log("Q: Spin Right -> Left")
    console.log("E: Spin Left -> Right")
    console.log("X: Reset Rotation")
    console.log("Space: Throw Dart")
    return ""
}
