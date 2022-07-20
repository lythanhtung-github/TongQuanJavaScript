function reset(){
    document.getElementById("electric").value = null;
    document.getElementById("result").value = null;
}

function calBill(){
    let elt = Number(document.getElementById("electric").value);
    let result = document.getElementById("result");

    // if(elt<0) result = "Vui lòng nhập lại";
    // else if(elt<=50) {result = (elt*1.678).toFixed(2);}
    // else if(elt<=100) result = (50*1.678+(elt-50)*1.734).toFixed(2);
    // else if(elt<=200) result = (50*1.678+50*1.734+(elt-100)*2.014).toFixed(2);
    // else if(elt<=300) result = (50*1.678+50*1.734+100*2.014+(elt-200)*2.536).toFixed(2);
    // else if(elt<=400) result = (50*1.678+50*1.734+100*2.014+100*2.536+(elt-300)*2.834).toFixed(2);
    // else result = (50*1.678+50*1.734+100*2.014+100*2.536+100*2.834+(elt-400)*2.927).toFixed(2);

    result.value = `${elt<0?"Vui lòng nhập lại"
                    :elt<=50?(elt*1.678).toFixed(2)
                    :(elt<=100)?(50*1.678+(elt-50)*1.734).toFixed(2)
                    :(elt<=200)?(50*1.678+50*1.734+(elt-100)*2.014).toFixed(2)
                    :(elt<=300)?(50*1.678+50*1.734+100*2.014+(elt-200)*2.536).toFixed(2)
                    :(elt<=400)?(50*1.678+50*1.734+100*2.014+100*2.536+(elt-300)*2.834).toFixed(2)
                    :(50*1.678+50*1.734+100*2.014+100*2.536+100*2.834+(elt-400)*2.927).toFixed(2)}`;

}

