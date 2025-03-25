

// function param(){
//   arr = [];
//   rev = [];
//   for(var i=0;i< arguments.length;i++){
//     arr.push(arguments[i]);
//   }
//   for(var i=0;i< arguments.length;i++){
//     rev.unshift(arr[i]);
//   }
//   return rev;
// }
// console.log(param(1,2,"mohamed",5,6,7));

// function reverseParams() {
//   var result = [];
//   for (var i = arguments.length - 1; i >= 0; i--) {
//     result.push(arguments[i]);
//   }
//   return result;
// }


// console.log(reverseParams(1, "mai", 20, true)); 

// ##############################################################################################


function maths(inputs){
var sum =0;
var mult =1;
var div =1;
var arr2 =[]
for(var i=0;i<inputs;i++){
  do{
      arr2[i] = parseInt(prompt("Enter Number"));
  } while (!/^\d*$/.test(arr2[i]));
  sum += arr2[i];
  mult *= arr2[i];
  div /= arr2[i];
}
document.write("Sum of Nums = " + sum + "<br><br>");
document.write("Mult of Nums = "+ (mult)+ "<br><br>");
document.write("Divison of Nums = "+ (div)+ "<br><br>");
}
var inputs = prompt("Enter Number of Nums");

maths(parseInt(inputs));