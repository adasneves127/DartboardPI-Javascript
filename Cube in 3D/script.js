

function setup(){
    //Create an WEBGL 3D canvas
    createCanvas(1000, 1000, WEBGL)
}

function draw(){
    //Set our angles to be in Degrees, not Radians!
    angleMode(DEGREES)
    //Set our initial angle to be 
    rotateX(90)
    ambientLight(200)
    ambientMaterial(100, 130, 230)

    background(50);
    noStroke()
    rotateX(0.5 * -frameCount)
    rotateZ(0.5 * frameCount)
    rotateY(0.5 * frameCount)
    
    cylinder(200, 101, 100, 100)
    ambientMaterial(70, 10, 100)
    box(400, 100, 400)
    

    box(10)
}