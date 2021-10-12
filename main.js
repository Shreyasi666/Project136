canvas = "";
observation = "";
input_value = "";

function preload()
{

}

function setup()
{
    canvas =  createCanvas(380, 320);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
    input_value = document.getElementById('object').innerHTML
}

function modelLoaded()
{
    console.log('Model Loaded !');
    observation = true;
}

function draw()
{
    image(video, 0, 0, 380, 320);
}