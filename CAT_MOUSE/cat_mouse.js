class Mouse{
    status;
    mouseSound = "Chít chít";
    constructor(name,weight,speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    
    getStatus(){
        return this.status;
    }
    mouseDie(){
        return this.status == false;
    }
    mouseNoDie(){
        return this.status == true;
    }

    getMouseStatus(){
        if (this.status) document.write("Chuột đang sống");
        else document.write("Chuột đã chết");
    }

    actionMouse(){
        document.write(this.mouseSound);
    }
}

class Cat{
    catSound = "Meo meo";
    constructor(name,weight,speed,mouse){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.mouse = mouse;
    }

    catchTheMouse(){
        if (this.speed> this.mouse.speed)
            document.write("Mèo đã bắt được chuột");
        else document.write("Mèo không bắt được chuột");
    }

    eatTheMouse(){
        if (this.mouse.status){
            this.weight = this.weight + this.mouse.weight;
            this.mouse.status = false;
            return(`Chuột đã bị mèo ăn, cân nặng của mèo tăng lên thành ${this.weight}`);
        }
    }
    actionCat(){
        document.write(this.catSound);
    }
}

let Rat = new Mouse("Rat",20,50);
let Tom = new Cat("Tom",20,100, Rat);

document.write(`Chuột có tên là ${Rat.name} có cân nặng ${Rat.weight} và tốc độ là ${Rat.speed}`);
document.write("<br>");
Rat.mouseDie();
alert(Rat.getStatus());
Rat.getMouseStatus();
document.write("<br>");
Rat.actionMouse();
document.write("<br>");

document.write(`Mèo có tên là ${Tom.name} có cân nặng ${Tom.weight} và tốc độ là ${Tom.speed}`);
document.write("<br>");
Tom.actionCat();
document.write("<br>");
Tom.catchTheMouse();
Tom.eatTheMouse();