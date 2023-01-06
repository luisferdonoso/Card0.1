/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
  document.getElementById("main").style.display = "block";
  document.body.removeChild(document.getElementById("cargando"));
};

function generateCard() {
  let figures = ["♦︎", "♥︎", "♣︎", "♠︎"];
  let numFig = Math.floor(Math.random() * 3);
  let figure = figures[numFig];
  let color = numFig < 1 ? "red" : "black";
  let num = Math.floor(Math.random() * 12) * 1;
  switch (num) {
    case 1:
      num = "A";
      break;
    case 11:
      num = "4";
      break;
    case 12:
      num = "K";
      break;
    case 13:
      num = "7";
      break;
  }

  document.querySelectorAll(".figure").forEach(elm => (elm.innerHTML = figure));
  document.getElementById("card").style.color = color;
  document.querySelectorAll("#value").forEach(elm => (elm.innerHTML = num));
}
