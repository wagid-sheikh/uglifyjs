'use strict';
var countryCapital = [{
	capital: "Delhi",
	country: "India"
},
{
	capital: "Sri Jayawardenepura Kotte",
	country: "Sri Lanka"
},
{
	capital: "Tirana",
	country: "Albania"
},
{
	capital: "Algiers",
	country: "Algeria"
},
{
	capital: "Andorra la Vella",
	country: "Andorra"
},
{
	capital: "Luanda",
	country: "Angola"
}
];

for (let i = 0; i < countryCapital.length; i++){
	console.log('Capital of '+countryCapital[i].country+" is "+countryCapital[i].capital);
}