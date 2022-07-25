img=""
stat="";
objects = [];
percent = "";
alarm = "mixkit-alarm-clock-beep-988.wav";

function preload(){
song = loadSound = "mixkit-alarm-clock-beep-988.wav";    
}

function setup(){
canvas = createCanvas(400, 400);
canvas.position(470,140);
video = createCapture(VIDEO);
video.size(400,400);
video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);    
    document.getElementById("status").innerHTML = "Status : Detecting Objects"    
}
  



function modalLoaded(){
console.log("The movie Coco L O A D E D");
stat = true;
objectDetector.detect(video, gotResult);    
}
function gotResult(error, results) {
if (error) {
 console.log(error);   
}
console.log(results);
objects= results;    
}
function draw() {
    image(video, 0, 0, 400, 400);
    if(stat != ""){
      r = random(255);
      g= random(255);
      b= random(255); 
     for(i = 0;i < objects.length; i++){
     document.getElementById("status").innerHTML = "Status : Object Detected";
     

     percent = floor(objects[i].confidence * 100);
     text(objects[i].label + "" + percent+"%", objects[i].x, objects[i].y);
     noFill()
     stroke(r,g,b);
     rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    
     if(objects == "person"){
        document.getElementById("num").innerHTML = "Baby Found";   
       }
       else{
        document.getElementById("num").innerHTML = "Baby Not Found";
        song.play();  
    }
     }
     
    }

    }
    