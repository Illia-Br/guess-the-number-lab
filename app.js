

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let playerGuess;
    do {
      playerGuess = getGuess();
      this.prevGuesses.push(playerGuess);
      render(playerGuess);
    } while (playerGuess !== secretNum);
    
  },
  getGuess: function() {
    let input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
    while (!(input >= this.smallestNum) || !(input <= this.biggestNum)) {
    input = parseInt(prompt(`Wrong format or your guess is out of range. Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
    console.log(input);
    }
    return input;
  },
  render: function(playerChoice) {
    if (playerChoice === this.secretNum) {
    alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`);
    } else if (playerChoice > this.secretNum) {
      alert(`Your guess is too high. Previous guesses are: ${this.prevGuesses.join(", ")}`);
    } else {
      alert(`Your guess is too low. Previous guesses are: ${this.prevGuesses.join(", ")}`);
    }
  }
}

// game.getGuess();