const { Shapes } = require("./shapes");
const { Circle } = require("./shapes");
const { Square } = require("./shapes");
const { Triangle } = require("./shapes")

function createSvg(color, text, textColor, shape){
    if (shape == 'circle'){
        const circle = new Circle(
            color, 
            text,
            textColor,
            shape
        );
        return circle.render();
    }else if (shape =='square'){
        const square = new Square(
            color, 
            text,
            textColor,
            shape
        )
        return square.render();
    }else if (shape == 'triangle'){
        const triangle = new Triangle(
            color, 
            text,
            textColor,
            shape
        )
        return triangle.render();
    }
}
module.exports = { createSvg };