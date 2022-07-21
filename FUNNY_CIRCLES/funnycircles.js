function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function randomColor(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    return `rgb(${red}, ${green}, ${blue})`;
}

function createCircle(){
    let ctx = document.querySelector("#myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 150);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x,y,radius);
    ctx.beginPath();//Bắt đầu vẽ
    ctx.arc(circle.x, circle.y,circle.radius, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle(number){
    for(var i = 0; i < number; i++){
    createCircle();
    }
}
let number = Number(prompt("Enter your number:"));
createMultipleCircle(number);