/**
 * Created by Mortoni on 19/11/13.
 */
/*!
 * configuration data
 * these are example numbers - use a local config file
 * this is in .gitignore
 */

module.exports = {
    // target viz configuration
    engine: {
        viz: '192.168.1.23',
        vport: 6100,
        trio: '192.168.1.24',
        tport: 6200
    },

// chat socket configuration
    chatserver: {
        port: 3456
    }
}
