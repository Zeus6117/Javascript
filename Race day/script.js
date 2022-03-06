let raceNumber = Math.floor(Math.random() * 1000);

//change variable to false to trigger else if #1//
const early = true;

//change variable to under 18 to trigger else if #2 or to 18 to trigger if//
let age = 19;

if (early && age >= 18) {
  raceNumber += 1000
}

if (early && age > 18) {
  console.log(`Race will begin at 9:30am, your race number is: ${raceNumber}.`);
}else if(!early && age >= 18) {
  console.log(`Race will begin at 11am, your race number is: ${raceNumber}.`);
}else if(age < 18) {
  console.log(`Race will begin at 12:30pm, your race number is: ${raceNumber}`);
} else {
  console.log('Please see registration desk.')
}