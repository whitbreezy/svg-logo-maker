const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSvg } = require('./svg.js');


class Questions{
    constructor(){
        this.shape = '',
        this.color='',
        this.brand = '',
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
        .then(()=>{
            return writeFile(
                join(__dirname, '..', 'output', 'logo.svg'),
                createSvg(text, shape, color)
            )

        })
    }
}
