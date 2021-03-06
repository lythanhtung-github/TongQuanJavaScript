const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;
const boardCols = 10;
const boardRows = 10;
const cellSize = 40;

function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = VALUE_EMPTY;
    this.getHtml = function(){
        var top = x * cellSize;
        var left = y * cellSize;
        var cellHtml = `<div id="cell-${x}-${y}" onclick="play(${x},${y})" class="cell" 
        style="left:${left}px; top:${top}px;"></div>`;
        return cellHtml;
    };

    this.draw = function () {
        var cellDiv = document.getElementById("cell-"+x+"-"+y);
        switch (this.value){
            case VALUE_X:
                cellDiv.innerHTML = "X";
                break;
            case VALUE_O:
                cellDiv.innerHTML = "O";
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}

function GameBoard(rows, cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.turn = VALUE_O;
    this.cells = [];
    this.isOver = false;
    
    this.draw = function () {
        var gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for(var i = 0; i < this.rows; i++){
            var row = [];
            this.cells.push(row);
            for(var j = 0; j < this.cols; j++){
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    };

    this.play = function (x, y) {
        if(this.isOver) {
            return;
        }
        var cell = this.cells[x][y];
        if(cell.value === VALUE_EMPTY){
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            if(this.turn === VALUE_O){
                this.turn = VALUE_X;
            } else {
                this.turn = VALUE_O;
            }
        } else {
            alert("Cell is not empty");
        }
    };
    
    this.check = function (x, y) {
        var cell = this.cells[x][y];
        //Ki???m tra h??ng ngang
        var count = 1;
        var i = 1;
        while((y + i < this.cols) && this.cells[x][y + i].value ===  cell.value){
            count++;
            i++;
        }
        var i = 1;
        while((y - i >= 0) && this.cells[x][y - i].value ===  cell.value){
            count++;
            i++;
        }
        this.endGame(count);
        //Ki???m tra h??ng d???c
        var count = 1;
        var i = 1;
        while((x + i < this.rows) &&this.cells[x + i][y].value ===  cell.value){
            count++;
            i++;
        }
        var i = 1;
        while((x - i >= 0) &&this.cells[x - i][y].value ===  cell.value){
            count++;
            i++;
        }
        this.endGame(count);
        //???????ng ch??o tr??i
        var count = 1;
        var i = 1;
        var j = 1;
        while((y + i < this.cols) && (x + i < this.rows) && this.cells[x + i][y + j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        this.endGame(count);
        //???????ng ch??o ph???i
        var count = 1;
        var i = 1;
        var j = 1;
        while((y + j < this.cols) && (x - i >= 0) && this.cells[x - i][y + j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while((y - j >= 0) && (x + i < this.rows) &&this.cells[x + i][y - j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    };

    this.endGame = function (count) {
        if(count >= 5){
            this.isOver = true;
            alert("B???n ???? chi???n th???ng!!!");
        }
    };
}

function play(x, y) {
   gameBoard.play(x, y);
}
var gameBoard;
function start() {
    gameBoard = new GameBoard(boardRows, boardCols, "game-board");
    gameBoard.draw();
}
``
start();
