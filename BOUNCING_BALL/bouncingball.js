const left = 37;
const right = 39;

let score = 0;
let radius = 5;
let dx = 0.5;
let dy = -0.5;

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height/1.5;

let paddleX = canvas.width/2-30;
let paddleY = 145;
let paddle_width = 50;
let paddle_height = 5;

document.addEventListener('keydown', controlPaddle, false);

function controlPaddle(e) {
    switch(e.keyCode){
        case left: 
        if (paddleX>0)
        paddleX -= 10;
        break;
        case right: 
        if (paddleX+paddle_width<canvas.width)
        paddleX += 10;
        break;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.fillRect(paddleX,paddleY,paddle_width,paddle_height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawBall();
    drawPaddle();

    if(x + dx > canvas.width - radius || x + dx < radius){
        dx = -dx;
    }

    if (y + dy < radius) dy = - dy;
    else if (y + dy > canvas.height - radius){
        if(x>paddleX && x<paddleX+paddle_width){
            dy = -dy;
        }
        else {
            alert ("Game over!");
            document.location.reload();
            clearInterval(interval);
        }
        
    }

    x = x + dx;
    y = y + dy;
}

let interval = setInterval(draw,10);



