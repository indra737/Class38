var canvas,backgroundImage
var database
var gameState=0
var playerCount;
var form;
var game
var player
var distance=0;
var allPlayers=0;
var car1
var cars=[]
var car2;
var car3;
var car4;
function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-200);
    database= firebase.database();
     game= new Game();
     game.getState()
   game.start()
}

function draw(){
  background(255)
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    game.play();
  }
}


  function showError(err){
      console.error(err);
  }