/**
 * Created by msi on 24/02/2017.
 */
const readlineSync = require('readline-sync');
const draw = require('./draw').Draw;
const log = console.log;

const drawThing = () => {
    let row, col;
    try {
        row = getInput('Enter number of row: ', convert_input);
        col = getInput('Enter number of column: ', convert_input );
    } catch (err) {
        log('Error: ', err.message);
        return;
    }

    const drawTest =  new draw(row,col);
    drawTest.drawEverything();
};

const convert_input = (input_string) => {
    if (isNaN(input_string)){
        throw new Error ('Your input is not a number');
    }
    let input_number = parseInt(input_string);
    return input_number;
};


const getInput = (message, validate_function) => {
    let answer = readlineSync.question(message);
    if (answer === 'q') {
        throw new Error('quit');
    }
    return validate_function(answer);
};

drawThing();

