function TinhSoNgay() {
    let thang= document.getElementById("nb_Thang").value;
    let st ="";
    switch(thang) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12": st = "Tháng "+ thang +" có 31 ngày"; 
            break;
        case "2": st = "Tháng "+ thang +" có 28 hoặc 29 ngày"; 
            break;
        case "4": st = "Tháng "+ thang +" có 30 ngày"; 
        case "6": st = "Tháng "+ thang +" có 30 ngày"; 
        case "9": st = "Tháng "+ thang +" có 30 ngày"; 
        case "11": st = "Tháng "+ thang +" có 30 ngày"; 
            break;
        default: st = "Vui lòng nhập lại số tháng"; 
            break;   
    }
    document.getElementById("st").innerHTML = st;
}