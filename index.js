// function which handles the click event
function handleClick() {
    alert("I got clicked");
}

// setting onClick event listener for every element of button attribute
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
