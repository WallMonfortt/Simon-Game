var score = 0,
    display = document.getElementById('num');

var plus = document.getElementById('plus')

display.innerText = score;

plus.addEventListener('click', function(){
  score++;
  display.innerText = score;
  enabled();
});


function reset() {
    score =0;
    display.innerText = score;
};

