// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  $("#submit").click(function() {
    var userSays = $("#input").val();
    var WordArray = userSays.split(" ");
    
    for (var i = 0; i<WordArray.length; i++){
       var word = WordArray[i]
       var preffix = word.slice(0,1)
       var suffix = word.slice(1, word.length);
       var result = suffix + preffix + "ay"
       console.log(result);
    $("#message").text(userSays + "ay");
	});

console.log(pig);



});


  

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


