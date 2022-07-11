let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let hudEl = document.getElementById("hud-el")


let firstNum = 0
let secondNum = 0
let thirdNum = 0
let sum = firstNum + secondNum
let formatString = ""

let startFunc = true
let drawCard = false
let jack = false
let isAlive = true



function startGame(){

    buttonState()


   let i = 0 
   if(startFunc){ 
        randomizer()
        format()
        gameLogic()

        startFunc = false
        drawCard =true
   }

   console.log(i)
   console.log("isALive"+isAlive)
   console.log("drawCard"+drawCard)
   i += 1
   
    
}


function gameLogic(){

    if(sum < 21){
        hudEl.textContent = "Draw another Card?"
    }else if(sum === 21){
        hudEl.textContent = "You Got BlackJack! click reset"
        jack = true
        isAlive = false
    }else{
        hudEl.textContent = "You lost click reset"
        isAlive = false
    }
}


function randomizer(){
    let random1 = Math.floor(Math.random()*11) 
    let random2 = Math.floor(Math.random()*11) 

    firstNum = random1 + 2
    secondNum = random2 + 2

    formatString = firstNum +" "+ secondNum

    sum = firstNum + secondNum
}

function reset(){
    startFunc = true
    

    firstNum = 0
    secondNum = 0
    formatString = firstNum +" "+ secondNum
    sum = firstNum + secondNum

    hudEl.textContent = "Want to play around?"
    format()

    isAlive = true
    drawCard = false
}

function format(){
    
    cardEl.textContent = "Cards: "+ formatString
    sumEl.textContent = "Sum: "+ sum
}

function extraCard(){

    if(isAlive && drawCard){

        thirdNum = Math.floor(Math.random()*11)
        thirdNum += 2
        sum += thirdNum
        formatString += " " +thirdNum

          gameLogic()  
          
        format()

        

    }
}

function buttonState(){
    if(startFunc){
        document.getElementById("button-start").classList.toggle("button-disable")
    }

    if(drawCard){
        document.getElementById("button-draw").classList.toggle("button-disable")
    }
}





