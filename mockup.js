let mockup

const storage = window.localStorage.getItem('Beezie')

const dateHandler = (key, value) => {
  if (key === 'period') {
    return new Date(value)
  }
  if (key === 'time') {
    return [ new Date(value[0]), new Date(value[1]) ]
  }
  return value
}

if (storage != null) {
  mockup = JSON.parse(storage, dateHandler)
} else {
  mockup = {
    events: [{
      id: 0,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 0
    }, {
      id: 1,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 0
    }, {
      id: 2,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 0
    }, {
      id: 3,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 1
    }, {
      id: 4,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 1
    }, {
      id: 5,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 1
    }, {
      id: 6,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, null ], [ 2, 1 ] ],
      host: 2
    }, {
      id: 7,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 1 ], [ 2, 1 ] ],
      host: 2
    }, {
      id: 8,
      name: "DIY",
      period: new Date(2018, 10, 25),
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 2 ], [ 2, 1 ] ],
      host: 2
    }, {
      id: 9,
      name: "DIY",
      period: new Date(2018, 10, 20),
      time: [ new Date(2018, 10, 20, 15, 0), new Date(2018, 10, 20, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 0
    }, {
      id: 10,
      name: "DIY",
      period: new Date(2018, 10, 20),
      time: [ new Date(2018, 10, 20, 15, 0), new Date(2018, 10, 20, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 0
    }, {
      id: 11,
      name: "DIY",
      period: new Date(2018, 10, 20),
      time: [ new Date(2018, 10, 20, 15, 0), new Date(2018, 10, 20, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ [ 1, null ], [ 0, 0 ], [ 2, 1 ] ],
      host: 0
    }],
    accounts: [{
      id: 0,
      name: "Sam",
      calendar: [
        [ "201810221000", "201810221445", 0 ],
        [ "201810221900", "201810222045", 2 ],
        [ "201810230800", "201810231145", 1 ],
        [ "201810231200", "201810231415", 0 ],
        [ "201810241000", "201810241515", 0 ],
        [ "201810251000", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251400", "201810251645", 2 ],
        [ "201810270800", "201810271745", 0 ]
      ],
      events: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }, {
      id: 1,
      name: "Alex",
      calendar: [],
      events: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }, {
      id: 2,
      name: "Christine",
      calendar: [],
      events: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }]
  }
}