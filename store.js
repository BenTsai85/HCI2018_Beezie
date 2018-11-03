const initialState = {
  calendar: {
    button: 'unavailable',
    color: '#000000',
    dbltap: false,
  },
  nav: 'calendar',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'calendar':
      switch (action.subtype) {
        case 'button':
          return { ...state, calendar: { ...state.calendar, button: action.payload } }
        case 'dbltap':
          return { ...state, calendar: { ...state.calendar, dbltap: !state.calendar.dbltap } }
      }
      break
    case 'nav':
      return { ...state, nav: action.payload }
  }
}

const store = Redux.createStore(reducer)
