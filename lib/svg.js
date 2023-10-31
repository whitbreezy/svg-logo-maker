const { Shapes } = require("./shapes");
const { Circle } = require("./shapes");
const { Square } = require("./shapes");
const { Triangle } = require("./shapes")

function createSvg(color, text, shape){
    if (shape == 'circle'){
        const circle = new Circle(
            color, 
            text,
            shape
        );
        return circle.render();
    }else if (shape =='square'){
        const square = new Square(
            color, 
            text,
            shape
        )
        return square.render();
    }else if (shape == 'triangle'){
        const triangle = new Triangle(
            color, 
            text,
            shape
        )
        return triangle.render();
    }
}
module.exports = { createSvg };