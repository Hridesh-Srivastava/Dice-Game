//for dice 1 👇🏻
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
//var randomNumber1=Math.floor(Math.random()*6)+1;
var diceGame="dice" + randomNumber1 +".png";
var dicesses="./"+diceGame;
var dicers=document.querySelectorAll("img")[0]; //array 0 should be mentioned coz we have to specify which no. of img we are changing so for 1st img we have taken 0 in array (as array reads from zero).

dicers.setAttribute("src",dicesses);

//for dice 2 👇🏻
var randomNumber2=Math.random()*6;
 var randomNumber2=Math.floor(randomNumber2)+1;
var dicerrr="dice"+randomNumber2+".png";
var diceboard="./"+dicerrr;
var boardGame=document.querySelectorAll("img")[1]; //array specified tells konsi no. ki img hai
boardGame.setAttribute("src",diceboard);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="you won this!"

}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="this is tragic!";

}
else {
    document.querySelector("h1").innerHTML="you lost!";
}