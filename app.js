

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
    } while (playerGuess !== secretNum);

  },
  getGuess: function() {
    let input;
      while (!(input >= this.smallestNum) || !(input <= this.biggestNum)) {
      input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
      console.log(input);
    }
    return input;
  },
  render: function() {
    
  }
}

// game.getGuess();