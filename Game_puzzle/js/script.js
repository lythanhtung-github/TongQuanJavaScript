
function swap_img(y){
       if (y == 1){
        let z = Math.floor(Math.random() * 3);
        let w = "";
        if (z ==0){
            w = "cat";
        } 
        else if (z ==1){ 
            w = "monkey";
        }
        else w = "panda";   
        document.images['img'+y].src ='img/'+w+y +'.jpg';
        let img_n1=w;
       }
       else if (y == 2){
        let z = Math.floor(Math.random() * 3);
        let w = "";
        if (z ==0){
            w = "cat";
        } 
        else if (z ==1){ 
            w = "monkey";
        }
        else w = "panda";
        document.images['img'+y].src ='img/'+w+y +'.jpg';
        let img_n2=w;
       }
       else if (y == 3){
        let z = Math.floor(Math.random() * 3);
        let w = "";
        if (z ==0){
            w = "cat";
        } 
        else if (z ==1){ 
            w = "monkey";
        }
        else w = "panda";
        document.images['img'+y].src ='img/'+w+y +'.jpg';
        let img_n3=w;
       }
       else if (y == 4){
        let z = Math.floor(Math.random() * 3);
        let w = "";
        if (z ==0){
            w = "cat";
        } 
        else if (z ==1){ 
            w = "monkey";
        }
        else w = "panda";
        document.images['img'+y].src ='img/'+w+y +'.jpg';
        let img_n4=w;
       }
       else{
        let z = Math.floor(Math.random() * 3);
        let w = "";
        if (z ==0){
            w = "cat";
        } 
        else if (z ==1){ 
            w = "monkey";
        }
        else w = "panda";
        document.images['img'+y].src ='img/'+w+y +'.jpg';
        let img_n5=w;
       }
       if (img_n1 == img_n2 == img_n3 == img_n4 == img_n5) {
        alert("Bạn đã chiến thắng");
       }
}