const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
const step = 5;
const airplane_width = 150;
const airplane_height = 142;



document.addEventListener("keydown", controlAirplane);

function controlAirplane(event){
    switch(event.keyCode){
        case leftKey:{
            let airplane = document.querySelector("#airplane");
            airplane.src = "img/left.png";
            airplane.style.width = "150px";
            airplane.style.height = "142px";
            if(parseInt(airplane.style.left)>0){
            airplane.style.left = parseInt(airplane.style.left) - step + "px";
            }
            break;
        }
        case upKey:{
            let airplane = document.querySelector("#airplane");
            airplane.src = "img/top.png";
            airplane.style.width = "142px";
            airplane.style.height = "150px";
            if(parseInt(airplane.style.top)>0){
            airplane.style.top = parseInt(airplane.style.top) - step + "px";
            }
            break;
        }
        case rightKey:{
            let airplane = document.querySelector("#airplane");
            airplane.src = "img/right.png";
            airplane.style.width = "150px";
            airplane.style.height = "142px";
            if(parseInt(airplane.style.left)+airplane_width + step <= window.innerWidth){
            airplane.style.left = parseInt(airplane.style.left) + step + "px";
            }
            break;
        }
        case downKey:{
            let airplane = document.querySelector("#airplane");
            airplane.src = "img/bot.png";
             airplane.style.width = "142px";
            airplane.style.height = "150px";
            if(parseInt(airplane.style.top)+airplane_width + step <= window.innerHeight){
            airplane.style.top = parseInt(airplane.style.top) + step + "px";
        }
            break;
        }
        default:{
            alert("Please use around key");
            break;
        }
    }
}