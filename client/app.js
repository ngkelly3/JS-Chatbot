var socket = io();

$(document).on('submit', 'form', function () {
    var text = $('#initials').val() + " says: " + $('#message').val();
    socket.emit('message', text);
    $('message').val('');
    return false;
});

socket.on('message', function (msg) {
    console.log(msg);
    $('<li>').text(msg).appendTo('#history');
});