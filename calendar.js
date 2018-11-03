store.subscribe(() => {
  const state = store.getState().calendar
  $('.description').addClass('untoggled')
  $('.description.' + state.button).removeClass('untoggled')
  $('.circle').hide()
  $('.circle.untoggled').show()
  $('.circle.' + state.button).show()
  $('.circle.untoggled.' + state.button).hide()
})

var tapped = false, doubleTapped = false, color = '#000000'

$('.availitem').click(e => {
  let target = $(e.target)
  if (target.parent().hasClass('availitem')) {
    target = target.parent()[0]
  }

  const button = target.classList[target.classList.length - 1]

  store.dispatch({
    type: 'calendar',
    subtype: 'button',
    payload: button
  })

  switch (button) {
    case 'unavailable':
      color = '#000000'
      break
    case 'unlikely':
      color = '#555555'
      break
    case 'likely':
      color = '#aaaaaa'
      break
    case 'free':
      color = '#ffffff'
      break
  }
})

$('.timeblock').on('touchstart', e => {
  if (!tapped) {
    tapped = setTimeout(() => {
      tapped = null
    }, 300)
  } else {
    clearTimeout(tapped)
    tapped = null
    e.preventDefault()
    doubleTapped = true

    const element = $(e.target)[0]
    element.style.backgroundColor = color
    if (color === '#ffffff') {
      element.style.borderBottomStyle = 'dotted'
      element.style.borderBottomColor = '#eeeeee'
    } else {
      element.style.borderBottomStyle = 'solid'
      element.style.borderBottomColor = color
    }
  }
})

$('.timeblock').on('touchend', e => {
  doubleTapped = false
})

$('.timeblock').on('touchmove', e => {
  if (doubleTapped) {
    const touch = e.originalEvent.touches[0]
    $('.timeblock').each((index, element) => {
      if (!(
        touch.clientX <= element.offsetLeft || touch.clientX >= element.offsetLeft + element.offsetWidth ||
        touch.clientY + $('.timewrapper')[0].scrollTop <= element.offsetTop  || touch.clientY + $('.timewrapper')[0].scrollTop >= element.offsetTop + element.offsetHeight
      )) {
        element.style.backgroundColor = color
        if (color === '#ffffff') {
          element.style.borderBottomStyle = 'dotted'
          element.style.borderBottomColor = '#eeeeee'
        } else {
          element.style.borderBottomStyle = 'solid'
          element.style.borderBottomColor = color
        }
      }
    })
  }
})