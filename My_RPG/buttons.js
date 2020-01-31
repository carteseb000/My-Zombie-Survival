function main() {
  if (key.bar) { playGame(); }
  if (key.esc) { pauseGame(); }
}


function playGame() {
  window.open("scene1.html");
  window.close();
}

function quitGame() {
  window.open("index.html");
  window.close();
}

function pauseGame() {
  window.open("pause.html");
  window.close();
}
window.onload = function() {
  setInterval(main, 1000 / 60);
}
