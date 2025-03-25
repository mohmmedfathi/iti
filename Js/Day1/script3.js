// Ask the user to enter a message then display it using the different html heading tags 
// (from <h1> to <h6>) using Loops. 
var message = prompt("Enter your message");
for(var i = 1 ; i < 7;i++){
  document.write("<h"+ i + ">" + message + "</h" + i + ">");
  
}