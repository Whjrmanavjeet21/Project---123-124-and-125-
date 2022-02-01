LeftWrist_x =  0;
RightWrist_x= 0;
LeftWrist_y = 0;
RightWrist_y = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#969A97');
    document.getElementById("font_size").innerHTML =  "Text Size"+difference+"px" ;
    textSize(difference);
    fill("#008000");
    text('Manavjeet',50,400);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        console.log("RightWrist_x = "+results[0].pose.RightWrist.x+"RightWrist_y = "+results[0].pose.RightWrist.y);
        console.log("LeftWrist_y = "+results[0].pose.LeftWrist.x+"LeftWrist_y = "+results[0].pose.LeftWrist.y);

        LeftWrist_x = results[0].pose.LeftWrist.x;
        RightWrist_x = results[0].pose.RightWrist.x;
        LeftWrist_y = results[0].pose.LeftWrist.y;
        RightWrist_y = results[0].pose.RightWrist.y;

        difference = floor(LeftWrist_x - RightWrist_x);
    }
}