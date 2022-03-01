const computerChoiceDisplay = document.getElementById(`computer-choice`)
const userChoiceDisplay = document.getElementById(`user-choice`)
const resultDisplay = document.getElementById(`result`)
const possibleChoices = document.querySelectorAll(`button`)
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(`click`, (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or we can use possibleChoices.length in place of 3
    
    if (randomNumber === 1) {
        computerChoice = `rock`
    }
    if (randomNumber === 2) {
        computerChoice = `scissor`
    }
    if (randomNumber === 3) {
        computerChoice = `paper`
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = `Hey Buddy! its a DRAW !`
    }
    if (computerChoice === `rock` && userChoice === `paper`) {
        result = `Hurrah! You WON !`
    }
    if (computerChoice === `rock` && userChoice === `scissor`) {
        result = `Oops! You LOST ! Better Luck Next Time.`
    }
    if (computerChoice === `paper` && userChoice === `scissor`) {
        result = `Hurrah! You WON !`
    }
    if (computerChoice === `paper` && userChoice === `rock`) {
        result = `Oops! You LOST ! Better Luck Next Time.`
    }
    if (computerChoice === `scissor` && userChoice === `paper`) {
        result = `Oops! You LOST ! Better Luck Next Time.`
    }
    if (computerChoice === `scissor` && userChoice === `rock`) {
        result = `Hurrah! You WON !`
    }
    resultDisplay.innerHTML = result
}