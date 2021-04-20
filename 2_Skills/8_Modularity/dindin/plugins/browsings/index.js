'use strict';

const Handlers = require('../handlers')

exports.plugin = {
    name: 'browsings',
    pkg: require('./package.json'),
    register: async (server, options) => {
        server.route({
            method: 'GET',
            path: '/api/test',
            handler: function (req, h) {
                return Handlers.hello(server, options);
            }
        });
    }
};