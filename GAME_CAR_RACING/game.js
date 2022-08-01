const LEFT = 37;
const RIGHT = 39;
const car_img = 'car2.png';
const car_step = 10;
let score = 0;

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let barrier_step = 0.2;

let coin_step = 0.3;

class Car {
  car_speed;
  constructor(car_img, barrier, coin) {
      this.x = canvas.width/2-16;
      this.y =  120;
      this.width = 32;
      this.height = 32; 
      this.car_img = car_img;
      this.barrier = barrier;
      this.coin = coin;
  }

  drawCar(){
      this.car_image = new Image();
      this.car_image.src = this.car_img ;
      this.car_image.onload = () => {
        ctx.drawImage(this.car_image, this.x, this.y, this.width, this.height);
      }
  }

  checkLose(){
    if (this.barrier.x > this.x && this.barrier.x < this.x + this.width){
      if (this.barrier.y + this.barrier.height > this.y )
      {
        alert("You lose");
        clearInterval(interval);
        document.location.reload();
      } 
    }
    if (this.barrier.x + this.barrier.width > this.x && this.barrier.x + this.barrier.width < this.x + this.width){
      if (this.barrier.y + this.barrier.height > this.y )
      {
        alert("You lose");
        clearInterval(interval);
        document.location.reload();
      } 
    }
  }

  checkCoin(){
    if (this.coin.x - this.coin.radius > this.x && this.coin.x + this.coin.radius < this.x + this.width) {
      if (this.coin.y + this.coin.radius > this.y ) {
         score++;
      } 
    }
  }
}

document.addEventListener("keydown", controlCar);
function controlCar(e){
  switch(e.keyCode){
      case LEFT: 
          if (car.x >0){
            car.x -= car_step;
          }
          break;
      case RIGHT:
          if (car.x + car.width < canvas.width){
            car.x += car_step; 
          }
          break; 
      default: break;
  }
}

class Barrier{
  constructor()
  {
    this.x = Math.floor(Math.random() * (canvas.width-this.width-10))+10;;
    this.y = 0;
    this.width = 30;
    this.height = 10;
  }

  drawBarrier(){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill();
    ctx.closePath(); 
    if (this.y + this.height < canvas.height){
      this.y += barrier_step;
    }
    else {
      this.y = 0;
      this.x = Math.floor(Math.random() * (canvas.width-this.width-10))+10;
    }
  }  
}

class Coin{
  constructor(){ 
    this.radius = 8;
    this.x = Math.floor(Math.random() * (canvas.width-this.radius-10))+10;
    this.y = 0;
   
  }
  drawCoin(){
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath(); 
    
    if (this.y + this.radius < canvas.height){
      this.y += coin_step;  
    }
    else {
      this.x = Math.floor(Math.random() * (canvas.width-this.radius-10))+10;
      this.y = 0;
    }
  }  
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.drawCar();
  barrier.drawBarrier();
  coin.drawCoin();
  car.checkLose();
  car.checkCoin();
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 10,10);
}

let barrier = new Barrier(); 
let coin = new Coin();
let car = new Car(car_img, barrier, coin);
let interval = setInterval(draw,10);