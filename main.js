noseX=0
noseY=0
wristRight=0
wristLeft=0
function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    canvas = createCanvas(550,550)
    canvas.position(560,150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
    background('#e81111')
    fill("magenta")
    stroke("cyan")
    wrist=wristLeft - wristRight
    textSize(wrist)
    text("I am Andy!", noseX, noseY)
}

function modelLoaded(){
    console.log('poseNet started')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    wristRight=results[0].pose.rightWrist.x
    wristLeft=results[0].pose.leftWrist.x
    }
}