//Initial variables
var words = ["avicii", "tiesto", "swedish house mafia", "drain"];
var wins = 0;
var guesses = 12;
var usedLetters = [];
var randomWord = words[Math.floor(Math.random()*words.length)];
const answer = [];
console.log(randomWord);
setArray();

function usedLetters(array) {

}

//Function to set answer array to false
function setArray()
{
  for (var i = 0; i < randomWord.length; i++) {
    answer[i] = false;
    print(answer);
  }
}
//compare the letters in the chosen word with user guesses
document.onkeyup = function(event)
{
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
    document.getElementById("used").innerHTML = " ";
    for (var i = 0; i < usedLetters.length; i++) {
      document.getElementById("used").innerHTML += usedLetters[i] + " ";
    }
}

function print (array)
{
  document.getElementById("print").innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    if(answer[i] === true){
      document.getElementById("print").innerHTML += randomWord[i] + "";
    } else{
      document.getElementById("print").innerHTML += "_ " + " ";
    }
  }
}
