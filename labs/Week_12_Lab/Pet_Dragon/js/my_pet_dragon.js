// N220 Section 28238
// Dillon Polley
// Week 12 Lab
// My Pet Dragon
// 11/10/2020

// Doesn't allow global variables, only local
"use strict";
// Constant Controls that can't be altered or messed up
const Controls = {
  // Defines the class for our dragon
  dragonClass: null,
  // Defines the div for our dragon
  dragonDiv: null,
  // Defines the text for stats
  nameText: null,
  // Defines the text for dragon name
  energyText: null,
  // Defines the text for happinses stats
  happyText: null,
  // Defines the feed button
  buttonFeed: null,
  // Defines the play button
  buttonPlay: null,
};
// Fires up when the webpage loads
function start() {
  // Initialize the class, setup the variable to go along with the constant object.
  let dragon1 = Controls.dragonClass;
  dragon1 = new Dragon("Dracarys", 50, 50);
  // Creates a div in our HTML file. Sets the position to static, color to green, width to 100px, height to 100px, and float to none. Appends the child element.
  let dragonDiv = Controls.dragonDiv;
  dragonDiv = document.createElement("div");
  dragonDiv.style.position = "static";
  dragonDiv.style.backgroundColor = "green";
  dragonDiv.style.width = "100px";
  dragonDiv.style.height = "100px";
  dragonDiv.style.float = "none";
  document.body.appendChild(dragonDiv);

  let name = Controls.nameText;
  name = document.createElement("p");
  name.style.width = "300px";
  name.style.height = "25px";
  name.innerHTML += "<br>" + "This Dragon's name is: " + dragon1.name;
  document.body.appendChild(name);

  let happy = Controls.happyText;
  happy = document.createElement("p");
  happy.style.width = "300px";
  happy.style.height = "25px";
  happy.innerHTML += "<br>" + "Current happiness: " + dragon1.happiness;
  document.body.appendChild(happy);

  let energy = Controls.energyText;
  energy = document.createElement("p");
  energy.style.width = "300px";
  energy.style.height = "25px";
  energy.innerHTML += "<br>" + "Current energy: " + dragon1.energy;
  document.body.appendChild(energy);

  // Creates a button in our HTML file. Sets the  width to 140 pixels, and height to 25 pixels. Displays a mesesage that says "submit" and listens for the button to be clicked. Also appends as a the last child of the node.
  let button = Controls.buttonFeed;
  button = document.createElement("button");
  button.style.width = "140px";
  button.style.height = "25px";
  button.innerHTML = "Feed";
  button.addEventListener("click", onButtonClickFeed);
  document.body.appendChild(button);

  // Creates a button in our HTML file. Sets the width to 140 pixels and height to 25 pixels. Displays a message on the button that says "play". Listens for the button to be clicked, and when it is activate the function below. Appends a node as the last child of the node.
  let button_play = Controls.buttonPlay;
  button_play = document.createElement("button");
  button_play.style.width = "140px";
  button_play.style.height = "25px";
  button_play.innerHTML = "Play";
  button_play.addEventListener("click", onButtonClickPlay);
  document.body.appendChild(button_play);

  function onButtonClickFeed() {
    // Calls on the feed method
    dragon1.feed();
    dragon1.display(dragonDiv, energy, happy);

    // DOM Manipulation:
    // button.innerHTML = dragonClass.energy;
  }

  function onButtonClickPlay() {
    // Calls on the play method
    dragon1.play();
    dragon1.display(dragonDiv, energy, happy);
  }
}
