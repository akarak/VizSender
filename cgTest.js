
var cg = require('./CG');
var readline = require('readline');
var rl;

cg.open();
cg.version();

console.log('Opening command line...');
rl = readline.createInterface(process.stdin, process.stdout, null);
rl.setPrompt('> ');

console.log('\x1b[36m\nCommand set \x1b[37m');
console.log('\nWaiting for commands...("quit" to exit)');

rl.on('line', function(cmd) {

    if (cmd === 'quit') {
        rl.question('Are you sure? (y/n) ', function(answer) {
            if (answer === 'y') {
                viz.close();
                rl.close();
            } else {
                rl.prompt();
            }
        });
    } else {
        // parse the command
        //
        if (cmd === "v") {
            cg.version(false);
        } else {
            cg.sendCommand(cmd);       // eg VERSION
        }
        //    console.log('You typed:', cmd);
        //    console.log('Type "quit" to exit');
        rl.prompt();
    }

});

rl.on('close', function() {
    console.log('Bye');
    process.exit();
});

rl.prompt();