console.log("Space Launch Dash running");

// Helper function to move the rockets
const moveTo = (item, spot) => {
  if (spot <= 6) {
    item.style.setProperty("grid-column", spot);
  }
};

// Initialize positions for each rocket
let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot = 1;

// Query Selectors for buttons, rockets, and winner box
const apolloBtn = document.querySelector("#apollo-btn");
const nebulaBtn = document.querySelector("#nebula-btn");
const cometBtn = document.querySelector("#comet-btn");

const apolloRocket = document.querySelector("#apollo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket = document.querySelector("#comet-rocket");

const winnerBox = document.querySelector("#winner-box");

// Finish line position (adjust if needed)
const finishLine = 6;

// Boost functions for each rocket
const boostApollo = () => {
  apollo_spot += 1;
  moveTo(apolloRocket, apollo_spot);
  checkWinner(apollo_spot, "Apollo");
};

const boostNebula = () => {
  nebula_spot += 1;
  moveTo(nebulaRocket, nebula_spot);
  checkWinner(nebula_spot, "Nebula");
};

const boostComet = () => {
  comet_spot += 1;
  moveTo(cometRocket, comet_spot);
  checkWinner(comet_spot, "Comet");
};

// Winner check function
const checkWinner = (spot, rocketName) => {
  if (spot >= finishLine) {
    winnerBox.textContent = `${rocketName} Rocket Wins! 🚀`;
    alert(`${rocketName} Rocket Wins! 🚀`);
    resetPositions(); // Reset the rockets after a win
  }
};

// Reset all rocket positions after a win
const resetPositions = () => {
  apollo_spot = 1;
  nebula_spot = 1;
  comet_spot = 1;
  moveTo(apolloRocket, apollo_spot);
  moveTo(nebulaRocket, nebula_spot);
  moveTo(cometRocket, comet_spot);
  winnerBox.textContent = ""; // Clear the winner box
};

// Event listeners for button clicks
apolloBtn.addEventListener("click", boostApollo);
nebulaBtn.addEventListener("click", boostNebula);
cometBtn.addEventListener("click", boostComet);
