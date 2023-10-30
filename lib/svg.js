


function createSvg(brand, color, shape){
    if (shape == 'circle'){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${brand}</text>
      
      </svg>`
    }else if (shape =='square'){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="150" y="100" width="200" height="200" fill="${color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${brand}</text>
      
      </svg>`
    }else if (shape == 'triangle'){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="50, 13.397 100, 100 0, 100" fill="${color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${brand}</text>
      
    </svg>`
    }
}
module.exports = { createSvg };