var vx = 3;
var vy = 3;
var radius = 20;

var canvas = document.querySelector("canvas");
var x = Math.floor(Math.random() * canvas.width);
var y = Math.floor(Math.random() * canvas.height);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

move();

function move() {
    requestAnimationFrame(move);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "black";    
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();

    if (radius + x > canvas.width)
        vx = - vx;

    if (x - radius < 0)
        vx = - vx;

    if (y + radius > canvas.height)
        vy = - vy;

    if (y - radius < 0)
        vy = - vy;

    x = x + vx;
    y = y + vy;
}
