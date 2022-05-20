const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }
  };
  
const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;
console.log(person['height']);

// not a great way of doing constructors
function createPerson(name){
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function(){
        console.log(`Hi, I am ${this.name}!`);
    }
    return obj;
}

let person1 = createPerson("Name 1");
let person2 = createPerson("Name 2");
person1.introduceSelf();
person2.introduceSelf();

function Person(name){
    this.name = name;
    this.introduceSelf = function() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
const p = new Person("name 1");
const p2 = new Person("name 2");
p.introduceSelf();
p2.introduceSelf();


const myObject = {
    city: 'Madrid',
    greet() {
        console.log(`Greetings from ${this.city}`);
    }
}


let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
  


guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}


  
















// previous solution without following guide
// let input = document.querySelector('input[type="number"]');
// let submit = document.querySelector('button');

// let para = document.createElement('p');

// let solution = getNumRand();
// console.log("Num is " + solution);
// let numGuesses = 10;



// submit.addEventListener('click', () => {
//     if(numGuesses <= 0){
//         // don't guess
//         console.log("out of guesses");
//     }else if(input.value == solution){
//         // correct
//         console.log("correct");
//         solution = getNumRand();
//         numGuesses = 10;
//     }else if(input.value < solution){
//         // incorrect
//         console.log("too small");
//         numGuesses--;
//     }else if(input.value > solution){
//         console.log("too big");
//         numGuesses--;
//     }
// });

// // Math.random() returns a number in range [0,1)
// // this function will return a number between 1 and 100
// function getNumRand(){
//     var num = Math.floor(Math.random() * 100);
//     return num+1;
// }