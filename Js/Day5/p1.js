function Shape() {
    if (new.target === Shape) {
        throw new Error("Cannot instantiate an abstract class (Shape)");
    }
}

function Rectangle(width, height) {
    Shape.call(this);
    this.width = width;
    this.height = height;
    Rectangle.count++;
}

Rectangle.count = 0;

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function() {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function() {
    return `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;
};

Rectangle.getObjectCount = function() {
    return Rectangle.count;
};

function Square(side) {
    Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
    return `Square: Side = ${this.width}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;
};


const rect1 = new Rectangle(4, 5);
console.log(rect1.toString());

const square1 = new Square(4);
console.log(square1.toString());

console.log("Total objects created:", Rectangle.getObjectCount());

try {
    const shape1 = new Shape();
} catch (error) {
    console.log("Error caught successfully:", error.message);
}



