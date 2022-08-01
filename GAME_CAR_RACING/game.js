const LEFT = 37;
const RIGHT = 39;

const car_width = 32;
const car_height = 32;
const car_step = 10;

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let car_x =canvas.width/2-16;
let car_y = 120;  

// Math.floor(Math.random() * (max - min)) + min;

const barrier_width = 30;
const barrier_height = 10;
let barrier_x = Math.floor(Math.random() * (canvas.width-barrier_width-10))+10;
let barrier_y = 0;
let barrier_step = 0.3;

const coin_radius = 8;
let coin_x = Math.floor(Math.random() * (canvas.width-coin_radius-10))+10;
let coin_y = 0;
let coin_step = 0.2;


class Car {
  car_speed;
  constructor(car_x, car_y, car_width, car_height, car_img, barrier, coin) {
      this.car_x = car_x;
      this.car_y = car_y;
      this.car_width = car_width;
      this.car_height = car_height; 
      this.car_img = car_img;
      this.barrier = barrier;
      this.coin = coin;
  }

  drawCar(){
      this.car_image = new Image();
      this.car_image.src = this.car_img ;
      this.car_image.onload = () => {
        ctx.drawImage(this.car_image, this.car_x, this.car_y, this.car_width, this.car_height);
      }
  }

  checkLose(){
    if (this.barrier.barrier_x > this.car_x && this.barrier.barrier_x < this.car_x + this.car_width){
      if (this.barrier.barrier_y + this.barrier.barrier_height > this.car_y )
      {
        alert("You lose");
        clearInterval(interval);
        document.location.reload();
      } 
    }
    if (this.barrier.barrier_x + this.barrier.barrier_width > this.car_x && this.barrier.barrier_x + this.barrier.barrier_width < this.car_x + this.car_width){
      if (this.barrier.barrier_y + this.barrier.barrier_height > this.car_y )
      {
        alert("You lose");
        clearInterval(interval);
        document.location.reload();
      } 
    }
  }

  checkCoin(){
    if (this.coin.coin_x > this.car_x && this.coin.coin_x < this.car_x + this.car_width) {
      if (this.coin.coin_y + this.coin.coin_radius*2 > this.car_y )
      {
         alert("a");
      } 
    } 
    if (this.coin.coin_x + this.coin.coin_radius*2 > this.car_x && this.coin.coin_x + this.coin.coin_radius*2 < this.car_x + this.car_width){
      if (this.coin.coin_y + this.coin.coin_radius*2 > this.car_y )
      {
        alert("a");
      } 
    }
  }
}

document.addEventListener("keydown", controlCar);
function controlCar(e){
  switch(e.keyCode){
      case LEFT: 
          if (car.car_x >0){
            car.car_x -= car_step;
          }
          break;
      case RIGHT:
          if (car.car_x + car.car_width < canvas.width){
            car.car_x += car_step; 
          }
          break; 
      default: break;
  }
}

class Barrier{
  constructor(barrier_x, barrier_y, barrier_width, barrier_height)
  {
    this.barrier_x = barrier_x;
    this.barrier_y = barrier_y;
    this.barrier_width = barrier_width;
    this.barrier_height = barrier_height;
  }

  drawBarrier(){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.barrier_x, this.barrier_y, this.barrier_width, this.barrier_height);
    ctx.fill();
    ctx.closePath(); 
    if (this.barrier_y + barrier_height < canvas.height){
      this.barrier_y += barrier_step;
    }
    else {
      this.barrier_y = 0;
      this.barrier_x = Math.floor(Math.random() * (canvas.width-barrier_width-10))+10;
    }
  }  
}

class Coin{
  constructor(coin_x, coin_y, coin_radius){
    this.coin_x = coin_x;
    this.coin_y = coin_y;
    this.coin_radius = coin_radius;
  }
  drawCoin(){
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(this.coin_x, this.coin_y, this.coin_radius, Math.PI*2, false);
    ctx.fill();
    ctx.closePath(); 
    
    if (this.coin_y + coin_radius < canvas.height){
      this.coin_y += coin_step;  
    }
    else {
      this.coin_y = 0;
      this.coin_x = Math.floor(Math.random() * (canvas.width-coin_radius-10))+10;
    }
  }  
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.drawCar();
  coin.drawCoin();
  barrier.drawBarrier();
  car.checkLose();
  
}


let barrier = new Barrier(barrier_x, barrier_y, barrier_width, barrier_height); 
let coin = new Coin(coin_x, coin_y, coin_radius);
let car = new Car(car_x, car_y, car_width, car_height,'car2.png', barrier, coin);
let interval = setInterval(draw,10);