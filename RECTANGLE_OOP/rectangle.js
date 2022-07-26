class Rectangle {
    constructor (width,height){
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

let rectangle = new Rectangle(400,200);
width = rectangle.getWidth();
height = rectangle.getHeight();

let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();

let ctx = document.querySelector('#myCanvas').getContext("2d");
ctx.fillStyle='#fa4b2a';
ctx.fillRect(0,0, width, height);
let c = document.querySelector("#result");
alert(`Diện tích hình chữ nhật là ${area} và chu vi hình chữ nhật là ${perimeter}`) ;




