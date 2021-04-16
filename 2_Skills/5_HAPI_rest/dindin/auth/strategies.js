
const validateAuthorizationHeader = (req, res) => {
    console.log('validate the authorization header');
    const rawReq = req.raw.req;
    const authorization = rawReq.headers.authorization;
    if (!authorization) {
        throw Boom.unauthorized(null, 'simple');
    }

    return res.authenticated({ credentials: { user: 'john' } });
};

module.exports = {
    validateAuthorizationHeader
}