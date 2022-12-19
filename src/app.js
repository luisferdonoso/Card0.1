/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomDomain() {
  // Array de pronouns
  const pronouns = ["my", "his", "your", "their"];
  // Array de adjectivos
  const adjectives = ["good", "bad", "exciting", "boring"];
  // Array de nouns
  const nouns = ["cat", "dog", "car", "house"];

  // Genera el numero de posicion de array cada array de forma aleatoria
  const pronounIndex = Math.floor(Math.random() * pronouns.length);
  const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const nounIndex = Math.floor(Math.random() * nouns.length);

  // Generate a random domain name by combining a random pronoun, adjective, and noun
  const domain = `${pronouns[pronounIndex]}${adjectives[adjectiveIndex]}${nouns[nounIndex]}.com`;
  return domain;
}

// Get the button element
const button = document.getElementById("button");

// Add a click event listener to the button
button.addEventListener("click", showelement);

function showelement() {
  // Get the element where you want to display the domain name
  const domainElement = document.getElementById("domain");

  // Set the text content of the element to the random domain name
  domainElement.textContent = getRandomDomain();
}
