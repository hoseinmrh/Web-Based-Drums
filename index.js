function playSound(char){
  switch (char) {
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
    case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;
    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
    case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
    case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
  default:

  }
}

function restOf(param){
  param.style.transform = "scale(1)";
// Animation effect
  param.style.transition = "transform 0.15s ease";
}

function backToNormal(obj){
  obj.style.transform = "scale(1)";
// Animation effect
  obj.style.transition = "transform 0.15s ease";
}

for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    // Set image size to 1.1 times original
    this.style.transform = "scale(1.1)";
// Animation effect
    this.style.transition = "transform 0.15s ease";
    // Animation effect
    setTimeout(backToNormal, 150, this);
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){
  playSound(event.key);
});
