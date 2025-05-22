let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
      updateScore();

      function playGame(playerChoice) {
        const computerChoice = pickComputerChoice();
        let result = '';
        
        if (playerChoice === computerChoice) {
          result = 'TIE!';
        } else if (
          (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
          (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
          (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
        ) {
          result = 'YOU WON!';
          score.wins++;
        } else {
          result = 'YOU LOST!';
          score.losses++;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScore();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-computer-choice').innerHTML =
         `YOU <img src="images/${playerChoice}.svg" class= "move-icon">. 
         COMPUTER  <img src="images/${computerChoice}.svg" class="move-icon">`;
      }

      function updateScore() {
        document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
      }

      function resetScore() {
        score = { wins: 0, losses: 0, ties: 0 };
        localStorage.removeItem('score');
        updateScore();
      }

      function pickComputerChoice() {
        const choices = ['ROCK', 'PAPER', 'SCISSORS'];
        return choices[Math.floor(Math.random() * choices.length)];}