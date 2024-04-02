var native = window;
var originalConsole = native.console;
native.console = {
    log: function(message){
        $('ul.messages').append('<li>Log: ' + message + '</li>');
        originalConsole.log(message);
    },
    error: function(message){
        $('ul.messages').append('<li>Error: ' + message + '</li>');
        originalConsole.error(message);
    },
    warn: function(message){
        $('ul.messages').append('<li>Warn: ' + message + '</li>');
        originalConsole.warn(message);
    }
}

console.log("hfghf")

let msg = prompt("Enter your message");
console.log(msg);
