document.querySelectorAll("button").forEach((button, i) => {
  button.addEventListener("click", function () {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

document.querySelectorAll("button").forEach((button, i) => {
  button.addEventListener("click", function () {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

document.addEventListener("keypress", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

document.addEventListener();

function playSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "k":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
