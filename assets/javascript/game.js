var gameNumber = Math.floor(Math.random() * 120) + 19;

var gameNumberHtml = $('#game-number');

var imageButtons = $('.crystal-button');

var greenImage = $('#green-image');
var blueImage = $('#blue-image');
var purpleImage = $('#purple-image');
var orangeImage = $('#orange-image');
var playerScore = $('#player-score')

var greenImageNumber;
var blueImageNumber;
var purpleImageNumber;
var orangeImageNumber;

var score = 0;
var wins = $('#wins');
var losses = $('#losses');

$('#orange-image').val(orangeImageNumber); 
console.log('this is ' + $('#orange-image').val());

gameNumberHtml.html(gameNumber);
console.log(gameNumber);

function getRandomImageNumber() {
  greenImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#green-image').val(greenImageNumber);
  console.log('green = ' + greenImageNumber);
  console.log('Value of green button ' + $('#green-image').val());

  blueImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#blue-image').val(blueImageNumber);
  console.log('blue = ' + blueImageNumber);
  console.log('Value of blue button ' + $('#blue-image').val());

  purpleImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#purple-image').val(purpleImageNumber);
  console.log('purple = ' + purpleImageNumber);
  console.log('Value of purple button ' + $('#purple-image').val());

  orangeImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#orange-image').val(orangeImageNumber);
  console.log('orange = ' + orangeImageNumber);
  console.log('Value of orange button ' + $('#orange-image').val());
  
}

getRandomImageNumber();

imageButtons.click(function() {
	score += parseInt($(this).val());
	playerScore.html(score);
})










