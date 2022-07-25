class Mobile{

    constructor(name, pin, tinNhanDaGui, tinNhanDen, tinNhanSoanThao, status){
        this.name = name;
        this.pin = pin;
        this.tinNhanDaGui = tinNhanDaGui;
        this.tinNhanSoanThao = tinNhanSoanThao;
        this.tinNhanDen = tinNhanDen;
        this.status = status;
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;;
    }

    setPin(pin){
        this.pin = pin;
    }
    getPin(){
        return this.pin;
    }

    sacPin(pin){
        if (this.pin<100){
            this.pin = this.pin+1;
        }
    }

    setTinNhanDaGui(tinNhanDaGui){
       this.tinNhanDaGui = tinNhanDaGui;
    }

    getTinNhanDaGui(){
        return this.tinNhanDaGui;
    }

    setTinNhanSoanThao(tinNhanSoanThao){
        this.tinNhanSoanThao = tinNhanSoanThao;
    }

    getTinNhanSoanThao(){
        return this.tinNhanSoanThao;
    }

    setTinNhanDen(tinNhanDen){
        this.tinNhanDen = tinNhanDen;
    }

    getTinNhanDen(){
        return this.tinNhanDen;
    }

    setStatus(status){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }

    trangThaiDienThoai(status){
        if (this.status == true) return ("đang bật");
        else return ("đang tắt");
    }
}


// (name, pin, tinNhanDaGui, tinNhanDen, tinNhanSoanThao, status)
let nokia = new Mobile();
let iphone = new Mobile();

nokia.setName("Nokia");
let nokiaName = nokia.getName();
nokia.setPin(90);
nokia.setStatus(true);
let nokiaStatus = nokia.getStatus();
document.write(`${nokiaName} ${nokia.trangThaiDienThoai(nokiaStatus)} <br>`);

document.write(`Pin: ${nokia.getPin()} <br>`);
nokia.setTinNhanSoanThao("I am Nokia");
document.write(`${nokiaName} đã soạn thảo tin nhắn "${nokia.getTinNhanSoanThao()}" <br>`);
nokia.setTinNhanDaGui("Hello iphone");
document.write(`${nokiaName} đã gửi tin nhắn "${nokia.getTinNhanDaGui()}" <br>`);

iphone.setName("Iphone");
let iphoneName = iphone.getName();
iphone.setPin(80);
iphone.setStatus(true);

iphone.setTinNhanDen(nokia.getTinNhanDaGui());
iphone.setTinNhanSoanThao("I am iphone");


document.write(`${iphoneName} đã gửi nhận tin nhắn "${nokia.getTinNhanDaGui()}" <br>`);



