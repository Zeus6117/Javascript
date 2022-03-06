let userName = 'Jordan'

userName ? console.log(`Hello, $(userName)!`) : console.log('Hello!');

const userQuestion = 'Can you answer my question?'

console.log(`The user asked: ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = randomNumber;

if(randomNumber === 0) {
    console.log('It is Certain');
} else if(randomNumber === 1) {
    console.log('I think so');
} else if(randomNumber === 2) {
    console.log('Looks Hazy try again');
} else if(randomNumber === 3) {
    console.log('Cannont predict now');
} else if(randomNumber === 4) {
    console.log('Do not count on it');
} else if(randomNumber === 5) {
    console.log('my Sources say no');
} else if(randomNumber === 6) {
    console.log('Outlook not so good');
} else if(randomNumber === 7) { 
    console.log('Yes');}

console.log(eightBall)