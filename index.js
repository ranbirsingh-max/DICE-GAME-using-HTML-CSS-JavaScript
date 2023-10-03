var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceimage="./images/"+"dice"+randomNumber1+".png";
var x=document.getElementsByClassName("img1")[0].setAttribute("src",randomDiceimage);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource="./images/"+"dice"+randomNumber2+".png";
var y=document.getElementsByClassName("img2")[0].setAttribute("src",randomImageSource);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";

} else if(randomNumber2>randomNumber1) {
 document.querySelector("h1").innerHTML="Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
var refresh =document.getElementById("drum");refresh.addEventListener("click",function(){
    location.reload()});

