const LEFT = 37;
const RIGHT = 39;
let x = 100;
let y = 100;
let dx = 0.8;
let dy = 0.8;
let radius = 5;

let bar_x = 110;
let bar_y = 145;
let bar_width = 80;
let bar_height = 5;
const bar_step = 15;

const gameOver_x = 43;
const gameOver_y = 80;

let level = 1;

//Khởi tạo canvas
let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

class Ball {
    score = 0;
    constructor(x, y, dx, dy, radius, bar){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.bar = bar;
    }

    drawBall(){
        ctx.beginPath();
        ctx.fillStyle = "rgb(240, 248, 255)";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fill();
        ctx.closePath();
    }

    upScore(){
        this.score = this.score + 1;
    }

    checkBall(){
        if(this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius){
            this.dx = - this.dx;
        }
        if ( this.y + this.dy < this.radius){
            this.dy = - this.dy;
        } else if (this.y + this.dy > canvas.height - this.radius){
            if(this.x > this.bar.bar_x && this.x < this.bar.bar_x + this.bar.bar_width){
                this.dy = - this.dy;
                this.upScore();
                updateScore(this.score);
                updateLevel(this.score);
                
                if (this.score >1){
                    this.dx = this.dx+0.01;
                    this.dy = this.dy-0.01;
                }
            }
            else {
                clearInterval(interval);
                drawGameOver(ctx);
            }    
        }
       
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;  
    }

}

class Bar {
    constructor(bar_x, bar_y, bar_width, bar_height){
        this.bar_x = bar_x;
        this.bar_y = bar_y;
        this.bar_width = bar_width;
        this.bar_height = bar_height;
    }

    drawBar(){
        ctx.beginPath(); 
        ctx.fillStyle = " rgb(240, 248, 255)";
        ctx.fillRect(this.bar_x, this.bar_y, this.bar_width, this.bar_height);
        ctx.fill();
        ctx.closePath();
    }
}

function drawGameOver(ctx){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.font = "bold 40px Arial red";
    ctx.fillText("Game Over!",gameOver_x,gameOver_y);
    ctx.closePath();   
}

document.addEventListener('keydown', controlBar);
function controlBar(e){
    switch(e.keyCode){
        case LEFT: 
            if (bar.bar_x >0){
                bar.bar_x -= bar_step;   
            }
            break;
        case RIGHT:
            if (bar.bar_x + bar.bar_width < canvas.width){
               bar.bar_x += bar_step; 
            }
            break; 
    }
}

function reset(){
    document.location.reload();
}

function updateScore(score){
    let countScore = document.querySelector("#countScore");
    countScore.innerHTML =score;
}

function updateLevel(score){
    let result = document.querySelector("#level");
    if (score ==10){
        level += 1;
    }
    if (score ==20){
        level += 1;
    }
    if (score ==30){
        level += 1;
    }
    if (score ==40){
        level += 1;
    }
    if (score ==50){
        level += 1;
    }
    result.innerHTML = level;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall();
    ball.checkBall();
    bar.drawBar();
}

let bar = new Bar(bar_x,bar_y, bar_width,bar_height); 
let ball = new Ball(x, y, dx, dy, radius,bar);
let interval = setInterval(draw,10);
