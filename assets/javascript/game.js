
var gameNumber = Math.floor(Math.random() * 120) + 19;

var imageButtons = $('.crystal-button');

var score = 0;
var wins = 0;
var losses = 0;

$('#game-number').html(gameNumber);
console.log('This is gameNumber ' + gameNumber);

function getGameNumber() {
  return Math.floor(Math.random() * 120) + 19;
}

function getRandomImageNumber() {
  var greenImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#green-image').val(greenImageNumber);
  console.log('green = ' + greenImageNumber);
  console.log('Value of green button ' + $('#green-image').val());

  var blueImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#blue-image').val(blueImageNumber);
  console.log('blue = ' + blueImageNumber);
  console.log('Value of blue button ' + $('#blue-image').val());

  var purpleImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#purple-image').val(purpleImageNumber);
  console.log('purple = ' + purpleImageNumber);
  console.log('Value of purple button ' + $('#purple-image').val());

  var orangeImageNumber = Math.floor(Math.random() * 12) + 1;
  $('#orange-image').val(orangeImageNumber);
  console.log('orange = ' + orangeImageNumber);
  console.log('Value of orange button ' + $('#orange-image').val());
  
}

function resetGame() {
  score = 0;

  getRandomImageNumber();

  gameNumber = getGameNumber();
  console.log('This is new gameNumber ' + gameNumber);
  
  $('#game-number').html(gameNumber);
  $('#player-score').html(score);
}

getRandomImageNumber();

imageButtons.click(function() {
	score += parseInt($(this).val());
	$('#player-score').html(score);

	if (score > gameNumber) {
	  losses++;
	  $('#losses').html(parseInt(losses));
	  resetGame();
	} else if (score === gameNumber) {
      wins++;
      $('#wins').html(parseInt(wins));
      resetGame();
	}
})










