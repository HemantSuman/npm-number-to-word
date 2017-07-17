'use strict';

var ZERO_TO_NINETEEN = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

var TENTHS_ZERO_TO_NINETY = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

var TENTHS_HUNDRED_TO_LAST = [
    'zero', 'ten', 'HUNDRED', 'THOUSAND', 'THOUSAND', 'LAKHS', 'LAKHS', 'ARAB', 'ARAB'
];


function getNumber(inputNumber) {
    var resultNumber = [];
    resultNumber =  get_number_to_word(inputNumber, resultNumber);
    return resultNumber.join(" ");
}

function get_number_to_word(inputNumber, resultNumber) {

    inputNumber = parseInt(inputNumber.toString().replace(/^0+/, ''));

    var numberLength = inputNumber.toString().length;
    var inputNumberArray = inputNumber.toString().split('');

    if (isNaN(inputNumber)) {
    } else if (numberLength == 1) {
        resultNumber.push(ZERO_TO_NINETEEN[inputNumber]);
    } else if (numberLength == 2) {
        if (inputNumber < 20) {
            resultNumber.push(ZERO_TO_NINETEEN[inputNumber]);
        } else {
            resultNumber.push(TENTHS_ZERO_TO_NINETY[inputNumberArray[0]]);
            if ([inputNumberArray[1]] != 0) {
                resultNumber.push(ZERO_TO_NINETEEN[inputNumberArray[1]]);
            }
        }
    } else if (numberLength == 3) {
        resultNumber.push(ZERO_TO_NINETEEN[inputNumberArray[0]]);
        resultNumber.push('hundred');
        get_number_to_word(inputNumberArray[1] + inputNumberArray[2],resultNumber)

    } else if (numberLength == 4) {
        resultNumber.push(ZERO_TO_NINETEEN[inputNumberArray[0]]);
        resultNumber.push('thousand');
        get_number_to_word(inputNumberArray[1] + inputNumberArray[2] + inputNumberArray[3],resultNumber);

    } else if (numberLength == 5) {
        get_number_to_word(inputNumberArray[0] + inputNumberArray[1],resultNumber);
        resultNumber.push('thousand');
        get_number_to_word(inputNumberArray[2] + inputNumberArray[3] + inputNumberArray[4],resultNumber);

    } else if (numberLength == 6) {
        get_number_to_word(inputNumberArray[0],resultNumber);
        resultNumber.push('lakhs');
        get_number_to_word(inputNumberArray[1] + inputNumberArray[2] + inputNumberArray[3] + inputNumberArray[4] + inputNumberArray[5],resultNumber);

    } else if (numberLength == 7) {
        get_number_to_word(inputNumberArray[0] + inputNumberArray[1],resultNumber);
        resultNumber.push('lakhs');
        get_number_to_word(inputNumberArray[2] + inputNumberArray[3] + inputNumberArray[4] + inputNumberArray[5] + inputNumberArray[6],resultNumber);

    } else if (numberLength == 8) {
        get_number_to_word(inputNumberArray[0],resultNumber);
        resultNumber.push('crore');
        get_number_to_word(inputNumberArray[1] + inputNumberArray[2] + inputNumberArray[3] + inputNumberArray[4] + inputNumberArray[5] + inputNumberArray[6] + inputNumberArray[7],resultNumber);

    } else if (numberLength == 9) {
        get_number_to_word(inputNumberArray[0] + inputNumberArray[1],resultNumber);
        resultNumber.push('crore');
        get_number_to_word(inputNumberArray[2] + inputNumberArray[3] + inputNumberArray[4] + inputNumberArray[5] + inputNumberArray[6] + inputNumberArray[7] + inputNumberArray[8],resultNumber);

    } else if (numberLength == 10) {
        get_number_to_word(inputNumberArray[0],resultNumber);
        resultNumber.push('arab');
        get_number_to_word(inputNumberArray[1] + inputNumberArray[2] + inputNumberArray[3] + inputNumberArray[4] + inputNumberArray[5] + inputNumberArray[6] + inputNumberArray[7] + inputNumberArray[8] + inputNumberArray[9],resultNumber);

    } else if (numberLength == 11) {
        get_number_to_word(inputNumberArray[0] + inputNumberArray[1],resultNumber);
        resultNumber.push('arab');
        get_number_to_word(inputNumberArray[2] + inputNumberArray[3] + inputNumberArray[4] + inputNumberArray[5] + inputNumberArray[6] + inputNumberArray[7] + inputNumberArray[8] + inputNumberArray[9] + inputNumberArray[10],resultNumber);

    } else {
        resultNumber.push('infinity');
    }
    return resultNumber;
}


module.exports.getNumber = getNumber;
