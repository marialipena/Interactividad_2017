var secretNum = 0;
var message = '';
var count = 0;

function generateRandomNum(){
  secretNum = Math.round(Math.random()*100);
  count = 0;
}
generateRandomNum();

function aGuess(){
  var num = document.getElementById('inputGuess').value;
  if (num < secretNum){
    

    //Low Number
    message='Looser. Even though ' + num + ' is a low number, I do have a heart around things. Try again bastard.';
  } else if (num > secretNum){
    

    //High Number
    message='Looser. ' + num + ' is too fucking high. Try again you looser.';
  } else if (num == secretNum){
    

    //Correct Number
    message='OH WE GOT A KNOW-IT-ALL HERE! It was ' + num + '. It took you ' + count + ' tries.';
  }
  
    alertResult(message);
    count++; 
  }

function alertResult(){
  console.log(message + ' ' + secretNum);
  
  //Show
  var results = document.getElementById('results');
  results.innerHTML = '<p>' + message + '</p>';
}
