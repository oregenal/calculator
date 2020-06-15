const screen = document.querySelector('th'),
  buttons = document.querySelectorAll('td'),
  table = document.querySelector('table')

let action = false,
 element = 0,
 lastAction = 0

table.addEventListener('click', event => {
  if (event.target.localName === 'th') {
    return
  } else {
    if (event.target.innerHTML === 'AC') {
      screen.innerHTML = '0'
      element = 0
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
      if (element == 0) {
        screen.innerHTML = screen.innerHTML / 100
      } else {
        screen.innerHTML = element / 100 * screen.innerHTML
      }
    } else if (event.target.innerHTML === '=') {
      if (lastAction === '+') {
        screen.innerHTML = element + parseFloat(screen.innerHTML)
      } else if (lastAction === '-') {
        screen.innerHTML = element - parseFloat(screen.innerHTML)
      } else if (lastAction === '*') {
        screen.innerHTML = element * parseFloat(screen.innerHTML)
      } else if (lastAction === '/') {
        screen.innerHTML = element / parseFloat(screen.innerHTML)
      } else {
        return
      }
      action = true
    } else if (screen.innerHTML === '0') {
      screen.innerHTML = event.target.innerHTML
    } else if (action) {
      screen.innerHTML = event.target.innerHTML
      action = !action
    } else if (screen.innerHTML.length > 7) {
      return
    } else {
      screen.innerHTML = screen.innerHTML + event.target.innerHTML
    }
  }
})

function button() {
  element = parseFloat(screen.innerHTML)
  action = true
  lastAction = event.target.innerHTML
}
