class Temperature{
    tempC;

    setTempC(tempC){
        this.tempC = tempC; 
    }
    getTempC(){
        return tempC;
    }

    getTempF(tempC){
        return tempC*1.8+32;
    }
    getTempK(tempC){
        return tempC+273.15;
    }
}
let tempC = Number(prompt("Nhập độ C:"));

let temperature = new Temperature();

let myTempC = temperature.setTempC(tempC);
myTempC = temperature.getTempC();

let tempF = temperature.getTempF(myTempC);
let tempK = temperature.getTempK(myTempC);

alert(`Độ F là ${tempF}°F và độ K là ${tempK}°K`);