let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = true
let message =  ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



function getRandomCard(){

    let randomNumber = Math.ceil(Math.random()*13)

    if(randomNumber === 1){
        return 11
    }else if(randomNumber >= 10){

        return 10
    }else{

        return randomNumber
    }
}


function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()

}


function renderGame(){

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0;i < cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }


    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum == 21){
        message = "You've Blackjack"
        hasBlackJack = true
    }else{
        message = "You are out of the game"
        isAlive = false
    }

    messageEl.textContent = message 

}



function newCard(){

    if(isAlive === true && hasBlackJack == false){

        let newCard = getRandomCard()

        sum += newCard
        cards.push(newCard)
        renderGame()
    }

    
}