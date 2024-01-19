const input = require('readline-sync');

function pigLatin(word, letCount){
    let errorStr = "";
    if(letCount > word.length){ 
        letCount = 3;
        errorStr = "\nThe amount of letters was too high! Default to 3 letters.";
    }
    const newWord = word.slice(letCount) + word.slice(0, letCount);
    return `${word} is ${newWord} in pig latin!${errorStr}`;
}

const word = input.question("Input string to be changed. ");
let number = input.question("Input number of letters to be changed: ");
if(Number.isNaN(number)){
    console.log(`Input ${number} is not a number... defaulting to 3.`);
    number = 3;
}
console.log(pigLatin(word, number));