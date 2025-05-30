let score = 0,
    display = $('#num'),
    body = $('body'),
    buttonColours = ["green", "red", "yellow", "blue", "sea-blue", "black", "brown", "gray" ],
    gamePattern = [],
    userClickedPattern = [],
    currentLevel = 0,
    buttons = $('.btn');
    startBtn = $('.mobile-btn');
    innerBtns = $('#inner-circle .btn');

  buttons.on('click', function(){
    const btn = this.id
    flashBtn(btn)
    makeSound(btn)
    userClickedPattern.push(btn)
    let index = userClickedPattern.length - 1;
    checkAnswers(index)
  })
  buttons.addClass("dis");


$(document).keydown(function (e) {
    startOver();
})

$(function() {
  if (isMobile()) {
    $('.mobile-btn').removeClass('hidden');
  }
});

display.text(score);

function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
  startBtn.removeClass('hidden')
}

function startOver() {
  const btn = $('#mobileStartBtn');
  btn.addClass('rotating');
  $('.btn-text').text('↻');
  

  setTimeout(() => {
    btn.removeClass('rotating');
  }, 1000);
  
  body.removeClass('game-over');
  buttons.removeClass("dis");
  score = 0;
  gamePattern = [];
  userClickedPattern = [];
  currentLevel = 0;
  innerBtns.addClass('hidden')
  nextElement();
  display.text(score);
}

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



function checkAnswers(currentbtn) {
  if (gamePattern[currentbtn] === userClickedPattern[currentbtn]) {
    score += 100
    display.text(score);
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextElement();
      }, 800);
    }
  } else {
    buttons.addClass("dis");
    body.addClass('game-over')
    $("h1").text(`Game Over!!! Press any key to restar`)
    makeSound('wrong')
  }
}

