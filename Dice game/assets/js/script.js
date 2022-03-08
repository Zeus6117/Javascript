//generate random number 1-6//
const firstRandomNum = Math.floor(Math.random() * 6) +1;

//generates an image based on the firstRandomNum
const firstDiceImage = 'assets/images/dice' + firstRandomNum + '.png';

//assets/images/dice(firstRandomNum).png
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

//generate random number 1-6//
const secondRandomNum = Math.floor(Math.random() * 6) +1;

//generates an image based on the firstRandomNum
const secondDiceImage = 'assets/images/dice' + secondRandomNum + '.png';

//assets/images/dice(secondRandomNum).png
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

//Logic for winner//
if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = 'User1 has won';
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector('h1').innerHTML = 'User2 has won';
} else {
        document.querySelector('h1').innerHTML = 'It is a tie';
}