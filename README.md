# js-dom-events-game-tutorial
Learn DOM manipulation and event handling in JavaScript by building a number guessing game
# Learn JavaScript DOM & Events - Number Guessing Game

A beginner-friendly project to learn DOM manipulation and event handling through building an interactive game.

## What You'll Learn

- DOM Selection (querySelector)
- Event Listeners (click, keypress)
- DOM Manipulation (textContent, classList)
- Local Storage API
- State Management
- Error Handling (try-catch)
- Modern JavaScript (ES6+)

## Live Demo

Coming soon!

## Code Breakdown

### 1. DOM Selection
```javascript
const inputElement = document.querySelector('#userInput');
const submitButton = document.querySelector('#submitButton');
```
Learn how to select HTML elements

### 2. Event Handling
```javascript
submitButton.addEventListener('click', function() {
    // Handle user input
});
```
Learn how to respond to user interactions

### 3. Dynamic UI Updates
```javascript
const updateScreenScore = () => {
    scoreDisplay.textContent = gameState.score;
    scoreDisplay.classList.add('changed');
};
```
Learn how to update content and styles dynamically

### 4. Local Storage
```javascript
localStorage.setItem(config.storageKey, JSON.stringify(gameState.scores));
```
Learn how to persist data between sessions

## Getting Started

### Prerequisites
- Basic HTML/CSS knowledge
- JavaScript fundamentals (variables, functions, conditionals)

### Installation
Simply download the files and open `index.html` in your browser.

## Project Structure
```
├── index.html      # HTML structure
├── style.css       # Styling
├── script.js       # Game logic (fully commented)
├── LEARNING.md     # Step-by-step learning guide
└── README.md       # This file
```

## How to Use This Project

1. Read the code - Start with `script.js`
2. Experiment - Change values, add features
3. Break it - Learn by debugging
4. Rebuild - Try creating similar games

## Challenge Ideas

After understanding the code, try these:
- Add difficulty levels (Easy: 1-20, Hard: 1-100)
- Add a hint system (costs 2 points)
- Create a high score leaderboard
- Add sound effects
- Track time taken to guess
- Add multiplayer mode

## Technologies

- Pure JavaScript (No frameworks)
- HTML5
- CSS3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Found a bug or want to improve the tutorial? Pull requests are welcome!

## Additional Resources

- [MDN - DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript.info - Events](https://javascript.info/events)
- [MDN - LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN - Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## License

MIT License - Free to use for learning

---

If this helped you learn JavaScript, consider starring the repository!
