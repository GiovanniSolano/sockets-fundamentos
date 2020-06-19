var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

// Escuchar
socket.on('disconnect', function() {

    console.log('Perdida la conexión');


});

// Enviar información

socket.emit('enviarMensaje', {

    usuario: 'Giovanni',
    mensaje: 'Hola mundo'

}, function(resp) {
    console.log('Respuesta server: ', resp);

});




//Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Info del servidor: ', mensaje);





});