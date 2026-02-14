'use strict';


const inputElement = document.querySelector('#userInput');
const submitButton = document.querySelector('#submitButton');
const scoreDisplay = document.querySelector('#score');
const infoDisplay = document.querySelector('#infoMessage');
const scoresHistoryDisplay = document.querySelector('#scoresHistory');
const tryAgainButton = document.querySelector('#tryAgainBtn');

const config = {
    maxNumber: 50,
    initialScore: 10,
    storageKey: 'guessGameScores'
};

let scoresArray = [];
try {
    const savedScores = localStorage.getItem(config.storageKey);
    scoresArray = savedScores ? JSON.parse(savedScores) : [];
} catch (error) {
    console.error('localStorage error:', error);
    localStorage.removeItem(config.storageKey);
}

const gameState = {
    score: config.initialScore,
    scores: scoresArray,
    targetNumber: Math.trunc((Math.random() * config.maxNumber) + 1),
};

const messages = {
    enterLower: "Too high! Try a lower number",
    enterHigher: "Too low! Try a higher number",
    successMessage: "Congratulations! You guessed it!",
    gameOver: "Game Over! The number was " + gameState.targetNumber,
    invalidInput: `Please enter a number between 1-${config.maxNumber}`,
};

const updateScoresHistory = () => {
    if (gameState.scores.length === 0) {
        scoresHistoryDisplay.textContent = 'No scores yet';
    } else {
        scoresHistoryDisplay.textContent = gameState.scores.join(', ');
    }
};

const updateScreenScore = () => {
    scoreDisplay.textContent = gameState.score;
    scoreDisplay.classList.add('changed');
    setTimeout(() => scoreDisplay.classList.remove('changed'), 300);
};

const displayMessage = (message, type = '') => {
    infoDisplay.textContent = message;
    infoDisplay.className = 'info-message';
    if (type) {
        infoDisplay.classList.add(type);
    }
};

function saveScore(score) {
    try {
        gameState.scores.push(score);
        localStorage.setItem(config.storageKey, JSON.stringify(gameState.scores));
        updateScoresHistory();
    } catch (error) {
        console.error('Failed to save score:', error);
    }
}

function generateNewTarget() {
    gameState.targetNumber = Math.trunc((Math.random() * config.maxNumber) + 1);
}

function resetGame() {
    gameState.score = config.initialScore;
    displayMessage('');
    updateScreenScore();
    updateScoresHistory();
    generateNewTarget();
    inputElement.value = '';
    inputElement.focus();
}

tryAgainButton.addEventListener('click', function() {
    saveScore('Reset');
    resetGame();
});

submitButton.addEventListener('click', function() {
    const userGuess = Number(inputElement.value);
    
    if (!userGuess || userGuess < 1 || userGuess > config.maxNumber) {
        displayMessage(messages.invalidInput, 'warning');
        return;
    }

    if (gameState.score <= 0) {
        displayMessage(messages.gameOver, 'error');
        saveScore('Fail');
        resetGame();
        return;
    }

    if (userGuess > gameState.targetNumber) {
        displayMessage(messages.enterLower, 'warning');
        gameState.score--;
        updateScreenScore();
    } else if (userGuess < gameState.targetNumber) {
        displayMessage(messages.enterHigher, 'warning');
        gameState.score--;
        updateScreenScore();
    } else {
        displayMessage(messages.successMessage, 'success');
        saveScore(gameState.score);
        resetGame();
    }
});

inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitButton.click();
    }
});

updateScoresHistory();
updateScreenScore();
inputElement.focus();
