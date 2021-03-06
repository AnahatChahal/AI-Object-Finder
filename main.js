status="";
objects=[];
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
    status=true;
}

function draw()
{
    image(video,0,0,450,400);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        for (i = 0; i < objects.length; i++) {
             document.getElementById("status").innerHTML = "Status : Objects Detected";  
             fill("#FF0000"); 
             percent = floor(objects[i].confidence * 100);
              text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
              noFill(); 
              stroke("#FF0000"); 
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
            } 
        } 
    }

function gotResult(error,results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}