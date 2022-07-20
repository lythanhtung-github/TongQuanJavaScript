function reset(){
    document.getElementById("income").value = null;
    document.getElementById("result").value = null;
}

function calIncomeTax(){
    let income = Number(document.getElementById("income").value);
    let incomeTax =  document.getElementById("result");
    
    incomeTax.value = `${income<0? "Vui lòng nhập lại"
                        :income<=5? (income*5/100).toFixed(2)
                        :income<=10? (income*10/100-0.25).toFixed(2)
                        :income<=18? (income*15/100-0.75).toFixed(2)
                        :income<=32? (income*20/100-1.65).toFixed(2)
                        :income<=52? (income*25/100-3.25).toFixed(2)
                        :income<=80? (income*30/100-5.85).toFixed(2)
                        :(income*35/100-9.85).toFixed(2)}`;

}

