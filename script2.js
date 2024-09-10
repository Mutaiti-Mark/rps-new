const buttons = document.querySelectorAll("button")

const humanDisplay = document.querySelector("#humanDisplay")

const compDisplay = document.querySelector("#compDisplay")

const resultDisplay = document.querySelector(".results")

const humanRoundDisplay = document.querySelector("#humanRoundDisplay")

const compRoundDisplay = document.querySelector("#compRoundDisplay")

let humanScore = 0
let compScore = 0


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        yourChoice = button.textContent
        compChoice = getCompChoice()

        humanDisplay.textContent = yourChoice
        compDisplay.textContent = compChoice

        playRound(yourChoice, compChoice)

        humanRoundDisplay.textContent = humanScore
        compRoundDisplay.textContent = compScore

    })

})

humanRoundDisplay.textContent = humanScore
compRoundDisplay.textContent = compScore

function getCompChoice(){
    let compChoiceNum = Math.floor(Math.random() *4)

    let compChoice = ""

    if (compChoiceNum == 0){
        compChoice = "rock"
    } else if (compChoiceNum == 1){
        compChoice = "paper"
    } else {
        compChoice = "scissors"
    }

    return compChoice
}

function playRound(yourChoice, computerChoice){
    // let yourChoice = youChoice.toLowerCase()

    if (yourChoice == computerChoice){
        resultDisplay.textContent = "It is a TIE. Reload to try AGAIN"
    } else if (yourChoice == "paper" && computerChoice == "rock") {
        resultDisplay.textContent = "You WIN! Paper beats Rock"
        humanScore++
    } else if (yourChoice == "rock" && computerChoice == "scissors") {
        resultDisplay.textContent = "You WIN! Rock smashes scissors"
        humanScore++
    } else if (yourChoice == "scissors" && computerChoice == "paper") {
        resultDisplay.textContent = "You WIN! Scissors cuts Paper"
        humanScore++
    } else if (yourChoice == "rock" && computerChoice == "paper") {
        resultDisplay.textContent = "You LOSE! Paper beats Rock"
        compScore++
    } else if (yourChoice == "scissors" && computerChoice == "rock") {
        resultDisplay.textContent = "You LOSE! Rock smashes scissors"
        compScore++
    } else if (yourChoice == "paper" && computerChoice == "scissors") {
        resultDisplay.textContent = "You LOSE! Scissors cuts Paper"
        compScore++
    } else {
        resultDisplay.textContent = " Wrong INPUT"
    }
    console.log(humanScore);
    console.log(compScore);
}