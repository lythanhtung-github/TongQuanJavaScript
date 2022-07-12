
function lay_thamso(){
    let a = document.getElementById("img1");
}
function swap_img1(){
    let x = Math.floor(Math.random() * 3);
    document.images['img1'].src ='img/anh1/anh'+ x +'.jpg';
}
function swap_img2(){
    let y = 2;
    let x = Math.floor(Math.random() * 3);
    document.images['img'+y].src ='img/anh'+y+'/anh'+ x +'.jpg';
}
function swap_img3(){
    let x = Math.floor(Math.random() * 3);
    document.images['img3'].src ='img/anh3/anh'+ x +'.jpg';
}
function swap_img4(){
    let x = Math.floor(Math.random() * 3);
    document.images['img4'].src ='img/anh4/anh'+ x +'.jpg';
}
function swap_img5(){
    let x = Math.floor(Math.random() * 3);
    document.images['img5'].src ='img/anh5/anh'+ x +'.jpg';
}
