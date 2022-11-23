var dice1= Math.floor(Math.random()*6)+1
var dice2= Math.floor(Math.random()*6)+1


if(dice1>dice2){
    document.getElementById("title").textContent="🚩 Player1 Wins!"
}
else if(dice1<dice2){
    document.getElementById("title").textContent="Player2 Wins! 🚩"
}
else{
    document.getElementById("title").textContent="Draw!"
}

document.getElementById("diceimg1").src = "images/dice" + dice1 + ".png"
document.getElementById("diceimg2").src = "images/dice" + dice2 + ".png"

