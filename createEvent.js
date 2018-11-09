$('.createEventSubmit').click(() => {
  if ($('.createEventImage input')[0].files[0]) {
    store.dispatch({
      type: 'event',
      subtype: 'image',
      payload: $('.createEventImage img')[0].src
    })
  }
  store.dispatch({
    type: 'event',
    subtype: 'create'
  })
  store.dispatch({
    type: 'subnav',
    payload: 'eventDetail'
  })
  $('.createEventImage img')[0].src = ""
})

$('.createEventName').change(e => {
  store.dispatch({
    type: 'event',
    subtype: 'name',
    payload: e.currentTarget.value
  })
})

$('.createEventDetail').change(e => {
  store.dispatch({
    type: 'event',
    subtype: 'detail',
    payload: e.currentTarget.value
  })
})

$('.createEventLocation').change(e => {
  store.dispatch({
    type: 'event',
    subtype: 'location',
    payload: e.currentTarget.value
  })
})

$('.createEventTime').change(e => {
  if ($('input[name="datetime1"]')[0].value !== "" && $('input[name="datetime2"]')[0].value !== "" && $('input[name="datetime3"]')[0].value !== "") {
    store.dispatch({
      type: 'event',
      subtype: 'time',
      payload: [ $('input[name="datetime1"]').data('daterangepicker').startDate._d, $('input[name="datetime2"]').data('daterangepicker').startDate._d ]
    })
  }
})

$('.createEventImage input').change(e => {
  const input = e.currentTarget

  if (input.files[0]) {
    const reader = new FileReader();

    reader.onload = e => {
      $('.createEventImage img')[0].src = e.target.result
    }

    reader.readAsDataURL(input.files[0])
  }
})


$(function() {
  $('input[name="datetime1"]').daterangepicker({
    singleDatePicker: true,
    opens: "center",
    drops: "up",
  }, start => {
    $('input[name="datetime2"]').data('daterangepicker').minDate = start
    $('input[name="datetime3"]').data('daterangepicker').minDate = start
    $('input[name="datetime3"]').data('daterangepicker').startDate = start
  })
  $('input[name="datetime2"]').daterangepicker({
    singleDatePicker: true,
    opens: "center",
    drops: "up",
  }, start => {
    $('input[name="datetime3"]').data('daterangepicker').maxDate = start
  })
  $('input[name="datetime3"]').daterangepicker({
    singleDatePicker: true,
    opens: "center",
    drops: "up",
    timePicker: true,
    timePicker24Hour: true
  })
});