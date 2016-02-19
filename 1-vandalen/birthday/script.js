"use strict";

window.onload = function(){
	
	

	
		var birthday = function(date)
		
		{ 
		    var nowDate = new Date(); 
		    var userDate = new Date(date);
		    var day = (1000*60*60*24); // Millesekunder, sekunder, minuter, timmar.
		
		var myBirthday = 0;
		
		    
		    
		    
		myBirthday = Math.ceil((userDate.getTime() - nowDate.getTime())/day);    // Math.ceil avrundar uppåt. Anledningen är att programmet ska ge rätt antal dagar även om klockan är före 12.
		
        if (date === "")
		{
        throw new Error (" Ange ett riktigt datum!")
		}
        
        if (myBirthday <= -1)
		{
            return userDate.setFullYear(nowDate.getFullYear())+1; // Här har jag bestämmt att ett år just är 365 dagar. Detta gör att programmet inte behandlar skottår.
		}    
        if (myBirthday === nowDate)
        {    
            return 0;  // 0 hänvisar till första caset.
        }
        if (myBirthday + 1 === nowDate)
        {
            return 1; // 1 hänvisar till andra caset.
		}    
};

var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};