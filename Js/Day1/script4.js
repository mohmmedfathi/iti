// 4.1. Create a function that accepts only 2 parameters and throw exception if number of
// parameters either less than or exceeds 2 parameters.



// function mult(x , y){
//   if(arguments.length != 2){
//     throw("Enter just 2 parameters");
//   }else{
//     console.log(x * y);
//   }
// }

// mult(12,12);

/////////////////////////////////////////////////////////
// 4.2. Write your own function that can add n values ensure that all passing parameters are
// numerical values only.

function summ(){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (isFinite(arguments[i])) {
      sum += arguments[i];
    }
  }
  return sum;
}
document.write(summ());









