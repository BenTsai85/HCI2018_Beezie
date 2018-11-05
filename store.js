const account = mockup.accounts.find(a => a.name === "Sam")
const events = []
for (let i = 0, j = 0; i < mockup.events.length, j < account.events.length; ++i) {
  if (mockup.events[i].id === account.events[j]) {
    events.push(mockup.events[i])
    ++j
  }
}
const accounts = mockup.accounts

const initialState = {
  calendar: {
    button: 'unavailable',
    color: '#000000',
    dbltap: false,
  },
  nav: 'calendar',
  events,
  account,
  accounts,
  event: events[0]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'calendar':
      switch (action.subtype) {
        case 'button':
          return { ...state, calendar: { ...state.calendar, button: action.payload } }
        case 'dbltap':
          return { ...state, calendar: { ...state.calendar, dbltap: !state.calendar.dbltap } }
        case 'update':
          mockup.accounts = mockup.accounts.map(a => a.name === "Sam" ? { ...a, calendar: action.payload }: a )
          window.localStorage.setItem('Beezie', JSON.stringify(mockup))
          return { ...state, account: { ...account, calendar: action.payload } }
      }
      break
    case 'nav':
      return { ...state, nav: action.payload }
    case 'init':
      return state
    case 'event':
      switch (action.subtype) {
        case 'set':
          return { ...state, event: action.payload }
      }
      break
    case 'willingness':
      mockup.events[mockup.events.findIndex(e => e.id === state.event.id)].participants = state.event.participants.map(p => p[0] === 0 ? [ 0, action.payload ] : p)
      window.localStorage.setItem('Beezie', JSON.stringify(mockup))
      return { ...state, event: { ...state.event, participants: state.event.participants.map(p => p[0] === 0 ? [ 0, action.payload ] : p) } }
  }
}

const store = Redux.createStore(reducer)
