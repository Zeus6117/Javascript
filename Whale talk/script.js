let input = 'The ocean is beautiful.';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

//passes throught input//
for(let i = 1; i < input.length; i++) {
    
//passes through vowels//
    for(let j = 0; j < vowels.length; j++) {

        //only adds to the resultArray if the string is a vowel//
        if(input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }

//Can concatenate by using or symbol, so it schecks if either option is available and then pushes through//
    /*if(input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    } */
    
    //if there is an 'e'(string) in the array it will double it//
    if(input[i] === 'e') {
        resultArray.push(input[i]);
    }

    //if there is an 'u'(string) in the array it will double it//
    if(input[i] === 'u') {
        resultArray.push(input[i]);
    }
}

console.log(resultArray.join('').toUpperCase());

//Prints  as "EEOEEAIEEAUUIUU"