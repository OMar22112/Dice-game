var diceImages =["images/dice1.png",
"images/dice2.png",
"images/dice3.png",
"images/dice4.png",
"images/dice5.png",
"images/dice6.png"];
//*****the first image******//
var randomIndex = Math.floor(Math.random() * diceImages.length);

var leftImages = document.getElementById("diceImage");

leftImages.src = diceImages[randomIndex];
//
            //*****the second image******//

var randomIndex1 = Math.floor(Math.random() * diceImages.length);
var rightImage = document.getElementById("diceImage2");

rightImage.src = diceImages[randomIndex1];
//

if(randomIndex>randomIndex1){
    document.querySelector("h1").innerHTML = 'The Winneeeer Is Player 1 <i class="fa-regular fa-face-laugh-squint" style="color: #145fe1;"></i>'
}else if(randomIndex<randomIndex1){
    document.querySelector("h1").innerHTML = 'The Winneeeer Is Player 2 <i class="fa-solid fa-face-smile-wink" style="color: #145fe1;"></i>'
}else if(randomIndex===randomIndex1){
    document.querySelector("h1").innerHTML = 'Draw &#x1F6A9;';
}
