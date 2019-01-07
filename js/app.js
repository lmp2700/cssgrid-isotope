// SHOW A, HIDE B & C
$('#show-a').on('click', function () {
    $('.letter-a').show()
    $('.letter-b, .letter-c').hide()
});

// SHOW B, HIDE A & C
$('#show-b').on('click', function () {
    $('.letter-b').show()
    $('.letter-a, .letter-c').hide()
});

// SHOW C, HIDE A & B
$('#show-c').on('click', function () {
    $('.letter-c').show()
    $('.letter-a, .letter-b').hide()
});

// RESET PAGE
$('#reset').on('click', function() {
    document.location.reload();
  });