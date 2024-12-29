var score = 0,
    display = document.getElementById('num');

let buttonColours = ["green", "red", "yellow", "blue", "sea-blue", "black", "brown", "gray" ]

let gamePattern = [];
let userClickedPattern = [];

let currentLevel = 0;



let speed = 0.5

$(document).keydown(function (e) {
  console.log(e.key)
  if(e.key === 'a'){
    startGame()
  }
})

// var plus = document.getElementById('plus')

display.innerText = score;

// plus.addEventListener('click', function(){
//   score++;
//   display.innerText = score;
//   console.log(`random ${nexSequence()}`)
//   enabled();
// });

let buttons = $('.btn')
buttons.on('click', function(){
  const btn = this.id
  flashBtn(btn)
  makeSound(btn)
  userClickedPattern.push(btn)
  console.log(userClickedPattern)
})


function reset() {
    score =0;
    display.innerText = score;
};

// Game functions


function nextElement() {
  let max = 4;
  if (currentLevel > 5) {
    max = 8;
  }
  return Math.floor(Math.random() * max )
}


function flashBtn(btn) {
  $(`#${btn}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function makeSound(file) {
  var audio = new Audio(`./sounds/${file}.mp3`);
audio.play();
}

function startGame() {
  const randomChosenColour = nextElement()
  const nextColor = buttonColours[randomChosenColour]
  gamePattern.push(nextColor)

  makeSound(nextColor)
  flashBtn(nextColor)

  console.log(`game Pattern ${gamePattern}`)
}
// makeSound(buttonColours[randomChosenColour])