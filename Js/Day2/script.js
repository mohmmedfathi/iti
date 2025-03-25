do {
  var namee = prompt("Enter your Name");
} while (!/^[A-Za-z\s]+$/.test(namee));

do {
  var PN = prompt("Enter your Phone Number (8 digits)");
} while (!/^\d{8}$/.test(PN));

do {
  var MN = prompt("Enter your Mobile Number (11 digits, starts with 010, 011, 012, or 015)");
} while (!/^(010|011|012|015)\d{8}$/.test(MN));

do {
  var email = prompt("Enter your Email");
} while (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email));

document.write("Name: " + namee + "<br>");
document.write("Phone Number: " + PN + "<br>");
document.write("Mobile Number: " + MN + "<br>");
document.write("Email: " + email + "<br>");

