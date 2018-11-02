const initialState = {
  availability: 'unavailable',
  nav: 'calendar',
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'availability':
      return { ...state, availability: actions.payload }
    case 'nav':
      return { ...state, nav: actions.payload }
  }
}

const store = Redux.createStore(reducer)
