var score = 0,
    display = $('#num');
    body = $('body')

let buttonColours = ["green", "red", "yellow", "blue", "sea-blue", "black", "brown", "gray" ]

let gamePattern = [];
let userClickedPattern = [];

let currentLevel = 0;



let speed = 0.5

$(document).keydown(function (e) {
  console.log(e.key)
  if(e.key === 'a'){
    gamePattern = [];
    userClickedPattern = [];
    currentLevel = 0;
    startGame()
  }else{
    startOver();
  }
})


display.text(score);

let buttons = $('.btn')
buttons.on('click', function(){
  const btn = this.id
  flashBtn(btn)
  makeSound(btn)
  userClickedPattern.push(btn)
  let index = userClickedPattern.lastIndexOf(btn)
  checkAnswers(index)
})

buttons.addClass("dis");


function nextElement() {
  currentLevel ++;
  userClickedPattern = [];
  let max = 4;
  if (currentLevel > 5) {
    max = 8;
    buttons.removeClass("hidden");
  }
  const randomChosenColour=  Math.floor(Math.random() * max );
  const nextColor = buttonColours[randomChosenColour]
  gamePattern.push(nextColor)
  $("h1").text(`Level ${currentLevel}`)

  makeSound(nextColor)
  flashBtn(nextColor)
}


function flashBtn(btn) {
  $(`#${btn}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function makeSound(file) {
  var audio = new Audio(`./sounds/${file}.mp3`);
audio.play();
}

function startGame() {
  nextElement();
  buttons.removeClass("dis");
}

function startOver() {
  score = 0;
  display.text(score);
  gamePattern = [];
  userClickedPattern = [];
  currentLevel = 0;
  body.removeClass('game-over')
  startGame();
}

function checkAnswers(currentbtn) {

  if (gamePattern[currentbtn] === userClickedPattern[currentbtn]) {

    console.log("success");
    score += 100
    display.text(score);

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextElement();
      }, 1500);

    }

  } else {

    body.addClass('game-over')
    $("h1").text(`Game Over!!! Press any key to restar`)
    makeSound('wrong')
    buttons.addClass("dis");
  }
}

