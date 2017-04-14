import css from './style.scss';

const gameField = document.querySelector('.game');
const startButton = document.querySelector('.start');
const round = document.querySelector('.roundcounter');
const end = document.querySelector('.end-message');
const strictMode = document.querySelector('.strict-mode');

function randomizer(colorsArray) {
  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

function isArrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const game = {
  colors: ['red', 'blue', 'green', 'yellow'],
  userSequence: [],
  targetSequence: ['red', 'blue', 'green', 'yellow'],
  isStrict: false,
  roundCount: 0,
  gameSounds: {
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  },
  messages: {
    win: 'You won!',
    lose: 'You failed. Now you have to start over!',
    retry: 'Wrong sequence. Try again',
    next: 'You are doing great! Keep it up!',
  },
  lightUpTile(tile) {
    const color = document.getElementById(tile);
    color.classList.add('lightup');
    setTimeout(() => color.classList.remove('lightup'), 350);
  },
  playSound(tile) {
    this.gameSounds[tile].play();
  },
  playSoundSequence(sequenceArray) {
    this.removeClick();
    sequenceArray.forEach((color, index, array) => {
      setTimeout(() => this.playSound(color), 700 * (index + 1));
      setTimeout(() => this.lightUpTile(color), 700 * (index + 1));
      setTimeout(() => this.addClick(), 700 * array.length);
    });
  },
  addCount(counter) {
    return counter + 1;
  },
  removeClick() {
    gameField.removeEventListener('click', this.playGame);
  },
  addClick() {
    gameField.addEventListener('click', this.playGame);
  },
  handleStrict(strictState) {
    if (strictState === true) {
      return true;
    }
    return false;
  },
  startGame() {
    this.addClick();
    this.resetGame();
  },
  resetGame() {
    this.roundCount = 0;
    this.userSequence = [];
    this.targetSequence = [];
    end.textContent = '';
    this.isStrict = this.handleStrict(strictMode.checked);
    this.nextTurn();
    this.makeTurn();
  },
  nextTurn() {
    this.roundCount = this.addCount(this.roundCount);
    round.textContent = this.roundCount;
    this.targetSequence.push(randomizer(this.colors));
  },
  makeTurn(whichTurn) {
    if (this.roundCount < 2) {
      if (whichTurn === 'repeat') {
        end.textContent = this.messages.retry;
      }
      if (whichTurn === 'next') {
        end.textContent = this.messages.next;
        this.nextTurn();
      }
      this.userSequence = [];
      this.playSoundSequence(this.targetSequence);
    } else {
      end.textContent = this.messages.win;
      this.removeClick();
    }
  },
  handleClick(tile) {
    this.playSound(tile);
    this.lightUpTile(tile);
    this.userSequence.push(tile);
    if (this.isMoveValid(this.userSequence, this.targetSequence)) {
      if (this.userSequence.length === this.targetSequence.length) {
        this.makeTurn('next');
      }
    } else {
      if (this.isStrict === true) {
        end.textContent = this.messages.lose;
        this.removeClick();
        return;
      }
      this.makeTurn('repeat');
    }
  },
  playGame(e) {
    const tile = e.target.id;
    game.handleClick(tile);
  },
  isMoveValid(userArr, targetArr) {
    const userLen = userArr.length;
    const currArr = targetArr.slice(0, userLen);
    if (isArrayEquals(userArr, currArr) === true) {
      return true;
    }
    return false;
  },
};

startButton.addEventListener('click', () => game.startGame());
