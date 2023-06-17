document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const result = document.getElementById('result');
  
    const secretNumber = Math.floor(Math.random() * 100) + 1;
  
    guessButton.addEventListener('click', () => {
      const guess = parseInt(guessInput.value);
  
      if (isNaN(guess)) {
        result.textContent = 'Invalid input. Please enter a valid number.';
      } else {
        checkGuess(guess);
      }
    });
  
    function checkGuess(guess) {
      if (guess === secretNumber) {
        result.textContent = 'Congratulations! You guessed the correct number!';
        guessInput.disabled = true;
        guessButton.disabled = true;
      } else if (guess < secretNumber) {
        result.textContent = 'Too low! Try again.';
      } else {
        result.textContent = 'Too high! Try again.';
      }
  
      guessInput.value = '';
      guessInput.focus();
    }
  });