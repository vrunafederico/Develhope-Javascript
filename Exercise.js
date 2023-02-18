class Square {
    constructor(side) {
        this.side = side;
    }
}
    
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
    
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
    
class AreaCalculator {
    static calculate(object){
        if(object instanceof Square){
            return object.side * object.side;
        }else if(object instanceof Rectangle){
            return object.width * object.height;
        }else if(object instanceof Circle){
            return object.radius * object.radius * Math.PI;
        }
    }
}
    
const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);
    
console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle))