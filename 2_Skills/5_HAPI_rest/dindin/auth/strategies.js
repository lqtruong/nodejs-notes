
const validateAuthorizationHeader = (decoded, req) => {
    console.log(decoded);
    return { isValid: true, credentials: { user: decoded.GivenName } };
};

const validateBasicHeader = (req, username, password, h) => {
    console.log(req);
    let rawReq = req.raw.req;
    let authorization = rawReq.headers.authorization;
    console.log(authorization);
    if (!authorization) {
        return { isValid: false, credentials: { user: 'unknown' } };
    }
    return { isValid: true, credentials: { user: 'john' } };
};

module.exports = {
    validateAuthorizationHeader,
    validateBasicHeader
}