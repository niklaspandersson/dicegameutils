# Dicegameutils

Small utility library for dice games

# Functions

## yahtzee_score
Provide an array of 5 integers between 1 and 6, and it will calculate the best score and what type of result it is.

### example
```javascript
import { yahtzee_score } from 'dicegameutils'
const { score, type } = yahtzee_score([3, 5, 3, 5, 5])

console.log(score)  // output: 21
console.log(type)   // output: 'full house'
```