
var words = ["this", "that", "bicep",
 "drain", "your", "avicii", "china"];
var wins = 0;
var guesses = 12;
var randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord);
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

function wordLength (){

}

//compare the letters in the chosen word with user guesses
function compare (event){
  for(var i = 0; i < randomWord.length; i++){
    var userVal = event.which || event.keyCode;
    var randLetter = randomWord.charCodeAt(i);
    if(userVal === randLetter){
      document.getElementById("correct").innerHTML = "Correct "
      + randomWord[i];
      break;
    } else {
      console.log(guesses);
      guesses--;
      document.getElementById("incorrect").innerHTML = "Incorrect "
      + guesses;
      break;
    }
  }
}
