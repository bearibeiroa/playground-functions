// Desafio 1
function compareTrue(value1, value2) {
    if (value1 === true && value2 === true) {
        return true;
    } else {
        return false;
    }
}


// Desafio 2
function calcArea(base, height) {
    let area = (base * height) / 2;
    return area;
}


// Desafio 3
function splitSentence(valueSentence) {
    let resultSentence = valueSentence.split(' ');
    return resultSentence;
}

// Desafio 4
function concatName(arrayOfStrings) {
    let resultConcat = arrayOfStrings[arrayOfStrings.length - 1] + ', ' + arrayOfStrings[0];
    return resultConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
    let points = (wins * 3) + (ties * 1);
    return points
}

// Desafio 6
function highestCount(arrayOfNumbers) {
    let biggestNumber = 0;
    let countNumber = 0;
    for (let index in arrayOfNumbers) {
        if (Math.abs(arrayOfNumbers[index]) > biggestNumber) biggestNumber = arrayOfNumbers[index];
    }
    for (let index2 in arrayOfNumbers) {
        if (arrayOfNumbers[index2] === biggestNumber) {
            countNumber += 1
        }
    }
    return countNumber;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let positionCat1 = Math.abs(mouse - cat1);
    let positionCat2 = Math.abs(mouse - cat2);

    if (positionCat1 > positionCat2) {
        return 'cat2';
    } else if (positionCat2 > positionCat1) {
        return 'cat1';
    } else {
        return 'os gatos trombam e o rato foge';
    }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
    let newArray = [];
    for (let index = 0; index < arrayNumbers.length; index += 1) {
        if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
            newArray.push("fizzBuzz");
        } else if (arrayNumbers[index] % 3 === 0) {
            newArray.push("fizz");
        } else if (arrayNumbers[index] % 5 === 0) {
            newArray.push("buzz");
        } else {
            newArray.push("bug!")
        }
    }
    return newArray;
}

// Desafio 9
function encode(stringEnconde) {
    let phraseEncode = '';
    for (letter of stringEnconde) {
        if (letter === 'a') {
            phraseEncode += '1';
        } else if (letter === 'e') {
            phraseEncode += '2';
        } else if (letter === 'i') {
            phraseEncode += '3';
        } else if (letter === 'o') {
            phraseEncode += '4';
        } else if (letter === 'u') {
            phraseEncode += '5';
        } else {
            phraseEncode += letter;
        }
    }
    return phraseEncode;
}

function decode(stringDecode) {
    let phraseDecode = '';
    for (letter of stringDecode) {
        if (letter === '1') {
            phraseDecode += 'a';
        } else if (letter === '2') {
            phraseDecode += 'e';
        } else if (letter === '3') {
            phraseDecode += 'i';
        } else if (letter === '4') {
            phraseDecode += 'o';
        } else if (letter === '5') {
            phraseDecode += 'u';
        } else {
            phraseDecode += letter;
        }
    }
    return phraseDecode;
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};