//$("#main").append(["Renzo Maldonado"]);

var email = "renzoma89@udacity.com";
var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts =
	"My name is Renzo and i am AWESOME!";

var funThoughts =
	awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);

var name ="Renzo Maldonado"
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);


$("#header").prepend(formattedRole);


$("#header").prepend(formattedName);

var cadena = "audacity";
cadena = cadena[1].toUpperCase()+cadena.slice(2);
$("#header").prepend(cadena);