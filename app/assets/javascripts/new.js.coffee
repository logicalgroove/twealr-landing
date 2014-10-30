$('html, body').on 'click', '#emailSubmit', ->
  $('#email-field').hide()
  $('#type-field').show()
$('html, body').on 'click', '.typeBox', ->
  $('form').submit()
