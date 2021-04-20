'use strict';

// connect to db to retrieve data

exports.plugin = {
    name: 'db',
    pkg: require('./package.json'),
    register: async (server, options) => { // return mocked data
        server.method(
            {
                name: 'db.getUsers',
                method: (payload, callback) => {
                    return {
                        name: payload.name
                    };
                }
            }
        );
    }
};
