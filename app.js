let userScore = 0;
let compScore = 0;

const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const choices = document.querySelectorAll('.choice');

// Generate computer's choice
const genCompChoice = () => {
    try {
        const options = ['rock', 'paper', 'scissors'];
        const randIdx = Math.floor(Math.random() * options.length);
        return options[randIdx];
    } catch (error) {
        alert('Error generating computer choice:', error);
        msg.innerHTML = 'An error occurred. Please reload the page.';
        return null;
    }
};

// Handle a draw game
const drawGame = () => {
    try {
        msg.textContent = 'Game was Draw 🤷‍♀️';
        msg.style.backgroundColor = 'gray';
    } catch (error) {
        alert('Error displaying draw message:', error);
    }
};

// Display the winner
const showWinner = (userWin, userChoice, compChoice) => {
    try {
        if (userWin) {
            userScore++;
            userScorePara.textContent = userScore;
            msg.innerHTML = `Congrats! 🎉 You Win the Game. <strong>${userChoice}</strong> beats <strong>${compChoice}</strong>`;
            msg.style.backgroundColor = 'green';
        } else {
            compScore++;
            compScorePara.textContent = compScore;
            msg.innerHTML = `Sorry! 😭 You lose the Game. <strong>${compChoice}</strong> beats <strong>${userChoice}</strong>`;
            msg.style.backgroundColor = 'red';
        }
    } catch (error) {
        alert('Error displaying winner message:', error);
    }
};

//  logic for playing the game
const playGame = (userChoice) => {
    try {
        const compChoice = genCompChoice();
        if (!compChoice) {
            throw new Error('Failed to generate computer choice.');
        }

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;

            switch (userChoice) {
                case 'rock':
                    userWin = compChoice !== 'paper';
                    break;
                case 'paper':
                    userWin = compChoice !== 'scissors';
                    break;
                case 'scissor':
                    userWin = compChoice !== 'rock';
                    break;
                default:
                    throw new Error('Invalid user choice.');
            }

            showWinner(userWin, userChoice, compChoice);
        }
    } catch (error) {
        alert('Error during game play:', error);
        msg.innerHTML = 'An unexpected error occurred. Please try again.';
    }
};

// Add event listeners to choices
choices.forEach((choice) => {
    try {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('id');
            if (!userChoice) {
                throw new Error('Choice ID is missing.');
            }
            playGame(userChoice);
        });
    } catch (error) {
        alert('Error adding event listener:', error);
    }
});
