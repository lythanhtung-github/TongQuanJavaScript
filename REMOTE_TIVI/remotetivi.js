class Remote {
    constructor(id, tv) {
        this.id = id;
        this.tv = tv;
    }
   
    turnOnTV() {
        if ( this.tv.status == false){
            this.tv.status = true;
            document.write("Đã bật Tivi <br>");
        }
        else document.write("Tivi đang bật <br>");
    }
    turnOffTV(){
        if (this.tv.status == true){ 
            this.tv.status = false;
            document.write("Đã tắt Tivi <br>");
        }
        else document.write("Tivi đang tắt <br>");
    }
    turnUpVolume() {
        if (this.tv.status == true){
            if (this.tv.volume>0 && this.tv.volume<=100)
            {
                this.tv.volume = this.tv.volume+2;
                document.write(`Đã volume lên ${this.tv.volume} <br>`);
            }
        }
        else document.write(`Tivi đã tắt không thể tăng volume <br>`);
    }

    turnDownVolume(){
        if (this.tv.status == true){
            if (this.tv.volume>0 && this.tv.volume<=100)
        {
            this.tv.volume = this.tv.volume-2;
            document.write(`Đã volume xuống ${this.tv.volume} <br>`);
        }
        }
        else document.write(`Tivi đã tắt không thể giảm volume <br>`);
    }

    changeChannels(channel){
        if (this.tv.status == true){
            this.tv.setChannel(channel);
        }
        else document.write(`Tivi đã tắt không thể chuyển kênh <br>`);
    }
}

class Tivi {
    status;
    constructor(volume, channel){
        this.volume = volume;
        this.channel = channel;
    }

    // setStatus(status){
    //     this.status = status;
    // }
    // getStatus(){
    //     return this.status;
    // }

    // setVolume(volume){
    //     this.volume = volume;
    // }

    // getVolume(){
    //     return this.volume;
    // }

    setChannel(channel){
        this.channel = channel;
    }
    getChannel(){
        return this.channel; 
    }

    tvOn(){
        return this.status = true;
    }

    tvOff(){
        return this.status = false;
    }  
}

let tv1 = new Tivi(50,7);
let remote1 = new Remote("remote1", tv1);

tv1.tvOff();
remote1.turnOnTV();
remote1.turnUpVolume();
remote1.turnUpVolume();
remote1.turnUpVolume();
remote1. turnDownVolume();
remote1.changeChannels("Channel 7");
document.write(`Đã chuyển channel hiện tại sang kênh ${tv1.getChannel()} <br>`);
remote1.turnOffTV();
remote1.turnUpVolume();
remote1.changeChannels("Channel 8");

