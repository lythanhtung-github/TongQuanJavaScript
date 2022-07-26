const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
const topStep = 20;
const leftStep = 20;
const sizeImg = 200;

class Hero{
    
    setImage(image){
        this.image = image;
    }

    setTop(top){
        this.top = top;
    }

    setLeft(left){
        this.left = left;
    }
    
    setSize(size){
        this.size = size;
    }
  
    getHeroElement(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    moveRight(){
        if(this.left < window.innerWidth - this.size){
            this.left += leftStep;
        }   
    }

    moveLeft(){
        if(this.left > 0){
        this.left -= leftStep;
        }
    }

    moveTop(){
        if(this.top > 0){
            this.top -= topStep;
        }  
    }

    moveDown(){
        if(this.top < window.innerHeight - this.size){
        this.top += topStep;
    }
  }
};

function controlHero(event){
    switch(event.keyCode){ 
        case leftKey:{
            hero.moveLeft();
            break;
        }
        case upKey:{
            hero.moveTop();
            break;
        }
        case rightKey:{
            hero.moveRight();
            break;
        }
        case downKey:{
            hero.moveDown();
            break;
        }
        default:{
            alert("Please use around key");
            break;
        }
    }
};

document.addEventListener("keydown", controlHero);

var hero = new Hero();
hero.setImage('pikachu.png');
hero.setTop(topStep);
hero.setLeft(leftStep);
hero.setSize(sizeImg);
hero.getHeroElement();

document.getElementById('game').innerHTML = hero.getHeroElement();
controlHero();