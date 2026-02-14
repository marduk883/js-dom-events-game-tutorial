# Learning Path

This guide will help you understand the code step by step.

## Step 1: Understanding the Basics (30 minutes)

1. Open `script.js`
2. Read the configuration section
3. Understand the `gameState` object

### Key Concepts
- **config object**: Stores game settings that don't change
- **gameState object**: Stores data that changes during gameplay
- **Separation of concerns**: Configuration vs State

### Practice Exercise
Change `maxNumber` to 100 and see how it affects the game.

## Step 2: DOM Selection (15 minutes)

### What is DOM Selection?
The DOM (Document Object Model) is how JavaScript sees your HTML. To interact with elements, you first need to "select" them.

### In This Project
```javascript
const inputElement = document.querySelector('#userInput');
const submitButton = document.querySelector('#submitButton');
```

### Practice Exercises
1. Open browser DevTools (F12)
2. Type `document.querySelector('#userInput')` in console
3. Try adding a new button to HTML
4. Select it using `querySelector`

## Step 3: Event Listeners (30 minutes)

### What are Event Listeners?
They "listen" for user actions (clicks, keypresses, etc.) and run code when those actions happen.

### In This Project
```javascript
submitButton.addEventListener('click', function() {
    // This code runs when button is clicked
});

inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // This code runs when Enter key is pressed
    }
});
```

### Practice Exercises
1. Add a console.log inside the click listener
2. Click the button and watch the console
3. Try adding a new event listener for 'mouseover'

## Step 4: State Management (45 minutes)

### What is State?
State is data that changes over time. In this game:
- Current score changes with each guess
- Target number changes when game resets
- Scores history grows as you play

### How State Changes
```javascript
// Wrong guess - score decreases
gameState.score--;

// Correct guess - reset game
gameState.score = config.initialScore;
gameState.targetNumber = Math.trunc((Math.random() * config.maxNumber) + 1);
```

### Practice Exercises
1. Add a new state property: `guessCount`
2. Increment it with each guess
3. Display it on the page

## Step 5: DOM Manipulation (30 minutes)

### What is DOM Manipulation?
Changing what the user sees by modifying HTML elements.

### Methods Used
```javascript
// Change text content
scoreDisplay.textContent = gameState.score;

// Add/remove CSS classes
scoreDisplay.classList.add('changed');
scoreDisplay.classList.remove('changed');

// Change input value
inputElement.value = '';
```

### Practice Exercises
1. Create a new element that shows guess count
2. Update it after each guess
3. Style it with CSS classes

## Step 6: Local Storage (30 minutes)

### What is Local Storage?
A way to save data in the browser so it persists even after closing the page.

### How It Works
```javascript
// Save data
localStorage.setItem('key', 'value');

// Get data
const data = localStorage.getItem('key');

// Remove data
localStorage.removeItem('key');
```

### Important Note
Local Storage only stores strings, so we use JSON:
```javascript
// Saving an array
localStorage.setItem('scores', JSON.stringify([1, 2, 3]));

// Getting it back
const scores = JSON.parse(localStorage.getItem('scores'));
```

### Practice Exercises
1. Open DevTools > Application > Local Storage
2. See your game data
3. Manually edit a value
4. Refresh the page and see the change

## Step 7: Error Handling (20 minutes)

### Why Error Handling?
Things can go wrong (storage full, invalid data, etc.). Good code handles these situations.

### In This Project
```javascript
try {
    const savedScores = localStorage.getItem(config.storageKey);
    scoresArray = savedScores ? JSON.parse(savedScores) : [];
} catch (error) {
    console.error('localStorage error:', error);
    localStorage.removeItem(config.storageKey);
}
```

### Practice Exercises
1. Manually corrupt the localStorage data
2. Refresh and see how the code handles it
3. Add error handling to a new feature

## Common Mistakes to Avoid

### 1. Forgetting Type Conversion
```javascript
// Wrong - input.value is always a string
if (input.value > 10) { }

// Correct
if (Number(input.value) > 10) { }
```

### 2. Not Checking Edge Cases
```javascript
// What if score is already 0?
if (gameState.score <= 0) {
    // Handle game over
}
```

### 3. Missing Error Handling
```javascript
// localStorage can fail!
try {
    localStorage.setItem(key, value);
} catch (error) {
    console.error(error);
}
```

## Project Completion Checklist

- [ ] I understand how DOM selection works
- [ ] I can add new event listeners
- [ ] I understand how state changes
- [ ] I can manipulate the DOM
- [ ] I understand localStorage basics
- [ ] I know why error handling is important
- [ ] I completed at least 2 practice exercises

## Next Steps

After mastering this project, try building:

1. **Todo List App**
   - Learn: CRUD operations, array methods
   - Practice: filter(), map(), forEach()

2. **Calculator**
   - Learn: Event delegation, complex state
   - Practice: Switch statements, operators

3. **Weather App**
   - Learn: Fetch API, async/await
   - Practice: Working with external APIs

## Getting Help

- Check browser console for errors (F12)
- Use console.log() to debug
- Read error messages carefully
- Google the error message
- Check MDN documentation

## Additional Challenges

### Beginner
- Add a "number of guesses" counter
- Change the color scheme
- Add sound effects

### Intermediate  
- Add difficulty levels (easy/medium/hard)
- Create a hint system
- Add a timer

### Advanced
- Add multiplayer mode
- Create a leaderboard with names
- Add animations between guesses
- Implement a points streak bonus

---

Remember: The best way to learn is by doing. Don't just read - code along!
