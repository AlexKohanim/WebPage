function change_background(){
var colors = ["red", "green", "blue", "yellow", "pink", "cyan", "magenta", "orange", "brown", "gold", "black", "white", "gray"];
document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};
