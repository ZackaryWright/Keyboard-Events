const displayKeyCode = document.getElementById('keycode')
const pressedKey = document.getElementById('pressed-key')

document.addEventListener('keyup', function (e) {
  displayKeyCode.style.fontSize = '10rem'
  displayKeyCode.innerHTML = e.keyCode
  pressedKey.innerHTML = e.code
})
