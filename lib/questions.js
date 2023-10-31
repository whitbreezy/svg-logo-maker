const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSvg } = require('./svg.js');


class Questions{
    constructor(color, text, shape){
        this.shape = shape,
        this.color= color,
        this.text = text,
        this.logo = []
    }
    run(){
        return inquirer
        .prompt([
            {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 letters',
            },
            {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color name or hex code for the text'
            },
            {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape',
            choices: ['circle', 'square', 'triangle'],
            },
            {
            type: 'input',
            name: 'color',
            message: 'Enter a color name or hex code'
            }
        ])
        .then((data)=>{
            return writeFile(
                join(__dirname, '..', 'output', 'logo.svg'),
                createSvg(data.color, data.text, data.textColor, data.shape)
            )
        })
    }
};
module.exports = Questions;
