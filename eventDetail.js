store.subscribe(() => {
  const state = store.getState()
  const event = state.event
  const participants = event.participants.filter(p => p.id !== 0).map(p => state.accounts.find(a => a.id === p.id))
  participants.push(state.account)
  const going = event.participants.reduce((sum, element) => sum + (element.willingness === 0), 0)
  const maybe = event.participants.reduce((sum, element) => sum + (element.willingness === 1), 0)
  const willingness = event.participants.find(p => p.id === 0).willingness

  $('.EDheader').css({ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(100, 100, 100, 0.7)), url("' + (event.image ? event.image : 'image/DIY.jpg') + '")' })
  $('.EDname').html(event.name)
  $('.EDparticipantname').html(
    participants.length === 1 ? 'You' :
    participants.length === 2 ? participants[0].name + ' and You' :
    participants[0].name + ', ' + participants[1].name + ', and ' + (participants.length - 2) + ' people'
  )
  $('.EDparticipantwillingness').html(going + ' going and ' + maybe + ' maybe')
  $('.EDtimeinfo').html(event.time ? event.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + event.time[0].toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'TBD')
  $('.EDlocationinfo').html(event.location)
  $('.EDdetailinfo').html(event.detail)

  $('.eventDetail .timeblock').css({
    backgroundColor: '#ffffff',
    borderBottomColor: '#eeeeee',
    borderBottomStyle: 'dotted'
  })

  for (let p of participants) {
    for (let temp of p.calendar) {
      for (let time = temp[0]; time <= temp[1]; time = timeadd15(time)) {
        const that = $('#ED' + time)
        let c = color2num(that.css('background-color'))
        c = num2color(c - (3 - temp[2]) / participants.length)
        that.css({
          backgroundColor: c,
          borderBottomColor: c,
          borderBottomStyle: 'solid'
        })
      }
    }
  }

  $('.EDwillingness img').show()
  $('.EDwillingness .toggle').hide()
  switch (willingness) {
    case 0:
      $('.EDgoingimg').hide()
      $('.EDgoingimg.toggle').show()
      break
    case 1:
      $('.EDmaybeimg').hide()
      $('.EDmaybeimg.toggle').show()
      break
    case 2:
      $('.EDnoimg').hide()
      $('.EDnoimg.toggle').show()
      break
  }
  if (event.host !== 0) {
    $('.EDedit').hide()
  }
})

$('.backbutton').click(() => {
  store.dispatch({
    type: 'nav',
    payload: 'event'
  })
})

$('.EDgoing').click(() => {
  store.dispatch({
    type: 'willingness',
    payload: 0
  })
})

$('.EDmaybe').click(() => {
  store.dispatch({
    type: 'willingness',
    payload: 1
  })
})

$('.EDno').click(() => {
  store.dispatch({
    type: 'willingness',
    payload: 2
  })
})