class ElectricLamp{
    constructor(status){
        this.status = status;
    }
    getStatus(){
        return this.status;
    }
    turnOff(){
        this.status = false;
    }
    turnOn(){
        this.status = true;
    }
}

class SwitchButton{
    constructor(status, lamp)
    {
        this.status = status;
        this.lamp = lamp;
    }

    setLamp(lamp){
        this.lamp = lamp;
    }

    getLamp(){
        return this.lamp;
    }

    connectToLamp(ElectricLamp){
        return this.lamp = ElectricLamp;
    }
    switchOff() {
        this.lamp.status = false;
        return ("Bóng đèn đang tắt");
    }

    switchOn() {
        this.lamp.status = true;
        return ("Bóng đèn đang bật");
    }
}


let electriclamp = new ElectricLamp(false);
let switchbutton = new SwitchButton(false,electriclamp);

let result = document.querySelector("#result").innerHTML;
result = document.write(switchbutton.switchOff() + "<br>");
result = document.write(switchbutton.switchOn() + "<br>");
result = document.write(switchbutton.switchOff() + "<br>");
result = document.write(switchbutton.switchOn() + "<br>");
result = document.write(switchbutton.switchOff() + "<br>");
result = document.write(switchbutton.switchOn() + "<br>");
result = document.write(switchbutton.switchOff() + "<br>");
result = document.write(switchbutton.switchOn() + "<br>");
result = document.write(switchbutton.switchOff() + "<br>");
result = document.write(switchbutton.switchOn() + "<br>");
result = document.write(switchbutton.switchOff() + "<br>");
result = document.write(switchbutton.switchOn() + "<br>");



