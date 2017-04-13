var net = require('net');
var CG = {

    ip: '127.0.0.1',
    port: 5250,
    live: true,
    logging: 1,

    open: function () {
        dlog('Opening a port to CG...' + this.ip + ", " + this.port);

        var _this = this;

        this.socket = net.connect({ host: this.ip, port: this.port },
            function () { //'connect' listener
                _this.live = true;
                dlog('client open');
            });

        this.socket.on('data', function (data) {
            dlog('received: ' + data);
        });

        this.socket.on('end', function () {
            this.live = false;
            dlog('client ended');
        });

        this.socket.on('close', function () {
            this.live = false;
            dlog('client closed');
        });

        this.socket.on('timeout', function () {
            dlog('client timed out');
        });

        this.socket.on('error', function () {
            dlog('client error');
        });

        this.socket.on('connect', function () {
            dlog('client connected');
        });

    },

    // version: function() {
    //     this.sendCommand("MAIN VERSION");
    // },

    // replySwap: function() {
    //     this.replies = !this.replies;
    // },

    // quietSwap: function() {
    //     this.quiet = !this.quiet;
    // },
    version: function() {
        this.sendCommand("VERSION");
    },

    sendCommand: function (cmd) {

        //   dlog('Live?: ' + this.live);

        if (!this.live) {
            dlog('Re-opening a port to cg...' + this.ip + ", " + this.port);
            this.open();
        }
        dlog(cmd);
       this.socket.write(cmd + "\r\n");

    }
};

function dlog(data) {
    if (CG.logging > 0) {
        console.log('\x1b[36m\>>>\x1b[37m ' + data);
    }
}

module.exports = CG;