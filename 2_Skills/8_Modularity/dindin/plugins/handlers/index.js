const hello = (server, options) => {
    // return `Hello ${name}`;
    return server.methods.db.getUsers(options, (err) => console.log(err))
};

module.exports = {
    hello
};