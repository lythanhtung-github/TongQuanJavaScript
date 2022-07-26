class Remote{
    constructor(id, tivi){
        this.id = id;
        this.tivi = tivi;
    }
   
    turnOnTivi(){
        if (this.tivi.status == false){
            this.tivi.status = true;
            return("Đã bật Tivi");
        }
        else return("Tivi đang bật");
    }
    turnOffTivi(){
        if (this.tivi.status == true){
            this.tivi.status = false;
            return("Tivi đã tắt");
        }
        else return("Tivi đang tắt");
    }
    turnUpVolume(tivi){
        if (this.tivi.volume>0 && this.tivi.volume<=100)
        {
            this.tivi.volume +=2;
        }
    }

    turnDownVolume(tivi){
        if (tivi.volume>0 && tivi.volume<=100)
        {
            this.tivi.volume -=2;
        }
    }

    turnUpChannel(tivi){
        if (this.tivi.channel <=10 && this.tivi.channel >0){
            this.tivi.channel ++;
        }
    }

    turnDownChannel(tivi){
        if (this.tivi.channel <=10 && this.tivi.channel >0){
            this.tivi.channel --;
        }
    }
}

class Tivi{
    status;
    constructor(volume, channel){
        this.volume = volume;
        this.channel = channel;
    }
    getStatus(){
        return this.status;
    }
    tiviOn(){
        this.status = true;
        return this.status;
    }

    tiviOff(){
        return this.status = false;
    }  
}
let tivi = new Tivi(50,7);
let remote = new Remote("remote1", tivi);

tivi.tiviOff();
 
remote.turnOnTivi();
alert(remote.turnOnTivi());