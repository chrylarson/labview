var socket = io.connect('http://127.0.0.1:3000'); //set this to the ip address of your node.js server
// var socket = io.connect('https://127.0.0.1:3000', {secure:true});
// on connection to server, ask for user's name with an anonymous callback
socket.on('connect', function(){
//
});

// listener, whenever the server emits 'updatechat', this updates the chat body
socket.on('data', function (data) {
//
  console.log(data);
});

// listener, whenever the server emits 'updateusers', this updates the username list
socket.on('updateusers', function(data) {
//
});

// listener, whenever the server emits 'updateusers', this updates the username list
socket.on('updatevalve', function(data) {
//
});

// listener, whenever the server emits 'openvalve', this updates the username list
socket.on('openvalve', function(username, data) {
//
});
socket.on('opencmd', function(username, data) {
//
});

// listener, whenever the server emits 'openvalve', this updates the username list
socket.on('closevalve', function(username, data) {
//
});
socket.on('closecmd', function(username, data) {
//
});