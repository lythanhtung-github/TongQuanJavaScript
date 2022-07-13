
function swap_img(y){
       let img_n1 ;
       let img_n2 ;
       let img_n3 ;
       let img_n4 ;
       let img_n5 ;
    if (y == 1){
        let img_n1 ;
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
        img_n1=w;
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
        img_n2=w;
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
        img_n3=w;
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
        img_n4=w;
    }
    else {
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
        img_n5=w;
    }
    // if (img_n1 ==  img_n2 && img_n2 == img_n3 && img_n3 == img_n4 && img_n4 == img_n5) {
    //     alert("Bạn đã chiến thắng");
    // }
    // switch(img_n1) {
    //     case img_n2:
    //         case img_n3:
    //             case img_n4:
    //                 case img_n5:
    //                     alert("Bạn đã chiến thắng");
    //                     break;
    // }
    alert(img_n1 + " " + img_n2 + " " + img_n3 + " " + img_n4 + " " + img_n5);
    // if (img_n1 == img_n2 && img_n2 == img_n3 && img_n3 == img_n4 && img_n4 == img_n5){
    //         alert("Bạn đã chiến thắng");    
    // }
}