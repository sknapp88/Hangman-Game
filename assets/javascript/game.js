var firstWord = ["T","w","o"," ","c","a","n"," ","p","l","a","y"," ","t","h","i","s"," ","g","a","m","e"];
var secondWord  = ["A","n","d"," ","j","u","s","t","i","c","e"," ","f","o","r"," ","a","l","l"];
var thirdWord = ["A"," ","j","u","r","y"," ","o","f"," ","y","o","u","r"," ","p","e","e","r","s"];
var fourthWord = ["J","u","s","t","i","c","e"," ","i","s"," ","b","l","i","n","d"];

var words = [firstWord, secondWord, thirdWord, fourthWord];

var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages; 

var currentWord = words[Math.floor(Math.random() * words.length)];

$(document).on( "keyup", function(event) {
        var guess = event.key;
        for (i = 0; i < currentWord.length; i++) {
            if (guess === currentWord[i]) {
                $("#letter-"+i).css("background-color", "gray");
            } 
        };
    })

function setup(){
	availableLetters = ["a","b,","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	// var currentWord = words[Math.floor(Math.random() * words.length)];
	for (i = 0; i < currentWord.length; i ++) {
		var letterEntry = ('<li id="letter-' + i + '">' + currentWord[i] + "</li>");
		$("#letters").append(letterEntry);

	}
	
	
}


$( document ).ready(function() {





	setup();
});