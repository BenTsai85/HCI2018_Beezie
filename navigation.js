store.subscribe(() => {
  const state = store.getState()
  $('.navbar .navitem').show()
  $('.navbar .toggle').hide()
  $('.page').hide()
  $('.navbar .' + state.nav).hide()
  $('.navbar .' + state.nav + '.toggle').show()
  $('.' + state.nav + '.page').show()
})

$('.navitem').click(e => {
  store.dispatch({
    type: 'nav',
    payload: e.target.classList[e.target.classList.length - 1]
  })
})