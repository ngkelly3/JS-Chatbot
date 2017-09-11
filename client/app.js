$(document).on('submit', 'form', function () {
    var text = $('#message').val();
    alert(text);
    return false;
});