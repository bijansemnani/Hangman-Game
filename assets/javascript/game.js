
var words = ["avicii"];
var wins = 0;
var guesses = 12;
var usedLetters = [];
var randomWord = words[Math.floor(Math.random()*words.length)];
var answer = [];
console.log(randomWord);
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

function wordLength (){

}

//compare the letters in the chosen word with user guesses
function compare (event){
  isFound = false;
  var userVal = event.which || event.keyCode;
  for(var i = 0; i < randomWord.length; i++)
  {
    var randLetter = randomWord.charCodeAt(i);
    if(userVal === randLetter &&
      usedLetters.indexOf(String.fromCharCode(userVal)) < 0)
    {
      document.getElementById("correct").innerHTML = "Correct "
      + randomWord[i];
      isFound = true;
      answer.splice(i, 0, randomWord[i]);
      print(answer);
      continue;
    }
    else if (usedLetters.indexOf(String.fromCharCode(userVal)) >= 0)
    {
      document.getElementById("used").innerHTML = "Already used dumby "
      + randomWord[i];
      isFound = true;
      break;
    }
  }
  if(!isFound)
  {
    guesses--;
    document.getElementById("incorrect").innerHTML = "Incorrect "
    + guesses;
  }
  if (usedLetters.indexOf(String.fromCharCode(userVal)) < 0)
    usedLetters.push(String.fromCharCode(userVal));
}

function print (array){
  document.getElementById("print").innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    document.getElementById("print").innerHTML += array[i] + "";
  }
}
