// script that takes from the user n values and returns their sum, stop receiving
// values from user when he enters 0 or sum exceeds 100, check that the entered data is
// numeric and inform the user with the total sum of the entered values.
var sum = 0; 
do{
  var n = prompt("Enter Numbers");
    sum += parseInt(n);  
}while(sum < 100 && n != 0);

document.write("Total: " + sum);
