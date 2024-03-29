noOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

//Detecting button press
  function handleClick() {
    var nameOfButton = this.innerHTML;
    makeSound(nameOfButton);
    buttonAnimation(nameOfButton);
    }
}
//Detecting key press
document.addEventListener("keydown",handlePress);
function handlePress(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/snare.mp3');
      crash.play();
      break;

    case "l":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;

    default:
      console.log(key);

  }
}
function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  activeButton.style.transform = "scale(0.9)";
  setTimeout(timer,100);
  function timer(){
    activeButton.classList.remove("pressed");
    activeButton.style.transform = "scale(1)";
  }
}
