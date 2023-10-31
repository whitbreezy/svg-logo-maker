const { Shapes } = require("./shapes");
const { Circle } = require("./shapes");
const { Square } = require("./shapes");
const { Triangle } = require("./shapes");

describe('Circle', () =>{
    test('circle should be blue when "blue" is entered as the color', () =>{
        const circle = new Circle(
          "blue", 
          this.text, 
          this.textColor,
          this.shape
        );
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    })
});
describe('Square', () =>{
    test('Square should be blue when "blue" is entered as the color', () =>{
        const square = new Square(
          "blue", 
          this.text,
          this.textColor,
          this.shape
        );
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="200" height="200" fill="blue"/>
            <text x="100" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    })
});
describe('Triangle', () =>{
    test('Triangle should be blue when "blue" is entered as the color', () =>{
        const triangle = new Triangle(
          "blue", 
          this.text,
          this.textColor,
          this.shape
        );
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    })
})
