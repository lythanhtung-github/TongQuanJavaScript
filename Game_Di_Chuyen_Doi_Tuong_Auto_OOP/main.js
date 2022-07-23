const step = 100;
const sizeHero = 200;
const ranTop = Math.floor(Math.random() *window.innerWidth - sizeHero - step);
const ranLeft = Math.floor(Math.random() *window.innerHeight - sizeHero - step);
const img = "doremon.png"


function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += step;
    }

    this.moveLeft = function(){
        this.left -= step;
    }

    this.moveTop = function(){
        this.top -= step;
    }

    this.moveBot = function(){
        this.top += step;
    }
    
  }
  
  var hero = new Hero(img, ranTop, ranLeft, sizeHero);
  
  function start(){
    let numRan = Math.floor(Math.random() *4);
    switch(numRan){
        case 0: {
            if(hero.left < window.innerWidth - hero.size) hero.moveRight();
            break;
        }
        case 1: {
            if(hero.top < window.innerHeight - hero.size) hero.moveBot();
            break;
        }
        case 2: {
            if(hero.left >0)hero.moveLeft();
            break;
        }
        case 3: {
            if(hero.top>0) hero.moveTop();
            break;
        }
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
  }
  
  start();