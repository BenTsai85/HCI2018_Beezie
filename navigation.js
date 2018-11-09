store.subscribe(() => {
  const state = store.getState()
  if (state.nav === 'hide') {
    $('.mainPage').hide()
    $('.subPage').show()
    $('.subPage > div').hide()
    $('.' + state.subnav).show()
  } else {
    $('.mainPage').show()
    $('.subPage').hide()
    $('.navbar').show()
    $('.navbar .navitem').show()
    $('.navbar .toggle').hide()
    $('.page').hide()
    $('.navbar .' + state.nav).hide()
    $('.navbar .' + state.nav + '.toggle').show()
    $('.' + state.nav + '.page').show()
  }
})

store.dispatch({
  type: 'init'
})

$('.navitem').click(e => {
  store.dispatch({
    type: 'nav',
    payload: e.target.classList[e.target.classList.length - 1]
  })
})


$().click(() => {
  $('.navbar').show()
  $('.navbar .navitem').show()
  $('.navbar .toggle').hide()
  $('.page').hide()
})