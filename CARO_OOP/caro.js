let boardHtml = "";
const row_board = 10;
const col_board = 10;
let flag = true;
let arrCheckCell = [];


function drawBoard(){
    boardHtml += `<div class="divTable">`;
    for (let row = 0; row < row_board; row++){
        boardHtml += `<div class="divRow">`;
        for (let col = 0; col < col_board; col++){
            boardHtml += `<div onclick="clickCell(${row},${col})" class="divCell" id="cell${row}${col}"></div>`;
        }
        boardHtml += "</div>";
    }
    boardHtml += "</div>";
    document.querySelector("#drawBoard").innerHTML = boardHtml;
};

drawBoard();
function clickCell(row,col){
    if (flag == true){
        document.querySelector(`#cell${row}${col}`).innerHTML = "X";
        arrCheckCell.push(`${row}${col}`);
            flag = false;        
    }
    else
    {
        document.querySelector(`#cell${row}${col}`).innerHTML = "O";
        arrCheckCell.push(`${row}${col}`);
       
        flag = true;
        
    }
};

// function checkCell(row,col){
//     for (let i = 0; i < arrCheckCell.length; i++){
//         if (`${row}${col}` == arrCheckCell[i]){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// };

