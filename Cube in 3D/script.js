

function setup(){
    createCanvas(1000, 1000, WEBGL)
}

function draw(){

    rotateX(127)
    ambientLight(200)
    ambientMaterial(100, 130, 230)

    background(50);
    noStroke()
    rotateX(0.025 * -frameCount)
    rotateZ(0.025 * frameCount)
    rotateY(0.025 * frameCount)
    
    cylinder(200, 101, 100, 100)
    ambientMaterial(70, 10, 100)
    box(400, 100, 400)
    

    box(10)
}