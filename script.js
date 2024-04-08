    // var native = window;
    // var originalConsole = native.console;
    // native.console = {
    //     log: function(message){
    //         $('ul.messages').append('<li>Log: ' + message + '</li>');
    //         originalConsole.log(message);
    //     },
    //     error: function(message){
    //         $('ul.messages').append('<li>Error: ' + message + '</li>');
    //         originalConsole.error(message);
    //     },
    //     warn: function(message){
    //         $('ul.messages').append('<li>Warn: ' + message + '</li>');
    //         originalConsole.warn(message);
    //     }
    // }
    // // short js Character Adventure game based on Ruination in LoL
alert("Welcome to Ruination: A Runeterra Legend!");

let nick = prompt("Enter your name: ");
alert("Hello " + nick + "!");
alert("You woke up in the middle of the forest. You have to find the way out of the forest.");
alert("QUEST: Find the way out of the forest.");
alert("You have to choose the right path to get out of the forest.");

while (true) {
    let path = prompt("Choose the path: Left or Right?");
    if (path == "Left" || path == "left") {
        alert("You have chosen the left path.");
        alert("You have reached the river. You have to cross the river to get out of the forest.");
        let river = prompt("Do you want to swim or build a boat?");
        if (river == "Swim" || river == "swim") {
            alert("You have chosen to swim.");
            alert("You have crossed the river and reached the village.");
            alert("QUEST: Talk to the villagers");
            break;
        } else if (river == "Build a boat" || river == "build a boat") {
            alert("You have chosen to build a boat.");
            alert("You have crossed the river and reached the village.");
            alert("QUEST: Talk to the villagers");
            break;
        } else {
            alert("Invalid choice. Please try again.");
            continue;
        }
    } else if (path == "Right" || path == "right") {
        alert("You have chosen the right path.");
        alert("You have reached the cave.");
        alert("It's a dead end. You have to go back and choose the other path.");
        alert("QUEST: Return back and choose the other path.");
        continue;
    }
}
alert("You have reached the village. The villagers told you about the Ruination at Blessed Isle's, now called The Shadow Isle's.");
alert("After some time at the village you've met a mysterious person... Akshan.");
alert("QUEST: Talk to Akshan.");

while (true) {
    let talk = prompt("What do you want to talk about? 1. Who are you? 2. What's Ruination? 3. How can I help?");
    if (talk == "1") {
        alert("I am Akshan, a Sentinel of Light. I am here to stop the Ruination.");
        continue;
    } else if (talk == "2") {
        alert("Ruination is a dark force that corrupts everything it touches. It must be stopped.");
        continue;
    } else if (talk == "3") {
        alert("You can help me by joining the Sentinels of Light and fighting against the Ruination.");
        break;
    } else {
        alert("Invalid choice. Please try again.");
        continue;
    }
}
alert("You have decided to join the Sentinels of Light and fight against the Ruination.");
alert("He took you to the Sentinel's hideout and introduced you to the other Sentinels.");
alert("You trained hard and became a skilled warrior.");
alert("The day has come to face the Ruination at The Shadow Isle's.");
alert("QUEST: Fight against the Ruination.");

while (true) {
    let fight = prompt("Choose your weapon: Sword or Bow?");
    if (fight == "Sword" || fight == "sword") {
        alert("You have chosen the Sword.");
        alert("Armed with your Sword, you venture into the heart of The Shadow Isle's.");
        alert("You encounter hordes of undead creatures, but your sword skills prevail.");
        alert("After a long and fierce battle with the undead, you finally face him... the Ruination itself... Viego");
        alert("The other sentinels have come to help you. You all fight together and defeat Viego.");
        break;
    } else if (fight == "Bow" || fight == "bow") {
        alert("You have chosen the Bow.");
        alert("Equipped with your Bow, you stealthily navigate through the treacherous terrain of The Shadow Isle's.");
        alert("You use your precision and accuracy to take down the undead minions silently.");
        alert("Then you saw him... the Ruination itself... Viego");
        alert("You take aim and fire your arrows at Viego, but he was expecting it.");
        alert("He dodges your arrows and before the other sentinels get to you he pushes his BOTRK to the ground, pushing everyone but you back.");
        alert("A black mist surrounds you and you feel your life force being drained away.");
        alert("You have been defeated by Viego. GAME OVER! Try again!");
        continue
    } else {
        alert("Invalid choice. Please try again.");
        continue;
    }
}

alert("Congratulations! You have defeated Viego and saved Runeterra from the Ruination.");