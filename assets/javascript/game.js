
var words = ["avicii"];
var wins = 0;
var guesses = 12;
var usedLetters = [];
var randomWord = words[Math.floor(Math.random()*words.length)];
const answer = [];

 for (var i = 0; i < randomWord.length; i++) {
   answer[i] = false;
 }

console.log(randomWord);


function wordLength (){

}

//compare the letters in the chosen word with user guesses
document.onkeyup = function(event){
  isFound = false;
  var userVal = event.key;
  console.log(userVal);

  for(var i = 0; i < randomWord.length; i++)
  {
    var randLetter = randomWord[i].toLowerCase();
    if(userVal === randLetter &&
      usedLetters.indexOf(userVal) < 0)
    {
      document.getElementById("correct").innerHTML = "Correct "
      + randomWord[i];
      isFound = true;
      for (var i = 0; i < answer.length; i++) {
        if(userVal === randomWord[i] && answer[i] !== true){
          answer[i] = true;
        }
      }
      print(answer);
      continue;
    }
    else if (usedLetters.indexOf(userVal) >= 0)
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
  if (usedLetters.indexOf(userVal) < 0)
    usedLetters.push(userVal);
}

function print (array){
  document.getElementById("print").innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    if(answer[i] === true)
      document.getElementById("print").innerHTML += randomWord[i] + "";
  }
}
