class Shapes{
    constructor(color, text, shape){
        this.color = color;
        this.text = text
        this.shape = shape
    }
}
class Circle extends Shapes{
    constructor(color, text, shape){
        super(color, text, shape)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.color}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>`
    }
}
class Square extends Shapes{
    constructor(color, text, shape){
        super(color, text, shape)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="200" height="200" fill="${this.color}"/>
            <text x="100" y="100" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>`
    }
}
class Triangle extends Shapes{
    constructor(color, text, shape){
        super(color, text, shape)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>`
    }
}
module.exports = {Shapes, Square, Circle, Triangle}