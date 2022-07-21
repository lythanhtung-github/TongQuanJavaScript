const max = 3;
const min = 1;
const win_1 = "http://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/1x1.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/1x2.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/1x3.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/1x4.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/1x5.jpg";
const win_2 = "http://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/2x1.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/2x2.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/2x3.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/2x4.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/2x5.jpg";
const win_3 = "http://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/3x1.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/3x2.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/3x3.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/3x4.jpghttp://127.0.0.1:5500/CONDITION_TEST/GAME_PUZZLE/image/3x5.jpg";

function changeImage(row){
    let img1 = document.querySelector("#image_1");
    let img2 = document.querySelector("#image_2");
    let img3 = document.querySelector("#image_3");
    let img4 = document.querySelector("#image_4");
    let img5 = document.querySelector("#image_5");

    let imageID = Math.floor(Math.random()*(max-min+1) +min);
    let imageName = `${imageID}x${row}.jpg`;
    let image = document.querySelector(`#image_${row}`);
    image.src =`image/${imageName}`;

    let checkWin = img1.src+img2.src+img3.src+img4.src+img5.src;
    let styleWin = document.getElementsByTagName("table")[0].classList;

    checkWin === win_1 || checkWin === win_2 || checkWin === win_3? styleWin.add("complete"):styleWin.remove("complete");
}

