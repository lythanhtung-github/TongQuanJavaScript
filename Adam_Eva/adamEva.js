
class Apple{

    constructor(weight) {
        this.weight = weight;
    }

    setWeight(weight){
        this.weight = weight;
    }
    getWeight(){
        return this.weight;
    }

    decrease(){
        if(this.isEmpty()) document.write("Táo đã ăn hết");
        else return this.weight--;
    }

    isEmpty(){
        if (this.weight > 0) return false;
        else return true;  
    }
}

class Human{
    constructor(name, gender, weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setWeight(weight){
         this.weight = this.weight;
    }
    getWeight(){
       return this.weight;
    }
    isMale(){
        if(this.gender == 1) return true;
        else return false;
    }

    getGender(){
        if(this.isMale()) return "Male";
        else return "Female";
    }
    
    say(string){
        document.write(string);
    }

    checkApple(apple){
        return apple.isEmpty();
    }

    eat(apple){
        if(apple.getWeight() > 0){
            apple.decrease();
            this.weight++;
        }else { 
            alert("Táo đã hết");
        }
    }

    getInfo(human){
        alert(human.name + " " +human.weight + " " +human.getGender());
    }
}

let apple = new Apple(10);

let adam = new Human("Adam", 1, 60);
let eva = new Human("Eva", 2, 50);



while (apple.isEmpty()== false){
    
    adam.say(`I am Adam, my gender is ${adam.getGender()} and my weight is ${adam.getWeight()} <br>`);
    document.write("Adam is eating apple"+"<br>");
    adam.eat(apple);
    document.write(`Apple is ${apple.getWeight()} <br>`);
    document.write(`Weight of Adam is ${adam.getWeight()} <br>`);
    document.write("<br>");

    eva.say(`I am Eva, my gender is ${eva.getGender()} and my weight is ${eva.getWeight()} <br>`);
    document.write("eva is eating apple"+"<br>");
    eva.eat(apple);
    document.write(`Apple is ${apple.getWeight()} <br>`);
    document.write(`Weight of eva is ${eva.getWeight()} <br>`);
    document.write("<br>");


}