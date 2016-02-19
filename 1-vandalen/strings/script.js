"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	
	var convertString = function(str){
		// Plats för förändring.	

		var myArray = []; // Här skapar jag en array som ska hålla varje enskild bokstav.
		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 

	myArray = str.split(""); // Här "splitas" alla bokstäver till enskilda från ursprunliga formateringar. 
	
	for(var i=0; i<myArray.length; i+=1){
		
		if (myArray[i] === myArray[i].toUpperCase()){
			myArray[i] = myArray[i].toLowerCase(); 
		}
		
		else{
			myArray[i] = myArray[i].toUpperCase();
		}
		
		console.log(str);
	}		

	//str = str.split("a").join("#");
	//str = str.split("A").join("#"); // Istället för att splitta stora A och lilla a var för sig så gjorde jag det i en och samma metod.
	str = myArray.toString();
	str = str.split(/[aA]/).join("#"); // Här converteras lilla a till stora A.
	str = str.split(",").join(""); // Här ersätts kommatecknen med hashtags med join metoden.
	
	
	
	return str;
	






	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};