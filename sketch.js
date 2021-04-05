var ball;
var position;
var database;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    console.log(database)
    var ballRef = database.ref("ball/position")
    ballRef.on("value",readPosition,showError)

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(position!=undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}


function readPosition(data){
position = data.val()
console.log(position)
ball.x = position.x
ball.y = position.y
}

function showError(error){
  console.log(error)  
}

function writePosition(x,y){
database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y
})
}
