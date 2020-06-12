const screen = document.querySelector('th'),
  buttons = document.querySelectorAll('td'),
  table = document.querySelector('table')

let action = false,
 mathematics = 0,
 lastAction = 0

table.addEventListener('click', event => {
  if (event.target.localName === 'th') {
    return
  } else {
    if (event.target.innerHTML === 'AC') {
      screen.innerHTML = '0'
      mathematics = 0
      action = false
      lastAction = 0
    } else if (event.target.innerHTML === '0' && screen.innerHTML === '0') {
      return
    } else if (screen.innerHTML === '0' && event.target.innerHTML === '.') {
      screen.innerHTML = '0.'
    } else if (event.target.innerHTML === '+/-') {
      screen.innerHTML = 0 - parseFloat(screen.innerHTML)
    } else if (event.target.innerHTML === '+') {
      button()
    } else if (event.target.innerHTML === '-') {
      button()
    } else if (event.target.innerHTML === '*') {
      button()
    } else if (event.target.innerHTML === '/') {
      button()
    } else if (event.target.innerHTML === '%') {
      if (mathematics == 0) {
        screen.innerHTML = screen.innerHTML / 100
      } else {
        screen.innerHTML = mathematics / 100 * screen.innerHTML
      }
    } else if (event.target.innerHTML === '=') {
      if (lastAction === '+') {
        screen.innerHTML = mathematics + parseFloat(screen.innerHTML)
      } else if (lastAction === '-') {
        screen.innerHTML = mathematics - parseFloat(screen.innerHTML)
      } else if (lastAction === '*') {
        screen.innerHTML = mathematics * parseFloat(screen.innerHTML)
      } else if (lastAction === '/') {
        screen.innerHTML = mathematics / parseFloat(screen.innerHTML)
      } else {
        return
      }
      action = true
    } else if (screen.innerHTML === '0') {
      screen.innerHTML = event.target.innerHTML
    } else if (action) {
      screen.innerHTML = event.target.innerHTML
      action = !action
    } else {
      screen.innerHTML = screen.innerHTML + event.target.innerHTML
    }
  }
})

function button() {
  mathematics = parseFloat(screen.innerHTML)
  action = true
  lastAction = event.target.innerHTML
}
