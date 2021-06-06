function setup()
{
    canvas=createCanvas(450,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(450,400);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Object Detected";
    object_name=document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("model is loaded");
}