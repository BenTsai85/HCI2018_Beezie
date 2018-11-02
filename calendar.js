store.subscribe(() => {
  const state = store.getState()
  $('.description').addClass('untoggled')
  $('.description.' + state.availability).removeClass('untoggled')
  $('.circle').hide()
  $('.circle.untoggled').show()
  $('.circle.' + state.availability).show()
  $('.circle.untoggled.' + state.availability).hide()
})

$('.availitem').click(e => {
  let target = $(e.target)
  if (target.parent().hasClass('availitem')) {
    target = target.parent()[0]
  }
  store.dispatch({
    type: 'availability',
    payload: target.classList[target.classList.length - 1]
  })
})
