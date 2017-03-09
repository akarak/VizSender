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
        viz: '10.184.129.1',
        vport: 6100,
        trio: '10.184.133.7',
        tport: 6200
    },

// chat socket configuration
    chatserver: {
        port: 3456
    }
}
