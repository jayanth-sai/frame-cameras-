function preload(){

}


function setup(){
    canvas=createCanvas(800, 600);
    canvas.position(400 , 150);
    video= createCapture(VIDEO);
video.hide()

}


function draw(){
    image(video , 250, 180, 250, 250 );
    fill( "red" );
    stroke("black")
    circle(80, 100, 75)


    
    circle(650, 100, 75)


    circle(650, 500, 75)


    circle(80, 500, 75)


    fill( "green" );
    stroke("black")

    rect(70, 129, 20, 337 )

    rect(640, 129, 20, 337 )

    rect(110, 90, 505, 20 )


    rect(110, 495, 505, 20 )

}