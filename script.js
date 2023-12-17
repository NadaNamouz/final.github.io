// script.js
function moveButton() {
  var button = document.querySelector('button:last-child');

  if (button) {
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';

      
  }
}

function yesButton()
{
    window.location.href = "yes.html";
}
