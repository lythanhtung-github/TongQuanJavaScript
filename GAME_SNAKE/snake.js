const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

const canvas = document.getElementById('myCanvas');
const GAME_WIDTH = 600;
const UNIT = 40;
const BACKGROUND_COLOR = "black";
const SNAKE_COLOR = "white";


canvas.width = canvas.height = GAME_WIDTH;
const ctx = canvas.getContext('2d');
ctx.fillStyle = BACKGROUND_COLOR;
ctx.fillRect(0, 0, GAME_WIDTH, GAME_WIDTH);
const GAME_DELAY = 200;

class Vector2d{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
 
let CurrentDirection = new Vector2d(-1,0);

class Snake{
    constructor() {
        this.body = [
            new Vector2d(UNIT *6, UNIT *3),
            new Vector2d(UNIT *7, UNIT *3),
            new Vector2d(UNIT *8, UNIT *3)
        ];
        this.head = this.body[0];
        this.speed = new Vector2d(-1,0);
    }
    draw(){
        ctx.fillStyle ="blue";
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT);
        ctx.fillStyle = SNAKE_COLOR;
        for (let i = 1; i < this.body.length; i++){
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT);
        }
    }

    clear(){
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT);
        ctx.fillStyle = BACKGROUND_COLOR;
        for (let i = 1; i < this.body.length; i++){
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT);
        }
    }

    handleBound(){
        if (this.head.x < 0 ){
            this.head.x = GAME_WIDTH - UNIT;
        }
        if (this.head.x > GAME_WIDTH - UNIT ){
            this.head.x = 0;
        }
    }

    move(){
        this.clear();
        for(let i = this.body.length - 1; i >= 1; i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        this.body[0].x += this.speed.x * UNIT;
        this.body[0].y += this.speed.y * UNIT;
        this.handleBound();

        this.draw();
    }

    checkEat(food) { // đầu con rắn chạm thức ăn
        let head = this.body[0];
        return (food.x === head.x) && (food.y === head.y);
    }

    grow(){ // tăng thêm 1 chiều dài cho rắn
        this.clear();
        let snakeLength = this.body.length;
        let mountX = this.body[snakeLength - 1].x  - this.body[snakeLength - 2].x;
        let mountY = this.body[snakeLength - 1].y  - this.body[snakeLength - 2].y;

        let newPart = new Vector2d(
            this.body[snakeLength - 1].x + mountX, 
            this.body[snakeLength -1].y + mountY,
            
            );
            
        this.body.push(newPart);
        this.draw();
    }
}

class Food {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    draw(){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, UNIT, UNIT);
    }
    
    clear(){
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(this.x, this.y, UNIT, UNIT);
    }
    getRandomNumer(){
        let randomNumber = Math.floor(Math.random() *GAME_WIDTH);
        randomNumber -= randomNumber % UNIT;
        return randomNumber;
    }
    spawn(){
        this.clear();
        this.x = this.getRandomNumer();
        this.y = this.getRandomNumer();
        this.draw();
    }
}  

let player = new Snake();
player.draw();
let food = new Food();
food.spawn();

setInterval(() => {
    player.move();
    if (player.checkEat(food)){
        player.grow();
        food.spawn();
    };
}, GAME_DELAY);

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case LEFT:
            if (CurrentDirection.x ===1) break // khi đầu hướng bên trái thì không thể hướng đầu ngược lại
            CurrentDirection = new Vector2d(-1,0)
            player.speed = new Vector2d(-1,0)
            break;
        case RIGHT:
             if (CurrentDirection.x === -1) break
            CurrentDirection = new Vector2d(1,0)
            player.speed = new Vector2d(1,0)
            break;
        case UP:
            if (CurrentDirection.y === 1) break
            CurrentDirection = new Vector2d(0,-1)
            player.speed = new Vector2d(0,-1)
            break;
        case DOWN:
             if (CurrentDirection.y ===1) break
            CurrentDirection = new Vector2d(0,1)
            player.speed = new Vector2d(0,1)
            break;
        default: break;
    }
}
