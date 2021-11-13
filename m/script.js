BoxSize = 100;
InnerBox = 50
CanvasSize = 400;

function setup(){
    createCanvas(400, 400, WEBGL)
    //ortho(-width / 2, width / 2, height / 2, -height / 2, InnerBox, 550);
}

function draw(){


    rotateX(-mouseY * 0.01)
    rotateY(mouseX * 0.01)

    background(BoxSize)
    stroke(2)
    strokeWeight(2)
    noFill()
    beginShape()
    push()
    vertex(BoxSize, BoxSize, BoxSize)
    vertex(BoxSize, BoxSize, -BoxSize)
    vertex(BoxSize, -BoxSize, -BoxSize)
    vertex(BoxSize, -BoxSize, BoxSize)
    vertex(BoxSize, BoxSize, BoxSize)

    vertex(-BoxSize, BoxSize, BoxSize)
    vertex(-BoxSize, BoxSize, -BoxSize)
    vertex(-BoxSize, -BoxSize, -BoxSize)
    vertex(-BoxSize, -BoxSize, BoxSize)
    vertex(-BoxSize, BoxSize, BoxSize)

    vertex(BoxSize, BoxSize, BoxSize)
    vertex(BoxSize, BoxSize, -BoxSize)
    vertex(-BoxSize, BoxSize, -BoxSize)
    vertex(-BoxSize, BoxSize, BoxSize)
    vertex(BoxSize, BoxSize, BoxSize)

    vertex(BoxSize, -BoxSize, BoxSize)
    vertex(BoxSize, -BoxSize, -BoxSize)
    vertex(-BoxSize, -BoxSize, -BoxSize)
    vertex(-BoxSize, -BoxSize, BoxSize)
    vertex(BoxSize, -BoxSize, BoxSize)
    pop()
    endShape()
    
    rotateX(mouseY * 0.01)
    rotateY(mouseX * 0.01)
    beginShape()
    push()
    
    //Make the Central Square
    vertex(BoxSize, 0, 0) //Point 1
    vertex(0, BoxSize, 0) //Point 2
    vertex(-BoxSize, 0, 0)//Point 3
    vertex(0, -BoxSize, 0)//Point 4
    vertex(BoxSize, 0, 0) //Point 1 So we can get a full square

    //Making the top triangle half
    vertex(0, 0, BoxSize) //Top point
    vertex(0, BoxSize, 0) //Go to the next point
    vertex(-BoxSize, 0, 0)//Move to the next next point
    vertex(0, 0, BoxSize) //Go to the center
    vertex(0, -BoxSize, 0) //Last line to the central square

    //Making the bottom triangle
    vertex(0, 0, -BoxSize)
    vertex(0, BoxSize, 0)
    vertex(BoxSize, 0, 0)
    vertex(0, 0, -BoxSize)
    vertex(-BoxSize, 0, 0)
    pop()
    endShape() 


    rotateX(mouseY * 0.01)
    rotateY(-mouseX * 0.01)
    fill(200)
    beginShape()
    vertex( InnerBox,  InnerBox,     0) //Top Square Point 1
    vertex( 0,   InnerBox,     InnerBox)//Point 2
    vertex(-InnerBox,  InnerBox,     0) //Point 3
    vertex( 0,   InnerBox,    -InnerBox)//Point 4
    vertex( InnerBox,  InnerBox,     0) //Point 1

    vertex( InnerBox,  -InnerBox,     0) //BS Point 1
    vertex( 0,   -InnerBox,     InnerBox)//2
    vertex(-InnerBox,  -InnerBox,     0) //3
    vertex( 0,   -InnerBox,    -InnerBox)//4
    vertex( InnerBox,  -InnerBox,     0) //1

    vertex( 0,   -InnerBox,    -InnerBox) //B4
    vertex( 0,  InnerBox,      -InnerBox) //T4

    vertex(-InnerBox,  InnerBox,     0) //T3
    vertex(-InnerBox,  -InnerBox,     0)//B3

    vertex( 0,   -InnerBox,     InnerBox)//B2
    vertex( 0,   InnerBox,     InnerBox)//T2





    


    endShape()
    
    
}