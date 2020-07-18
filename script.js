const screen = document.querySelector('th'),
  buttons = document.querySelectorAll('td'),
  table = document.querySelector('table')

let action = false,
 element = 0,
 lastAction = 0,
 result = 0,
 scale = 1

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
      result = 0 - parseFloat(result)
        screen.innerHTML = result
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
        result = element + parseFloat(screen.innerHTML)
        screen.innerHTML = result
      } else if (lastAction === '-') {
        result = element - parseFloat(screen.innerHTML)
        screen.innerHTML = result
      } else if (lastAction === '*') {
        result = element * parseFloat(screen.innerHTML)
        screen.innerHTML = result
      } else if (lastAction === '/') {
        result = element / parseFloat(screen.innerHTML)
        screen.innerHTML = result
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

    if (screen.innerHTML.length > 8) {
      if (screen.innerHTML.length > 8 * scale) {
        scale += 0.5
        let size = Math.ceil(56 - 8 * scale * 1.6)
        screen.style.fontSize = `${size}px`
        // console.log(size)
      }
    } else {
      scale = 1
      screen.style.fontSize = '56px'
    }
  }
})

function button() {
  element = parseFloat(screen.innerHTML)
  action = true
  lastAction = event.target.innerHTML
}
