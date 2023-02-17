var dice1=Math.random();
dice1=Math.floor(dice1*6+1);
var d1="images/"+dice1+".png";
var e1=document.querySelectorAll("img")[0];
e1.setAttribute("src",d1);


var dice2=Math.random();
dice2=Math.floor(dice2*6+1);
var d2="images/"+dice2+".png";
var e2=document.querySelectorAll("img")[1];
e2.setAttribute("src",d2);
if(dice1>dice2){
    document.querySelector(".winner").innerHTML="The Winner is »» PLAYER 1";
}
else if(dice1===dice2){
    document.querySelector(".winner").innerHTML="It's a DRAW";
}
else{
    document.querySelector(".winner").innerHTML="The Winner is »» Player 2";
}