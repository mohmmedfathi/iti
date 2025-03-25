var inputs = prompt("Enter Number of Persons");

for(var i=0; i < parseInt(inputs);i++){

  do{
    names = prompt("Enter Your name")
  }while(!/^[a-zA-Z]{3,9}$/.test(names))
  
    do {
    age = prompt("Enter your age");
  } while (!/^(1[1-9]|[2-5][0-9])$/.test(age));

var tbody = document.querySelector("tbody");
var tr = document.createElement("tr");
tr.innerHTML = ("<td>" + names + "</td>" + "<td>" + age + "</td>");

tbody.appendChild(tr);

}


