class Mouse{
    status;
    mouseSound = "Chít chít <br>";
    constructor(name,weight,speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    
    getStatus(){
        return this.status;
    }
    mouseDie(){
        return this.status = false;
    }
    mouseNoDie(){
        return this.status = true;
    }

    getMouseStatus(){
        if (this.status) document.write("Chuột đang sống <br>");
        else document.write("Chuột đã chết <br>");
    }

    actionMouse(){
        document.write(this.mouseSound);
    }
}

class Cat{
    catSound = "Meo meo <br>";
    constructor(name,weight,speed,mouse){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.mouse = mouse;
    }

    catchTheMouse(){
        if (this.speed> this.mouse.speed)
            document.write("Mèo đã bắt được chuột <br>");
        else document.write("Mèo không bắt được chuột <br>");
    }

    eatTheMouse(){
        if (this.mouse.status){
            this.weight = this.weight + this.mouse.weight;
            this.mouse.status = false;
            document.write(`Chuột đã bị mèo ăn, cân nặng của mèo tăng lên thành ${this.weight} <br>`);
        }
        else{
            document.write("Mèo không ăn chuột chết <br>");
        }
    }
    actionCat(){
        document.write(this.catSound);
    }
}

let Rat = new Mouse("Rat",20,50);
let Tom = new Cat("Tom",20,100, Rat);

document.write(`Chuột có tên là ${Rat.name} có cân nặng ${Rat.weight} và tốc độ là ${Rat.speed} <br>`);
Rat.mouseDie();
Rat.getMouseStatus();
Rat.actionMouse();

document.write(`Mèo có tên là ${Tom.name} có cân nặng ${Tom.weight} và tốc độ là ${Tom.speed} <br>`);
Tom.actionCat();
Tom.catchTheMouse();
Tom.eatTheMouse();

document.write('--------------------------------------------------- <br>');
Rat.mouseNoDie();
Rat.getMouseStatus();
Rat.actionMouse();

Tom.actionCat();
Tom.catchTheMouse();
Tom.eatTheMouse();