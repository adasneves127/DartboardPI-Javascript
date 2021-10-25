let boardSize = 500
let iterations = 0
let controlsCreated = false;
let BoardCenterPos;

let BoardColor = [127, 127, 127];
let CircleColor = [255, 255, 255];
let DartColor = [0, 0, 0]
let approxPi = 0;
let hits = 0
let darts = 0;

let oldDarts = []

function setup(){
    
    createCanvas(boardSize, boardSize)
    
    if(!controlsCreated)
        createControls()
    boardSizeSlider.position(70, boardSize + 17)
    boardSizeLabel.position(0, boardSize)
    IterationSlider.position(70, boardSize + 47)
    IterationSliderLabel.position(0, boardSize+30)
    button.position(0, boardSize + 70);
    textBox.position(160, boardSize+47)
    BoardCenterPos = createVector(boardSize/2, boardSize/2)
    
    p.position(boardSize + 10, 20);
    q.position(boardSize + 10, 40);

    approxPi = 0;
    hits = 0;
    oldDarts = []
    darts = 0
    frameRate(60)
    draw();
}

function draw(){
    background(BoardColor[0], BoardColor[1], BoardColor[2])
    strokeWeight(2)
    stroke(0)
    strokeWeight(5)
    noFill()
    rect(0, 0, height, width)

    strokeWeight(1)
    fill(CircleColor[0], CircleColor[1], CircleColor[2])
    ellipse(boardSize/2, boardSize/2, boardSize)

    if(iterations != 0){
    let DartPos = createVector(Math.random() * boardSize, Math.random() * boardSize)
    
    stroke(DartColor[0], DartColor[1], DartColor[2])
    strokeWeight(10)
    point(DartPos.x, DartPos.y)
    for(i = 0; i < oldDarts.length; i++){
        point(oldDarts[i])
    }

    if(Math.abs(dist(DartPos.x, DartPos.y, BoardCenterPos.x, BoardCenterPos.y)) <= boardSize/2){
        hits++;
        document.getElementById("StatBox").textContent = `This Dart was a Hit!`;
    }
    else{
        document.getElementById("StatBox").textContent = `This Dart was a Miss`;
    }
    darts++;
    approxPi = 4*(hits/darts)
    console.log(frameRate())
    oldDarts.push(DartPos)
    document.getElementById("PiBox").textContent = `The new Pi Approximation is: ${approxPi}`;
    }
    if(darts >= iterations){
        noLoop()
    }
}

function createControls(){
    boardSizeSlider = createSlider(10, 100, 50);
    boardSizeSlider.style('width', '80px');
    boardSizeSlider.changed(() => {
        noLoop();
        boardSize = boardSizeSlider.value() * 10
        setup()
    })
    boardSizeLabel = createP()
    boardSizeLabel.style('color', 'white')
    boardSizeLabel.html('Boardsize:')

    IterationSlider = createSlider(10, 10000, 50);
    IterationSlider.style('width', '80px');
    IterationSlider.changed(() => {
        iterations = IterationSlider.value()
        
    })
    IterationSlider.input(() => {
        noLoop()
        textBox.value(IterationSlider.value())
        iterations = IterationSlider.value
    })
    IterationSliderLabel = createP()
    IterationSliderLabel.style('color', 'white')
    IterationSliderLabel.html('Iterations:')

    textBox = createInput('');
    textBox.position(155, boardSize + 47)
    textBox.size(50)
    textBox.value(IterationSlider.value())
    
    textBox.input(() => {
        noLoop();
        IterationSlider.value(textBox.value())
        iterations = IterationSlider.value()
    })

    button = createButton('Run Simulation');
    button.mousePressed(() => {

        setup()
        loop()
    });
    
    controlsCreated = true

    p = createP('');
    p.style('font-size', '16px');
    p.position(boardSize + 10, 20);  
    p.id('StatBox')

    q = createP('');
    q.style('font-size', '16px');
    q.position(boardSize + 10, 40);  
    q.id('PiBox')

}