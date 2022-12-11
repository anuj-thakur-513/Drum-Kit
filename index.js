// function which handles the click event
function handleClick() {
    alert("I got clicked");
}

// setting onClick event listener for every element of button attribute
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function playSound() {

        // getting the inner HTML of the button pressed 
        var buttonInnerHTML = this.innerHTML;
        // variable to store the audio to be played
        var audio;

        switch (buttonInnerHTML) {
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
                audio = new Audio("sounds/snare.mp3");
                break;
            case "k":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "l":
                audio = new Audio("sounds/kick-bass.mp3");
                break;
            default:
                break;
        }
        // playing the audio after storing the audio
        audio.play();
    });
}
