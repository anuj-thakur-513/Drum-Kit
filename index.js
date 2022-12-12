// function which handles the key press and button clicks
function handleEvent(keyPressed) {
    // variable to store the audio to be played
    var audio;

    switch (keyPressed) {
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
}

// function for the button animation
function buttonAnimation(keyPressed) {
    // storing the current button using button's class
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.add("pressed");

    // removing the added class after a time delay
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}


// setting onClick event listener for every element of button attribute
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        // getting the inner HTML of the button pressed 
        var buttonInnerHTML = this.innerHTML;
        handleEvent(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// setting listener for the keyboard press for the entire website
// we are passing 'event' to the anonymous function so that we can 
// use the 'event' that triggers the function
document.addEventListener("keydown", function (event) {
    handleEvent(event.key);
    buttonAnimation(event.key);
});