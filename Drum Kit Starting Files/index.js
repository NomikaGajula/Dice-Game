var drums=document.querySelectorAll(".drum").length;
var j=1;
for(var i=0;i<drums;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(j) {
	var buttonpressed=this.innerHTML;
	makesound(buttonpressed);
	animation(buttonpressed);
});
}
document.addEventListener("keypress",function(event){
	makesound(event.key);
	animation(event.key);
})
function makesound(key){
	switch(key){
case "w":new Audio("sounds/tom-1.mp3").play();break;
case "a":new Audio("sounds/tom-2.mp3").play();break;
case "s":new Audio("sounds/tom-3.mp3").play();break;
case "d":new Audio("sounds/tom-4.mp3").play();break;
case "j":new Audio("sounds/crash.mp3").play();break;
case "k":new Audio("sounds/kick-bass.mp3").play();break;
case "l":new Audio("sounds/snare.mp3").play();break;
}
}

function animation(pressed){
 var activebut=document.querySelector("."+pressed);
 activebut.classList.add("pressed");
 setTimeout(function(){activebut.classList.remove("pressed");}, 400);
  
}
