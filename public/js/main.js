// Place JavaScript code here...
const socket = io.connect('localhost:3000');
$('form').submit(function(data){
    console.log('socket',$('#m').val());
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});
socket.on('greet', function (data) {
    console.log(data);
    socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
});

$(document).ready(function() {

});
Vue.use(VueMaterial);

Vue.material.registerTheme({
    default: {
        primary: 'blue',
        accent: 'red'
    },
    green: {
        primary: 'green',
        accent: 'pink'
    },
    orange: {
        primary: 'orange',
        accent: 'green'
    },
});


new Vue({
    el:'#app',
    data: {
        message:'hello world',
        fake:faker

    }
});
