var countForPlayer1=Math.random()*6;
var countForPlayer2=Math.random()*6;

if(0<=countForPlayer1 && countForPlayer1<1 ){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice1.png");
}
else if(1<=countForPlayer1 && countForPlayer1<2){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice2.png");
}
else if(2<=countForPlayer1 && countForPlayer1<3){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice3.png");
}
else if(3<=countForPlayer1 && countForPlayer1<4){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice4.png");
}
else if(4<=countForPlayer1 && countForPlayer1<5){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice5.png");
}
else if(5<=countForPlayer1 && countForPlayer1<6){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice6.png");
}
if(0<=countForPlayer2 && countForPlayer2<1){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice1.png");
}
else if(1<=countForPlayer2 && countForPlayer2<2){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice2.png");
}
else if(2<=countForPlayer2 && countForPlayer2<3){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice3.png");
}
else if(3<=countForPlayer2 && countForPlayer2<4){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice4.png");
}
else if(4<=countForPlayer2 && countForPlayer2<5){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice5.png");
}
else if(5<=countForPlayer2 && countForPlayer2<6){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png");
}
if(Math.floor(countForPlayer1)<Math.floor(countForPlayer2)){
    document.querySelector("h1").textContent="Player 2 won";
}
else if(Math.floor(countForPlayer1)>Math.floor(countForPlayer2)){
    document.querySelector("h1").textContent="Player 1 won";
}
