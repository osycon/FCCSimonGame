import css from './style.scss';

function randomizer(colorsArray) {
  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

const game = {
  colors: ['red', 'blue', 'green', 'yellow'],
  userSequence: [],
  currentSequence: [],
  isStrict: false,
  roundCount: 0,
  gameSounds: {
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  },
  gameLoop() {

  },
  startGame() {

  },
  resetGame() {

  },
  makeTurn() {
    this.current.push(randomizer(this.colors));
  },
  toggleStrict(strictState) {
    strictState = !strictState;
    return strictState;
  },
  handleClick() {
    // What happens when the user clicks. Restrict to handle clicks within the 4 divs with colors.
    this.playSound(/* Need to add playedColor to pass in */);
  },
  playSound(playedColor) {
    // Handle playsound based on which color is played.
  },
};
