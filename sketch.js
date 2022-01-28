var fondo, boton, botonImg;
var gameState = "servir";


function preload(){
fondo = loadImage("fondo.png");
botonImg = loadImage("boton.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight -115);
  boton = createSprite(width/2 , height/2 , 100, 100);
  boton.addImage(botonImg);
  boton.scale = 0.3;
  boton.visible = true;

}


function draw(){
background(0);

drawSprites();
if(gameState === "servir"){
  mousePressed(boton);
  fill(255);
  textAlign("center");
  textSize(50);
  text("Titulo", width/2, 100);

}

if(gameState === "Play"){
  boton.visible = false;
}
 

}

function start(){
  if(mousePressedOver(boton)){
    gameState = "Play"
    console.log("boton presionado");
  }
}
