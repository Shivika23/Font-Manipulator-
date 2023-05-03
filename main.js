right_wrist_x=0;
left_wrist_x=0;
difference=0;

nose_x=0;
nose_y=0;

function setup() {
    canvas = createCanvas(600, 450)
    canvas.position(100, 200)

    video = createCapture(VIDEO)
    video.size(600, 450)
    video.position(750, 200)

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

        right_wrist_x= results[0].pose.rightWrist.x;
        left_wrist_x= results[0].pose.leftWrist.x
        nose_x= results[0].pose.nose.x
        nose_y= results[0].pose.nose.y

        difference = floor(left_wrist_x-right_wrist_x)
    }
}

function modelLoaded() {
    console.log("Model Successfully Loaded")
}

function draw() {
    background("#00ffff")
    document.getElementById("ans").innerHTML="Size of the text is "+ difference +" px."
    textSize(difference)
    text("I💖ME",nose_x,nose_y)
    
}