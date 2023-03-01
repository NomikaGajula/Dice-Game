
var random=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+random+".png");
var random1=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+random1+".png");
winner();
function winner() {
	if(random>random1){
		document.querySelector("h1").innerHTML="Player1 Wins";
	}
	else if(random<random1){
		document.querySelector("h1").innerHTML="Player2 Wins";
	}
	else{
		document.querySelector("h1").innerHTML="It's a Draw";
	}
}
