
function Kiem_tra() {
    let weight = document.getElementById("can_nang").value;
    let height = document.getElementById("chieu_cao").value;
    let bmi = weight / Math.pow(height,2);
    let result = "";
    if (bmi < 18.5) {
        result = "Chỉ số bmi của bạn là: "+ bmi + " ứng với <b>Underweight (Thiếu cân)</b>";
    }
    else if(bmi <25){
        result = "Chỉ số bmi của bạn là: "+ bmi + " ứng với <b>Normal (Bình thường)</b>";
    }
    else if(bmi <30){
        result = "Chỉ số bmi của bạn là: "+ bmi + " ứng với <b>Overweight (Thừa Cân)</b>";
    }
    else {
        result = "Chỉ số bmi của bạn là: "+ bmi + " ứng với <b>Obese (Béo phì)</b>";
    }
    document.getElementById("result").innerHTML= result;
}