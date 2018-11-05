store.subscribe(() => {
  const events = store.getState().events
  const accounts = store.getState().accounts
  const eventsICreated = [], eventsImGoing = [], pendingInvitations = [], eventHistory = []

  for (let e of events) {
    if (e.time[1] < new Date(2018, 10, 22)) {
      eventHistory.push(e)
    } else if (e.host === 0) {
      eventsICreated.push(e)
    } else if (e.participants.some(p => p[0] === 0 && p[1] === 0)) {
      eventsImGoing.push(e)
    } else {
      pendingInvitations.push(e)
    }
  }

  $('#eventsICreated').html(eventsICreated.map(e => ' \
  <div class="eventblock" id="event' + e.id + '"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
          ' + e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'}) + ' \
        </div> \
        <div class="eventpeople"> \
          ' + (e.participants[0][0] !== 0 ? accounts.find(a => a.id === 0).name : accounts.find(a => a.id === e.participants[1][0]).name) + ' and ' + (e.participants.length - 1) + ' people \
        </div> \
      </div> \
    </div>'
  ))

  $('#eventsImGoing').html(eventsImGoing.map(e => ' \
    <div class="eventblock" id="event' + e.id + '"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
          ' + e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'}) + ' \
        </div> \
        <div class="eventpeople"> \
        ' + (e.participants[0][0] !== 0 ? accounts.find(a => a.id === 0).name : accounts.find(a => a.id === e.participants[1][0]).name) + ' and ' + (e.participants.length - 1) + ' people \
        </div> \
      </div> \
    </div>'
  ))

  $('#pendingInvitations').html(pendingInvitations.map(e => ' \
  <div class="eventblock" id="event' + e.id + '"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
          ' + e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' }) + ' \
        </div> \
        <div class="eventpeople"> \
        ' + (e.participants[0][0] !== 0 ? accounts.find(a => a.id === 0).name : accounts.find(a => a.id === e.participants[1][0]).name) + ' and ' + (e.participants.length - 1) + ' people \
        </div> \
      </div> \
    </div>'
  ))

  $('#eventHistory').html(eventHistory.map(e => ' \
  <div class="eventblock" id="event' + e.id + '"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
          ' + e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'}) + ' \
        </div> \
        <div class="eventpeople"> \
        ' + (e.participants[0][0] !== 0 ? accounts.find(a => a.id === 0).name : accounts.find(a => a.id === e.participants[1][0]).name) + ' and ' + (e.participants.length - 1) + ' people \
        </div> \
      </div> \
    </div>'
  ))

  $('.eventblock').click(e => {
    store.dispatch({
      type: 'event',
      subtype: 'set',
      payload: events.find(event => event.id === Number(e.currentTarget.id.slice(5)))
    })
    store.dispatch({
      type: 'nav',
      payload: 'hide'
    })
  })
})