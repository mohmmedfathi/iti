// On your page, show alert for the user that say “Welcome to my site”, then show him
// prompt ask him to enter his name The user has to choose either (red, green or blue
// color), take his choice via prompt and write to the page “welcome + his name”.
alert("Welcome to my site");

var username = prompt("Enter your name");
var color = prompt("Choose color (red ,green ,blue)");
switch(color){
  case "red":
  case "r":
  case "R":
    color = "red";
    break;
  case "green":
  case "g":
  case "G":
    color = "green";
    break;
  case "blue":
  case "b":
  case "B":
    color = "blue";
    break;
  default:
    color = "yellow";
}

document.write(("Welcome " + username).fontcolor(color));
