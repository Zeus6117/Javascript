const getUserChoice = userInput => {
    userInput;

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scizzors'){
        return userInput;
    }else {
        console.log('You should pick between rock, paper, or scizzors');
    }
};
    
  const ComputerChoice = () => {
      const randomNumber = Math.floor(Math.random() * 3);

      switch (randomNumber) {
          case 0:
                return 'rock';
          case 1:
            return 'paper';
          case 2:
            return 'scizzors';
      }
  }  
    
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return console.log('The game is a tie');
    }
    if (userChoice === 'rock'){
        if(computerChoice === 'paper') {
            return console.log('Computer won!');
        } else { console.log('User won!')

        }
    }
    if (userChoice === 'paper'){
        if(computerChoice === 'scizzors') {
            return console.log('Computer won!');
        } else { console.log('User won!')

        }
    } if (userChoice === 'scizzors'){
        if(computerChoice === 'rock') {
            return console.log('Computer won!');
        } else { console.log('User won!')

        }
    }
    };
    
    const playGame = () => {
        const userChoice = getUserChoice('rock');
        const computerChoice = getUserChoice();

        console.log(userChoice);
        console.log(computerChoice);

        console.log(determineWinner(userChoice, computerChoice));
    }
    
    playGame();